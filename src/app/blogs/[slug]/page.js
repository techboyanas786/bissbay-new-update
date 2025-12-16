"use client";
import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, Users, Target, Mail, TrendingUp, Database, BarChart, Lightbulb, Search, Globe } from 'lucide-react';
import Image from 'next/image';
import Breadcrumb from '@/components/Breadcrumb';
import ReactionButton from '../ReactionButton';
import BlogNav from '../BlogNav';
import BissbayLogo from '@/components/bissbayLogo';

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogContent, setBlogContent] = useState('');
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (params.slug) {
      fetchBlogBySlug(params.slug);
    }
  }, [params.slug]);

  const fetchBlogBySlug = async (slug) => {
    try {
      setLoading(true);
      // Use dedicated single blog endpoint
      const response = await fetch(`/api/blogs/${slug}`);
      if (!response.ok) {
        throw new Error('Failed to fetch blog');
      }
      const result = await response.json();

      if (result.data) {
        setBlog(result.data);
        generateBlogContent(result.data);
        setError(null);
      }
    } catch (err) {
      setError(err.message);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };


  const generateBlogContent = (blogData) => {
    const content = typeof blogData.content === 'string' ? JSON.parse(blogData.content) : blogData.content;

    if (content && content.introduction && content.sections && content.sections.length > 0) {
      const sectionsHTML = content.sections.map(section => `
        <div class="space-y-4 mb-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-4 !text-black">${section.heading}</h2>
          <div class="prose prose-lg max-w-none">
            ${section.content}
          </div>
        </div>
      `).join('\n        ');

      const htmlContent = `
        <div class="prose prose-lg max-w-none space-y-8">
          <div class="prose prose-lg max-w-none">
            ${content.introduction}
          </div>
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

  const handleReact = (blogId, reactionId, prevReactionId) => {
    // Update blog reactions (you can implement this with your backend)
    setBlog(prevBlog => {
      if (!prevBlog) return null;
      
      const reactions = typeof prevBlog.reactions === 'string' ? JSON.parse(prevBlog.reactions) : prevBlog.reactions;
      const newReactions = { ...reactions };
      
      if (prevReactionId && newReactions[prevReactionId] > 0) {
        newReactions[prevReactionId] -= 1;
      }
      
      newReactions[reactionId] = (newReactions[reactionId] || 0) + 1;
      
      return {
        ...prevBlog,
        reactions: newReactions,
      };
    });
  };

  const getBreadcrumbData = () => {
    if (!blog) return {};
    
    const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
    const service = tags?.services?.[0];
    return {
      selectedService: service,
      selectedIndustry: 'Industry',
      selectedTopic: 'Topics'
    };
  };

  const handleBreadcrumbNavigate = (service, industry, topic) => {
    // Always navigate back to main blogs page
    if (!service && industry === 'Industry' && topic === 'Topics') {
      // Click on "Blog" - go to blogs homepage
      router.push('/blogs');
    } else if (service) {
      // Click on service - go to blogs page with service filter
      router.push(`/blogs?service=${service.toLowerCase().replace(/\s+/g, '-')}`);
    } else if (industry && industry !== 'Industry') {
      // Click on industry - go to blogs page with industry filter
      router.push(`/blogs?industry=${industry.toLowerCase().replace(/\s+/g, '-')}`);
    } else if (topic && topic !== 'Topics') {
      // Click on topic - go to blogs page with topic filter
      router.push(`/blogs?topic=${topic.toLowerCase().replace(/\s+/g, '-')}`);
    } else {
      // Default fallback - go to blogs homepage
      router.push('/blogs');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <button 
            onClick={() => router.push('/blogs')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Return to Blog
          </button>
        </div>
      </div>
    );
  }

  const breadcrumbData = getBreadcrumbData();

  const handleServiceClick = (serviceName) => {
    router.push(`/blogs?service=${serviceName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleIndustryClick = (industryName) => {
    router.push(`/blogs?industry=${industryName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleTopicClick = (topicName) => {
    router.push(`/blogs?topic=${topicName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const handleSortChange = () => {};

  const handleSearchChange = () => {};

  return (
    <div className="min-h-screen bg-gray-50">
      {/* BlogNav */}
      <BlogNav
        logo={<BissbayLogo width={120} height={40} />}
        serviceLinks={serviceLinks}
        uniqueIndustries={[]}
        uniqueTopics={[]}
        selectedIndustry="Industry"
        selectedTopic="Topics"
        selectedSort="Sort by"
        searchQuery=""
        onServiceClick={handleServiceClick}
        onIndustryClick={handleIndustryClick}
        onTopicClick={handleTopicClick}
        onSortChange={handleSortChange}
        onSearchChange={handleSearchChange}
        sortOptions={[]}
        breadcrumbComponent={
          <Breadcrumb
            {...breadcrumbData}
            blogTitle={blog.title}
            onNavigate={handleBreadcrumbNavigate}
          />
        }
      />

      {/* Main Content */}
      <div className="pt-[165px]">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Featured Image */}
          <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              unoptimized
              src={blog.featured_image || '/default-blog-image.jpg'}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Blog Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <div className="flex items-center mr-6">
                <Calendar size={16} className="mr-2" />
                <span>{formatDate(blog.published_date)}</span>
              </div>
              <div className="flex items-center mr-6">
                <Clock size={16} className="mr-2" />
                <span>{blog.read_time} min read</span>
              </div>
              <div className="text-sm">
                By <span className="font-semibold text-gray-800">{blog.author}</span>
              </div>
            </div>

            <div className="text-xl text-gray-700 leading-relaxed border-l-4 border-orange-500 pl-6 mb-8">
              {blog.excerpt}
            </div>
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none mb-12 blog-content"
            dangerouslySetInnerHTML={{ __html: blogContent }}
          />

          {/* Reaction Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="!text-black mb-4">What did you think of this article?</h3>
            <ReactionButton
              blog={blog}
              onReact={handleReact}
            />
          </div>

          {/* Author Section */}
          <div className="bg-gray-100 rounded-lg p-6 mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {blog.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{blog.author}</h4>
                <p className="text-gray-600">Content Writer & Marketing Strategist</p>
                <p className="text-sm text-gray-500 mt-1">
                  Specializing in B2B marketing strategies and digital transformation insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}