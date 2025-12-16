import React from 'react'
import { ChevronRight, Home } from 'lucide-react'

function Breadcrumb({ selectedService, selectedIndustry, selectedTopic, blogTitle, onNavigate }) {
  const breadcrumbItems = [
    { label: 'Blog', onClick: () => onNavigate(null, 'Industry', 'Topics') }
  ];

  if (selectedService) {
    breadcrumbItems.push({
      label: selectedService,
      onClick: () => onNavigate(selectedService, 'Industry', 'Topics')
    });
  } else if (selectedIndustry && selectedIndustry !== 'Industry') {
    breadcrumbItems.push({
      label: selectedIndustry,
      onClick: () => onNavigate(null, selectedIndustry, 'Topics')
    });
  } else if (selectedTopic && selectedTopic !== 'Topics') {
    breadcrumbItems.push({
      label: selectedTopic,
      onClick: () => onNavigate(null, 'Industry', selectedTopic)
    });
  }

  // Add blog title if provided (for individual blog pages)
  if (blogTitle) {
    breadcrumbItems.push({
      label: blogTitle,
      onClick: null // No click handler for current page
    });
  }

  return (
    <div className="flex items-center space-x-2 text-base">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRight size={14} className="text-gray-400" />}
          {index === 0 ? (
            <button
              onClick={item.onClick}
              className="flex items-center text-gray-500 hover:text-orange-500 transition-colors"
            >
              <Home size={14} className="mr-1" />
              {item.label}
            </button>
          ) : index === breadcrumbItems.length - 1 || !item.onClick ? (
            <span className="text-gray-800 font-medium max-w-md truncate" title={item.label}>
              {item.label}
            </span>
          ) : (
            <button
              onClick={item.onClick}
              className="text-gray-500 hover:text-orange-500 transition-colors"
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumb