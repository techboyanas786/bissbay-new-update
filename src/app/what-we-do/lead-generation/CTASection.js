"use client";
import React from 'react';
import CTASection from '@/components/CTASection';


const IDETASection = () => {
 

  return (
    <CTASection
      title="High-Quality Leads. Faster Sales. Measurable Growth"
      subtitle="We don’t just fill your funnel, we fuel your revenue growth."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true  },
        { label: 'Lead Resources', href: '/resources/abm', disabled: true  }
      ]}
    />
  );
};

export default IDETASection;