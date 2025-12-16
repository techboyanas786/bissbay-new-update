import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
  let connection;

  try {
    const body = await request.json();
    
    const {
      fullName,
      jobTitle,
      businessEmail,
      phoneNumber,
      companyName,
      companySize,
      budget,
      industry,
      customIndustry,
      selectedDate,
      selectedTime,
      userTimezone,
      formattedDate,
      consent,
      type
    } = body;
    if (!fullName || !businessEmail || !consent) {
      return NextResponse.json(
        { error: 'Missing required fields: fullName, businessEmail, and consent are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format.' },
        { status: 400 }
      );
    }
    if (selectedDate && selectedTime) {
      const bookingDate = new Date(selectedDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (bookingDate <= today) {
        return NextResponse.json(
          { error: 'Booking date must be in the future.' },
          { status: 400 }
        );
      }
    }

    connection = await createConnection();
    const insertQuery = `
      INSERT INTO consultation_requests (
        full_name,
        job_title,
        business_email,
        phone_number,
        company_name,
        company_size,
        budget,
        industry,
        custom_industry,
        selected_date,
        selected_time,
        user_timezone,
        formatted_date,
        consent,
        status,
        created_at,
        updated_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending', NOW(), NOW())
    `;

    const values = [
      fullName || '',
      jobTitle || '',
      businessEmail || '',
      phoneNumber || '',
      companyName || '',
      companySize || '',
      budget || '',
      industry || '',
      customIndustry || '',
      selectedDate || null,
      selectedTime || null,
      userTimezone || 'Asia/Kolkata',
      formattedDate || null,
      consent ? 1 : 0
    ];

    const [result] = await connection.execute(insertQuery, values);
    await connection.end();
    return NextResponse.json({
      success: true,
      message: 'Consultation booking submitted successfully!',
      data: {
        id: result.insertId,
        fullName,
        businessEmail,
        selectedDate,
        selectedTime,
        status: 'confirmed'
      }
    }, { status: 201 });

  } catch (error) {
    console.error('Database error:', error);

    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  let connection;

  try {
    connection = await createConnection();

    const selectQuery = `
      SELECT 
        id,
        full_name,
        job_title,
        business_email,
        phone_number,
        company_name,
        company_size,
        budget,
        industry,
        custom_industry,
        selected_date,
        selected_time,
        user_timezone,
        formatted_date,
        consent,
        status,
        created_at,
        updated_at
      FROM consultation_requests 
      ORDER BY created_at DESC
    `;

    const [rows] = await connection.execute(selectQuery);
    await connection.end();

    return NextResponse.json(
      { 
        success: true, 
        data: rows,
        count: rows.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Database error:', error);

    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed. This endpoint only accepts POST requests.' },
    { status: 405 }
  );
}