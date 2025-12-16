import React from "react";
import {
  Eye,
  Download,
  MessageSquare,
  CheckCircle,
  Lightbulb,
  Rocket,
  Data,
} from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <div className="metric-card hover-card">
      <div className="flex flex-row items-center justify-start gap-3 mb-2">
        <Icon className="medium-icon" />
        <h5  >{title}</h5>
      </div>

      <p  >{description}</p>
    </div>
  );
};

const BenefitItem = ({ icon: Icon, text }) => {
  const [beforeDash, afterDash] = text.split(":");
  return (
    <div className="flex items-center space-x-3">
      <Icon className="small-icon !w-8 !h-8" />
      <p className="text-secondary font-medium md:!text-xl">
        <span className="font-bold text-[#1f2937]">{beforeDash}- </span>
        {afterDash}
      </p>
    </div>
  );
};

const WhatIsIntentData = () => {
  const digitalBehaviors = [
    {
      icon: Eye,
      title: "Website Visits & Search Queries",
      description:
        "Track visitor behavior and search patterns to identify buying intent signals.",
    },
    {
      icon: Download,
      title: "Content Downloads",
      description:
        "Monitor who downloads eBooks, case studies, and whitepapers to reveal interest.",
    },
    {
      icon: MessageSquare,
      title: "Social Media Activity",
      description:
        "Analyze social conversations and industry discussions for buying signals.",
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      text: "Prioritize high-intent leads : Focus on buyers ready to act.",
    },
    {
      icon: Lightbulb,
      text: "Personalize outreach : Boost engagement with hyper-relevant messaging.",
    },
    {
      icon: Rocket,
      text: "Close deals faster : Reach decision-makers before competitors do.",
    },
  ];

  return (
    <section>
      <div className="text-center ">
        <h2 className="section-title !mb-0">
          What is <span className="text-primary">Intent Data</span>?
        </h2>
        <h3 className="my-4 md:my-6">
          Intent data uncovers which buyers are in-market for your solutions by analyzing digital behaviors.
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4 lg:gap-8 mb-4 lg:mb-12">
        {digitalBehaviors.map((behavior, index) => (
          <FeatureCard
            key={behavior.title}
            icon={behavior.icon}
            title={behavior.title}
            description={behavior.description}
            delay={index * 0.2}
          />
        ))}
      </div>

      <div className="bg-white rounded-3xl p-2 lg:p-12 shadow-2xl border hover-card border-gray-200">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-secondary mb-4 md:mb-6">
              With these insights, you can:
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => {
                return (
                  <BenefitItem
                    key={benefit.text}
                    icon={benefit.icon}
                    text={benefit.text}
                    delay={0.8 + index * 0.2}
                  />
                );
              })}
            </div>
          </div>
          <div className="relative">
            <div className="w-full md:w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-200/40 rounded-full"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-primary/30 to-orange-300/50 rounded-full"></div>
              <div className="absolute inset-16 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center">
                <Lightbulb className="large-icon !text-white animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsIntentData;
