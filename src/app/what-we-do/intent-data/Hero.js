"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Network,
  BarChart3,
  Link,
  Globe,
  Cloudy,
} from "lucide-react";
import Button from "@/components/Button";
import MagicBento from "@/components/MagicBento";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";
const HeroSection = ({ onScrollDown }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const features = [
    {
      icon: (
        <Image
          src="/Icons/Database.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Publisher-Sourced Data",
      description:
        "Real-time, verified intent signals sourced directly from premium publishers and industry-leading platforms for maximum accuracy and relevance.",
    },
    {
      icon: (
        <Image
          src="/Icons/Artificial-Intelligence.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "AI & Machine Learning",
      description:
        "Advanced algorithms continuously learn and adapt to provide smarter lead targeting and predictive insights that evolve with market trends.",
    },
    {
      icon: (
        <Image
          src="/Icons/DATA_DRIVEN.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Seamless Integration",
      description:
        "Works seamlessly with your existing tech stack including CRM, marketing automation, and analytics platforms for effortless adoption.",
    },
    {
      icon: (
        <Image
          src="/Icons/LIST_BUILDING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Strategic Guidance",
      description:
        "Our dedicated specialists help you activate your data for success with proven strategies, best practices, and ongoing optimization support.",
    },
  ];

  return (
    <>
      <section>
        <div className="relative z-10">
          <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
            <div className="w-full lg:w-1/2 mb-0">
              <h1 className="group">
                Unlock B2B Growth with
                <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative"> Intent Data</span>{" "}
                : Reach Buyers Already Searching
              </h1>

              <h3
                className="my-4 md:my-6 !text-primary"
                style={{ animationDelay: "0.2s" }}
              >
                Stop Wasting Budget on Cold Leads, Target Buyers Ready to Act
              </h3>


              <h6 className="lg:!text-[1.125rem] mb-6 lg:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
                Imagine being able to pinpoint companies actively researching your solutions before they even reach out. With intent data, you can engage the right prospects at the perfect moment and accelerate sales.
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

            <div className="w-full lg:w-1/2 bg-gray-100">
              <div className="relative h-[400px] md:h-[500px] animate-on-scroll">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center relative overflow-hidden group">
                  <Brain className="w-32 h-32 text-white animate-pulse" />

                  <div className="absolute inset-0">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-white rounded-full animate-ping"
                        style={{
                          top: `${20 + i * 10}%`,
                          left: `${15 + i * 8}%`,
                          animationDelay: `${i * 0.5}s`,
                          animationDuration: "3s",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 pointer-events-none">
                  {[Database, Link, Globe, Cloudy].map((Icon, index) => (
                    <div
                      key={index}
                      className="absolute w-12 h-12 bg-white rounded-lg shadow-lg border border-gray-200 flex items-center justify-center animate-float"
                      style={{
                        top: `${20 + index * 20}%`,
                        left: index % 2 === 0 ? "10%" : "80%",
                        animationDelay: `${index * 0.5}s`,
                      }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  ))}
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
