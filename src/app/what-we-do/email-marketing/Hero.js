"use client";
import React, { useState } from "react";
import {
  Mail,
  Target,
  Users,
  Star,
  MessageSquare,
  PieChart,
  TrendingUp,
} from "lucide-react";
import Button from "@/components/Button";
import MagicBento from "@/components/MagicBento";
import RotatingText from "@/components/RotatingText";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";
const Hero = ({ onScrollDown }) => {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: (
        <Image
          src="/Icons/SUSTAINABLE.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Reliable Deliverability",
      description:
        "Maintain 95% inbox placement with advanced data-driven verification, real-time optimization, and trusted sender reputation.",
    },
    {
      icon: (
        <Image
          src="/Icons/INTENT.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Precise Reach",
      description:
        "Use 113M+ global profiles and intent data to reach the right decision-makers across industries and roles.",
    },
    {
      icon: (
        <Image
          src="/Icons/Personalization.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Personalized Messaging",
      description:
        "Create relevant, high-impact emails that engage and convert through tailored content from subject line to CTA.",
    },
    {
      icon: (
        <Image
          src="/Icons/Insights_Analyzed.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Performance Insights",
      description:
        "Track, test, and refine campaigns with real-time analytics and engagement insights for continuous improvement.",
    },
  ];

  const EmailAnimation = () => {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 animate-float">
          <div className="w-64 h-80 md:w-80 md:h-96 bg-white rounded-xl shadow-2xl p-3 md:p-4 border-t-4 border-primary">
            <div className="flex items-center mb-3">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="border-b pb-2 flex justify-between">
              <div className="w-24 h-5 bg-gray-200 rounded"></div>
              <div className="w-16 h-5 bg-gray-200 rounded"></div>
            </div>
            <div className="my-3">
              <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
              <div className="w-3/4 h-6 bg-primary rounded mb-4"></div>
            </div>
            <div className="space-y-2">
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-full h-3 bg-gray-200 rounded"></div>
              <div className="w-1/2 h-3 bg-gray-200 rounded mb-4"></div>
            </div>
            <div className="my-3">
              <div className="w-full h-24 bg-gray-100 rounded mb-3"></div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-8 bg-primary rounded animate-pulse"></div>
            </div>
            <div className="absolute bottom-3 right-3 flex items-center">
              <Star
                size={14}
                className="text-yellow-400 fill-yellow-400 mr-1"
              />
              <Star
                size={14}
                className="text-yellow-400 fill-yellow-400 mr-1"
              />
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
            </div>
          </div>
        </div>

        <div className="absolute top-[40%] right-[5%] md:right-[10%] animate-bounce">
          <Mail size={24} className="text-primary animate-pulse md:w-8 md:h-8" />
        </div>
        <div className="absolute top-[20%] left-[5%] md:left-[10%] animate-bounce delay-300 ">
          <Mail size={20} className="text-primary animate-pulse md:w-6 md:h-6" />
        </div>
        <div className="absolute bottom-[30%] left-[15%] md:left-[20%] animate-bounce delay-150 ">
          <Mail size={22} className="text-primary animate-pulse md:w-7 md:h-7" />
        </div>

        {/* Chart element */}
        <div className="absolute bottom-[15%] right-[10%] md:right-[15%] bg-white rounded-xl shadow-lg p-1 md:p-2 animate-bounce">
          <TrendingUp size={20} className="text-primary md:w-6 md:h-6" />
        </div>

        {/* Background gradient circles */}
        <div className="absolute top-[10%] right-[15%] md:right-[20%] w-12 h-12 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary/10 to-orange-300/10 animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[5%] md:left-[10%] w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-primary/5 to-orange-300/5 animate-pulse delay-500"></div>
      </div>
    );
  };

  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          {/* Left content - responsive width */}
          <div className="w-full lg:w-1/2 mb-0 animate-fade-in">
            <h1 className="group">
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Email Marketing:{" "}
              </span>
              Engage. Convert. Dominate.
            </h1>
            <span
              className="text-[1.5rem] inline-block font-semibold my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Turn Emails into Revenue Machines;{" "}
              <span>
                <RotatingText
                  texts={["Precision", "Performance", "Profit"]}
                  mainClassName=" text-[1.5rem] inline-block font-semibold !text-primary"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.0005}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </span>
            <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed mb-6 lg:mb-8 lg:!font-semibold !text-[#5C6371]">
              Stop getting lost in inbox clutter. <br /> We cut through the noise using intent data to connect your brand with the right audience.
            </h6>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <Button
                customClass=" transform transition-all duration-300 ease-in-out"
                variant="primary"
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

          <div className="w-full lg:w-1/2 bg-gray-100">
            <div
              className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center"
              style={{ animationDelay: "0.7s" }}
            >
              <EmailAnimation />
            </div>
          </div>
        </div>
        {/* <div className="grid mb-[72px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((benefit, index) => (
            <div
              key={index}
              className="shadow-md metric-card bg-white rounded-xl p-6 hover-card card-hover animate-on-scroll"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-row w-full items-center justify-start gap-2 mb-2">
                <div>{benefit.icon}</div>
                <h5  >{benefit.title}</h5>
              </div>

              <p  >{benefit.description}</p>
            </div>
          ))}
        </div> */}
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

export default Hero;
