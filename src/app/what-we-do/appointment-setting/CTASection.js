"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const ASCTASection = () => {
 

  return (
    <CTASection
      title="More meetings. More deals. More revenue."
      subtitle="Let us power your pipeline with intent-driven, qualified prospects."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Appointment Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default ASCTASection;