"use client";
import React, { useState } from "react";
import {
  Calendar,
  Users,
  TrendingUp,
  Globe,
  Play,
} from "lucide-react";
import Button from "@/components/Button";
import MagicBento from "@/components/MagicBento";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";

const Hero = () => {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const benefits = [
    {
      icon: (
        <Image
          src="/Icons/TARGET.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Precision Targeting",
      description:
        "Reach the right audience with data-driven accuracy to attract high-value attendees.",
    },
    {
      icon: <Image
        src="/Icons/Engagement.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      title: "Maximized Engagement",
      description:
        "Deliver tailored experiences that boost participation and drive meaningful conversions.",
    },
    {
      icon: <Image
        src="/Icons/QUALITYLEADS.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      title: "Lead with Expertise",
      description:
        "Showcase thought leadership to build trust and establish industry authority.",
    },
    {
      icon: <Image
        src="/Icons/Customer-Support.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      title: "Post-Event Follow-Ups",
      description:
        "Ensure every event drives measurable ROI with structured follow-ups.",
    },
  ];
  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group">
              Turning{" "}

              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">B2B Events</span>{" "}
              into Revenue-Driving Experiences
            </h1>
            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Where Ideas Turn Into Impactful Events.
            </h3>

            <h6 className="lg:!text-[1.125rem] mb-6 lg:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              Explore BISSBAY’s proven strategies to unlock the full potential of B2B events. From concept to execution, we deliver events that drive engagement, accelerate pipeline growth, and guarantee measurable results.
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
                customClass=" transform transition-all duration-300 ease-in-out "
                label="View Case Studies" onClick={() => setIsCaseStudiesOpen(true)}
              />
            </div>
          </div>

          {/* Right Visual - Moving Animation */}
          <div className="w-full lg:w-1/2 bg-gray-100">
            <div className="relative h-[400px] md:h-[500px] animate-on-scroll">
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-float opacity-20"></div>
              <div className="absolute top-20 right-0 w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full animate-float-delayed opacity-30"></div>
              <div className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-float opacity-25"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse-slow flex items-center justify-center shadow-2xl">
                    <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                      <Calendar className="w-16 h-16 text-orange-500 animate-bounce-gentle" />
                    </div>
                  </div>

                  <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Globe className="w-6 h-6 text-orange-500" />
                    </div>
                    <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-orange-500" />
                    </div>
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
            data={benefits}
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

export default Hero;
