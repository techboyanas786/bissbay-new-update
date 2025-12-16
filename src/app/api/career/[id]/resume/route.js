import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    let connection;

    try {
        const id = params.id;

        if (!id) {
            return NextResponse.json(
                { error: 'Application ID is required' },
                { status: 400 }
            );
        }

        connection = await createConnection();

        // Get resume data from database
        const [results] = await connection.execute(
            `SELECT resume_data, resume_name, resume_type
             FROM career_applications
             WHERE id = ?`,
            [id]
        );

        await connection.end();

        if (results.length === 0 || !results[0].resume_data) {
            return NextResponse.json(
                { error: 'Resume not found' },
                { status: 404 }
            );
        }

        const { resume_data, resume_name, resume_type } = results[0];

        // Return the file as a response
        return new NextResponse(resume_data, {
            status: 200,
            headers: {
                'Content-Type': resume_type || 'application/octet-stream',
                'Content-Disposition': `attachment; filename="${resume_name || 'resume.pdf'}"`,
                'Content-Length': resume_data.length.toString(),
            },
        });

    } catch (error) {
        console.error('Database error:', error);
        return NextResponse.json(
            { error: 'Failed to retrieve resume' },
            { status: 500 }
        );
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}