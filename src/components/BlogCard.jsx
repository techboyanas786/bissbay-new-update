import React, { useState, useEffect } from 'react'
import { Clock, Eye, Heart, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { fetchBlogStats } from '@/lib/blogStats'

function BlogCard({ blog, className = "", animationDelay = 0, onBlogClick, preloadedStats = null }) {
  const [blogStats, setBlogStats] = useState({
    reactionCounts: { like: 0, love: 0, celebrate: 0, insight: 0 },
    totalReactions: 0,
    views: 0
  });

  useEffect(() => {
    // Use preloaded stats if available, otherwise show default (no individual loading)
    if (preloadedStats) {
      setBlogStats(preloadedStats);
    } else {
      // Log warning instead of making individual calls
      console.warn(`BlogCard for blog ${blog.id} is missing preloadedStats! This will cause performance issues.`);

      // Use fallback to old metrics if available
      const fallbackStats = {
        reactionCounts: { like: 0, love: 0, celebrate: 0, insight: 0 },
        totalReactions: 0,
        views: 0
      };

      // Try to use old metrics as fallback
      if (blog.metrics) {
        const metrics = typeof blog.metrics === 'string' ? JSON.parse(blog.metrics) : blog.metrics;
        fallbackStats.views = metrics.views || 0;
        fallbackStats.totalReactions = metrics.likes || 0;
      }

      setBlogStats(fallbackStats);
    }
  }, [blog.id, preloadedStats]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  const handleClick = () => {
    if (onBlogClick) {
      onBlogClick(blog);
    }
  };

  return (
    <div 
      className={`bg-white border-1 border-primary transition-all duration-300 overflow-hidden group cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {/* Featured Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
        unoptimized
          src={blog.featured_image || '/default-blog-image.jpg'} 
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 right-0 bg-[#00000080] text-white text-xs px-2 py-1 flex items-center space-x-2">
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {blog.read_time} min
          </span>
          <span>•</span>
          <span>{formatDate(blog.published_date)}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6">

        {/* Title */}
        <h3 
          className="mb-4 line-clamp-2 group-hover:text-orange-500 transition-colors"
          data-aos="fade-up"
          data-aos-delay={animationDelay}
          data-aos-offset="30"
        >
          {blog.title}
        </h3>

        {/* Excerpt */}
        <p 
          className="text-gray-600 text-sm mb-2 line-clamp-2"
          data-aos="fade-up"
          data-aos-delay={animationDelay + 50}
          data-aos-offset="20"
        >
          {blog.excerpt}
        </p>

        {/* Footer with author and metrics */}
        <div 
          className="flex items-center justify-between pt-2 border-t border-gray-100"
          data-aos="fade-up"
          data-aos-delay={animationDelay + 70}
          data-aos-offset="10"
        >
          <div className="flex items-center">
            <span className="text-sm text-gray-600">{blog.author}</span>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <span className="flex items-center">
              <Eye size={14} className="mr-1" />
              {formatNumber(blogStats.views || 0)}
            </span>
            <span className="flex items-center">
              <Heart size={14} className="mr-1" />
              {blogStats.totalReactions}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard;