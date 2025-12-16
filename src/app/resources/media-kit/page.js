"use client";
import React, { useState } from 'react'
import MediaKitContact from './MediaKitContact';
import CaseStudiesLanding from '../case-studies/CaseStudiesLanding';

function MediaKit() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleViewWorkClick = () => {
    setShowContactForm(true);
  };

  if (showContactForm) {
    return (
      <div className="md:min-h-screen flex justify-center items-start md:items-center pb-6 md:pb-0 p-4 md:p-0 pt-[115px] md:pt-0">
        <MediaKitContact />
      </div>
    );
  }

  return <CaseStudiesLanding onViewWorkClick={handleViewWorkClick} buttonText="View Our Media Kit" />;
}

export default MediaKit;