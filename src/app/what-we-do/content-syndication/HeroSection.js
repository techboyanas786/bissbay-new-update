"use client";
import "intersection-observer";
import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import { CheckCircle } from "lucide-react";
import { TrendingUp, Target, Rocket, Link, Database } from "lucide-react";
import MagicBento from "@/components/MagicBento";
import RotatingText from "@/components/RotatingText";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";

function HeroSection() {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const benefits = [
    {
      icon: (
        <Image
          src="/Icons/Engagement.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Assured Engagement",
      description:
        "Reach 113M+ professionals across 30+ industries with precision targeting. Eliminate blind leads and focus on real buyers, not spray and pray.",
    },
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
        "Hyper-accurate outreach based on verified data. No spam folders, no wasted reach, just real opportunities that convert to revenue.",
    },
    {
      icon: (
        <Image
          src="/Icons/sales.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Accelerated Sales",
      description:
        "Align content with buyer journeys to power up your outbound strategy. Achieve 28% faster sales cycles and higher conversion rates.",
    },
    {
      icon: (
        <Image
          src="/Icons/Database.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Done-For-You Execution",
      description:
        "GDPR-compliant, AI-optimized, and 92% accurate data. We handle the heavy lifting while you focus on closing.",
    },
  ];

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "target":
        return <Target className="text-primary" size={36} />;
      case "rocket":
        return <Rocket className="text-primary" size={36} />;
      case "link":
        return <Link className="text-primary" size={36} />;
      case "trending-up":
        return <TrendingUp className="text-primary" size={36} />;
      default:
        return null;
    }
  };

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
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0 z-10">
            <h1 className="group">
              Turn Content Into Pipeline with Precision
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Content Syndication{" "}
              </span>
            </h1>
            <div>
              <span className="text-[1.5rem] font-semibold my-6 !text-primary">
                No more{" "}
              </span>
              <RotatingText
                texts={["wasted impressions.", "missed opportunities."]}
                mainClassName=" text-[1.5rem] inline-block font-semibold my-4 !text-primary"
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

            <h6
              className="lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold mb-6 lg:mb-8 !text-[#5C6371]"
              style={{ animationDelay: "0.2s" }}
            >
              Your content isn’t just marketing,
              <br className="block lg:hidden" /> it’s your growth engine.
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
                label="View Case Studies"
                onClick={() => setIsCaseStudiesOpen(true)}
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 bg-gray-100 relative animate-on-scroll">
            <div className="bg-white shadow-xl rounded-xl overflow-hidden relative z-10">
              <div className="p-4 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary text-white p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      Content That Converts
                    </h3>
                    <p className="text-sm text-gray-500">
                      No more wasted impressions
                    </p>
                  </div>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Guaranteed Engagement</p>
                      <p className="text-sm text-gray-600">
                        Reach 113M+ professionals across 30+ industries
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Precision Targeting</p>
                      <p className="text-sm text-gray-600">
                        Hyper-accurate outreach based on verified data
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 mt-1" />
                    <div>
                      <p className="font-medium">Accelerated Sales</p>
                      <p className="text-sm text-gray-600">
                        28% faster sales cycles with aligned content
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 rounded-xl transition duration-200">
                    Learn How It Works
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="grid mb-[72px] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
           
            <div
              key={index}
              className="shadow-md metric-card bg-white rounded-xl p-6 hover-card card-hover animate-on-scroll"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-row w-full items-center justify-start gap-2 mb-2">
                <div >{renderIcon(benefit.icon)}</div>
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
}

export default HeroSection;
