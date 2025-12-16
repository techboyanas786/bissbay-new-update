"use client";
import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import { Network, Laptop, Users2Icon, Rocket, MapPin } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { RiDiscussLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";

function EventType() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const eventTypes = [
    {
      icon: <RiDiscussLine className="medium-icon" />,
      title: "Panel Discussions",
      description: "Small, high-value gatherings for decision-makers.",
      color: "bg-blue-500",
    },
    {
      icon: <Network className="medium-icon" />,
      title: "Networking Events",
      description: "Create opportunities to connect key B2B stakeholders.",
      color: "bg-green-500",
    },
    {
      icon: <Laptop className="medium-icon" />,
      title: "Webinars",
      description: "Lead-generating, interactive online experiences.",
      color: "bg-purple-500",
    },
    {
      icon: <Users2Icon className="medium-icon" />,
      title: "Conferences",
      description:
        "Large-scale gatherings with multiple sessions.",
      color: "bg-indigo-500",
    },
    {
      icon: <Rocket className="medium-icon" />,
      title: "Product Launches",
      description: "Memorable unveilings of new offerings.",
      color: "bg-pink-500",
    },
    {
      icon: <MapPin className="medium-icon" />,
      title: "Roadshows",
      description: "Multi-city events to expand brand visibility.",
      color: "bg-yellow-500",
    },
    {
      icon: <Image
        src="/Icons/SUCCESS.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      title: "Appreciation Events",
      description: "Build loyalty with VIP, partner, or award events.",
      color: "bg-red-500",
    },
    {
      icon: <TbTargetArrow className="medium-icon" />,
      title: "Ready to boost your Event Strategy?",
      description: "",
      color: "bg-red-500",
    }
  ];

  return (
    <>
      <section>
        <div className="text-center ">
          <h2 className="section-title">
            Types of <span className="text-primary" >Events</span> We Execute
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="group metric-card hover-card"
            >
              <div className="flex flex-row w-full items-center justify-start gap-2 mb-2">
                {event.icon}
                <h5  >
                  {event.title}
                </h5>
              </div>

              {index === 7 ? (
                <div className="mt-4 flex justify-center w-full">
                  <Button
                    variant="primary"
                    customClass=" transform transition-all duration-300 ease-in-out"
                    label="Schedule Your Consultation"
                    onClick={() => setIsModalOpen(true)}
                  />
                </div>
              ) : (
                <>
                  <p  >
                    {event.description}
                  </p>
                  <div className="mt-2 flex items-center text-bissbay-green opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs font-semibold">✅ Proven Success</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

export default EventType;