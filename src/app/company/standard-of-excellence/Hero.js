"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import { Award, Globe, Shield } from "lucide-react";
import RequestProposalPopup from "@/components/RequestProposalPopup";
const Hero = () => {
  const [showRequestProposal, setShowRequestProposal] = useState(false);

  return (
    <>
      <section className="pt-[115px] pb-12 px-12">
        <div className="container mx-auto">
          <div className="flex flex-col h-[500px] lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="group">
                Maintaining a <br />
                <span className="group-hover:!text-primary transition-colors duration-300 relative">
                  {" "}
                  Standard of Excellence{" "}
                </span>
              </h1>
              <p className="!my-6">
                We are dedicated to providing best-in-class services and solutions across industries and regions.<br /> Our unwavering commitment to excellence ensures that every project is executed to the highest standards, driving measurable success for our clients.
              </p>
              <div className="inline-flex items-center space-x-8 text-sm font-medium text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Globe className="small-icon" />
                  <span>Global Standards</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="small-icon" />
                  <span>ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="small-icon" />
                  <span>Security Compliant</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Button
                  variant="primary"
                  customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                  label="Scale Your Growth" onClick={() => setShowRequestProposal(true)}
                />
              </div>
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
