import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// GET single blog by ID
export async function GET(request, { params }) {
  let connection;
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    connection = await createConnection();

    const [results] = await connection.execute(
      'SELECT * FROM blogs WHERE id = ? LIMIT 1',
      [id]
    );

    if (results.length === 0) {
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, data: results[0] },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600'
        }
      }
    );

  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}
