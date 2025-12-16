"use client";
import Button from "@/components/Button";
import RequestProposalPopup from "@/components/RequestProposalPopup";
import {
  Calendar,
  Presentation,
  Cog,
  Video,
  Building,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const ServicesSection = () => {
  const [showRequestProposal, setShowRequestProposal] = useState(false);
  const services = [
    {
      icon: Calendar,
      title: "Event Strategy and Planning",
      description:
        "From ideation to execution, we craft comprehensive event strategies aligned with your business goals.",
    },
    {
      icon: Presentation,
      title: "Exhibition Management",
      description:
        "Maximize your presence at industry events with our expert management and strategic positioning.",
    },
    {
      icon: Cog,
      title: "Event Technology & Production",
      description:
        "Leverage advanced technology for flawless execution.",
    },
    {
      icon: Video,
      title: "Streaming Solutions",
      description:
        "High-quality virtual & hybrid event execution with professional broadcasting capabilities.",
    },
    {
      icon: Building,
      title: "Custom Event Spaces",
      description:
        "Unique, branded event environments designed to reflect your brand and engage your audience.",
    },
    {
      icon: TrendingUp,
      title: "Ready to Elevate Events?",
      description: "See how our event strategy grows your business.",
    },
  ];

  return (
    <>
      <section>
        <div className="text-center animate-fade-in">
          <h2 className="section-title !mb-0">
            <span className="text-primary">Event </span>Services
          </h2>
          <h3 className="my-4 md:my-6">
            We plan, design, and execute high-performance events tailored to
            your audience.
            <br /> With extensive experience in business events, we know exactly
            what it takes to deliver success.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group metric-card hover-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <service.icon className="medium-icon flex-shrink-0" />
                  <h5 className="mb-0">{service.title}</h5>
                </div>
                <div>
                  <p>{service.description}</p>
                  {service.title === "Ready to Elevate Events?" && (
                    <div className="w-full mt-4 flex justify-center">
                      <Button
                        variant="outline"
                        customClass="cursor-pointer hover:scale-105"
                        label="Get Your Custom Proposal"
                        onClick={() => setShowRequestProposal(true)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <RequestProposalPopup
        isOpen={showRequestProposal}
        onClose={() => setShowRequestProposal(false)}
      />
    </>
  );
};

export default ServicesSection;
