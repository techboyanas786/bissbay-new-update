import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// Server-side timezone conversion function
const convertTimeToIST = (localTime, userTimezone, bookingDate) => {
  try {
    // If already in IST, return as is
    if (userTimezone === 'Asia/Kolkata') {
      return localTime;
    }

    // Parse time (e.g., "10:00 AM")
    const [time, period] = localTime.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let adjustedHours = hours;
    
    if (period === 'PM' && hours !== 12) {
      adjustedHours += 12;
    } else if (period === 'AM' && hours === 12) {
      adjustedHours = 0;
    }

    // Create date in user's timezone
    const date = new Date(bookingDate);
    date.setHours(adjustedHours, minutes, 0, 0);
    
    // Convert to IST
    const istTime = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    
    return istTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'Asia/Kolkata'
    });
  } catch (error) {
    console.error('Server timezone conversion error:', error);
    return `${localTime} (Needs conversion)`;
  }
};

// Convert 12-hour format to 24-hour format
const convertTo24Hour = (time12h) => {
  try {
    const [time, period] = time12h.split(' ');
    const [hours, minutes] = time.split(':').map(Number);
    let adjustedHours = hours;
    
    if (period === 'PM' && hours !== 12) {
      adjustedHours += 12;
    } else if (period === 'AM' && hours === 12) {
      adjustedHours = 0;
    }
    
    return `${adjustedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  } catch (error) {
    return time12h;
  }
};

export async function POST(request) {
    let connection;
    
    try {
        const body = await request.json();
        
        // Validate required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'selectedDate', 'selectedTime', 'consent'];
        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json(
                    { error: `${field} is required` },
                    { status: 400 }
                );
            }
        }

        // Validate consent
        if (!body.consent) {
            return NextResponse.json(
                { error: 'Consent is required to proceed with booking' },
                { status: 400 }
            );
        }

        // Convert user's local time to IST on server
        const istTime = convertTimeToIST(body.selectedTime, body.userTimezone || 'Asia/Kolkata', body.selectedDate);
        const istTime24 = convertTo24Hour(istTime);
        const localTime24 = convertTo24Hour(body.selectedTime);

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Parse phone number if provided
        let countryCode = null;
        let phoneNumber = null;
        
        if (body.phone) {
            const phoneMatch = body.phone.match(/^\+(\d{1,4})\s*(.*)$/);
            if (phoneMatch) {
                countryCode = phoneMatch[1];
                phoneNumber = phoneMatch[2].replace(/\s+/g, '');
            } else {
                phoneNumber = body.phone.replace(/\s+/g, '');
            }
        }
        
        // If no country code from phone but we have user country, map it
        if (!countryCode && body.userCountry) {
            const countryToCode = {
                'US': '1',
                'IN': '91',
                'GB': '44',
                'CA': '1',
                'AU': '61',
                'DE': '49',
                'FR': '33',
                'JP': '81',
                'CN': '86',
                'BR': '55'
            };
            countryCode = countryToCode[body.userCountry] || null;
        }

        connection = await createConnection();
        
        const sql = `
            INSERT INTO bookings (
                first_name,
                last_name,
                email,
                phone,
                country_code,
                message,
                booking_date,
                booking_time_local,
                booking_time_ist,
                booking_time_local_24h,
                booking_time_ist_24h,
                user_timezone,
                user_country,
                booking_datetime_local,
                booking_datetime_ist,
                consent
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        const values = [
            body.firstName,
            body.lastName,
            body.email,
            phoneNumber,
            countryCode,
            body.message || null,
            body.selectedDate,
            body.selectedTime,
            istTime,
            localTime24,
            istTime24,
            body.userTimezone || 'Unknown',
            body.userCountry || 'Unknown',
            `${body.selectedDate} ${body.selectedTime}`,
            `${body.selectedDate} ${istTime}`,
            body.consent ? 1 : 0
        ];
        
        const [result] = await connection.execute(sql, values);
        
        return NextResponse.json(
            { 
                success: true,
                message: 'Booking submitted successfully',
                id: result.insertId 
            },
            { status: 201 }
        );
        
    } catch (error) {
        
        if (error.code === 'ER_DUP_ENTRY') {
            return NextResponse.json(
                { error: 'A booking with this email and time already exists' },
                { status: 409 }
            );
        }
        
        if (error.code === 'ER_NO_SUCH_TABLE') {
            return NextResponse.json(
                { error: 'Booking table not found. Please contact administrator.' },
                { status: 500 }
            );
        }

        // Connection errors
        if (error.code === 'ECONNREFUSED') {
            return NextResponse.json(
                { error: 'Database connection refused. Please check network connection.' },
                { status: 500 }
            );
        }

        if (error.code === 'ETIMEDOUT') {
            return NextResponse.json(
                { error: 'Database connection timeout. Please try again.' },
                { status: 500 }
            );
        }

        if (error.code === 'ENOTFOUND') {
            return NextResponse.json(
                { error: 'Database host not found.' },
                { status: 500 }
            );
        }

        if (error.code === 'ECONNRESET') {
            return NextResponse.json(
                { error: 'Database connection was reset. Please try again.' },
                { status: 500 }
            );
        }

        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            return NextResponse.json(
                { error: 'Database connection was lost. Please try again.' },
                { status: 500 }
            );
        }
        
        // For development: show detailed error
        if (process.env.NODE_ENV === 'development') {
            return NextResponse.json(
                { 
                    error: 'Database error occurred',
                    details: error.message,
                    code: error.code,
                    errno: error.errno
                },
                { status: 500 }
            );
        }
        
        return NextResponse.json(
            { error: 'Failed to submit booking. Please try again later.' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = (page - 1) * limit;
        
        const connection = await createConnection();
        
        // Get total count
        const [countResult] = await connection.execute(
            'SELECT COUNT(*) as total FROM bookings'
        );
        
        // Get bookings
        const [results] = await connection.execute(
            `SELECT * FROM bookings 
             ORDER BY created_at DESC 
             LIMIT ? OFFSET ?`,
            [limit, offset]
        );
        
        return NextResponse.json({
            data: results,
            pagination: {
                total: countResult[0].total,
                page,
                limit,
                totalPages: Math.ceil(countResult[0].total / limit)
            }
        });
        
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch bookings' },
            { status: 500 }
        );
    }
}