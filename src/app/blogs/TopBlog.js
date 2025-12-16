"use client";
import { EyeIcon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./topblog.css";
import { useRouter } from 'next/navigation';
import ReactionButton from "./ReactionButton";
import { fetchMultipleBlogStats } from '@/lib/blogStats';
import { useBlogCache } from './BlogCacheContext';

function TopBlog({ onBlogClick }) {
  const router = useRouter();
  const { topBlogs: cachedBlogs, blogStats, isInitialized, updateTopBlogs, updateBlogStats, fetchInProgress } = useBlogCache();
  const [topBlogs, setTopBlogs] = useState(cachedBlogs || []);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (cachedBlogs) {
      setTopBlogs(cachedBlogs);
    }
  }, [cachedBlogs]);

  useEffect(() => {
    if (cachedBlogs || fetchInProgress.current.top) return;

    const fetchBlogs = async () => {
      fetchInProgress.current.top = true;
      setIsLoading(true);
      try {
        // Check sessionStorage first for all blogs
        let blogs = [];
        if (typeof window !== 'undefined') {
          const cached = sessionStorage.getItem('allBlogs');
          if (cached) {
            try {
              const { data, timestamp } = JSON.parse(cached);
              const cacheAge = Date.now() - timestamp;
              if (cacheAge < 5 * 60 * 1000 && data && data.length > 0) {
                blogs = data.slice(0, 10); // Use first 10 from cache
              }
            } catch (e) {}
          }
        }

        // Fetch if no cache
        if (blogs.length === 0) {
          const response = await fetch('/api/blogs?limit=10');
          if (!response.ok) {
            throw new Error('Failed to fetch blogs');
          }
          const result = await response.json();
          blogs = result.data || [];
        }

        const formattedBlogs = blogs.map(blog => ({
          id: blog.id,
          image: blog.featured_image || '/default-blog-image.jpg',
          title: blog.title,
          description: blog.excerpt,
          readTime: `${blog.read_time} min read`,
          date: new Date(blog.published_date).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric'
          }),
          views: typeof blog.metrics === 'string' ? JSON.parse(blog.metrics).views : blog.metrics?.views || 0,
          reactions: typeof blog.reactions === 'string' ? JSON.parse(blog.reactions) : blog.reactions || { like: 0, love: 0, support: 0, insightful: 0, funny: 0, clap: 0 },
          originalBlog: blog
        }));

        setTopBlogs(formattedBlogs);
        updateTopBlogs(formattedBlogs);

        const blogIds = formattedBlogs.map(blog => blog.id);
        const stats = await fetchMultipleBlogStats(blogIds);
        updateBlogStats(stats);
      } catch (error) {
        setTopBlogs([]);
      } finally {
        fetchInProgress.current.top = false;
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, [cachedBlogs, updateTopBlogs, updateBlogStats, fetchInProgress]);

  const handleReact = (id, reactionId, prevReactionId) => {
    setTopBlogs((prevBlogs) =>
      prevBlogs.map((blog) => {
        if (blog.id !== id) return blog;

        const newReactions = { ...blog.reactions };

        if (prevReactionId && newReactions[prevReactionId] > 0) {
          newReactions[prevReactionId] -= 1;
        }

        newReactions[reactionId] = (newReactions[reactionId] || 0) + 1;

        return {
          ...blog,
          reactions: newReactions,
        };
      })
    );
  };

  if (isLoading || (!isInitialized && (!topBlogs || topBlogs.length === 0))) {
    return (
      <div className="container mx-auto" data-aos="zoom-in">
        <div className="flex flex-col md:flex-row min-h-[400px] md:min-h-[650px] overflow-hidden shadow-lg bg-gray-50">
          <div className="w-full md:w-[75%] h-[250px] md:h-auto bg-gray-200 animate-pulse"></div>
          <div className="w-full md:w-[35%] p-6 md:p-12 flex flex-col justify-between">
            <div className="flex flex-col gap-4 md:gap-8 max-w-md">
              <div className="h-6 md:h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto" data-aos="zoom-in">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="top-blog-swiper !pb-10 md:!pb-12"
      >
        {topBlogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div
              className="md:border-none border-2 border-primary flex flex-col md:flex-row gap-0 md:gap-8 overflow-hidden shadow-lg cursor-pointer md:max-h-[400px]"
              onClick={() => onBlogClick && onBlogClick(blog.originalBlog)}
            >
              <div className="w-full md:w-1/2 h-[200px] md:h-auto bg-amber-200 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full md:w-1/2 p-2 md:p-6 flex flex-col justify-between gap-0 md:gap-6 min-h-[220px] md:min-h-0">
                <div className="flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="text-xs md:text-base line-clamp-3 md:line-clamp-3 text-gray-700">
                    {blog.description}
                  </p>
                  <div className="flex justify-end gap-4 text-xs md:text-sm text-gray-400">
                    <p>{blog.readTime}</p>
                    <p>{blog.date}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-2 mt-auto">
                  <ReactionButton
                    blog={blog}
                    onReact={(blogId, newReaction, prevReaction) =>
                      handleReact(blogId, newReaction, prevReaction)
                    }
                    preloadedStats={blogStats[blog.id]}
                  />
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <EyeIcon className="w-4 h-4" />
                    <p className="!font-semibold text-xs md:text-sm">
                      {blogStats[blog.id]?.views || blog.views || 0}<span className="hidden md:inline"> {(blogStats[blog.id]?.views || blog.views || 0) !== 1 ? "views" : "view"}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopBlog;