import React from "react";
import {
  ChevronRight,
  Database,
  Filter,
  LineChart,
  RefreshCw,
} from "lucide-react";
import Button from "@/components/Button";
import Image from "next/image";


const solutions = [
  {
    id: "enrichment",
    title: "Data Enrichment",
    subtitle: "Bring Your Customers to Life",
    tagline: "Enhance, Expand, and Activate",
    description:
      "Go beyond basic demographics with BISSBAY's AI-powered enrichment tools. Merge your first-party data with proprietary intent insights and third-party sources to build a 360° view of your audience.",
    features: [
      "Hyper-Personalization: Layer behavioral, transactional, and intent data to craft tailored campaigns.",
      "Intent-Driven Targeting: Track 80K+ weekly engagements across 30 industries to pinpoint buyers ready to act.",
      "Golden Customer Records: Unify data from CRM, web activity, and external sources into a single, actionable profile.",
    ],
    keyFeatures:
      "30+ intent segments | 1M+ monthly unique visitors | Privacy-first compliance",
    icon: (
      <Image
        src="/Icons/Brainwhite.svg"
        alt="Define Goals"
        className="flex-shrink-0"
        width={36}
        height={36}
      />
    ),
  },
  {
    id: "cleansing",
    title: "Data Cleansing & Verification",
    subtitle: "Trust Every Field. Convert with Confidence.",
    tagline: "Eliminate Noise, Elevate Confidence",
    description:
      "Dirty data costs time, money, and opportunities. BISSBAY's rigorous cleansing processes ensure your databases are error-free, compliant, and ready to perform.",
    features: [
      "Hygiene & Deduplication: Remove duplicates, correct inconsistencies, and standardize formats.",
      "Real-Time Validation: Verify contact details, firmographics, and technographics on demand.",
      "Seamless Integration: Sync clean data across MAP, CRM, and analytics platforms effortlessly.",
    ],
    keyFeatures:
      "99% data accuracy | 40% reduction in wasted spend | Improved lead-to-revenue conversion",
    icon: (
      <Image
        src="/Icons/gearwhite.svg"
        alt="Define Goals"
        className="flex-shrink-0"
        width={36}
        height={36}
      />
    ),
  },
  {
    id: "analysis",
    title: "Data Analysis",
    subtitle: "Insights at the Speed of Business",
    tagline: "Decipher, Decide, Dominate",
    description:
      "Turn raw data into revenue with BISSBAY's advanced analytics. From predictive modelling to cross-channel optimization, we uncover hidden opportunities and drive ROI.",
    features: [
      "Predictive Intelligence: Forecast trends, optimize budgets, and prioritize high-value accounts.",
      "Optimization Engines: Automate data-driven decisions for maximum ROI across channels.",
      "Custom Dashboards: Surface actionable insights through intuitive, real-time visualizations.",
      "Audience Insights: Identify buyer behavior patterns to refine targeting and engagement.",
    ],
    keyFeatures:
      "Audience segmentation | Media mix modelling | Sales forecasting",
    icon: (
      <Image
        src="/Icons/DataAnalysisWhite.svg"
        alt="Define Goals"
        className="flex-shrink-0"
        width={36}
        height={36}
      />
    ),
  },
  {
    id: "list-building",
    title: "B2B List Building",
    subtitle: "The Right Companies. The Right People. Ready to Engage.",
    tagline: "Built with compliance, delivered with precision.",
    description:
      "We build high-performance lists combining verified company accounts with the right decision-makers. Whether you're scaling outbound, running ABM, or launching campaigns, our custom data gives you a competitive edge.",
    features: [
      "Account + Contact Intelligence: Get the exact companies and roles aligned to your ICP (Ideal Customer Profile).",
      "Advanced Filters: Target by industry, size, location, revenue, or installed tech",
      "Intent-Powered Lists: Focus on businesses actively researching your solutions",
      "Campaign-Ready Data: Fully verified and compliant ready for email, phone, LinkedIn, or paid media",
    ],
    keyFeatures: "5M+ companies | 113M+ global contacts",
    icon: (
      <Image
        src="/Icons/listbuilding.svg"
        alt="Define Goals"
        className="flex-shrink-0"
        width={36}
        height={36}
      />
    ),
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions">
      <div className="text-center animate-fade-in">
        <h2 className="section-title !mb-0">
          <span className="text-primary">Database </span> Solutions
          {/* <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-primary to-orange-600 rounded-full"></div> */}
        </h2>
        <h3 className="my-4 md:my-6">
          Our comprehensive suite of data services transforms fragmented
          information into actionable insights,
          <br />
          driving personalized engagement, operational efficiency, and
          measurable results.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="animate-fade-in"
            style={{
              animationDelay: `${solutions.indexOf(solution) * 0.1}s`,
            }}
          >
            <div className="border-none shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 bg-white rounded-xl h-full">
              <div className="bg-primary text-white p-4 md:p-6">
                <div className="flex flex-row items-center justify-center w-fit mx-auto min-h-12 gap-2 md:gap-5 px-2 md:px-4 transform transition-transform duration-300 hover:scale-105 bg-white/20  rounded-full">
                  {React.cloneElement(solution.icon, {
                    className: "medium-icon !text-white",
                  })}
                  <h5 className="text-3xl !text-white text-center font-bold">
                    {solution.title}
                  </h5>
                </div>

                <h4 className="!text-white !text-center mt-4 md:mt-6">
                  {solution.subtitle}
                </h4>
              </div>

              <div className="p-2 md:p-6">
                <p className="text-gray-600 mb-4 md:mb-6">
                  {solution.description}
                </p>

                <ul className="space-y-4">
                  {solution.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start group hover:scale-103 hover:shadow-lg duration-500 bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      <ChevronRight className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
                      <p className="ml-2 text-gray-600">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-4 md:p-6 bg-gray-50 rounded-lg border-l-6 border-primary hover:bg-gray-100 transition-colors duration-300">
                  <p className="font-semibold">Key Features:</p>
                  <p className="text-gray-600">{solution.keyFeatures}</p>
                </div>
                <p className="my-4 md:my-6 border-2 border-white hover:border-primary inline-block !font-semibold !text-white hover:!text-primary hover:!bg-white transition-all duration-300 hover:scale-102 bg-primary w-full text-center py-2 rounded-full">
                  {solution.tagline}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="!font-semibold text-center !text-xl mt-4 lg:mt-6">We don’t just clean or analyze data; we transform it into your competitive edge.<br /> From refining CRMs to launching targeted campaigns or ensuring compliance, our scalable solutions deliver results.</p>
    </section>
  );
};

export default SolutionsSection;
