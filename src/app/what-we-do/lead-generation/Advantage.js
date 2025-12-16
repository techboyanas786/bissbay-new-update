import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Advantages = () => {
  const advantages = [
    {
      icon: () => (
        <Image
          src="/Icons/Faster.svg"
          alt="Define Goals"
          className="flex-shrink-0 mx-auto"
          width={36}
          height={36}
        />
      ),
      title: "Smarter Targeting. Faster Conversions.",
      description:
        "Track buyer behavior, market shifts, and campaign performance across multiple data sources with precision.",
      color: "from-yellow-400 to-orange-500",
      features: [
        "Real-time tracking",
        "Multi-source data",
        "Predictive analytics",
      ],
    },
    {
      icon: () => (
        <Image
          src="/Icons/MULTICHANNEL.svg"
          alt="Define Goals"
          className="flex-shrink-0 mx-auto"
          width={36}
          height={36}
        />
      ),
      title: "Omnichannel Reach. Maximum Impact.",
      description:
        "From programmatic ads to LinkedIn, podcasts, and connected TV engage buyers wherever they are.",
      color: "from-blue-400 to-purple-500",
      features: [
        "Programmatic advertising",
        "Social media reach",
        "Connected TV",
      ],
    },
    {
      icon: () => (
        <Image
          src="/Icons/bulb.svg"
          alt="Define Goals"
          className="flex-shrink-0 mx-auto"
          width={36}
          height={36}
        />
      ),
      title: "Brand + Demand Synergy",
      description:
        "We don't just generate leads, we build brand authority and nurture trust across the buyer’s journey.",
      color: "from-green-400 to-blue-500",
      features: ["Brand building", "Authority positioning", "Journey mapping"],
    },
    {
      icon: () => (
        <Image
          src="/Icons/ROI.svg"
          alt="Define Goals"
          className="flex-shrink-0 mx-auto"
          width={36}
          height={36}
        />
      ),
      title: "Measurable ROI.",
      description:
        "Transparent analytics, flexible pricing, and rapid campaign optimization ensure measurable growth from day one.",
      color: "from-purple-400 to-pink-500",
      features: [
        "Transparent reporting",
        "Flexible pricing",
        "Rapid optimization",
      ],
    },
  ];

  return (
    <section>
      {/* Section Header */}
      <div className="text-center animate-fade-in-up group">
        <h2 className="section-title !mb-0 text-button fade-in">
          The
          <span className="group-hover:text-primary"> BISSBAY </span>
          Advantage
        </h2>
        <h3 className="my-4 md:my-6">
          Advanced technology and proven strategies that deliver measurable
          growth
        </h3>
      </div>

      {/* Advantages Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
        {advantages.map((advantage, index) => (
          <div
            key={index}
            className={`group relative metric-card`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="flex flex-row items-center justify-start gap-2 mb-4">
              <advantage.icon className="mx-auto mb-2 medium-icon" />

              <h5>{advantage.title}</h5>
            </div>

            <p className="text-gray-600 mb-4  font-quicksand">
              {advantage.description}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2">
              {advantage.features.map((feature, featureIndex) => (
                <p
                  key={featureIndex}
                  className="inline-flex items-center p-2 rounded-full !text-sm font-semibold bg-primary/10 text-gray-600 group-hover:bg-brand-orange/10 group-hover:text-brand-orange transition-colors duration-300 font-quicksand"
                >
                  {feature}
                </p>
              ))}
            </div>

            {/* Hover Effect Lines */}
            <div className="absolute top-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-99 transition-transform duration-500 origin-left"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
