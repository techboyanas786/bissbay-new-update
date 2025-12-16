import React, { useEffect, useRef, useState } from "react";
import Button from "@/components/Button";
import {
  Database,
  Network,
  BarChart3,
  FileCheck,
  LineChart,
  Users,
  BarChart2,
} from "lucide-react";
import MagicBento from "@/components/MagicBento";
import BookingModal from "@/components/BookingModal";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import Image from "next/image";

const HeroSection = () => {
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const benefits = [
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
      title: "Unified Data Source",
      description:
        "Connect every customer interaction through a single thread of reliable data.",
    },
    {
      icon: (
        <Image
          src="/Icons/Asset.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Strategic Asset",
      description:
        "Transform raw data into enriched insights ready to drive innovation.",
    },
    {
      icon: (
        <Image
          src="/Icons/Earth-Globe.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Unique Journeys",
      description:
        "Enable seamless, personalized customer engagement across all touchpoints.",
    },
    {
      icon: (
        <Image
          src="/Icons/SCALING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Measurable Growth",
      description:
        "Drive operational efficiency and achieve sustainable, data-driven results.",
    },
  ];
  const dataPointsRef = useRef(null);

  useEffect(() => {
    // Simple animation for the data points
    const dataPointsEl = dataPointsRef.current;
    if (!dataPointsEl) return;

    const dataPoints = Array.from(dataPointsEl.children);

    dataPoints.forEach((point, index) => {
      setTimeout(() => {
        point.classList.add("opacity-100");
        point.classList.remove("opacity-0");
        point.classList.add("animate-floating");
      }, index * 200);
    });

    const handleScroll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;

        if (isVisible) {
          el.classList.add("is-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Run once on first load
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group ">
              Elevate Your Data Strategy with Precision-Driven{" "}
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Intelligent Data Enrichment{" "}
              </span>
            </h1>
            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Turn High-Value Accounts into High-Impact Revenue
            </h3>

            <h6 className="lg:!text-[1.125rem] mb-6 lg:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              In today's data-driven world, information isn't just an asset,
              it's the fuel for growth.
              <br />
              Turn your data into your most powerful strategic advantage.
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
            <div
              className="relative h-[400px] md:h-[500px] animate-on-scroll"
              style={{ transitionDelay: "0.4s" }}
            >
              {/* Core Services Orbits */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-96 lg:h-96 rounded-full border-2 border-primary/30 animate-spin-slow">
                  <div className="absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2">
                    <div className="bg-[rgb(255,66,0)] p-2 lg:p-3 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
                      <Database className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 lg:w-72 lg:h-72 rounded-full border-2 border-black/20 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
                  <div className="absolute -right-3 lg:-right-5 top-1/2 -translate-y-1/2">
                    <div className="bg-primary p-2 lg:p-3 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                      <FileCheck className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 lg:w-48 lg:h-48 rounded-full border-2 border-primary/30 animate-spin-slow">
                  <div className="absolute -top-3 lg:-top-5 left-1/2 -translate-x-1/2">
                    <div className="bg-primary p-2 lg:p-3 rounded-lg animate-float" style={{ animationDelay: '0.5s' }}>
                      <LineChart className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full border-2 border-black/20 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
                  <div className="absolute -bottom-3 lg:-bottom-5 left-1/2 -translate-x-1/2">
                    <div className="bg-primary p-2 lg:p-3 rounded-lg animate-float" style={{ animationDelay: '1.5s' }}>
                      <Users className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-[rgb(255,66,0)] rounded-full animate-pulse flex items-center justify-center">
                  <BarChart2 className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
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

export default HeroSection;
