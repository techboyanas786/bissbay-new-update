"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const EMCTASection = () => {
 

  return (
    <CTASection
      title="Where Data Meets Creativity, Emails Drive Revenue."
      subtitle="Let BISSBAY transform your email marketing into a revenue-driving machine."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Email Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default EMCTASection;