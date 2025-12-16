"use client";
import "intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, Target, Rocket, Link, Database } from "lucide-react";
import Button from "@/components/Button";
import MagicBento from "@/components/MagicBento";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";
function HeroSection({ onScrollDown }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const cardData = [
    {
      icon: (
        <Image
          src="/Icons/ZEROWASTE.svg"
          alt="Revenue Stagnation"
          width={36}
          height={36}
        />
      ),
      title: "Zero Waste",
      description:
        "Focus resources on high-value accounts, not mass audiences.",
    },
    {
      icon: (
        <Image
          src="/Icons/Faster.svg"
          alt="Revenue Stagnation"
          width={36}
          height={36}
        />
      ),
      title: "Faster Wins",
      description:
        "Personalized campaigns drive quicker decisions in complex sales.",
    },
    {
      icon: (
        <Image
          src="/Icons/LOYALTY.svg"
          alt="Revenue Stagnation"
          width={36}
          height={36}
        />
      ),
      title: "Stronger Loyalty",
      description: "Tailored experiences build lasting relationships",
    },
    {
      icon: (
        <Image
          src="/Icons/ROI.svg"
          alt="Revenue Stagnation"
          width={36}
          height={36}
        />
      ),
      title: "Measurable ROI",
      description:
        "Directly track engagement, pipeline growth, and revenue impact.",
    },
  ];

  const observerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animated");
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observerRef.current?.observe(el));

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  return (
    <>
        <section className="relative z-10">
          <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-6 lg:gap-8">
            <div className="w-full lg:w-1/2 mb-0">
              <h1 className="group">
                Elevate Growth with Precision
                <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                  {" "}
                  Account-Based Marketing{" "}
                </span>
              </h1>

              <h3
                className="my-4 lg:my-6 !text-primary"
                style={{ animationDelay: "0.2s" }}
              >
                Turn High-Value Accounts into High-Impact Revenue
              </h3>

              <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold !text-[#5C6371] mb-6 lg:mb-8 ">
                In today's B2B world, broad marketing doesn't cut it.
                <br /> ABM is your competitive edge a laser-focused strategy.
              </h6>

              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Button
                  variant="primary"
                  customClass=" transform transition-all duration-300 ease-in-out"
                  label="Schedule Your Consultation" onClick={() => setIsModalOpen(true)}
                />
                <Button
                  variant="outline"
                  customClass="  transform transition-all duration-300 ease-in-out"
                  label="View Case Studies"
                  onClick={() => setIsCaseStudiesOpen(true)}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-100">
              <div
                className="relative h-[400px] md:h-[500px] animate-on-scroll"
                style={{ animationDelay: "0.5s" }}
              >
                <div
                  className="absolute top-[50%] right-[10%] w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-primary/60 animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div
                  className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  <Target className="medium-icon" />
                  <p className="text-sm font-medium">Precision Targeting</p>
                </div>

                <div
                  className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 animate-float"
                  style={{ animationDelay: "2s" }}
                >
                  <Database className="medium-icon" />
                  <p className="text-sm font-medium">Data-Driven</p>
                </div>

                <div
                  className="absolute bottom-2/4 right-1/4 transform translate-x-1/2 bg-white rounded-xl shadow-lg p-4 animate-float"
                  style={{ animationDelay: "2.5s" }}
                >
                  <Rocket className="medium-icon" />
                  <p className="text-sm font-medium">Accelerated Growth</p>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full bg-black/5 flex items-center justify-center animate-pulse">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center text-white">
                    <div className="text-center">
                      <p className="text-sm text-white uppercase tracking-wider">
                        AI-Powered
                      </p>
                      <p className="font-bold text-xl md:text-2xl">ABM</p>
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
              data={cardData}
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
}

export default HeroSection;
