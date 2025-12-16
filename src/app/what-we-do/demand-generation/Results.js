import React from "react";
import { CountUpAnimation } from "../account-based-marketing/animation/CountUpAnimation";

const Results = () => {
  const resultsData = [
    {
      end: 113,
      suffix: "M+",
      label: "First-party profiles",
      description: "Trusted audience data at unmatched scale",
    },
    {
      end: 80,
      suffix: "M+",
      label: "Intent signals",
      description: "Actionable insights to capture real buyer intent",
    },
    {
      end: 30,
      suffix: "%",
      label: "Faster pipeline velocity",
      description: "Accelerating deals from first touch to close",
    },
    {
      end: 450,
      suffix: "K+",
      label: "Global publishers",
      description: "Expansive reach across premium channels",
    },
  ];

  return (
    <section>
      <div className="text-center">
        <h2 className="section-title !mb-0">
          <span className="text-primary">Proven Results, </span> Global Impact
        </h2>
        <h3 className="my-4 md:my-6">
          Our data-driven approach delivers measurable outcomes for businesses
          worldwide.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {resultsData.map((item, index) => (
          <div
            key={index}
            className={`card hover:scale-105 backdrop-blur-sm border border-white/10 hover-card text-black fade-in ${item.delay}`}
          >
            <div className="flex justify-center mb-4">
              <div className="text-center">
                <CountUpAnimation
                  end={item.end}
                  duration={2}
                  suffix={item.suffix}
                  className="text-5xl font-bold text-primary"
                />
              </div>
            </div>
            <h5 className="text-xl font-bold text-center mb-2">
              {item.label}
            </h5>
            <p className="text-gray-600 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Results;
