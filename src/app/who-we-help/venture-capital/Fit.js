"use client";
import React from "react";
import {
  BarChart3,
  CheckCircleIcon,
  Handshake,
  TrendingUp,
  Unlock,
  User,
} from "lucide-react";
import Image from "next/image";

const Fit = () => {
  const benefits = [
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
      title: "Generate high-quality leads",
      description:
        "Delivering premium, sales-ready leads that consistently drive growth.",
      tech: "Lead Boost",
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
      title: "Improve conversion rates",
      description:
        "Boosting sales success by turning more prospects into loyal customers.",
      tech: "Win More",
    },
    {
      icon: () => (
        <Image
          src="/Icons/SCALING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Scale effectively",
      description:
        "Building sustainable growth systems to expand your business with ease.",
      tech: "Scale Up",
    },
  ];

  const features = [
    {
      icon: Unlock,
      title: "Growth Challenges",
      description:
        "Helping portfolio companies overcome revenue plateaus and unlock growth.",
      tech: "Breakthrough Growth",
    },
    {
      icon: () => (
        <Image
          src="/Icons/handshake.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Strategic Partnership",
      description:
        "Empowering VCs with a committed partner for scaling portfolio success.",
      tech: "Growth Ally",
    },
    {
      icon: () => (
        <Image
          src="/Icons/SHARPENING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Proven Expertise",
      description:
        "Delivering specialized B2B marketing strategies that drive measurable results.",
      tech: "Market Mastery",
    },
  ];

  return (
    <section id="cta-section">
      <div>
        <div className="transition-all duration-1000">
          <div className="text-center md:!mb-6 !mb-4">
            <h2 className="section-title mb-6">
              Is Bissbay the
              <span className="text-primary"> Right Fit </span>
              for You?
            </h2>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
              Bissbay partners with venture capitalists focused on driving
              revenue growth for their portfolio companies to drive measurable
              growth.
              <br className="hidden sm:block" /> Our experience in this niche allows us to quickly understand
              challenges, identify opportunities, and implement solutions that
              scale.
            </p>
          </div>
        </div>

        <div className="container mx-auto transition-all duration-1000 delay-300">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div className="h-auto md:h-full bg-gray-50 rounded-xl p-4 md:p-6 text-black relative overflow-hidden">
              <h5 className="font-bold !text-center text-black mb-4 md:mb-6">
                Our
                <span className="text-primary"> Specialization</span>
              </h5>
              <p className="!font-semibold !text-center mb-4 leading-relaxed">
                We deliver B2B marketing strategies for measurable results.
              </p>
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
                          <p className="text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="h-auto md:h-full bg-gray-50 rounded-xl p-4 md:p-6 text-black relative overflow-hidden">
              <div className="relative z-10">
                <h5 className="text-2xl font-bold !text-center mb-4 md:mb-6">
                  Perfect For
                </h5>
                <p className="!text-center !font-semibold mb-4">
                  <span className="text-primary">VCs</span> aiming to
                  accelerate growth across their SaaS portfolios.
                </p>
                <div className="space-y-4">
                  {features.map((benefit, index) => {
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
                            <p className="text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl card !p-4 sm:!p-6 hover-card !border-[#FF4200] sm:mt-12 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">
            We’re Not Here to Just Say
            <span className="text-primary"> “yes.”</span>
          </h2>
          <div className="space-y-8 text-xl leading-relaxed text-gray-700">
            <p>
              We act as an extension of your in-house team, trusted marketing
              advisors fully dedicated to driving portfolio growth.
              <br className="hidden sm:block" /> Our mission is to deliver results with the same passion and
              commitment as if your success were our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fit;
