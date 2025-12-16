import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { Calculator } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <CTASection
      title="Marketing Made for Founders Like You"
      subtitle="Let us explore how we can work together to drive meaningful growth and achieve your business goals."
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
