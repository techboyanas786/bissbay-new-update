"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const ECTASection = () => {
 

  return (
    <CTASection
      title="More Guests. Real Engagement. More Results."
      subtitle="Let us craft an event strategy that drives engagement, pipeline, and revenue."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Event Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default ECTASection;