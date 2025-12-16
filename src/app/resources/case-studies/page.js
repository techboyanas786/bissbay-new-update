"use client";
import React, { useState } from 'react'
import CaseStudiesContact from './caseStudiesContact';
import CaseStudiesLanding from './CaseStudiesLanding';

function MediaKit() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleViewWorkClick = () => {
    setShowContactForm(true);
  };

  if (showContactForm) {
    return (
      <div className="md:min-h-screen flex justify-center items-start md:items-center pb-6 md:pb-0 p-4 md:p-0 pt-[115px] md:pt-0">
        <CaseStudiesContact />
      </div>
    );
  }

  return <CaseStudiesLanding onViewWorkClick={handleViewWorkClick} />;
}

export default MediaKit;