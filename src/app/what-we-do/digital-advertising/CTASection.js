"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const DACTASection = () => {
 

  return (
    <CTASection
      title="Where Data Meets Digital Mastery."
      subtitle="Let us build a strategy that drives real revenue growth."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Digital Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default DACTASection;