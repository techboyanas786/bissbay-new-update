"use client";
import React, { useState } from "react";
import {
  Network,
  BrainCircuit,
} from "lucide-react";
import Button from "@/components/Button";
import MagicBento from "@/components/MagicBento";
import RotatingText from "@/components/RotatingText";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";

const HeroSection = () => {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const features = [
    {
      icon: (
        <Image
          src="/Icons/TARGET.svg"
          alt="Target"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Precision-Targeting",
      description:
        "Customized appointment-setting campaigns aligned with your industry, sales cycle, and revenue goals.",
    },
    {
      icon: (
        <Image
          src="/Icons/Support.svg"
          alt="Support"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Full-Service Support",
      description:
        "From lead research and outreach to follow-ups and objection handling, we manage every step of the process.",
    },
    {
      icon: (
        <Image
          src="/Icons/DATA_DRIVEN.svg"
          alt="Data driven"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Data-Driven Approach",
      description:
        "Our systematic approach ensures shorter sales cycles, higher conversion rates, and a consistent pipeline.",
    },
    {
      icon: (
        <Image
          src="/Icons/ROI.svg"
          alt="ROI"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "ROI-Focused Results",
      description:
        "We're committed to delivering measurable results that contribute directly to your bottom line.",
    },
  ];

  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-6 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group">
              Elite
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Appointment Setting{" "}
              </span>
              <br />
              Stop Chasing Cold Leads. <br />
              Start Closing Deals.
            </h1>
            <div>
              <span className="text-[1.5rem] font-semibold my-6 !text-primary">
                More{" "}
              </span>
              <RotatingText
                texts={["Meetings", "Deals", "Growth"]}
                mainClassName=" text-[1.5rem] inline-block font-semibold my-4 lg:my-6 !text-primary"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.0005}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
            <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold mb-6 lg:mb-8 !text-[#5C6371]">
              BISSBAY’s Elite Appointment Setting builds a reliable sales
              pipeline. <br /> We fill your calendar with qualified,
              sales-ready opportunities.
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
                customClass="  transform transition-all duration-300 ease-in-out"
                label="View Case Studies"
                onClick={() => setIsCaseStudiesOpen(true)}
              />
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 bg-gray-100"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="h-[400px] md:h-[500px] animate-on-scroll ai-card bg-white/90 rounded-xl shadow-xl p-6 relative z-10 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 rounded-xl"></div>
              <div className="flex justify-between items-center mb-4 border-b pb-4">
                <div className="flex items-center">
                  <BrainCircuit className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-bold text-lg">
                    AI-Powered Sales Pipeline
                  </h3>
                </div>
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  +28% This Month
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Meeting with Acme Corp",
                  "Demo for TechGiant Inc",
                  "Proposal for StartUp XYZ",
                  "Follow-up with Global Services",
                ].map((meeting, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 hover: rounded-xl transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white font-bold relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20"></div>
                      <Network className="absolute h-14 w-14 opacity-10" />
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium">{meeting}</p>
                    </div>
                  </div>
                ))}
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
