import React from "react";
import {
  Filter,
  Target,
  Settings,
  Database,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";
import Image from "next/image";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: () => (
        <Image
          src="/Icons/Insights_Analyzed.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Full-Funnel Engagement",
      items: [
        {
          stage: "Top-of-Funnel",
          description:
            "Content syndication, whitepapers, and virtual events to generate awareness",
        },
        {
          stage: "Mid-Funnel",
          description:
            "Webinars, ABM, and email nurture sequences to drive engagement",
        },
        {
          stage: "Bottom-of-Funnel",
          description:
            "BANT-qualified leads and intent-driven retargeting to close deals",
        },
      ],
    },
    {
      icon: () => (
        <Image
          src="/Icons/INTENT.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Intent-Based Content Syndication",
      items: [
        {
          stage: "Active Buyers",
          description:
            "Get in front of buyers already searching for solutions in your industry",
        },
        {
          stage: "AI-Powered Insights",
          description:
            "Uncover pain points, content consumption trends, and buying intent",
        },
        {
          stage: "Real-Time Tracking",
          description:
            "Monitor buyer behavior and engagement across multiple touchpoints",
        },
      ],
    },
    {
      icon: () => (
        <Image
          src="/Icons/Technology.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Custom Lead Programs",
      items: [
        {
          stage: "Advanced Targeting",
          description: "Firmographics, technographics, and behavioral insights",
        },
        {
          stage: "Multi-Touch Engagement",
          description:
            "Single, double, or triple-touch strategies to move leads through funnel",
        },
        {
          stage: "Account Based Generation",
          description: "Hyper-personalized targeting for high-value accounts",
        },
      ],
    },
    {
      icon: () => (
        <Image
          src="/Icons/CULTIVATING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Data Enrichment & Quality Assurance",
      items: [
        {
          stage: "Company Intelligence",
          description:
            "Deep insights into technographics, budgets, and buying signals",
        },
        {
          stage: "Multi-Point Verification",
          description:
            "Ensuring accurate emails, roles, and compliance with privacy laws",
        },
        {
          stage: "Lead Scoring",
          description:
            "AI-driven lead scoring to focus on high-converting opportunities",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="text-center mb-4 md:mb-12 animate-fade-in">
        <h2 className="section-title !mb-0">
          BISSBAY<span className="text-primary"> Lead Generation </span>
          Solutions
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="card hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4 md:mb-4">
              <solution.icon />
              <h5  >{solution.title}</h5>
            </div>

            <div className="space-y-2">
              {solution.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white rounded-xl hover-card p-0 md:p-4 border border-gray-300 hover:shadow-lg hover:scale-102 transition-transform duration-300 ease-in-out"
                >
                  <h5 className="font-semibold !text-[#5c6371] mb-2">
                    {item.stage}:
                  </h5>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
