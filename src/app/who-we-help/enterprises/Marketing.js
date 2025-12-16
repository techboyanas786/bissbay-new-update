import React from "react";
import { Users, BarChart3, Shield, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";

function Marketing() {
  const benefits = [
    {
      icon: () => (
        <Image
          src="/Icons/Flash.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Rapid implementation and results",
      description: "Launch quickly with proven methodologies.",
      tech: "Lightning Deploy",
    },
    {
      icon: Users,
      title: "Seamless integration with your team",
      description:
        "We operate as an extension of your existing marketing department.",
      tech: "Team Sync",
    },
    {
      icon: () => (
        <Image
          src="/Icons/DATA_ANALYSIS.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Transparent reporting and analytics",
      description: "Clear insights into performance and ROI at every step",
      tech: "Real-time Analytics",
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
      title: "Continuous optimization and improvement",
      description: "Ongoing refinement to maximize your marketing investment",
      tech: "Auto-Optimization",
    },
  ];

  return (
    <section id="cta-section">
          <div className={`transition-all duration-1000 `}>
            <div className="text-center mb-4 md:mb-6">
              <h2 className="section-title mb-6">
                Enterprise-Grade Marketing,{" "}
                <span className="text-primary">
                  Without the Heavy Investment
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Scaling enterprise marketing comes with challenges, misaligned
                agendas, fragmented strategies, and inefficient execution.
                <br className="hidden sm:block" /> Bissbay eliminates these pain points by offering a fully
                integrated, strategic partnership that accelerates revenue.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
              <div className="group flex items-center justify-center">
                <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-xl shadow-2xl">
                  <img
                    className="group-hover:scale-110 duration-1000 transition-all w-full h-full "
                    src={"/images/EnterprisesInvestment.jpg"}
                  />
                </div>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className={`flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group animate-on-scroll  relative overflow-hidden`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-full space-y-2">
                        <div className="flex flex-row gap-3">
                          <Icon className="medium-icon " />
                          <div className="px-2 py-1 w-fit self-end bg-primary/10 text-primary text-base rounded-full border border-primary/20">
                            {benefit.tech}
                          </div>
                        </div>
                        <div className="flex-1 space-y-2">
                          <h5>{benefit.title}</h5>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        <div className="container mx-auto mt-4 md:mt-12 animate-on-scroll opacity-0 ">
          <div className="mx-auto duration-500 transition-all !border-[#FF4200] rounded-2xl p-4 md:p-6 border-2  relative overflow-hidden">
            {/* Background tech pattern */}

            <div className="text-center mb-4 md:mb-6 relative z-10">
              <h2 className="section-title mb-4 md:mb-6">
                Our <span className="text-primary">Promise</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We operate with precision and focus, ensuring every effort
                translates into measurable business impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
              {[
                "We don't chase vanity metrics",
                "We focus on high-value opportunities",
                "We move from planning to performance",
                "We align sales strategy with execution",
              ].map((promise, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="medium-icon" />
                  <span className="text-gray-700 font-medium">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}

export default Marketing;
