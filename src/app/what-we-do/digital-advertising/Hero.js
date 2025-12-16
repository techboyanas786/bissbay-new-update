import React, { useState, useEffect } from "react";
import Button from "@/components/Button";
import {
  Database,
  BarChart3,
  CircleCheck,
  Target,
  Zap,
  TrendingUp,
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
          src="/Icons/Digital_marketing.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "360° Digital Mastery",
      description:
        "Paid media, SEO, CRM, and e-commerce solutions covering every touchpoint.",
    },
    {
      icon: (
        <Image
          src="/Icons/Artificial-Intelligence.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "AI & Trusted Data Cloud",
      description:
        "Hyper-targeted campaigns with real-time performance optimization.",
    },
    {
      icon: (
        <Image
          src="/Icons/DATA_DRIVEN.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Data-Driven Approach",
      description: "Unify your brand across every platform and device.",
    },
    {
      icon: (
        <Image
          src="/Icons/ROI.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "ROI-Focused Results",
      description: "Real-time dashboards for data-backed decisions.",
    },
  ];

  const [currentMetric, setCurrentMetric] = useState(0);

  const metrics = [
    { value: "30%", label: "Higher Lead Conversion", icon: Target },
    { value: "2.5x", label: "ROAS Improvement", icon: TrendingUp },
    { value: "40%", label: "Faster Sales Cycles", icon: Zap },
    { value: "25%", label: "Higher LTV", icon: BarChart3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          {/* Left Content - 624x500px area */}
          <div className="w-full lg:w-1/2 mb-0 animate-fade-in">
            <h1 className="group">
              Precision-Driven{" "}
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                Digital Growth
              </span>{" "}
              Influence decisions where digital journeys begin.
            </h1>

            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Data-Powered Omni-Channel Engineered for ROI.
            </h3>

            <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed mb-6 lg:mb-8 lg:!font-semibold !text-[#5C6371]">
              In a world where attention is fleeting, BISSBAY transforms
              clicks into conversions and impressions into revenue. Using
              AI-driven insights, proprietary data platforms, and strategic
              execution, we help brands dominate their industries.
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
          {/* Right Visual - 624x500px area */}
          <div className="w-full lg:w-1/2 bg-gray-100">
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">

              <div className="absolute inset-0">
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
                <div
                  className="absolute top-32 right-16 w-12 h-12 bg-primary/30 rounded-full animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-20 left-20 w-16 h-16 bg-primary/25 rounded-full animate-float"
                  style={{ animationDelay: "2s" }}
                ></div>


                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border-2 border-primary/20 rounded-full animate-rotate-slow"></div>
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-primary/30 rounded-full animate-rotate-slow"
                  style={{ animationDirection: "reverse" }}
                ></div>
              </div>


              <div className="relative z-10 text-center bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-100 animate-scale-in hover-lift">
                <div className="flex justify-center mb-4">
                  {React.createElement(metrics[currentMetric].icon, {
                    className: "h-12 w-12 text-primary",
                  })}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {metrics[currentMetric].value}
                </div>
                <div className="text-bissbay-black font-medium">
                  {metrics[currentMetric].label}
                </div>


                <div className="flex justify-center space-x-2 mt-4">
                  {metrics.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentMetric ? "bg-primary" : "bg-gray-300"
                        }`}
                    />
                  ))}
                </div>
              </div>


              <div
                className="absolute top-16 right-8 bg-white rounded-xl p-3 shadow-lg animate-fade-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-xs text-gray-500">Conversion Rate</div>
                <div className="text-sm font-bold text-primary">+127%</div>
              </div>

              <div
                className="absolute bottom-16 right-12 bg-white rounded-xl p-3 shadow-lg animate-fade-in"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-xs text-gray-500">ROI</div>
                <div className="text-sm font-bold text-primary">340%</div>
              </div>

              <div
                className="absolute bottom-32 left-8 bg-white rounded-xl p-3 shadow-lg animate-fade-in"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-xs text-gray-500">Lead Quality</div>
                <div className="text-sm font-bold text-primary">+89%</div>
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
                <div>{benefit.icon}</div>
                <h3  >{benefit.title}</h3>
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
};

export default HeroSection;
