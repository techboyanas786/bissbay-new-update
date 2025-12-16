import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// POST to increment view count
export async function POST(request, { params }) {
  let connection;
  try {
    const { userId } = await request.json();
    const { id: blogId } = await params;

    if (!userId || !blogId) {
      return NextResponse.json({ error: 'User ID and Blog ID are required' }, { status: 400 });
    }

    connection = await createConnection();

    // Insert or update user interaction to track view
    await connection.execute(`
      INSERT INTO user_interactions (user_id, blog_id, view_count)
      VALUES (?, ?, 1)
      ON DUPLICATE KEY UPDATE
        view_count = view_count + 1,
        updated_at = CURRENT_TIMESTAMP
    `, [userId, blogId]);

    // Get total view count for this blog
    const [viewResult] = await connection.execute(`
      SELECT SUM(view_count) as total_views
      FROM user_interactions
      WHERE blog_id = ?
    `, [blogId]);

    const totalViews = viewResult[0]?.total_views || 0;

    return NextResponse.json({
      success: true,
      totalViews: parseInt(totalViews)
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to track view' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}