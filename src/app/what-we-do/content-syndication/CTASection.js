"use client";
import React from 'react';
import CTASection from '@/components/CTASection';

const CSCTASection = () => {
  return (
    <CTASection
      title="Deliver content where decisions happen."
      subtitle="Let us Build Your Winning Content Strategy"
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        { label: 'Client Testimonials', href: '/testimonials', disabled: true },
        { label: 'Content Resources', href: '/resources/abm', disabled: true }
      ]}
    />
  );
};

export default CSCTASection;