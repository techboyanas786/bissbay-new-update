"use client";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { Calculator } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <CTASection
      title="Ready to Connect with Our Audience?"
      subtitle="Transform your sales and marketing strategy with our comprehensive B2B audience insights."
      primaryButton={{
        label: 'Schedule Your Consultation',
        type: 'modal'
      }}
      secondaryButtons={[
        {
          label: 'Request Proposal',
          type: 'modal',
          modalType: 'proposal'
        },
        {
          label: "Your ROI Calculator",
          href: "/resources/roi-calculator",
          target: '_blank',
          icon: (
            <Calculator className="small-icon group-hover:!text-primary !text-white" />
          ),
        },
      ]}
    />
  );
}

export default CTA;
