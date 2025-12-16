"use client";
import { CheckCircle } from "lucide-react";
import React from "react";

function Compliance() {
  const ComplianceItem = ({ title, description, delay = 0 }) => {
    return (
      <div
        className="flex hover-card items-start space-x-4 p-6 hover:!border-bissbay-green hover:scale-105 rounded-xl transition-all duration-300 group"
        style={{ animationDelay: `${delay}ms` }}
      >
        <div className="flex-shrink-0 mt-1">
          <CheckCircle className="medium-icon !text-bissbay-green" />
        </div>
        <div>
          <h5 className="!mb-2">
            {title}
          </h5>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <section className="p-12  relative overflow-hidden">
      <div className="relative z-10 container mx-auto">
        <div className="p-8 rounded-2xl hover-card  shadow-xl ">
        <div className="text-center fade-on-scroll">
          <h2 className="section-title !mb-0">
            Regulatory <span className="text-bissbay-green">Compliance</span>
          </h2>
          <h3 className="my-4 md:my-6">
            We ensure compliance with international laws and regulations, guiding practices to protect privacy and security across jurisdictions.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div animation="slide" delay={0}>
            <ComplianceItem
              title="CAN-SPAM Act"
              description="We comply with U.S. regulations governing commercial email practices, ensuring transparent and ethical communication."
              delay={0}
            />
          </div>

          <div animation="slide" delay={200}>
            <ComplianceItem
              title="CASL (Canada's Anti-Spam Legislation)"
              description="We adhere to Canada's Anti-Spam Legislation for electronic communications, maintaining trust and compliance."
              delay={200}
            />
          </div>

          <div animation="slide" delay={400}>
            <ComplianceItem
              title="CCPA and CPRA"
              description="We are committed to the privacy rights of California residents, ensuring compliance with California privacy laws."
              delay={400}
            />
          </div>

          <div animation="slide" delay={600}>
            <ComplianceItem
              title="GDPR (General Data Protection Regulation)"
              description="We follow GDPR to protect the privacy and personal data of individuals within the European Union and European Economic Area."
              delay={600}
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Compliance;
