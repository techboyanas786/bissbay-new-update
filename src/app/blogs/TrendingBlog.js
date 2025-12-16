"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import { useBlogCache } from './BlogCacheContext';

function TrendingBlog({ onBlogClick }) {
  const { trendingBlogs: cachedBlogs, updateTrendingBlogs, fetchInProgress, isInitialized } = useBlogCache();
  const [editorsPicks, setEditorsPicks] = useState(cachedBlogs?.editors || []);
  const [trendingStories, setTrendingStories] = useState(cachedBlogs?.trending || []);

  useEffect(() => {
    if (cachedBlogs) {
      setEditorsPicks(cachedBlogs.editors);
      setTrendingStories(cachedBlogs.trending);
    }
  }, [cachedBlogs]);

  useEffect(() => {
    if (cachedBlogs || fetchInProgress.current.trending) return;

    const fetchBlogs = async () => {
      fetchInProgress.current.trending = true;
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
                blogs = data.slice(0, 15); // Use first 15 from cache
              }
            } catch (e) {}
          }
        }

        // Fetch if no cache
        if (blogs.length === 0) {
          const response = await fetch('/api/blogs?limit=15');
          if (!response.ok) {
            throw new Error('Failed to fetch blogs');
          }
          const result = await response.json();
          blogs = result.data || [];
        }

        const editorsData = blogs.slice(0, 2).map(blog => ({
          id: blog.id,
          img: blog.featured_image || '/default-blog-image.jpg',
          title: blog.title,
          date: new Date(blog.published_date).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          }),
          author: blog.author || 'Blog Admin',
          blogData: blog
        }));

        const storiesData = blogs.slice(2).map(blog => ({
          id: blog.id,
          img: blog.featured_image || '/default-blog-image.jpg',
          title: blog.title,
          blogData: blog
        }));

        setEditorsPicks(editorsData);
        setTrendingStories(storiesData);
        updateTrendingBlogs({ editors: editorsData, trending: storiesData });
      } catch (error) {
        setEditorsPicks([]);
        setTrendingStories([]);
      } finally {
        fetchInProgress.current.trending = false;
      }
    };

    fetchBlogs();
  }, [cachedBlogs, updateTrendingBlogs, fetchInProgress]);

  const editorsPrevRef = useRef(null);
  const editorsNextRef = useRef(null);
  const storiesPrevRef = useRef(null);
  const storiesNextRef = useRef(null);

  if (!isInitialized && (!editorsPicks || editorsPicks.length === 0 || !trendingStories || trendingStories.length === 0)) {
    return (
      <div className="flex flex-col lg:flex-row container mx-auto border-2 border-primary animate-pulse">
        <div className="flex w-full lg:w-[65%] flex-col">
          <div className="flex items-center py-4">
            <div className="flex-1 flex justify-center">
              <div className="h-6 w-32 bg-gray-200 rounded"></div>
            </div>
            <div className="flex gap-1 mr-4">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="h-[400px] md:h-[500px] lg:h-[700px] w-full bg-gray-200"></div>
        </div>
        <div className="flex w-full lg:w-[35%] flex-col border-t-2 lg:border-t-0 lg:border-l-2 border-primary">
          <div className="flex items-center py-4">
            <div className="flex-1 flex justify-center">
              <div className="h-6 w-24 bg-gray-200 rounded"></div>
            </div>
            <div className="flex gap-1 mr-4">
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="h-[400px] lg:h-[700px] w-full bg-gray-100">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-3 p-3 h-[100px] md:h-[175px]">
                <div className="w-[100px] md:w-[127px] h-[80px] md:h-[113px] bg-gray-200 rounded-md"></div>
                <div className="flex flex-col flex-1 gap-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col lg:flex-row container mx-auto rounded-md border-b-8 border-t-8 border-b-gray-500 border-t-primary border-primary bg-gray-50">
      <div className="flex w-full lg:w-[65%] flex-col p-0 md:p-2">
        <div className="flex items-center py-4">
          <div className="flex-1 flex justify-center">
            <h3 className="font-bold text-gray-800 text-base md:text-lg">Editor's Picks</h3>
          </div>
          <div className="flex gap-1 mr-2 md:mr-4">
            <button
              ref={editorsPrevRef}
              className="bg-gray-200 hover:bg-gray-300 rounded p-1"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              ref={editorsNextRef}
              className="bg-gray-200 hover:bg-gray-300 rounded p-1"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: editorsPrevRef.current,
            nextEl: editorsNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = editorsPrevRef.current;
            swiper.params.navigation.nextEl = editorsNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="h-[400px] md:h-[500px] lg:h-[600px] w-full"
        >
          {editorsPicks.length > 0 ? editorsPicks.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div
                className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] cursor-pointer"
                onClick={() => onBlogClick && onBlogClick(blog.blogData)}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute w-full bottom-0 left-0 p-3 md:p-4 bg-black/50 !text-white">
                  <h2 className="mb-1 md:mb-2 text-base md:text-lg !text-white font-semibold line-clamp-2">
                    {blog.title}
                  </h2>
                  <p className="!text-white text-xs md:text-sm">
                    {blog.author} • {blog.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          )) : (
            <SwiperSlide>
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-100">
                <p className="text-gray-600">No editor's picks available</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      <div className="flex w-full lg:w-[35%] flex-col md:px-2 px-0 p-2 border-t-2 lg:border-t-0 lg:border-l-2 border-primary mt-4 lg:mt-0">
        {/* Header with buttons */}
        <div className="flex items-center py-4">
          <div className="flex-1 flex justify-center">
            <h3 className="font-bold text-gray-800 text-base md:text-lg">Trending</h3>
          </div>
          <div className="flex gap-1 mr-2 md:mr-4">
            <button
              ref={storiesPrevRef}
              className="bg-gray-200 hover:bg-gray-300 rounded p-1"
            >
              <ChevronUp size={18} />
            </button>
            <button
              ref={storiesNextRef}
              className="bg-gray-200 hover:bg-gray-300 rounded p-1"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          direction="vertical"
          slidesPerView={5}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          navigation={{
            prevEl: storiesPrevRef.current,
            nextEl: storiesNextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = storiesPrevRef.current;
            swiper.params.navigation.nextEl = storiesNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="h-[400px] lg:h-[600px] w-full"
        >
          {trendingStories.length > 0 ? trendingStories.map((story, index) => (
            <SwiperSlide key={story.id}>
              <div
                className="flex h-fit items-center gap-2 md:gap-3 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors p-1"
                onClick={() => onBlogClick && onBlogClick(story.blogData)}
              >
                <div className="relative shrink-0">
                  <img
                    src={story.img}
                    alt={story.title}
                    className="w-[100px] md:w-[127px] h-[80px] md:h-[113px] object-cover rounded-md"
                  />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <h4 className="text-xs md:text-sm font-semibold leading-tight line-clamp-2">
                    {story.title}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          )) : (
            <SwiperSlide>
              <div className="flex items-center justify-center p-3">
                <p className="text-gray-600 text-sm">No stories available</p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default TrendingBlog;