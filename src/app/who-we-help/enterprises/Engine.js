import React from "react";
import { Network, Brain, Rocket, Cpu } from "lucide-react";
import Image from "next/image";

const Engine = () => {
  const features = [
    {
      icon: () => (
        <Image
          src="/Icons/ACTIVATING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Initial Consultation",
      description: "In-depth review of marketing performance and growth goals.",
      tech: "Analysis",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Engagement.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Strategic Planning",
      description:
        "Custom roadmap development aligned with your business objectives",
      tech: "Neural Mapping",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Faster.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Implementation",
      description: "Rapid deployment of proven strategies and campaign execution",
      tech: "Smart Deployment",
    },
    {
      icon: () => (
        <Image
          src="/Icons/OPTIMIZATION.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Optimization",
      description: "Continuous monitoring, testing, and refinement for maximum ROI",
      tech: "ML Optimization",
    },
  ];

  return (
    <section id="cta-section">
      <div className="transition-all duration-1000">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="section-title mb-6">
            Let us Build a Marketing Engine
            <span className="text-primary"> That Scales</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Whether you're refining your go-to-market strategy, optimizing
            demand generation, or enhancing revenue operations.<br /> Bissbay is
            your trusted partner.
          </p>
        </div>
      </div>

      <div className={`transition-all duration-1000 delay-300`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="space-y-4">
            {features.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className={`flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform group animate-on-scroll opacity-0 relative overflow-hidden`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="space-y-2">
                    <div className="flex flex-row gap-3">
                      <Icon className="medium-icon " />
                      <div className="px-2 py-1 w-fit self-end bg-primary/10 text-primary text-base rounded-full border border-primary/20">
                        {benefit.tech}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h5>{benefit.title}</h5>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="group flex items-center justify-center">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="group-hover:scale-110 duration-1000 transition-all w-full h-full "
                src={"/images/EnterprisesMarketing.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engine;