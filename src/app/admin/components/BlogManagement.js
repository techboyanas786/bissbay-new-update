"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { 
  Plus, Search, Edit3, Trash2, Eye, Calendar, Clock, Heart, Save, X, FileText
} from 'lucide-react';

// Dynamically import ReactQuill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { 
  ssr: false,
  loading: () => <div className="h-32 bg-gray-100 rounded-lg animate-pulse"></div>
});

import 'react-quill-new/dist/quill.snow.css';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  // Form state for creating/editing blogs
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    author: '',
    publishedDate: '',
    readTime: '',
    tags: {
      services: [],
      industries: [],
      topics: []
    },
    metrics: {
      views: 0,
      likes: 0
    },
    reactions: {
      like: 0,
      love: 0,
      celebrate: 0,
      insight: 0
    },
    featuredImage: '',
    content: {
      introduction: '',
      sections: []
    }
  });

  const [newSection, setNewSection] = useState({ heading: '', content: '' });
  const [editingSectionIndex, setEditingSectionIndex] = useState(null);

  // Predefined options
  const serviceOptions = [
    "Account-Based Marketing",
    "Appointment Setting", 
    "Content Syndication",
    "Demand Generation",
    "Digital Advertising",
    "Email Marketing",
    "Events",
    "Intelligent Data Enrichment",
    "Intent Data",
    "Lead Generation"
  ];

  const [industryOptions, setIndustryOptions] = useState([]);

  const topicOptions = [
    "Digital Transformation", "Customer Experience", "Marketing Automation",
    "AI & Machine Learning", "Data Analytics", "Lead Generation",
    "Sales Enablement", "Customer Success", "Growth Marketing"
  ];

  // Simple toolbar with only the features you want
  const quillModules = {
    toolbar: [
      ['bold', 'italic'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }]
    ],
  };

  const quillFormats = ['bold', 'italic', 'list'];

  useEffect(() => {
    fetchBlogs();
    fetch('/api/blogs/industries')
      .then(res => res.json())
      .then(data => setIndustryOptions(data.industries || []))
      .catch(() => setIndustryOptions([]));
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/blogs?limit=1000'); // Get all blogs for admin

      if (response.ok) {
        const result = await response.json();
        setBlogs(result.data || []);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      author: '',
      publishedDate: new Date().toISOString().split('T')[0], // Default to today
      readTime: '',
      tags: {
        services: [],
        industries: [],
        topics: []
      },
      metrics: {
        views: 0,
        likes: 0
      },
      reactions: {
        like: 0,
        love: 0,
        celebrate: 0,
        insight: 0
      },
      featuredImage: 'https://placehold.co/600x400',
      content: {
        introduction: '',
        sections: []
      }
    });
    setNewSection({ heading: '', content: '' });
    setEditingSectionIndex(null);
  };

  const fillSampleData = () => {
    setFormData({
      title: 'Sample Blog: Mastering Account-Based Marketing in 2024',
      excerpt: 'Learn the latest ABM strategies that drive 40% higher conversion rates for B2B companies.',
      author: 'Sarah Johnson',
      publishedDate: new Date().toISOString().split('T')[0],
      readTime: '7',
      tags: {
        services: ['Account-Based Marketing'],
        industries: ['SaaS', 'Technology'],
        topics: ['Digital Transformation', 'Customer Experience']
      },
      metrics: {
        views: 1250,
        likes: 45
      },
      reactions: {
        like: 23,
        love: 8,
        celebrate: 5,
        insight: 9
      },
      featuredImage: 'https://placehold.co/600x400',
      content: {
        introduction: 'Account-Based Marketing (ABM) has evolved significantly in 2024, with new technologies and methodologies driving unprecedented success rates. Companies implementing strategic ABM approaches are seeing 40% higher conversion rates compared to traditional marketing methods.',
        sections: [
          {
            heading: 'The Foundation of Successful ABM',
            content: 'Modern ABM success begins with a robust foundation built on three core pillars: strategic account selection, deep customer insights, and personalized engagement strategies. Organizations that excel in ABM invest significant resources in understanding their target accounts business challenges, decision-making processes, and preferred communication channels.'
          },
          {
            heading: 'Technology Stack Integration',
            content: 'The integration of AI-powered tools, intent data platforms, and marketing automation systems has revolutionized how B2B companies execute ABM campaigns. These technologies enable real-time personalization, predictive analytics, and seamless orchestration across multiple touchpoints, resulting in more effective and efficient campaigns.'
          }
        ]
      }
    });
  };

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleTagChange = (tagType, value) => {
    setFormData(prev => ({
      ...prev,
      tags: {
        ...prev.tags,
        [tagType]: prev.tags[tagType].includes(value)
          ? prev.tags[tagType].filter(tag => tag !== value)
          : [...prev.tags[tagType], value]
      }
    }));
  };

  const addSection = () => {
    if (newSection.heading && newSection.content) {
      setFormData(prev => ({
        ...prev,
        content: {
          ...prev.content,
          sections: [...prev.content.sections, { ...newSection }]
        }
      }));
      setNewSection({ heading: '', content: '' });
    }
  };

  const removeSection = (index) => {
    setFormData(prev => ({
      ...prev,
      content: {
        ...prev.content,
        sections: prev.content.sections.filter((_, i) => i !== index)
      }
    }));
  };

  const editSection = (index) => {
    setEditingSectionIndex(index);
  };

  const updateSection = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      content: {
        ...prev.content,
        sections: prev.content.sections.map((section, i) =>
          i === index ? { ...section, [field]: value } : section
        )
      }
    }));
  };

  const saveSection = () => {
    setEditingSectionIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const blogData = {
        id: editingBlog ? editingBlog.id : `blog-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        title: formData.title,
        excerpt: formData.excerpt,
        author: formData.author,
        publishedDate: formData.publishedDate,
        readTime: parseInt(formData.readTime),
        tags: formData.tags,
        metrics: formData.metrics,
        reactions: formData.reactions,
        featuredImage: formData.featuredImage || null,
        content: formData.content,
        method: editingBlog ? 'PUT' : 'POST'
      };
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blogData),
      });

      const responseData = await response.json();

      if (response.ok) {
        await fetchBlogs();
        setShowCreateForm(false);
        setEditingBlog(null);
        resetForm();
        alert('Blog saved successfully!');
      } else {
        alert(`Error: ${responseData.error || 'Failed to save blog'}`);
      }
    } catch (error) {
      alert(`Error saving blog: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (blog) => {
    // Parse JSON fields if they're strings
    const tags = typeof blog.tags === 'string' ? JSON.parse(blog.tags) : blog.tags;
    const metrics = typeof blog.metrics === 'string' ? JSON.parse(blog.metrics) : blog.metrics;
    const reactions = typeof blog.reactions === 'string' ? JSON.parse(blog.reactions) : blog.reactions;
    const content = typeof blog.content === 'string' ? JSON.parse(blog.content) : blog.content;

    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      author: blog.author,
      publishedDate: blog.published_date ? blog.published_date.split('T')[0] : new Date().toISOString().split('T')[0],
      readTime: blog.read_time,
      tags: tags || { services: [], industries: [], topics: [] },
      metrics: metrics || { views: 0, likes: 0 },
      reactions: reactions || { like: 0, love: 0, celebrate: 0, insight: 0 },
      featuredImage: blog.featured_image || '',
      content: content || { introduction: '', sections: [] }
    });
    setEditingBlog(blog);
    setShowCreateForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    setLoading(true);
    try {
      const response = await fetch(`/api/blogs?id=${id}`, { method: 'DELETE' });
      const result = await response.json();
      
      if (response.ok) {
        await fetchBlogs();
        alert('Blog deleted successfully!');
      } else {
        alert(`Error: ${result.error || 'Failed to delete blog'}`);
      }
    } catch (error) {
      alert(`Error deleting blog: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  if (showCreateForm) {
    return (
      <div className="p-6 pt-[120px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingBlog ? 'Edit Blog' : 'Create New Blog'}
          </h2>
          <div className="flex items-center space-x-3">
            {!editingBlog && (
              <button
                type="button"
                onClick={fillSampleData}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Fill Sample Data
              </button>
            )}
            <button
              onClick={() => {
                setShowCreateForm(false);
                setEditingBlog(null);
                resetForm();
              }}
              className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <X size={16} className="mr-2" />
              Cancel
            </button>
          </div>
        </div>


        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          {/* Basic Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter blog title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author *
              </label>
              <input
                type="text"
                required
                value={formData.author}
                onChange={(e) => handleInputChange('author', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Author name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              required
              rows={3}
              value={formData.excerpt}
              onChange={(e) => handleInputChange('excerpt', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Blog excerpt or summary"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Published Date *
              </label>
              <input
                type="date"
                required
                value={formData.publishedDate}
                onChange={(e) => handleInputChange('publishedDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Read Time (minutes) *
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.readTime}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, '');
                  if (numericValue === '' || parseInt(numericValue) > 0) {
                    handleInputChange('readTime', numericValue);
                  }
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="5"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                value={formData.featuredImage}
                onChange={(e) => handleInputChange('featuredImage', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Tags</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Services</label>
              <div className="flex flex-wrap gap-2">
                {serviceOptions.map(service => (
                  <button
                    key={service}
                    type="button"
                    onClick={() => handleTagChange('services', service)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.tags.services.includes(service)
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industries</label>
              <div className="flex flex-wrap gap-2">
                {industryOptions.map(industry => (
                  <button
                    key={industry}
                    type="button"
                    onClick={() => handleTagChange('industries', industry)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.tags.industries.includes(industry)
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Topics</label>
              <div className="flex flex-wrap gap-2">
                {topicOptions.map(topic => (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => handleTagChange('topics', topic)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      formData.tags.topics.includes(topic)
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {topic}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Content</h3>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Introduction
              </label>
              <ReactQuill
                theme="snow"
                value={formData.content.introduction}
                onChange={(value) => handleInputChange('content.introduction', value)}
                modules={quillModules}
                formats={quillFormats}
                placeholder="Write your blog introduction..."
                style={{ height: '150px', marginBottom: '50px' }}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Content Sections
                </label>
              </div>

              {/* Existing Sections */}
              {formData.content.sections.map((section, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg mb-4">
                  {editingSectionIndex === index ? (
                    // Edit mode
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={section.heading}
                        onChange={(e) => updateSection(index, 'heading', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Section heading"
                      />
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Section Content
                        </label>
                        <ReactQuill
                          theme="snow"
                          value={section.content}
                          onChange={(value) => updateSection(index, 'content', value)}
                          modules={quillModules}
                          formats={quillFormats}
                          placeholder="Write section content..."
                          style={{ height: '200px', marginBottom: '50px' }}
                        />
                      </div>
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={saveSection}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Save size={16} className="mr-2 inline" />
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingSectionIndex(null)}
                          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          <X size={16} className="mr-2 inline" />
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    // View mode
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{section.heading}</h4>
                        <div className="flex space-x-2">
                          <button
                            type="button"
                            onClick={() => editSection(index)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeSection(index)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      <div
                        className="text-sm text-gray-600 prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{ __html: section.content.length > 200 ? section.content.substring(0, 200) + '...' : section.content }}
                      />
                    </div>
                  )}
                </div>
              ))}

              {/* Add New Section */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 gap-4">
                  <input
                    type="text"
                    value={newSection.heading}
                    onChange={(e) => setNewSection(prev => ({ ...prev, heading: e.target.value }))}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Section heading"
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Section Content
                    </label>
                    <ReactQuill
                      theme="snow"
                      value={newSection.content}
                      onChange={(value) => setNewSection(prev => ({ ...prev, content: value }))}
                      modules={quillModules}
                      formats={quillFormats}
                      placeholder="Write section content..."
                      style={{ height: '200px', marginBottom: '50px' }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={addSection}
                    disabled={!newSection.heading || !newSection.content}
                    className="self-start px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Add Section
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className="flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              ) : (
                <Save size={16} className="mr-2" />
              )}
              {editingBlog ? 'Update Blog' : 'Create Blog'}
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="p-6 mt-[120px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Blog Management</h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          <Plus size={16} className="mr-2" />
          Create New Blog
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      {/* Blog List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-12">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No blogs found</h3>
            <p className="text-gray-600">
              {searchQuery ? 'No blogs match your search criteria.' : 'Get started by creating your first blog post.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Stats
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBlogs.map((blog) => {
                  // Safe parsing with error handling
                  let metrics = { views: 0, likes: 0 };
                  try {
                    metrics = typeof blog.metrics === 'string' ? JSON.parse(blog.metrics) : (blog.metrics || {});
                  } catch (error) {
                    console.error('Error parsing metrics for blog:', blog.id, error);
                  }

                  return (
                    <tr key={blog.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{blog.title || 'No Title'}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {blog.excerpt ? blog.excerpt.substring(0, 80) + '...' : 'No excerpt'}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{blog.author || 'Unknown'}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={14} className="mr-1" />
                          {blog.published_date ? formatDate(blog.published_date) : 'No date'}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Eye size={14} className="mr-1" />
                            {metrics?.views || 0}
                          </div>
                          <div className="flex items-center">
                            <Heart size={14} className="mr-1" />
                            {metrics?.likes || 0}
                          </div>
                          <div className="flex items-center">
                            <Clock size={14} className="mr-1" />
                            {blog.read_time || 0}m
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-primary hover:text-primary/80"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogManagement;