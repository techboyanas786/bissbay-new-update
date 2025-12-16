"use client";
import React from "react";
import {
  BarChart3,
  CheckCircle,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";

const Fit = () => {
  const benefits = [
    {
      icon: () => (
        <Image
          src="/Icons/SUSTAINABLE.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Focus on Revenue Growth",
      description:
        "Drive measurable growth with strategies that directly impact your bottom line.",
      tech: "Predictive Growth",
    },
    {
      icon: () => (
        <Image
          src="/Icons/MisalignNew.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Value Sales-Marketing Alignment",
      description:
        "Ensure your sales and marketing teams work in perfect harmony for maximum results.",
      tech: "Alignment Engine",
    },
    {
      icon: () => (
        <Image
          src="/Icons/QUALITYLEADS.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Seek High-Quality Leads",
      description:
        "Attract and convert only the most valuable prospects into loyal customers.",
      tech: "Smart Lead Targeting",
    },
    {
      icon: () => (
        <Image
          src="/Icons/SCALING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Want to Scale Effectively",
      description:
        "Build systems that expand seamlessly as your business evolves.",
      tech: "Growth Automation",
    },
  ];

  return (
    <section>
        <div className="text-center mb-6 transition-all duration-1000">
          <h2 className="section-title mb-6">
            Are We the Right
            <span className="text-primary"> Partner for You? </span>
          </h2>
          <p>
            We collaborate with marketing leaders who focus on revenue growth
            and seamless sales alignment.
            <br className="hidden sm:block" /> Whether you're overcoming growth
            challenges or looking for a dedicated partner, we provide the
            strategies and execution to drive success.
          </p>
          <p className="text-gray-700 font-quicksand leading-relaxed">
            If your goal is to generate high-quality leads, improve conversion
            rates, and scale effectively, our data-driven strategies deliver
            measurable results.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
          <div className="order-1 lg:order-2 transition-all duration-1000 delay-300">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-bissbay-black font-quicksand mb-4">
                You're Our Ideal Partner
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className={`flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 group animate-on-scroll relative overflow-hidden`}
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
          <div className="group flex items-center justify-center order-2 lg:order-1">
            <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="w-full h-full"
                src="/images/LeadersFit.jpg"
                alt="Leaders Fit"
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-4 md:mt-12 animate-on-scroll">
          <div className="shadow-xl mx-auto duration-500 transition-all !border-[#FF4200] hover:border-2 rounded-2xl p-4 md:p-6 border-2  relative overflow-hidden">
            <div className="text-center mb-4 md:mb-6 relative z-10">
              <h2 className="section-title mb-4 md:!mb-6">
                Our <span className="text-primary">Promise</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We operate with precision and focus, ensuring every initiative
                drives measurable business impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {[
                "We we don't chase vanity metrics",
                "We focus on high-value opportunities",
                "We move from planning to performance",
                "We align sales strategy with execution",
              ].map((promise, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="medium-icon " />
                  <span className="text-gray-700 font-medium">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
};

export default Fit;
