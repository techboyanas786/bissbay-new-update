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
                  Marketing Leaders{" "}
                </span>
                Who Need a True Marketing Partner
              </h1>
              <h3
                className="my-4 md:my-6 !text-primary"
                style={{ animationDelay: "0.2s" }}
              >
                A partner to execute, scale, and show marketing’s impact.
              </h3>
            <h6 className="lg:!text-[1.125rem] mb-6 md:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
                Strategic, results-oriented B2B marketing solutions for businesses
                across all industries.
                <br className="hidden sm:block" />{" "}
                Bissbay helps marketing leaders drive measurable revenue growth
                through effective strategies.
              </h6>
              <div className="md:w-fit flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Button
                  variant="primary"
                  customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                  label="Scale Your Growth" onClick={() => setShowRequestProposal(true)}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden animate-on-scroll">
                <img
                  className="w-full h-full"
                  src={"/images/LeadersHero.jpg"}
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
