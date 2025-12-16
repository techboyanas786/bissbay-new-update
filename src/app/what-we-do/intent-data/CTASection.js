"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const IDETASection = () => {
 

  return (
    <CTASection
      title="Skip Cold Leads. Reach Real Buyers, Right on Time."
      subtitle="Ready to Find and Close More High-Intent Buyers?"
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Intent Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default IDETASection;