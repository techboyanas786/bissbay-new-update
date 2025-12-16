import React, { useEffect, useRef, useState } from "react";
import { CountUpAnimation } from "./animation/CountUpAnimation";
const ResultsSection = () => {
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animated");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements =
      sectionRef.current?.querySelectorAll(".animate-on-scroll") || [];
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);
  const resultsData = [
    {
      end: 3,
      suffix: "x",
      title: "Higher Engagement",
      description:
        "Triple the engagement from key decision-makers in targeted accounts",
      delay: "delay-1",
    },
    {
      end: 50,
      suffix: "%",
      title: "Faster Pipeline",
      description:
        "Fifty percent faster pipeline progression versus traditional methods",
      delay: "delay-2",
    },
    {
      end: 70,
      suffix: "%",
      title: "Client Retention",
      description:
        "Clients stay longer through scalable ABM relationship strategies",
      delay: "delay-3",
    },
  ];

  const benefits = [
    {
      value: "10+",
      label: "Years of Proven B2B ABM Success",
      description: "We drive exponential growth, not just strategies.",
    },
    {
      value: "Full-Funnel",
      label: "Ownership",
      description: "From awareness to revenue, we drive outcomes.",
    },
    {
      value: "Seamless",
      label: "Tech Integration",
      description: "Plug into Salesforce, HubSpot, and more.",
    },
    {
      value: "Creative",
      label: "Meets Data",
      description: "Insight-driven storytelling that converts.",
    },
  ];

  const results = [
    {
      value: 3,
      suffix: "x",
      label:
        "higher engagement in key decision-maker roles for targeted accounts.",
    },
    {
      value: 50,
      suffix: "%",
      label: "faster pipeline progression vs. traditional marketing.",
    },
    {
      value: 70,
      suffix: "%",
      label: "client retention through post-sale ABM strategies.",
    },
  ];

  return (
    <section
      id="results"
      className="results-section relative"
      ref={sectionRef}
    >
      <div className="relative z-10">
        <div className="text-center">
          <h2 className="section-title !mb-0 text-[#171717] animate-on-scroll">
            Why Choose <span className="text-primary">BISSBAY</span>
          </h2>
          <h3 className="my-6 lg:block hidden" style={{ animationDelay: "0.2s" }}>
            We don't just implement ABM we transform your approach to B2B growth
          </h3>
          <div className="my-4 lg:my-6 lg:hidden block">
            <h3 style={{ animationDelay: "0.2s" }}>
            We don't just implement ABM
          </h3>
          <h3 className="lg:hidden block" style={{ animationDelay: "0.2s" }}>
            We transform your approach to B2B
            growth
          </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-4 sm:mb-10 lg:mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="card relative z-10 fade-in border-0 md:border-white md:border-2 md:hover:!border-[#FF4200] transition-all duration-300 delay-1 shadow-lg md:shadow-none"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="md:block hidden">
                <h5 className="!text-primary text-2xl font-bold mb-2">
                  {benefit.value}
                </h5>
                <h5 className="mb-2">{benefit.label}</h5>
              </div>
              <div className="md:hidden block">
                <h5 className="!text-primary text-2xl font-bold mb-2 inline">
                  {benefit.value}{" "}
                </h5>
                <h5 className="mb-2 inline">{benefit.label}</h5>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-8xl pt-4 sm:py-0 mx-auto">
          <div className="text-center mb-4 lg:mb-6">
            <h2 className="section-title !mb-4 md:!mb-8"><span className="text-primary"> Results </span>That Speak for Themselves</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ml-2">
            {resultsData.map((item, index) => (
              <div
                key={index}
                className={`card backdrop-blur-sm bg-white rounded-xl p-6 hover-card hover:scale-105 text-black fade-in ${item.delay}`}
                
              >
                <div className="flex justify-center mb-4 lg:b-6">
                  <div className="text-center">
                    <CountUpAnimation
                      end={item.end}
                      duration={2}
                      className="text-5xl font-bold text-primary"
                    />
                    <span className="text-5xl font-bold text-primary">
                      {item.suffix}
                    </span>
                  </div>
                </div>
                <h5 className="text-center mb-2">{item.title}</h5>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
