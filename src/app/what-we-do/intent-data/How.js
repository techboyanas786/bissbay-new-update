import React from "react";
import { Target, Megaphone, FileText, TrendingUp } from "lucide-react";
import Image from "next/image";

const TransformCard = ({ icon: Icon, title, description, example }) => {
  return (

    <div className="card hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in">
      <div className="flex items-center space-x-3 mb-4">
        <Icon />
        <h5  >{title}</h5>
      </div>

      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="bullet-point"></div>

          <p className="!font-medium">{description}</p>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-blue-50/50 p-4 rounded-md border-l-6 border-primary">
          <p className="text-sm !font-semibold text-gray-600 mb-1">Example:</p>
          <p className="text-gray-800 leading-relaxed">{example}</p>
        </div>
      </div>
    </div>
  );
};

const HowItTransforms = () => {
  const transformations = [
    {
      icon: () => (
        <Image
          src="/Icons/TARGET.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Account-Based Marketing (ABM)",
      description: "Find decision-makers actively researching your solutions.",
      example:
        "A cloud solutions provider detects companies searching for 'cloud migration' and delivers hyper-targeted content.",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Digital_marketing.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Smarter Ad Retargeting",
      description: "Eliminate wasted ad spend, focus on high-intent buyers.",
      example:
        "A SaaS company boosts conversions by showing ads only to companies evaluating competitors.",
    },
    {
      icon: () => (
        <Image
          src="/Icons/CULTIVATING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Hyper-Personalized Content",
      description: "Serve exactly what your audience needs at the right time.",
      example:
        "A B2B marketplace dynamically adjusts website content based on visitor intent signals.",
    },
    {
      icon: () => (
        <Image
          src="/Icons/sales.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Sales Prioritization",
      description: "Your reps should focus on leads most likely to close.",
      example:
        "A sales team prioritizes accounts downloading whitepapers and attending webinars, increasing conversion rates.",
    },
  ];

  return (

    <section>
      <div className="text-center">
        <h2 className="section-title !mb-0">
          How Intent Data <span className="text-primary">Transforms</span> B2B
          Marketing & Sales
        </h2>
        <h3 className="my-4 md:my-6">
          Real-world applications that drive measurable results across your go-to-market strategy.
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
        {transformations.map((transform, index) => (
          <TransformCard
            key={transform.title}
            icon={transform.icon}
            title={transform.title}
            description={transform.description}
            example={transform.example}
            delay={index * 0.2}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItTransforms;
