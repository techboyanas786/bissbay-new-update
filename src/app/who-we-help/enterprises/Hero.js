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
              Your Growth Partner in
              <span className="sm:group-hover:!text-primary sm:!text-[#1f2937] !text-primary transition-colors duration-300 relative">
                {" "}
                Enterprise{" "}
              </span>
              Marketing
            </h1>
            <h3
              className="my-4 md:my-6 !text-primary"
              style={{ animationDelay: "0.2s" }}
            >
              Enterprise-grade strategy, content, and execution in one place.
            </h3>
            <h6 className="lg:!text-[1.125rem] mb-6 md:mb-8 lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
              We create clear, measurable digital marketing strategies that accelerate enterprise success.
              <br /> We don't just generate leads we build demand, align with
              sales, and turn marketing into a predictable growth engine.
            </h6>
            <div className="md:w-fit flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <Button
                variant="primary"
                customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                label="Scale Your Growth"
                onClick={() => setShowRequestProposal(true)}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-gray-100">
            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden animate-on-scroll">
              <img
                className="group-hover:scale-110 duration-1000 transition-all w-full h-full "
                src={"/images/EnterprisesScaling.jpeg"}
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
