"use client";
import CTASection from '@/components/CTASection';
import React from 'react';

const ABMCTASection = () => {
  return (
    <CTASection
      title="Stop Chasing Leads. Start Closing Accounts."
      subtitle="Let's build an ABM strategy that delivers real, measurable growth."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true },
        { label: 'ABM Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default ABMCTASection;