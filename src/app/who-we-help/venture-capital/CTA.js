import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import { Calculator } from "lucide-react";
import React from "react";

function CTA() {
  return (
    <CTASection
      title="Ready to Transform Your Portfolio ?"
      subtitle="Let us turn your portfolio companies’ potential into measurable growth and maximize your fund’s ROI."
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
