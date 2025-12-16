"use client";
import React from "react";
const EventOffering = () => {
  const offerings = [
    "Custom Event Proposals : Tailored strategies aligned with your goals",
    "Speaker Acquisition : Secure top industry experts",
    "Registration & Attendee Management : Smooth, hassle-free experience",
    "Branded Event Pages : Professional landing pages and invitations",
    "Multi-Channel Promotion : Email, telemarketing, and digital campaigns",
    "On-Site Event Management : Event-day support to ensure flawless execution",
    "Post-Event Analytics : Track results to measure ROI and plan improvements",
    "Event Branding and Design : Create a cohesive and memorable event identity",
  ];

  return (
    <section>
      <h2 className="section-title text-center">
        Comprehensive <span className="text-primary">Event</span> Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {offerings.map((offering, index) => {
          const [beforeDash, afterDash] = offering.split(":");
          return (
            <div
              key={index}
              className="flex  items-start space-x-3 p-4 md:p-6 bg-white rounded-xl hover:shadow-md hover:scale-102 transition-all duration-300 animate-fade-in border-2 border-primary md:!border-white md:hover:!border-primary"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-bissbay-green font-bold">✔</div>
              <p className="text-gray-700 font-medium">
                <span className="font-bold text-[#1f2937]">
                  {beforeDash}
                </span>{" "}
                - {afterDash}.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EventOffering;