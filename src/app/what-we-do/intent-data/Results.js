"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUpAnimation } from "../account-based-marketing/animation/CountUpAnimation";

const Results = () => {
  const resultsData = [
    {
      id: 1,
      end: 12,
      title: "Searches",
      description:
        "That's how often a B2B buyer researches before talking to a vendor.",
      suffix: "+",
    },
    {
      id: 2,
      end: 70,
      title: "Buying Journey",
      description: "That happens online, without filling out a form.",
      suffix: "%",
    },
    {
      id: 3,
      end: 4,
      title: "Higher engagement",
      description:
        "Intent-driven leads are 4 times more likely to convert.",
      suffix: "x",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });


  return (
    <section ref={ref} id="results">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="section-title !mb-0">
          Why<span className="text-primary"> Intent Data </span>is a
          Game-Changer in B2B
        </h2>
        <h3 className="my-4 md:my-6">
          The B2B buying landscape has fundamentally changed. Here's what the
          data reveals:
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
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
    </section>
  );
};

export default Results;
