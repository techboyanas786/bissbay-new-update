"use client";
import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import CaseStudiesPopup from "@/components/CaseStudiesPopup";
import MagicBento from "@/components/MagicBento";
import {
  Users,
  Clock,
  TrendingUp,
  Target,
  LineChart,
  BarChart3,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
      title: "Proactive Targeting",
      description: "Predictive intent signals identify in-market prospects.",
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
      title: "Align sales & marketing",
      description: "Seamless lead handoffs drive higher conversions.",
    },
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
      title: "Extended Lead Nurture",
      description: "Keep your brand top of mind until buyers are ready.",
    },
    {
      icon: (
        <Image
          src="/Icons/SCALING.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Maximize ROI",
      description: "Cut wasted spend and double down on what works.",
    },
  ];
  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group">
              Your End-to-End
              <span className="!text-primary md:!text-inherit md:group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Demand Generation
              </span>{" "}
              Powerhouse
            </h1>
            <h3
              className="my-4 lg:my-6 !text-primary transition-colors duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              Ignite Demand Accelerate Growth
            </h3>
            <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed mb-6 lg:mb-8 lg:!font-semibold !text-[#5C6371]">
              Growth isn't accidental, it's engineered.
              <br />
              At BISSBAY, we don't just generate leads; we build
              high-performance revenue engines that transform interest into
              real pipeline and closed deals.
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
                label="View Case Studies"
                onClick={() => setIsCaseStudiesOpen(true)}
              />
            </div>
          </div>

          <div className="w-full bg-gray-100 lg:w-1/2">
            <div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-gradient rounded-3xl p-4 md:p-8 relative mt-6 md:mt-0 h-[300px] md:h-[500px]"
              style={{ maxWidth: "624px" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <div
                    className="absolute top-8 left-4 md:top-1/4 md:left-1/4 bg-white p-2 md:p-6 rounded-xl shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <LineChart
                      size={24}
                      className="md:!w-12 md:!h-12 text-primary mb-1 md:mb-2"
                    />
                    <div className="h-1.5 w-12 md:h-2 md:w-20 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="absolute top-28 right-4 md:top-1/2 md:right-1/4 bg-white p-2 md:p-6 rounded-xl shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 4.5,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <Target
                      size={24}
                      className="md:!w-12 md:!h-12 text-primary mb-1 md:mb-2"
                    />
                    <div className="h-1.5 w-12 md:h-2 md:w-20 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-20 left-4 md:bottom-1/4 md:left-1/3 bg-white p-2 md:p-6 rounded-xl shadow-lg"
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 5,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <BarChart3
                      size={24}
                      className="md:!w-12 md:!h-12 text-primary mb-1 md:mb-2"
                    />
                    <div className="h-1.5 w-12 md:h-2 md:w-20 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                    </div>
                  </div>

                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 md:p-8 rounded-full shadow-xl"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  >
                    <Cpu size={32} className="md:!w-16 md:!h-16 text-primary" />
                  </div>

                  <svg
                    className="absolute inset-0 w-full h-full"
                    style={{ zIndex: -1 }}
                  >
                    <path
                      d="M180,150 Q250,120 320,250"
                      stroke="#FF4200"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 2 }}
                    />
                    <path
                      d="M400,180 Q350,220 320,250"
                      stroke="#FF4200"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 2, delay: 0.5 }}
                    />
                    <path
                      d="M250,350 Q280,300 320,250"
                      stroke="#FF4200"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.3 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                  </svg>
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
