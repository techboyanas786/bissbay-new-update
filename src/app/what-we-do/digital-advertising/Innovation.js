"use client";
import React from "react";
import { Brain, Smartphone, Globe } from "lucide-react";
import Image from "next/image";
function Innovation() {
  const innovations = [
    {
      title: "AI-Generated Ads",
      description: "Experimenting with AI filters and real-time optimizations.",
      icon: (
        <Image
          src="/Icons/Artificial-Intelligence.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
    {
      title: "Voice Search Optimization",
      description: "Capturing rising demand for voice-activated searches",
      icon: (
        <Image
          src="/Icons/voice.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
    {
      title: "Sustainability Marketing",
      description:
        "Engaging eco-conscious consumers with data-driven green campaigns.",
      icon: (
        <Image
          src="/Icons/Earth-Globe.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
  ];
  return (
    <section id="innovation">
      <div className={`text-center transition-all duration-800 transform `}>
        <h2 className="section-title !mb-0">
          <span className="text-primary">Innovation</span> at Our Core
        </h2>
        <h3 className="my-4 md:my-6">
          We don't just follow trends, we create them.
          <br /> Explore cutting-edge technologies that drive tomorrow's
          marketing success.
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
        {innovations.map((innovation, index) => {
          const Icon = innovation.icon;
          return (
            <div key={index} className={`metric-card hover-card`}>
              <div className="flex flex-row w-full items-center justify-start gap-2 mb-2">
                {innovation.icon}
                <h5 className="text-2xl font-bold ">{innovation.title}</h5>
              </div>

              <p className="text-gray-600">{innovation.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Innovation;
