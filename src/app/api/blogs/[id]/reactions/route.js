import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// GET user's current reaction and blog reaction counts
export async function GET(request, { params }) {
  let connection;
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const { id: blogId } = await params;

    if (!blogId) {
      return NextResponse.json({ error: 'Blog ID is required' }, { status: 400 });
    }

    connection = await createConnection();

    // Get user's current reaction (if userId provided)
    let userReaction = null;
    if (userId) {
      const [userResult] = await connection.execute(
        'SELECT reaction_type FROM user_interactions WHERE user_id = ? AND blog_id = ?',
        [userId, blogId]
      );
      userReaction = userResult[0]?.reaction_type || null;
    }

    // Get reaction counts for this blog
    const [counts] = await connection.execute(`
      SELECT
        reaction_type,
        COUNT(*) as count
      FROM user_interactions
      WHERE blog_id = ? AND reaction_type IS NOT NULL
      GROUP BY reaction_type
    `, [blogId]);

    // Format reaction counts
    const reactionCounts = {
      like: 0,
      love: 0,
      support: 0,
      insightful: 0,
      funny: 0,
      clap: 0
    };

    counts.forEach(row => {
      if (reactionCounts.hasOwnProperty(row.reaction_type)) {
        reactionCounts[row.reaction_type] = row.count;
      }
    });

    return NextResponse.json({
      userReaction,
      reactionCounts,
      totalReactions: Object.values(reactionCounts).reduce((sum, count) => sum + count, 0)
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch reactions' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

// POST/PUT user reaction
export async function POST(request, { params }) {
  let connection;
  try {
    const { userId, reactionType } = await request.json();
    const { id: blogId } = await params;

    if (!userId || !blogId) {
      return NextResponse.json({ error: 'User ID and Blog ID are required' }, { status: 400 });
    }

    if (!['like', 'love', 'support', 'insightful', 'funny', 'clap'].includes(reactionType)) {
      return NextResponse.json({ error: 'Invalid reaction type' }, { status: 400 });
    }

    connection = await createConnection();

    // Insert or update user interaction
    await connection.execute(`
      INSERT INTO user_interactions (user_id, blog_id, reaction_type, view_count)
      VALUES (?, ?, ?, 1)
      ON DUPLICATE KEY UPDATE
        reaction_type = VALUES(reaction_type),
        updated_at = CURRENT_TIMESTAMP
    `, [userId, blogId, reactionType]);

    // Get updated reaction counts
    const [counts] = await connection.execute(`
      SELECT
        reaction_type,
        COUNT(*) as count
      FROM user_interactions
      WHERE blog_id = ? AND reaction_type IS NOT NULL
      GROUP BY reaction_type
    `, [blogId]);

    const reactionCounts = {
      like: 0,
      love: 0,
      support: 0,
      insightful: 0,
      funny: 0,
      clap: 0
    };

    counts.forEach(row => {
      if (reactionCounts.hasOwnProperty(row.reaction_type)) {
        reactionCounts[row.reaction_type] = row.count;
      }
    });

    return NextResponse.json({
      success: true,
      userReaction: reactionType,
      reactionCounts,
      totalReactions: Object.values(reactionCounts).reduce((sum, count) => sum + count, 0)
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to update reaction' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}

// DELETE user reaction
export async function DELETE(request, { params }) {
  let connection;
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const { id: blogId } = await params;

    if (!userId || !blogId) {
      return NextResponse.json({ error: 'User ID and Blog ID are required' }, { status: 400 });
    }

    connection = await createConnection();

    // Remove reaction but keep the record (set reaction_type to NULL)
    await connection.execute(`
      UPDATE user_interactions
      SET reaction_type = NULL, updated_at = CURRENT_TIMESTAMP
      WHERE user_id = ? AND blog_id = ?
    `, [userId, blogId]);

    // Get updated reaction counts
    const [counts] = await connection.execute(`
      SELECT
        reaction_type,
        COUNT(*) as count
      FROM user_interactions
      WHERE blog_id = ? AND reaction_type IS NOT NULL
      GROUP BY reaction_type
    `, [blogId]);

    const reactionCounts = {
      like: 0,
      love: 0,
      support: 0,
      insightful: 0,
      funny: 0,
      clap: 0
    };

    counts.forEach(row => {
      if (reactionCounts.hasOwnProperty(row.reaction_type)) {
        reactionCounts[row.reaction_type] = row.count;
      }
    });

    return NextResponse.json({
      success: true,
      userReaction: null,
      reactionCounts,
      totalReactions: Object.values(reactionCounts).reduce((sum, count) => sum + count, 0)
    });

  } catch (error) {
    return NextResponse.json({ error: 'Failed to remove reaction' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}