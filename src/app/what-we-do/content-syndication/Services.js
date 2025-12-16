import React, { useRef } from "react";
import { Target, BarChart3, Rocket } from "lucide-react";
import Image from "next/image";

const services = [
  {
    icon: (
      (<Image
        src="/Icons/TARGET.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />)
    ),
    title: "ABM Syndication",
    subtitle: "Convert High-Value Accounts",
    features: [
      "Direct-to-Decision-Maker Access",
      "Intent-Powered Targeting",
      "Multi-Touch Journeys",
    ],
    description:
      "Deliver whitepapers, webinars, and case studies to key stakeholders. Focus on BANT/SQL-validated accounts ready to buy.",
  },
  {
    icon: (
      (<Image
        src="/Icons/INTELLIGENCE_AI.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />)
    ),
    title: "Market Intelligence",
    subtitle: "Outsmart, Don't Outspend",
    features: ["Competitor Benchmarks", "Third-Party Validation"],
    description:
      "Uncover weaknesses in rival strategies with deep data insights. Establish industry authority with research-backed content.",
  },
  {
    icon: (<Image
      src="/Icons/Faster.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />),
    title: "Go-To-Market Amplification",
    subtitle: "Launch With Impact",
    features: [
      "Pain-Point Driven Campaigns",
      "Omnichannel Blitz",
      "ROI Tracking",
    ],
    description:
      "Measure success across the buyer journey. Choose buyers across browsers, LinkedIn, email workflows, and real-time dashboards showing real-time impact.",
  },
];

const Services = () => {
  return (
    <section>
      <div className="text-center">
        <h2 className="section-title !mb-0 text-button fade-in">
          Strategic Services That
          <span className="text-primary"> Outperform the Competition</span>
        </h2>
        <h3 className="my-4 lg:my-6">
          Proven strategies that deliver measurable results for your business
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            subtitle={service.subtitle}
            features={service.features}
            description={service.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({
  icon,
  title,
  subtitle,
  features,
  description,
}) => {
  return (
    <div
      className={`card hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in `}
    >
      <div className="flex flex-row w-full items-center justify-start mb-2 gap-3">
        <div>{icon}</div>
        <h5 className="text-2xl font-bold">{title}</h5>
      </div>

      <p className="mb-4 !font-semibold">{subtitle}</p>

      <ul  >
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 mb-2">
            <div className="bullet-point !bg-[#1f2937]"></div>
            <p className="!font-medium !text-[#1f2937]">{feature}</p>
          </li>
        ))}
      </ul>

      <p  >{description}</p>
    </div>
  );
};

export default Services;
