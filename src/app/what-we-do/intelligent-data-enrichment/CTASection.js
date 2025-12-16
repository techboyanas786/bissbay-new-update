
"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const IDETASection = () => {
 

  return (
    <CTASection
      title="Where Data Meets Destiny."
      subtitle="Let's transform your data into a revenue engine and accelerate success with BISSBAY"
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Intelligent Data Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default IDETASection;