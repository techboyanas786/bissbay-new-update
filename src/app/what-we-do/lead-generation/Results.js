"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUpAnimation } from "../account-based-marketing/animation/CountUpAnimation";

const Results = () => {
  const statistics = [
    {
      id: 1,
      value: 30,
      label: "Increase in Sales Conversions",
      description:
        "Stronger lead-to-customer conversion rates.",
      suffix: "%",
    },
    {
      id: 2,
      value: 40,
      label: "Boost in Marketing ROI",
      description: "Enhanced efficiency and returns on marketing investments. ",
      suffix: "%",
    },
    {
      id: 3,
      value: 33,
      label: "Accelerated Sales & Engagement",
      description:
        "Accelerated deal closures with higher buyer engagement.",
      suffix: "%",
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section ref={ref} id="results">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-4 lg:mb-6"
      >
        <h3  >
          Proven Success with BISSBAY
        </h3>

      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
      >
        {statistics.map((stat) => (
          <motion.div
            key={stat.id}
            variants={itemVariants}
            className="bg-white card hover:scale-105 text-black fade-in stat-card rounded-xl hover-card text-center"
          >
            <div className="!mb-4">
              <CountUpAnimation
                className="text-5xl font-bold text-primary"
                start={0}
                end={stat.value}
                suffix={stat.suffix}
              />
            </div>
            <h5 className="text-center mb-2">{stat.label}</h5>
            <p className="text-gray-600 text-center">{stat.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Results;
