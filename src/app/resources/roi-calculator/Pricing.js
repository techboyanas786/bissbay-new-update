"use client";
import Button from "@/components/Button";
import { ContactButton } from "@/components/ContactModal";
import RequestProposalPopup from "@/components/RequestProposalPopup";
import {
  Calendar,
  Mail,
  Linkedin,
  Phone,
  MessageCircle,
  Target,
  DollarSign,
  Check,
  X,
  Headphones,
} from "lucide-react";
import React, { useState } from "react";

function Pricing() {
  const [showRequestProposal, setShowRequestProposal] = useState(false);
  const features = [
    {
      icon: <Mail className="small-icon" />,
      name: "Cold email outreach",
      tooltip:
        "Targeted email campaigns optimized for deliverability to capture attention, nurture leads, and secure appointments.",
      growth: true,
      growthPlus: true,
      smallBusiness: true,
    },
    {
      icon: <Linkedin className="small-icon" />,
      name: "LinkedIn outreach",
      tooltip:
        "Professional LinkedIn engagement designed to build connections and drive lead generation.",
      growth: true,
      growthPlus: true,
      smallBusiness: true,
    },
    {
      icon: <Headphones className="small-icon" />,
      name: "Intent-based cold calling",
      tooltip:
        "Intent-based phone engagement that accelerates lead qualification and appointment setting.",
      growth: true,
      growthPlus: true,
      smallBusiness: false,
    },
    {
      icon: <Phone className="small-icon" />,
      name: "Cold calling / Voicemails",
      tooltip:
        "Outbound calls supported by personalized voicemails to engage potential buyers.",
      growth: false,
      growthPlus: true,
      smallBusiness: false,
    },
    {
      icon: <MessageCircle className="small-icon" />,
      name: "Messenger / WhatsApp",
      tooltip:
        "Hyper-targeted marketing aimed at top-priority accounts for stronger sales outcomes.",
      growth: true,
      growthPlus: true,
      smallBusiness: false,
    },
    {
      icon: <Target className="small-icon" />,
      name: "Account-Based Marketing",
      tooltip:
        "A strategy focusing marketing and sales efforts on a specific set of high-value target accounts.",
      growth: false,
      growthPlus: true,
      smallBusiness: false,
    },
    {
      icon: <DollarSign className="small-icon" />,
      name: "Paid advertising",
      tooltip:
        "Multi-channel ad campaigns activated throughout the buyer journey to capture and convert.",
      growth: false,
      growthPlus: true,
      smallBusiness: false,
    },
  ];

  const EnterprisePoints = {
    stratergy: [
      ["End-to-end strategies customized for every channel and customer touchpoint"],
      ["Seamless integrations with your CRM, analytics, and internal platforms"],
      [
        "Enterprise-level orchestration of both inbound and outbound programs",
      ],
      ["Direct access to a dedicated Center of Excellence with extended availability"],
    ],
    data: [
      "Team composition, expertise, and structure aligned with your workflows",
      "Custom SLAs and flexible contracts tailored to enterprise procurement needs",
      "On-demand access to all specialized add-on services whenever required",
      "Built-in compliance with SOC 2, ISO, and data privacy standards across all workflows",
    ],
  };

  return (
    <>
      <div className="p-12 ">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center">
            Pricing <span className="text-primary">Plans</span>
          </h1>
          <h4 className="text-center my-6 text-gray-600 mx-auto">
            Check out our monthly packages, designed around your growth
            objectives, markets, and channels.
          </h4>
          <div className=" mx-auto relative">
            <div className="grid grid-cols-4 ">
              <div></div>
              <div></div>
              <div className="text-xs font-semibold rounded-t-lg text-white flex items-center justify-center bg-primary">
                Best value
              </div>
              <div></div>
            </div>
            <div className="bg-white border-1 border-gray-200 rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 w-fit">
                <div className="bg-white p-4 border-r flex flex-col items-center justify-center border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    Core Features
                  </h3>
                </div>

                <div className="bg-white gap-4 flex flex-col items-center justify-center p-4 border-r border-gray-200">
                  <h5  >Scale</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Designed for organizations seeking rapid growth, extended
                    market presence, and effective multi-channel engagement.
                  </p>
                </div>

                <div className="bg-white gap-4 flex flex-col items-center justify-start p-4 border-r border-gray-200">
                  <h5  >Next-Level Growth</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    For marketing leaders aiming to dominate new markets with
                    comprehensive and scalable outreach.
                  </p>
                  {/* <div className="absolute min-w-sm text-xs font-semibold left-1/2 rounded-t-lg px-3 py-1 -top-0 -translate-y-6 text-white flex items-center justify-center bg-primary">
                Best value
              </div> */}
                </div>
                <div className="bg-white gap-4 flex flex-col items-center justify-start p-4 border-r border-gray-200">
                  <h5  >SMB Advantage</h5>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strategies designed for lean teams without compromising
                    quality. Bissbay delivers tailored solutions to keep your
                    growth on track.
                  </p>
                </div>
              </div>

              {/* Appointment Numbers Row */}
              <div className="grid grid-cols-4 border-t border-gray-200">
                <div className="p-4 border-r flex items-center justify-start gap-3 border-gray-200">
                  <Calendar className="small-icon" />
                  <p className="!font-semibold cursor-pointer group decoration-primary underline underline-offset-4 decoration-dotted !text-[#1f2937]">
                    Yearly appointments
                    <span className="absolute left-[14%] -translate-y-30 mb-2 hidden w-64 text-sm text-white bg-gray-800 p-2 rounded-md shadow-lg group-hover:block z-10">
                      Yearly goal for booked appointments across all outreach
                      efforts to support sales.
                    </span>
                  </p>
                </div>
                <div className="p-4 border-r border-gray-200 text-center">
                  <p className="!font-semibold !text-[#1f2937]">100+</p>
                </div>
                <div className="p-4 border-r border-gray-200 text-center ">
                  <p className="!font-semibold !text-[#1f2937]">200+</p>
                </div>
                <div className="p-4 text-center">
                  <p className="!font-semibold !text-[#1f2937]">30+</p>
                </div>
              </div>

              {/* Features Rows */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-4 border-t border-gray-200"
                >
                  <div className="relative p-4 border-r border-gray-200 flex items-center gap-3">
                    {feature.icon}
                    <p className="!font-semibold cursor-pointer group underline decoration-primary underline-offset-4 decoration-dotted !text-[#1f2937]">
                      {feature.name}

                      {feature.tooltip && (
                        <span className="absolute left-12 bottom-[80%] mb-2 hidden w-64 text-sm text-white bg-gray-800 p-2 rounded-md shadow-lg group-hover:block z-10">
                          {feature.tooltip}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="p-4 border-r border-gray-200 flex items-center justify-center">
                    {feature.growth ? (
                      <Check className="small-icon !text-[#72bf44]" />
                    ) : (
                      <X className="small-icon !text-[#5c6371]" />
                    )}
                  </div>

                  <div className="p-4 border-r border-gray-200 flex items-center justify-center ">
                    {feature.growthPlus ? (
                      <Check className="small-icon !text-[#72bf44]" />
                    ) : (
                      <X className="small-icon !text-[#5c6371]" />
                    )}
                  </div>

                  <div className="p-4 flex items-center justify-center">
                    {feature.smallBusiness ? (
                      <Check className="small-icon !text-[#72bf44]" />
                    ) : (
                      <X className="small-icon !text-[#5c6371]" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500 !font-semibold leading-relaxed">
              All packages, at any price point, provide: full sales audit and strategy mapping, total addressable market calculation and buyer profile refinement, manual lead research and validation,<br /> transparent reports, copywriting and editing, appointment scheduling and no-show recovery, continuous data-driven optimizations, and tech support.
            </p>
          </div>
          <div className="flex container rounded-2xl h-fit p-8 shadow-lg border-gray-200 border gap-8 mx-auto bg-gray-50 mt-8 items-center justify-center">
            <div className="flex flex-col gap-2 items-start justify-evenly">
              <h5>Enterprise</h5>
              <p className="!font-semibold pt-2 pb-6 max-w-lg">
                Designed for teams that need personalized strategies and the freedom to shape every aspect of their outreach.
              </p>
              <ContactButton
                label="Discuss tailored pricing"
                variant="primary"
              />
            </div>
            <div className="grid grid-cols-2 gap-2 items-center justify-center">
              <div className="grid grid-rows-4 gap-2 items-center">
                {EnterprisePoints.stratergy.map((point, ind) => (
                  <div key={ind} className="flex gap-3 min-h-16 rounded-sm items-start justify-start py-2 px-4 border border-gray-200">
                    <div className="bullet-point mt-2"></div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-rows-4 gap-2 items-center">
                {EnterprisePoints.data.map((point, ind) => (
                  <div key={ind} className="flex gap-3 rounded-sm min-h-16 items-start justify-start py-2 px-4 border border-gray-200">
                    <div className="bullet-point mt-2"></div>
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col shadow-lg rounded-lg border-gray-200 border gap-8 max-w-5xl mx-auto p-12 bg-gray-50 mt-8 items-center justify-center">
            <h2 className="!text-center">
              Talk to our expert to find out
              <br />
              what pricing plan suits you more
            </h2>
            <Button label="Lets discuss your growth" variant="primary" onClick={() => setShowRequestProposal(true)} />
          </div>
        </div>
      </div>
      <RequestProposalPopup
        isOpen={showRequestProposal}
        onClose={() => setShowRequestProposal(false)}
      />
    </>
  );
}

export default Pricing;
