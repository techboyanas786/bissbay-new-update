/**
 * Utility functions to fetch real blog statistics from database
 */

/**
 * Fetch reaction counts and view counts for a single blog
 * DEPRECATED: Use fetchMultipleBlogStats instead for better performance
 */
export const fetchBlogStats = async (blogId) => {
  console.warn('fetchBlogStats is deprecated! Use fetchMultipleBlogStats for better performance');

  // Force use of batch endpoint even for single blog
  const batchResult = await fetchMultipleBlogStats([blogId]);
  return batchResult[blogId] || {
    reactionCounts: { like: 0, love: 0, support: 0, insightful: 0, funny: 0, clap: 0 },
    totalReactions: 0,
    views: 0
  };
};

/**
 * Fetch stats for multiple blogs at once (OPTIMIZED - single or chunked API calls)
 */
export const fetchMultipleBlogStats = async (blogIds) => {
  if (!blogIds || blogIds.length === 0) {
    return {};
  }

  try {
    // If more than 50 blogs, chunk into multiple requests
    if (blogIds.length > 50) {
      const chunks = [];
      for (let i = 0; i < blogIds.length; i += 50) {
        chunks.push(blogIds.slice(i, i + 50));
      }

      const results = await Promise.all(
        chunks.map(async (chunk) => {
          const idsParam = chunk.join(',');
          const response = await fetch(`/api/blogs/stats?ids=${encodeURIComponent(idsParam)}`);
          if (response.ok) {
            const data = await response.json();
            return data.stats || {};
          }
          return {};
        })
      );

      // Merge all chunks into a single object
      return Object.assign({}, ...results);
    }

    // Single API call for 50 or fewer blogs
    const idsParam = blogIds.join(',');
    const response = await fetch(`/api/blogs/stats?ids=${encodeURIComponent(idsParam)}`);

    if (response.ok) {
      const data = await response.json();
      return data.stats || {};
    }
  } catch (error) {
    console.error('Error fetching multiple blog stats:', error);
  }

  // Fallback: return empty stats for all requested blogs
  const fallbackStats = {};
  blogIds.forEach(id => {
    fallbackStats[id] = {
      reactionCounts: { like: 0, love: 0, support: 0, insightful: 0, funny: 0, clap: 0 },
      totalReactions: 0,
      views: 0
    };
  });

  return fallbackStats;
};