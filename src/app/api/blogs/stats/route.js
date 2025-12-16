import { createConnection } from '@/lib/db';
import { NextResponse } from 'next/server';

// Cache configuration
export const revalidate = 60; // Revalidate every 1 minute for stats
export const dynamic = 'force-static';

// GET multiple blog statistics in a single request
// Usage: /api/blogs/stats?ids=blog1,blog2,blog3,blog4
export async function GET(request) {
  let connection;
  try {
    const { searchParams } = new URL(request.url);
    const idsParam = searchParams.get('ids');

    if (!idsParam) {
      return NextResponse.json({ error: 'Blog IDs are required (use ?ids=id1,id2,id3)' }, { status: 400 });
    }

    const blogIds = idsParam.split(',').map(id => id.trim()).filter(id => id.length > 0);

    if (blogIds.length === 0) {
      return NextResponse.json({ error: 'At least one valid blog ID is required' }, { status: 400 });
    }

    // Limit to prevent abuse
    if (blogIds.length > 50) {
      return NextResponse.json({ error: 'Too many blog IDs (max 50)' }, { status: 400 });
    }

    connection = await createConnection();

    // Single query to get all reaction counts for all blogs
    const placeholders = blogIds.map(() => '?').join(',');
    const [reactionResults] = await connection.execute(`
      SELECT
        blog_id,
        reaction_type,
        COUNT(*) as count
      FROM user_interactions
      WHERE blog_id IN (${placeholders}) AND reaction_type IS NOT NULL
      GROUP BY blog_id, reaction_type
    `, blogIds);

    // Single query to get all view counts for all blogs
    const [viewResults] = await connection.execute(`
      SELECT
        blog_id,
        SUM(view_count) as total_views
      FROM user_interactions
      WHERE blog_id IN (${placeholders})
      GROUP BY blog_id
    `, blogIds);

    // Process results into organized structure
    const statsMap = {};

    // Initialize all blogs with zero stats
    blogIds.forEach(blogId => {
      statsMap[blogId] = {
        blogId,
        reactionCounts: {
          like: 0,
          love: 0,
          support: 0,
          insightful: 0,
          funny: 0,
          clap: 0
        },
        totalReactions: 0,
        views: 0
      };
    });

    // Fill in reaction counts
    reactionResults.forEach(row => {
      const { blog_id, reaction_type, count } = row;
      if (statsMap[blog_id] && statsMap[blog_id].reactionCounts.hasOwnProperty(reaction_type)) {
        statsMap[blog_id].reactionCounts[reaction_type] = count;
      }
    });

    // Fill in view counts and calculate total reactions
    viewResults.forEach(row => {
      const { blog_id, total_views } = row;
      if (statsMap[blog_id]) {
        statsMap[blog_id].views = parseInt(total_views) || 0;
      }
    });

    // Calculate total reactions for each blog
    Object.keys(statsMap).forEach(blogId => {
      const reactions = statsMap[blogId].reactionCounts;
      statsMap[blogId].totalReactions = Object.values(reactions).reduce((sum, count) => sum + count, 0);
    });

    return NextResponse.json({
      success: true,
      stats: statsMap,
      count: blogIds.length
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120'
      }
    });

  } catch (error) {
    console.error('Error fetching batch blog stats:', error);
    return NextResponse.json({ error: 'Failed to fetch blog stats' }, { status: 500 });
  } finally {
    if (connection) connection.release();
  }
}