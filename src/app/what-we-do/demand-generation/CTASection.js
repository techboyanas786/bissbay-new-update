"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const DGCTASection = () => {
 

  return (
    <CTASection
      title="Fuel Demand. Fill Pipeline. Close Faster."
      subtitle="Let us Build a Demand Strategy That Delivers"
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Demand Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default DGCTASection;