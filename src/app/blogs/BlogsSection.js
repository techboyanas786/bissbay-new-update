import React, { useEffect, useState } from 'react'
// import BlogCard from '../../../components/BlogCard'
import Button from '@/components/Button';
import AOS from 'aos';
import { fetchMultipleBlogStats } from '@/lib/blogStats';
import BlogCard from '@/components/BlogCard';

function BlogsSection({
  serviceLinks,
  uniqueIndustries,
  uniqueTopics,
  visibleBlogCounts,
  setVisibleBlogCounts,
  getBlogsForService,
  getBlogsForIndustry,
  getBlogsForTopic,
  onBlogClick,
  searchQuery,
  selectedSort,
  allBlogs,
  showOthersSection = false
}) {
  const [blogStats, setBlogStats] = useState({});
  const [isLoadingStats, setIsLoadingStats] = useState(true);

  // Load stats for all blogs once with caching
  useEffect(() => {
    const loadAllStats = async () => {
      if (allBlogs && allBlogs.length > 0) {
        // Check sessionStorage for cached stats first
        const cachedStats = sessionStorage.getItem('blogStats');
        if (cachedStats) {
          try {
            const { data, timestamp } = JSON.parse(cachedStats);
            const cacheAge = Date.now() - timestamp;
            // Use cache if less than 2 minutes old
            if (cacheAge < 2 * 60 * 1000) {
              setBlogStats(data);
              setIsLoadingStats(false);
              return;
            }
          } catch (e) {}
        }

        // Fetch if no cache or expired
        setIsLoadingStats(true);
        const blogIds = allBlogs.map(blog => blog.id);
        const stats = await fetchMultipleBlogStats(blogIds);
        setBlogStats(stats);

        // Cache the stats
        sessionStorage.setItem('blogStats', JSON.stringify({
          data: stats,
          timestamp: Date.now()
        }));

        setIsLoadingStats(false);
      }
    };

    loadAllStats();
  }, [allBlogs]);

  const handleLoadMore = (itemName) => {
    setVisibleBlogCounts(prev => ({
      ...prev,
      [itemName]: (prev[itemName] || 6) + 6
    }));
    
    // Refresh AOS to animate new elements
    setTimeout(() => {
      AOS.refresh();
    }, 50);
  };

  const applySearchAndSort = (blogs) => {
    let filteredBlogs = blogs;

    // Apply search filter
    if (searchQuery) {
      filteredBlogs = blogs.filter(blog => {
        const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
        return blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
               (tags && tags.services && tags.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))) ||
               (tags && tags.industries && tags.industries.some(industry => industry.toLowerCase().includes(searchQuery.toLowerCase()))) ||
               (tags && tags.topics && tags.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())));
      });
    }

    // Apply sort
    if (selectedSort && selectedSort !== "Sort by") {
      filteredBlogs = [...filteredBlogs];
      switch (selectedSort) {
        case "Newest First":
          filteredBlogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
          break;
        case "Oldest First":
          filteredBlogs.sort((a, b) => new Date(a.published_date) - new Date(b.published_date));
          break;
        case "Most Popular":
        case "Most Liked":
          filteredBlogs.sort((a, b) => {
            const aLikes = typeof a.metrics === 'string' ? JSON.parse(a.metrics).likes : a.metrics.likes;
            const bLikes = typeof b.metrics === 'string' ? JSON.parse(b.metrics).likes : b.metrics.likes;
            return bLikes - aLikes;
          });
          break;
        case "Most Viewed":
          filteredBlogs.sort((a, b) => {
            const aViews = typeof a.metrics === 'string' ? JSON.parse(a.metrics).views : a.metrics.views;
            const bViews = typeof b.metrics === 'string' ? JSON.parse(b.metrics).views : b.metrics.views;
            return bViews - aViews;
          });
          break;
      }
    }

    return filteredBlogs;
  };

  const renderSection = (itemName, getBlogsFunction) => {
    const itemBlogs = applySearchAndSort(getBlogsFunction(itemName));
    const visibleCount = visibleBlogCounts[itemName] || 6;
    const visibleBlogs = itemBlogs.slice(0, visibleCount);
    const hasMore = itemBlogs.length > visibleCount;

    if (itemBlogs.length === 0) {
      return null;
    }

    return (
      <div key={itemName} id={`${itemName.toLowerCase().replace(/\s+/g, '-')}-section`} className="mb-4 md:mb-8">
        <div className="flex items-center justify-center pb-0 md:pb-4 py-4">
          <div className="flex items-center">
            <h2 className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-1 after:bg-primary mb-4">{itemName}</h2>

            {/* Article count here*/}
            {/* <span className="ml-3 bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
              {itemBlogs.length} {itemBlogs.length === 1 ? 'article' : 'articles'}
            </span> */}
          </div>
        </div>

        {isLoadingStats ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-1 border-primary">
            {visibleBlogs.map((blog, index) => (
              <div key={blog.id} className="bg-white border-1 border-primary animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-1 border-primary">
            {visibleBlogs.map((blog, index) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                animationDelay={index * 50}
                onBlogClick={onBlogClick}
                preloadedStats={blogStats[blog.id]}
              />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="text-center flex justify-center items-center py-2">
            <Button label='Load More Articles' variant='primary'
              onClick={() => handleLoadMore(itemName)}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <div id="blogs-section" className="container mx-auto">
      <div>
        {serviceLinks.map(service => renderSection(service.name, getBlogsForService))}
        {uniqueIndustries.map(industry => renderSection(industry, getBlogsForIndustry))}
        {showOthersSection && renderSection('Others', getBlogsForTopic)}
        {uniqueTopics.map(topic => renderSection(topic, getBlogsForTopic))}
      </div>
    </div>
  );
}

export default BlogsSection