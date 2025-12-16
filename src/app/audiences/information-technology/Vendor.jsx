import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useState } from "react";
import Image from "next/image";

function Vendor() {
  const stat = {
   
         icon: (
           <Image
             src="/Icons/SEO.svg"
             alt="Define Goals"
             className="flex-shrink-0"
             width={48}
             height={48}
           />
         ),
         value: "1,675",
         label: "Vendor Insights",
         suffix: "",
         description: [
           "From cloud security to IT teams and top trusted software solutions,",
           "our vendor ecosystem provides deep insights. Leverage these campaigns to go to market with speed and precision.",
         ],
  };
  const logos = [
    {
      src: "/logos/Microsoft_logo.png",
      name: "Microsoft",
      size: 160,
      top: "10%",
      left: "38%",
    },
    {
      src: "/logos/Oracle.png",
      name: "Oracle",
      size: 120,
      top: "50%",
      left: "65%",
    },
    {
      src: "/logos/HP_logo.png",
      name: "HP",
      size: 80,
      top: "72%",
      left: "30%",
    },
    {
      src: "/logos/Sentinel.png",
      name: "Sentinel One",
      size: 80,
      top: "40%",
      left: "56%",
    },
    {
      src: "/logos/imperva.png",
      name: "Imperva",
      size: 90,
      top: "25%",
      left: "65%",
    },
    {
      src: "/logos/WatchGuard.png",
      name: "Watch Guard",
      size: 70,
      top: "64%",
      left: "55%",
    },
    {
      src: "/logos/Intel.png",
      name: "Intel",
      size: 110,
      top: "54%",
      left: "40%",
    },
    { src: "/logos/okta.png", name: "Okta", 
      size: 70,
      top: "45%",
      left: "32%"
    },
    {
      src: "/logos/Dell.png",
      name: "Dell",
      size: 130,
      top: "50%",
      left: "15%",
    },
    {
      src: "/logos/Red_Hat_Logo.png",
      name: "Red Hat",
      size: 90,
      top: "50%",
      left: "2%",
    },
    { src: "/logos/SAP.png", name: "SAP", 
      size: 70,
      top: "30%",
      left: "14%"
    },
    {
      src: "/logos/mimecast.png",
      name: "Mimecast",
      size: 100,
      top: "20%",
      left: "24%",
    },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-6`}
    >
      {/* Left Section */}
      <div className={`flex py-0 flex-col items-start flex-[55]`}>
        <div className="flex flex-row items-center gap-2">
          {stat.icon}
          <h2 className="text-[28px] sm:text-[36px] !mb-0 !text-primary">
            {stat.value}
          </h2>
        </div>
        <h1 className="text-xl sm:text-2xl">{stat.label}</h1>
        <div className="mt-4 sm:mt-6">
          <p className={`text-start text-sm sm:text-base mb-4 md:mb-8`}>
            {stat.description.map((line, idx) => (
              <span key={idx}>{line} <br /></span>
            ))}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
          <Button
            variant="primary"
            onClick={() => setOpen(true)}
            customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
            label="Schedule Your Consultation"
          />
          <BookingModal isOpen={open} onClose={() => setOpen(false)} />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:scale-100 max-w-[850px] min-h-[200px] aspect-[2/1] mx-auto flex-[45]">
        {logos.map((logo, index) => {
          const vwSize = (logo.size / 1920) * 100;
          const animationDuration = `${6 + (index % 5)}s`;
          return (
            <div
              key={index}
              className="absolute border-gray-200 border-2 animate-float p-1 hover:scale-105 duration-500 transition-all rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden"
              style={{
                top: logo.top,
                left: logo.left,
                animationDuration,
                width: `${vwSize}vw`,
                height: `${vwSize}vw`,
                minWidth: `${logo.size * 0.5}px`,
                minHeight: `${logo.size * 0.5}px`,
                maxWidth: `${logo.size}px`,
                maxHeight: `${logo.size}px`,
              }}
            >
              <Image
                src={logo.src}
                alt="logo"
                title={logo.name}
                width={logo.size * 0.8}
                height={logo.size * 0.8}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Vendor;
