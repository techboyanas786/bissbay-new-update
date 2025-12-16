"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CountUpAnimation } from '../account-based-marketing/animation/CountUpAnimation';

const Results = () => {
  const statistics = [
    {
      id: 1,
      value: 300,
      label: "Higher ROI",
      description: "vs. other marketing channels",
      suffix: '%'
    },
    {
      id: 2,
      value: 99,
      label: "Deliverability",
      description: "emails reaching inbox",
      suffix: '%'

    },
    {
      id: 3,
      value: 2,
      label: "Engagement",
      description: "compared to industry average",
      suffix: 'x'
    },
    {
      id: 4,
      value: 20,
      label: "Conversion Lift",
      description: "across all campaigns",
      suffix: '%+'

    }
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="results">
      <div ref={ref}>
        <div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="section-title !mb-0">
            Proven <span className="text-primary">Results</span>
          </h2>
          <h3 className="my-4 md:my-6">
            Our clients consistently experience industry-leading performance metrics
            that translate directly to business growth.
          </h3>
        </div>

        <div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
        >
          {statistics.map((stat) => (
            <div
              key={stat.id}
              variants={itemVariants}
              className="text-center card hover-card hover:scale-105"
            >
              <div className='mb-4'>
                <CountUpAnimation className='text-5xl font-bold text-primary' start={0} end={stat.value} suffix={stat.suffix} />
              </div>
              <h5 className="mb-2">{stat.label}</h5>
              <p  >{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;