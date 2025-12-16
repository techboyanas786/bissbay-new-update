"use client";
import React, { useEffect, useRef } from "react";
import { CountUpAnimation } from "../account-based-marketing/animation/CountUpAnimation";

const resultsData = [
  {
    end: 30,
    suffix: "%",
    title: "Higher Lead Conversion",
    description: "For data-driven ads using AI-powered targeting.",
    delay: "delay-1",
  },
  {
    end: 2.5,
    suffix: "x",
    title: "ROAS Improvement",
    description: "For e-commerce brands leveraging retail media.",
    delay: "delay-2",
  },
  {
    end: 40,
    suffix: "%",
    title: "Faster Sales Cycles",
    description: "For B2B SaaS clients with intent-led ABM campaigns.",
    delay: "delay-3",
  },
];

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

  return (
    <section className="bg-white text-white relative" ref={sectionRef}>
      <div className="max-w-8xl mx-auto">
        <div className={`text-center transition-all duration-800 transform`}>
          <h2 className="section-title !mb-0">
            <span className="text-primary">Proven Results: </span>Real Impact, Real ROI
          </h2>
          <h3 className="my-4 md:my-6">
            Our data-driven strategies deliver measurable growth across
            industries and channels.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {resultsData.map((item, index) => (
            <div
              key={index}
              className={`hover:scale-105 card backdrop-blur-sm border border-white/10 hover-card text-black fade-in ${item.delay}`}
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
                {item.title}
              </h5>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
