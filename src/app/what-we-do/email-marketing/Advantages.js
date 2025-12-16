"use client";
import { Brain, Lightbulb, Mail } from "lucide-react";
import Image from "next/image";

const AdvantageSection = () => {
  return (
    <section>
      <div className="text-center animate-fade-in">
        <h2 className="section-title !mb-0">
          The BISSBAY Advantage:{" "}
          <span className="text-primary">
            Science Meets Creativity
          </span>
        </h2>
        <h3 className="my-4 md:my-6">
          Our approach leverages intent data and AI to optimize performance at every stage.
        </h3>
      </div>

      <div className="grid  grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="w-full">
          <div className="flex items-center justify-center gap-3 mb-4 h-8">

            <Image
              src="/Icons/Database.svg"
              alt="Revenue Stagnation"
              className="flex-shrink-0"
              width={36}
              height={36}
            />

            <h5  >
              Audience and Data Precision
            </h5>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "AI-Powered Segmentation & Timing",
                description:
                  "Intelligently send emails when recipients are most likely to act.",
              },
              {
                title: "Behavioral Journey Mapping",
                description:
                  "Visualize and understand how your audience interacts across channels to tailor email strategies with precision.",
              },
              {
                title: "Predictive A/B Testing",
                description:
                  "AI continuously optimizes subject lines, CTAs, and content for the highest conversions.",
              },
              {
                title: "Real-Time Intent Tracking",
                description:
                  "Identify high-intent buyers based on behavioral data.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center !p-4 md:!p-6 gap-4 card hover-card h-auto lg:h-[150px]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div>
                  <h3 className="mb-2 flex gap-3">
                    <div className="bullet-point mt-3"></div>
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Excellence */}
        <div
          className="w-full lg:pt-0 pt-4 md:pt-0"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center justify-center gap-3 mb-4 h-8">
            <Image
              src="/Icons/MESSAGING.svg"
              alt="Revenue Stagnation"
              className="flex-shrink-0"
              width={36}
              height={36}
            />
            <h5>
              Email Excellence: Designed to Convert
            </h5>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "High-Impact CTAs",
                description:
                  "2x more conversions with clear, action-driven prompts.",
                metric: "2x",
              },
              {
                title: "Irresistible Subject Lines",
                description: "35%+ boost in open rates.",
                metric: "+35%",
              },
              {
                title: "Mobile-Optimized Layouts",
                description:
                  "70% of emails are opened on mobile, we ensure flawless performance.",
                metric: "70%",
              },
              {
                title: "Persuasive Copy",
                description:
                  "Messaging that speaks directly to your audience's needs.",
                metric: "100%",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between !p-4 md:!p-6 card hover-card h-auto lg:h-[150px]"
                style={{ animationDelay: `${(index + 3) * 0.2}s` }}
              >
                <div className="flex items-start gap-4 flex-1">

                  <div>
                    <h3 className="mb-2 flex gap-3">
                      <div className="bullet-point mt-3"></div>
                      {item.title}
                    </h3>
                    <p  >{item.description}</p>
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-primary flex-shrink-0">
                  {item.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;