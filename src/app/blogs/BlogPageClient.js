"use client";
import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Users, Target, Mail, Calendar, TrendingUp, Database, BarChart, Lightbulb, Search, Globe, Clock } from "lucide-react";
import Image from 'next/image';
import TopBlog from "./TopBlog";
import Hero from "./hero.js";
import TrendingBlog from "./TrendingBlog.js";
import BlogsSection from "./BlogsSection";
import ReactionButton from "./ReactionButton";
import { BlogCacheProvider } from "./BlogCacheContext";
import Breadcrumb from "@/components/Breadcrumb.jsx";
import BissbayLogo from "@/components/bissbayLogo";
import BlogNav from "./BlogNav";

function BlogPageClient({ initialBlogs }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [selectedService, setSelectedService] = useState(searchParams.get('service') || null);
  const [selectedIndustry, setSelectedIndustry] = useState(searchParams.get('industry') || "Industry");
  const [selectedTopic, setSelectedTopic] = useState(searchParams.get('topic') || "Topics");
  const [selectedSort, setSelectedSort] = useState("Sort by");
  const [selectedDate, setSelectedDate] = useState("All Dates");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogContent, setBlogContent] = useState("");
  const [allBlogs, setAllBlogs] = useState(initialBlogs || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleBlogCounts, setVisibleBlogCounts] = useState({});
  const [allIndustries, setAllIndustries] = useState([]);

  const serviceLinks = [
    { id: 1, name: "Account-Based Marketing", icon: Target },
    { id: 2, name: "Appointment Setting", icon: Calendar },
    { id: 3, name: "Content Syndication", icon: Globe },
    { id: 4, name: "Demand Generation", icon: TrendingUp },
    { id: 5, name: "Digital Advertising", icon: BarChart },
    { id: 6, name: "Email Marketing", icon: Mail },
    { id: 7, name: "Events", icon: Users },
    { id: 8, name: "Intelligent Data Enrichment", icon: Database },
    { id: 9, name: "Intent Data", icon: Lightbulb },
    { id: 10, name: "Lead Generation", icon: Search },
  ];

  const sortOptions = [
    "Newest First",
    "Oldest First",
    "Most Popular",
    "Most Viewed",
    "Most Liked"
  ];

  const updateURL = (service = selectedService, industry = selectedIndustry, topic = selectedTopic) => {
    const params = new URLSearchParams();
    if (service) params.set('service', service.toLowerCase().replace(/\s+/g, '-'));
    if (industry && industry !== "Industry") params.set('industry', industry.toLowerCase().replace(/\s+/g, '-'));
    if (topic && topic !== "Topics") params.set('topic', topic.toLowerCase().replace(/\s+/g, '-'));

    const queryString = params.toString();
    const newURL = queryString ? `/blogs?${queryString}` : '/blogs';
    router.push(newURL, { scroll: false });
  };

  const handleItemClick = (itemName, type) => {
    if (selectedBlog) {
      setSelectedBlog(null);
      setBlogContent("");
    }

    if (type === 'service') {
      setSelectedService(itemName);
      setSelectedIndustry('Industry');
      setSelectedTopic('Topics');
      updateURL(itemName, 'Industry', 'Topics');
    } else if (type === 'industry') {
      setSelectedService(null);
      setSelectedIndustry(itemName);
      setSelectedTopic('Topics');
      updateURL(null, itemName, 'Topics');
    } else if (type === 'topic') {
      setSelectedService(null);
      setSelectedIndustry('Industry');
      setSelectedTopic(itemName);
      updateURL(null, 'Industry', itemName);
    }

    setTimeout(() => {
      const sectionId = `${itemName.toLowerCase().replace(/\s+/g, '-')}-section`;
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        const navbarHeight = 100;
        const offset = 20;
        const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const uniqueIndustries = useMemo(() => {
    const industriesSet = new Set();
    allBlogs.forEach(blog => {
      const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
      if (tags && tags.industries) {
        tags.industries.forEach(industry => industriesSet.add(industry));
      }
    });
    return Array.from(industriesSet).sort();
  }, [allBlogs]);

  const uniqueTopics = useMemo(() => {
    const topicsSet = new Set();
    allBlogs.forEach(blog => {
      const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
      if (tags && tags.topics) {
        tags.topics.forEach(topic => topicsSet.add(topic));
      }
    });
    return Array.from(topicsSet).sort();
  }, [allBlogs]);

  useEffect(() => {
    // Store blogs in sessionStorage for client-side caching
    if (allBlogs.length > 0 && typeof window !== 'undefined') {
      sessionStorage.setItem('allBlogs', JSON.stringify({
        data: allBlogs,
        timestamp: Date.now()
      }));
    }
  }, [allBlogs]);

  useEffect(() => {
    fetch('/api/blogs/industries')
      .then(res => res.json())
      .then(data => setAllIndustries(data.industries || []))
      .catch(() => setAllIndustries([]));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-out',
      once: true,
      offset: 50,
      startEvent: 'DOMContentLoaded',
      animatedClassName: 'aos-animate',
      initClassName: 'aos-init',
      useClassNames: false,
      disableMutationObserver: false,
      throttleDelay: 99,
      debounceDelay: 50
    });
  }, []);

  useEffect(() => {
    if (allBlogs.length > 0 && allIndustries.length > 0 && Object.keys(visibleBlogCounts).length === 0) {
      const initialCounts = {};
      serviceLinks.forEach(service => {
        initialCounts[service.name] = 6;
      });
      allIndustries.forEach(industry => {
        initialCounts[industry] = 6;
      });
      initialCounts['Others'] = 6;
      uniqueTopics.forEach(topic => {
        initialCounts[topic] = 6;
      });
      setVisibleBlogCounts(initialCounts);
    }
  }, [allBlogs.length, allIndustries.length, uniqueTopics.length]);

  const getFilteredBlogs = (blogs) => {
    return blogs.filter(blog => {
      const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;

      const serviceMatch = !selectedService || (tags && tags.services && tags.services.includes(selectedService));
      const industryMatch = selectedIndustry === "Industry" || (tags && tags.industries && tags.industries.includes(selectedIndustry));
      const topicMatch = selectedTopic === "Topics" || (tags && tags.topics && tags.topics.includes(selectedTopic));
      const searchMatch = !searchQuery ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (tags && tags.services && tags.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (tags && tags.industries && tags.industries.some(industry => industry.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (tags && tags.topics && tags.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase())));

      // Date filtering
      let dateMatch = true;
      if (selectedDate && selectedDate !== 'All Dates') {
        const blogDate = new Date(blog.published_date);
        const [selectedMonth, selectedYear] = selectedDate.split(' ');
        const blogMonth = blogDate.toLocaleDateString('en-US', { month: 'long' });
        const blogYear = blogDate.getFullYear().toString();
        dateMatch = blogMonth === selectedMonth && blogYear === selectedYear;
      }

      return serviceMatch && industryMatch && topicMatch && searchMatch && dateMatch;
    });
  };

  const sortBlogs = (blogs) => {
    const sortedBlogs = [...blogs];
    switch (selectedSort) {
      case "Newest First":
        return sortedBlogs.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));
      case "Oldest First":
        return sortedBlogs.sort((a, b) => new Date(a.published_date) - new Date(b.published_date));
      case "Most Popular":
        return sortedBlogs.sort((a, b) => {
          const aLikes = typeof a.metrics === 'string' ? JSON.parse(a.metrics).likes : a.metrics.likes;
          const bLikes = typeof b.metrics === 'string' ? JSON.parse(b.metrics).likes : b.metrics.likes;
          return bLikes - aLikes;
        });
      case "Most Viewed":
        return sortedBlogs.sort((a, b) => {
          const aViews = typeof a.metrics === 'string' ? JSON.parse(a.metrics).views : a.metrics.views;
          const bViews = typeof b.metrics === 'string' ? JSON.parse(b.metrics).views : b.metrics.views;
          return bViews - aViews;
        });
      case "Most Liked":
        return sortedBlogs.sort((a, b) => {
          const aLikes = typeof a.metrics === 'string' ? JSON.parse(a.metrics).likes : a.metrics.likes;
          const bLikes = typeof b.metrics === 'string' ? JSON.parse(b.metrics).likes : b.metrics.likes;
          return bLikes - aLikes;
        });
      default:
        return sortedBlogs;
    }
  };

  const applyDateFilter = (blogs) => {
    if (!selectedDate || selectedDate === 'All Dates') {
      return blogs;
    }
    return blogs.filter(blog => {
      const blogDate = new Date(blog.published_date);
      const [selectedMonth, selectedYear] = selectedDate.split(' ');
      const blogMonth = blogDate.toLocaleDateString('en-US', { month: 'long' });
      const blogYear = blogDate.getFullYear().toString();
      return blogMonth === selectedMonth && blogYear === selectedYear;
    });
  };

  const getBlogsForService = (serviceName) => {
    const serviceBlogs = allBlogs.filter(blog => {
      const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
      return tags && tags.services && tags.services.includes(serviceName);
    });
    return sortBlogs(applyDateFilter(serviceBlogs));
  };

  const getBlogsForIndustry = (industryName) => {
    const industryBlogs = allBlogs.filter(blog => {
      const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
      return tags && tags.industries && tags.industries.includes(industryName);
    });
    return sortBlogs(applyDateFilter(industryBlogs));
  };

  const getBlogsForTopic = (topicName) => {
    if (topicName === "Others") {
      const othersBlogs = allBlogs.filter(blog => {
        const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
        const hasNoTopics = !tags || !tags.topics || tags.topics.length === 0;
        const hasNoServices = !tags || !tags.services || tags.services.length === 0;
        const hasNoIndustries = !tags || !tags.industries || tags.industries.length === 0;
        return hasNoTopics && hasNoServices && hasNoIndustries;
      });
      return sortBlogs(applyDateFilter(othersBlogs));
    }

    const topicBlogs = allBlogs.filter(blog => {
      const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
      return tags && tags.topics && tags.topics.includes(topicName);
    });
    return sortBlogs(applyDateFilter(topicBlogs));
  };

  const handleBreadcrumbNavigate = (service, industry, topic) => {
    if (selectedBlog) {
      setSelectedBlog(null);
      setBlogContent("");
    }

    setSelectedService(service);
    setSelectedIndustry(industry);
    setSelectedTopic(topic);
    updateURL(service, industry, topic);

    setTimeout(() => {
      const navbarHeight = 100;
      const offset = 20;

      if (service) {
        const sectionId = `${service.toLowerCase().replace(/\s+/g, '-')}-section`;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      } else if (industry && industry !== 'Industry') {
        const sectionId = `${industry.toLowerCase().replace(/\s+/g, '-')}-section`;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      } else if (topic && topic !== 'Topics') {
        const sectionId = `${topic.toLowerCase().replace(/\s+/g, '-')}-section`;
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - navbarHeight - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);

    const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
    if (tags && tags.services && tags.services.length > 0) {
      setSelectedService(tags.services[0]);
    }

    generateBlogContent(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generateBlogContent = (blogData) => {
    const content = typeof blogData.content === 'string' ? JSON.parse(blogData.content) : blogData.content;

    const processRichText = (htmlContent) => {
      if (!htmlContent) return '';
      let processedHTML = htmlContent;
      processedHTML = processedHTML.replace(
        /<ol[^>]*>([\s\S]*?)<\/ol>/g,
        function(match, innerContent) {
          if (innerContent.includes('data-list="bullet"')) {
            let cleanedContent = innerContent
              .replace(/\s*data-list="bullet"/g, '')
              .replace(/<span[^>]*class="ql-ui"[^>]*><\/span>/g, '')
              .replace(/<span[^>]*class="ql-ui"[^>]*>[\s\S]*?<\/span>/g, '');
            return `<ul style="list-style: disc !important; margin-left: 24px !important; margin-bottom: 16px !important;">${cleanedContent}</ul>`;
          }
          return match;
        }
      );
      return processedHTML;
    };

    if (content && content.introduction && content.sections && content.sections.length > 0) {
      const sectionsHTML = content.sections.map(section => `
        <div class="py-4">
        <h3 class="!text-black">${section.heading}</h3>
        <div>${processRichText(section.content)}</div>
        </div>
      `).join('\n        ');

      const htmlContent = `
        <div class="prose prose-lg max-w-none">
          <h3 class="!text-black">Introduction</h3>
          <div>${processRichText(content.introduction)}</div>
          ${sectionsHTML}
        </div>
      `;
      setBlogContent(htmlContent);
    } else {
      setBlogContent(`
        <div class="prose prose-lg max-w-none">
          <div class="text-center py-12">
            <p class="text-gray-500 text-lg">Content for this blog is being updated. Please check back soon.</p>
          </div>
        </div>
      `);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen font-quicksand relative flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blogs...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen font-quicksand relative flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Error loading blogs: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <BlogNav
        logo={<BissbayLogo width={120} height={40} />}
        serviceLinks={serviceLinks}
        uniqueIndustries={allIndustries}
        uniqueTopics={uniqueTopics}
        selectedService={selectedService}
        selectedIndustry={selectedIndustry}
        selectedTopic={selectedTopic}
        selectedSort={selectedSort}
        selectedDate={selectedDate}
        searchQuery={searchQuery}
        onServiceClick={(name) => handleItemClick(name, 'service')}
        onIndustryClick={(name) => handleItemClick(name, 'industry')}
        onTopicClick={(name) => handleItemClick(name, 'topic')}
        onSortChange={setSelectedSort}
        onDateChange={setSelectedDate}
        onSearchChange={setSearchQuery}
        sortOptions={sortOptions}
        breadcrumbComponent={
          <Breadcrumb
            selectedService={selectedService}
            selectedIndustry={selectedIndustry}
            selectedTopic={selectedTopic}
            blogTitle={selectedBlog?.title}
            onNavigate={handleBreadcrumbNavigate}
          />
        }
      />

      <div className="container px-4 md:px-2 mx-auto mt-[145px] md:mt-[165px]">

        {selectedBlog ? (
          <div className="max-w-4xl mx-auto px-6 py-8">
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                unoptimized
                src={selectedBlog.featured_image || '/default-blog-image.jpg'}
                alt={selectedBlog.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mb-8">
              <h2 className="mb-4 leading-tight">
                {selectedBlog.title}
              </h2>

              <div className="flex items-center text-gray-600 mb-6">
                <div className="flex items-center mr-6">
                  <Calendar size={16} className="mr-2" />
                  <span>{formatDate(selectedBlog.published_date)}</span>
                </div>
                <div className="flex items-center mr-6">
                  <Clock size={16} className="mr-2" />
                  <span>{selectedBlog.read_time} min read</span>
                </div>
                <div className="text-sm">
                  By <span className="font-semibold text-gray-800">{selectedBlog.author}</span>
                </div>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: blogContent }}
            />

            <div className="border-t border-gray-200 pt-8">
              <h3 className="!text-black mb-4">What did you think of this article?</h3>
              <ReactionButton
                blog={selectedBlog}
              />
            </div>
          </div>
        ) : (
          <section className="flex flex-col gap-4 md:gap-12" >
            <Hero />
            <TopBlog onBlogClick={handleBlogClick} />
            <TrendingBlog onBlogClick={handleBlogClick} />
            <BlogsSection
              serviceLinks={serviceLinks}
              uniqueIndustries={allIndustries}
              uniqueTopics={uniqueTopics}
              selectedService={selectedService}
              allBlogs={allBlogs}
              visibleBlogCounts={visibleBlogCounts}
              setVisibleBlogCounts={setVisibleBlogCounts}
              getFilteredBlogs={getFilteredBlogs}
              sortBlogs={sortBlogs}
              getBlogsForService={getBlogsForService}
              getBlogsForIndustry={getBlogsForIndustry}
              getBlogsForTopic={getBlogsForTopic}
              onBlogClick={handleBlogClick}
              searchQuery={searchQuery}
              selectedSort={selectedSort}
              showOthersSection={true}
            />
          </section>
        )}
      </div>
    </div>
  );
}

export default function PageWrapper({ initialBlogs }) {
  return (
    <BlogCacheProvider>
      <BlogPageClient initialBlogs={initialBlogs} />
    </BlogCacheProvider>
  );
}
