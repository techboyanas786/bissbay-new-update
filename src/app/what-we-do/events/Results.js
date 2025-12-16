"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUpAnimation } from "../account-based-marketing/animation/CountUpAnimation";


const Results = () => {
  const resultsData = [
    {
      id: 1,
      end: 12,
      title: "Pipeline Growth",
      description: "Faster deal acceleration through event-driven leads.",
      suffix: "+",
    },
    {
      id: 2,
      end: 70,
      title: "Higher Engagement",
      description: "Interactive events deliver stronger audience involvement.",
      suffix: "%",
    },
    {
      id: 3,
      end: 4,
      title: "ROI",
      description: "High-impact events that generate real business growth.",
      suffix: ":1",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="results">
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title !mb-0">
            Key<span className="text-primary"> Metrics</span> That Matter
          </h2>
          <h3 className="my-4 md:my-6">
            Our events deliver measurable results that drive real business
            impact and accelerate growth.
          </h3>
        </motion.div>

        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 ">
        {resultsData.map((item, index) => (
          <div
            key={index}
            className={`card hover:scale-105 backdrop-blur-sm border border-white/10 hover-card text-black fade-in`}
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

export default Results;

