"use client";
import CTASection from "@/components/CTASection";
import { Calculator } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <CTASection
      title="Fuel Your Growth with Bissbay"
      subtitle="We help you connect with key decision-makers, generate high-quality leads, and drive real business growth."
      primaryButton={{
        label: "Schedule Your Consultation",
        type: "modal",
      }}
      secondaryButtons={[
        { label: "Request Proposal", href: "/resources/request-proposal" },
        {
          label: "Your ROI Calculator",
          href: "/resources/roi-calculator",
          icon: (
            <Calculator className="small-icon group-hover:!text-primary !text-white" />
          ),
        },
      ]}
    />
  );
}

export default CTA;