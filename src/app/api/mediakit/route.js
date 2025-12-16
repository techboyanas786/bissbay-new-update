import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    let connection;
    
    try {
        const body = await request.json();
        const requiredFields = ['firstName', 'lastName', 'businessEmail', 'consent'];
        for (const field of requiredFields) {
            if (!body[field]) {
                return NextResponse.json(
                    { error: `${field} is required` },
                    { status: 400 }
                );
            }
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.businessEmail)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }
        let countryCode = null;
        let phoneNumber = null;
        
        if (body.phoneNumber) {
            const phoneMatch = body.phoneNumber.match(/^\+(\d+)\s*(.*)$/);
            if (phoneMatch) {
                countryCode = phoneMatch[1];
                phoneNumber = phoneMatch[2].replace(/\s+/g, '');
            }
        }
        connection = await createConnection();
        const sql = `
            INSERT INTO contact_us (
                page_code,
                first_name,
                last_name,
                job_title,
                country_code,
                phone,
                company_name,
                business_email,
                question,
                consent
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        
        const values = [
            'MediaKit',
            body.firstName,
            body.lastName,
            body.jobTitle || null,
            countryCode,
            phoneNumber,
            body.companyName || null,
            body.businessEmail,
            body.question || null,
            body.consent ? 1 : 0
        ];
        const [result] = await connection.execute(sql, values);
        return NextResponse.json(
            { 
                success: true,
                message: 'Media kit form submitted successfully',
                id: result.insertId 
            },
            { status: 201 }
        );
        
    } catch (error) {
        console.error('Database error:', error);
        if (error.code === 'ER_DUP_ENTRY') {
            return NextResponse.json(
                { error: 'This email has already been submitted' },
                { status: 409 }
            );
        }
        
        return NextResponse.json(
            { error: 'Failed to submit media kit form. Please try again later.' },
            { status: 500 }
        );
    }
}

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const offset = (page - 1) * limit;
        
        const connection = await createConnection();
        const [countResult] = await connection.execute(
            'SELECT COUNT(*) as total FROM contact_us WHERE page_code = ?',
            ['MediaKit']
        );
        const [results] = await connection.execute(
            `SELECT * FROM contact_us 
             WHERE page_code = ? 
             ORDER BY submitted_at DESC 
             LIMIT ? OFFSET ?`,
            ['MediaKit', limit, offset]
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
        console.error('Database query failed:', error);
        return NextResponse.json(
            { error: 'Failed to fetch media kit submissions' },
            { status: 500 }
        );
    }
}