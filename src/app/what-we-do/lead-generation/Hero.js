"use client";
import React, { useState } from "react";
import { BarChart3, Target, TrendingUp, Users, Zap } from "lucide-react";
import Button from "@/components/Button";
import MagicBento from "@/components/MagicBento";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";


const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

  const features = [
    {
      icon: (
        <Image
          src="/Icons/TARGET.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Smart Targeting",
      description:
        "Reach decision-makers with AI-powered, intent-driven campaigns that prioritize buyer readiness, not just volume.",
    },
    {
      icon: (
        <Image
          src="/Icons/QUALITYLEADS.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Quality Leads",
      description:
        "Deliver verified, sales-ready leads matched to your ideal customer profile for faster conversions.",
    },
    {
      icon: (
        <Image
          src="/Icons/IMPACTFUL.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Measurable Impact",
      description:
        "Track real ROI with transparent analytics, performance dashboards, and continuous campaign optimization.",
    },
    {
      icon: (
        <Image
          src="/Icons/MULTICHANNEL.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Omnichannel Reach",
      description:
        "Engage prospects across LinkedIn, email, events, and more. Wherever they are in the buying journey.",
    },
  ];
  return (
    <>
      <section>
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group">
              Fuel Your Sales Pipeline with Precision{" "}
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">Lead Generation</span>{" "}
            </h1>
            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Lead generation isn’t about more leads, <br /> it’s about the right leads at the right time.
            </h3>
            <h6 className="lg:!text-[1.125rem] mb-6 lg:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              At BISSBAY, we combine smart targeting, data-driven strategies, and multi-channel engagement to deliver lead generation that connects you with real decision-makers.
            </h6>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <Button
                variant="primary"
                customClass=" transform transition-all duration-300 ease-in-out"
                label="Schedule Your Consultation"
                onClick={() => setIsModalOpen(true)}
              />
              <Button
                variant="outline"
                customClass="  transform transition-all duration-300 ease-in-out"
                label="View Case Studies" onClick={() => setIsCaseStudiesOpen(true)}
              />
            </div>
          </div>


          {/* Right Visual */}
          <div className="w-full lg:w-1/2 bg-gray-100">
            <div className="relative h-[400px] md:h-[500px] animate-on-scroll">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl backdrop-blur-sm">
                <div className="absolute top-4 left-4 md:top-12 md:left-12 bg-white rounded-2xl p-4 md:p-6 shadow-xl animate-float hover-lift">
                  <Target className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm font-semibold text-bissbay-black">Intent-Driven</div>
                  <div className="text-[10px] md:text-xs text-bissbay-black/60">Targeting</div>
                </div>

                <div className="absolute top-28 right-4 md:top-32 md:right-16 bg-white rounded-2xl p-4 md:p-6 shadow-xl animate-float hover-lift" style={{ animationDelay: '0.5s' }}>
                  <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm font-semibold text-bissbay-black">ROI Growth</div>
                  <div className="text-[10px] md:text-xs text-bissbay-black/60">Measurable</div>
                </div>

                <div className="absolute bottom-28 left-2 md:bottom-32 md:left-8 bg-white rounded-2xl p-4 md:p-6 shadow-xl animate-float hover-lift" style={{ animationDelay: '1s' }}>
                  <Users className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm font-semibold text-bissbay-black">Decision Makers</div>
                  <div className="text-[10px] md:text-xs text-bissbay-black/60">Qualified</div>
                </div>

                <div className="absolute bottom-4 right-4 md:bottom-12 md:right-12 bg-white rounded-2xl p-4 md:p-6 shadow-xl animate-float hover-lift" style={{ animationDelay: '1.5s' }}>
                  <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary mb-2 md:mb-3" />
                  <div className="text-xs md:text-sm font-semibold text-bissbay-black">AI-Powered</div>
                  <div className="text-[10px] md:text-xs text-bissbay-black/60">Intelligence</div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-32 h-32 bg-gradient-corporate rounded-full flex items-center justify-center animate-pulse-glow shadow-2xl">
                    <div className="text-white font-bold text-2xl">B</div>
                  </div>
                  <div className="absolute inset-0 border-4 border-primary/30 rounded-full animate-rotate-slow"></div>
                  <div
                    className="absolute inset-2 border-2 border-primary/20 rounded-full animate-rotate-slow"
                    style={{ animationDirection: "reverse" }}
                  ></div>
                </div>

                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-full h-full">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bg-primary rounded-full animate-pulse"
                        style={{
                          width: Math.random() * 4 + 2 + "px",
                          height: Math.random() * 4 + 2 + "px",
                          top: Math.random() * 100 + "%",
                          left: Math.random() * 100 + "%",
                          animationDelay: Math.random() * 2 + "s",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-6 lg:mt-12">
          <MagicBento
            textAutoHide={false}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="255,66,0"
            data={features}
          />
        </div>
      </section>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <CaseStudiesPopup
        isOpen={isCaseStudiesOpen}
        onClose={() => setIsCaseStudiesOpen(false)}
      />
    </>
  );
};

export default HeroSection;
