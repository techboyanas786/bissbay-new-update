import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { Calculator } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <CTASection
      title="Ready to Get Serious About Enterprise Marketing?"
      subtitle="Let us turn strategy into measurable success."
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
