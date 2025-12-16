"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import RequestProposalPopup from "@/components/RequestProposalPopup";
const Hero = () => {
  const [showRequestProposal, setShowRequestProposal] = useState(false);

  return (
    <>
      <section>
        <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
          <div className="w-full lg:w-1/2 mb-0">
            <h1 className="group">
              For
              <span className="group-hover:!text-primary transition-colors duration-300 relative">
                {" "}
                VCs{" "}
              </span>
              Backing Startups That Need Marketing to Scale
            </h1>
            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Marketing that helps your portfolio scale and deliver faster
              returns.
            </h3>
            <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed mb-4 md:mb-6 lg:!font-semibold !text-[#5C6371]">
              Results-oriented B2B marketing solutions for businesses of all
              sizes and industries.<br /> Bissbay helps portfolio companies
              accelerate growth by turning strategies into measurable revenue.
            </h6>
            <div className="md:w-fit flex flex-col md:flex-row gap-4 animate-on-scroll justify-center md:justify-start">
              <Button
                variant="primary"
                label="Scale Your Growth"
                customClass="text-base"
                onClick={() => setShowRequestProposal(true)}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-100">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden animate-on-scroll">
              <img
                className="w-full h-full"
                src={"/images/VentureHero.jpg"}
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
