"use client";
import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

const BlogCacheContext = createContext();

export const useBlogCache = () => {
  const context = useContext(BlogCacheContext);
  if (!context) {
    throw new Error('useBlogCache must be used within BlogCacheProvider');
  }
  return context;
};

export const BlogCacheProvider = ({ children }) => {
  const [topBlogs, setTopBlogs] = useState(null);
  const [trendingBlogs, setTrendingBlogs] = useState(null);
  const [blogStats, setBlogStats] = useState({});
  const [isInitialized, setIsInitialized] = useState(false);
  const fetchInProgress = useRef({ top: false, trending: false });
  const eventSource = useRef(null);

  const updateTopBlogs = useCallback((blogs) => {
    setTopBlogs(blogs);
    setIsInitialized(true);
  }, []);

  const updateTrendingBlogs = useCallback((blogs) => {
    setTrendingBlogs(blogs);
    setIsInitialized(true);
  }, []);

  const updateBlogStats = useCallback((stats) => {
    setBlogStats(prev => ({ ...prev, ...stats }));
  }, []);

  const refreshBlog = useCallback((blogId, updates) => {
    setTopBlogs(prev => prev?.map(blog =>
      blog.id === blogId ? { ...blog, ...updates } : blog
    ));
    setTrendingBlogs(prev => prev?.map(blog =>
      blog.id === blogId ? { ...blog, ...updates } : blog
    ));
  }, []);

  const value = {
    topBlogs,
    trendingBlogs,
    blogStats,
    isInitialized,
    updateTopBlogs,
    updateTrendingBlogs,
    updateBlogStats,
    refreshBlog,
    fetchInProgress
  };

  return (
    <BlogCacheContext.Provider value={value}>
      {children}
    </BlogCacheContext.Provider>
  );
};