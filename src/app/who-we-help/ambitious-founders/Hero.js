"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import RequestProposalPopup from "@/components/RequestProposalPopup";
const Hero = () => {
  const [showRequestProposal, setShowRequestProposal] = useState(false);

  return (
    <>
      <section className="relative z-10">
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group">
              Marketing That Delivers for
              <span className="group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                Founders{" "}
              </span>
              Who Mean Business
            </h1>
            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Marketing support to grow faster, look sharper, and sell better.
            </h3>
            <h6 className="lg:!text-[1.125rem] mb-6 md:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              Founders who mean business need marketing that works.
              <br className="hidden sm:block" /> Bissbay provides world-class marketing solutions built for founders like you.
              <br className="hidden sm:block" /> With our data-driven strategies, we help you scale faster and achieve measurable revenue growth.
            </h6>
            <div className="flex md:w-fit flex-col sm:flex-row gap-4 animate-on-scroll">
              <Button
                variant="primary"
                customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                label="Scale Your Growth" onClick={() => setShowRequestProposal(true)}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-100">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden animate-on-scroll">
              <img
                className="w-full h-full"
                src={"/images/FounderHero.jpg"}
              />
            </div>
          </div>
        </div>
      </section>
      <RequestProposalPopup
        isOpen={showRequestProposal}
        onClose={() => setShowRequestProposal(false)}
      />
    </>
  );
};

export default Hero;
