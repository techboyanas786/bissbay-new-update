import React from "react";
import { Target, Calendar, TrendingUp, Zap, BarChart3 } from "lucide-react";
import Image from "next/image";

const Process = () => {
  const steps = [
    {
      icon: () => (
        <Image
          src="/Icons/DEFINE.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Define Goals",
      description: "Understand objectives & audience",
      details: [
        "Stakeholder alignment",
        "Success metrics",
        "Audience profiling",
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
      title: "Plan & Promote",
      description: "Custom registration & branded marketing",
      details: ["Event strategy", "Marketing campaigns", "Registration setup"],
    },
    {
      icon: () => (
        <Image
          src="/Icons/sales.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Engage More",
      description: "Multi-channel out-reach for maximum participation",
      details: ["Email campaigns", "Social media", "Telemarketing"],
    },
    {
      icon: () => (
        <Image
          src="/Icons/Personalization.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Swift Execution",
      description: "End-to-end logistics & real-time coordination",
      details: ["On-site management", "Technical support", "Live coordination"],
    },
    {
      icon: () => (
        <Image
          src="/Icons/SUCCESS.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Refine & Win",
      description: "Track engagement, pipeline growth & ROI",
      details: ["Performance analytics", "Lead tracking", "ROI reporting"],
    },
  ];
  return (
    <section id="process">
      <div className="text-center animate-fade-in">
        <h2 className="section-title !mb-0">
          Our 5-Step Approach to{" "}
          <span className="text-primary">Event Success</span>
        </h2>
        <h3 className="my-4 md:my-6">
          Our proven methodology ensures every event delivers maximum impact
          and measurable results.
        </h3>
      </div>

      <div className="relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white min-h-auto p-6 card hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in">
                  <div className="flex justify-start md:justify-center gap-3 relative mb-3 md:mb-4">
                    <Icon className="w-9 h-9 text-primary" />
                    <h5>{step.title}</h5>
                  </div>

                  <p className="!font-medium mb-3 md:mb-4">{step.description}</p>

                  <ul className="space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        <p>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
