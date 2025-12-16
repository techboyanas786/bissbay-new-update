"use client";
import React from "react";
import IT from "./IT.json";
import dynamic from "next/dynamic";
import { ContactButton } from "@/components/ContactModal";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import { useTranslation } from "react-i18next";


const Hero = () => {
  const { t } = useTranslation('translation');

  return (
    <section className="container mx-auto relative z-10 overflow-hidden">
      <div className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-6 lg:gap-8">
          <div className="w-full md:w-1/2 mb-0">
            <h1 className="group">
              Strategic
              <span className="group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Information Technology{" "}
              </span>
              Audience
            </h1>
            <h3
              className="my-4 md:my-6 group !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Tap into a network of{" "}
              <span className="group-hover:text-[#1f2937] duration-300 transition-all text-primary text-xl md:text-[36px]">
                24.8M+
              </span>{" "}
              Tech buyers.
            </h3>
            <h6 className="lg:!text-[1.125rem] mb-6 sm:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              As IT buyers navigate today’s tech landscape,<br className="hidden sm:block" /> we connect your
              brand with their evolving needs and priorities.
            </h6>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <ContactButton label={t('hero.button')} variant="primary" />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-gray-100">
            <Lottie className="relative h-[400px] md:h-[500px] animate-on-scroll" animationData={IT} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
