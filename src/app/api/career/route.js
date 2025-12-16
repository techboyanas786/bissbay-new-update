import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    let connection;

    try {
        const formData = await request.formData();

        // Extract form fields
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const country = formData.get('country');
        const phone = formData.get('phone');
        const skills = formData.get('skills');
        const consent = formData.get('consent') === 'true';
        const resumeFile = formData.get('resume');

        // Validate required fields
        const requiredFields = ['firstName', 'lastName', 'email', 'country', 'phone', 'consent'];
        for (const field of requiredFields) {
            const value = formData.get(field);
            if (!value || value === 'null' || value === '') {
                return NextResponse.json(
                    { error: `${field} is required` },
                    { status: 400 }
                );
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Parse phone number to extract country code
        let countryCode = null;
        let phoneNumber = null;

        if (phone) {
            const phoneMatch = phone.match(/^\+(\d+)\s*(.*)$/);
            if (phoneMatch) {
                countryCode = phoneMatch[1];
                phoneNumber = phoneMatch[2].replace(/\s+/g, '');
            }
        }

        // Handle file upload
        let resumeData = null;
        let resumeName = null;
        let resumeType = null;

        if (resumeFile && resumeFile.size > 0) {
            // Validate file size (5MB max)
            const maxSize = 5 * 1024 * 1024; // 5MB in bytes
            if (resumeFile.size > maxSize) {
                return NextResponse.json(
                    { error: 'File size exceeds 5MB limit' },
                    { status: 400 }
                );
            }

            // Validate file type
            const allowedTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'text/plain'
            ];

            if (!allowedTypes.includes(resumeFile.type)) {
                return NextResponse.json(
                    { error: 'Invalid file type. Please upload DOC, DOCX, PDF, or TXT files only.' },
                    { status: 400 }
                );
            }

            // Convert file to buffer for database storage
            const bytes = await resumeFile.arrayBuffer();
            resumeData = Buffer.from(bytes);
            resumeName = resumeFile.name;
            resumeType = resumeFile.type;
        }

        // Connect to database
        connection = await createConnection();

        // Insert into database
        const sql = `
            INSERT INTO career_applications (
                first_name,
                last_name,
                email,
                country,
                country_code,
                phone_number,
                resume_data,
                resume_name,
                resume_type,
                skills,
                consent,
                submitted_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
        `;

        const values = [
            firstName,
            lastName,
            email,
            country,
            countryCode,
            phoneNumber,
            resumeData,
            resumeName,
            resumeType,
            skills || null,
            consent ? 1 : 0
        ];

        const [result] = await connection.execute(sql, values);

        // Close connection
        await connection.end();

        return NextResponse.json(
            {
                success: true,
                message: 'Application submitted successfully',
                id: result.insertId
            },
            { status: 201 }
        );

    } catch (error) {
        console.error('Database error:', error);

        if (error.code === 'ER_DUP_ENTRY') {
            return NextResponse.json(
                { error: 'An application with this email has already been submitted' },
                { status: 409 }
            );
        }

        return NextResponse.json(
            { error: 'Failed to submit application. Please try again later.' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

export async function GET(request) {
    let connection;

    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = (page - 1) * limit;

        connection = await createConnection();

        // Get total count
        const [countResult] = await connection.execute(
            'SELECT COUNT(*) as total FROM career_applications'
        );

        // Get paginated results (exclude resume_data from listing for performance)
        const [results] = await connection.execute(
            `SELECT
                id,
                first_name,
                last_name,
                email,
                country,
                CONCAT('+', country_code, ' ', phone_number) as phone,
                resume_name,
                resume_type,
                skills,
                consent,
                submitted_at,
                CASE WHEN resume_data IS NOT NULL THEN 1 ELSE 0 END as has_resume
             FROM career_applications
             ORDER BY submitted_at DESC
             LIMIT ? OFFSET ?`,
            [limit, offset]
        );

        await connection.end();

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
        console.error('Database query failed:', error);
        return NextResponse.json(
            { error: 'Failed to fetch applications' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

// DELETE endpoint to remove an application
export async function DELETE(request) {
    let connection;

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Application ID is required' },
                { status: 400 }
            );
        }

        connection = await createConnection();

        const [result] = await connection.execute(
            'DELETE FROM career_applications WHERE id = ?',
            [id]
        );

        await connection.end();

        if (result.affectedRows === 0) {
            return NextResponse.json(
                { error: 'Application not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Application deleted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to delete application' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}