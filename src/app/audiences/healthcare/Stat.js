// src/components/Stats.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import dynamic from "next/dynamic";
const WorldCloud = dynamic(() => import("./WorldCloud"), { ssr: false });
import { BarChart, LineChart, Users } from "lucide-react";
import BookingModal from "@/components/BookingModal";

const Stats = () => {
  const [open, setOpen] = useState(false);
  const stats = [
    {
      icon: (
        <Image
          src="/Icons/SEO.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      value: "700",
      label: "Vendor Insights",
      suffix: "",
      description: [
        "Healthcare buyers turn to tech for smoother workflows and better outcomes. ",
        "Bissbay helps you tap into them with smarter, data-driven insights",
      ],
    },
    {
      icon: (
        <Image
          src="/Icons/CULTIVATING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      value: "1,400",
      label: "Assets Read",
      suffix: "",
      description: [
        "Buyers in the Healthcare explore solutions on their own terms.",
        "We reveal what they read, what they want, and how to say it, so you can lead the conversation.",
      ],
    },
    {
      icon: (
        <Image
          src="/Icons/Insights_Analyzed.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      value: "7,700",
      label: "Insights Analyzed",
      suffix: "",
      description: [
        "Healthcare decision-making is changing rapidly.",
        "BISSBAY tracks the signals that reveal buyers’ needs and the best time to engage.",
      ],
    },
  ];
  const assetsContent = [
    {
      img: "/images/HCLookout.png",
      title: "Securing Healthcare Against Ransomware Post-COVID-19",
    },
    {
      img: "/images/HCImperva.png",
      title: "14 Questions, I answer you for Application security stars solten",
    },
    {
      img: "/images/HCBox.png",
      title: "Cloud Content Management: Simplify the way you work",
    },
    {
      img: "/images/HCIllumina.png",
      title: "6 Steps to Implementing a Zero Trust Model",
    },
    {
      img: "/images/HCOkta.png",
      title: "Customer Identity & Access Management (CIAM)",
    },
  ];

  const logos = [
    {
      src: "/logos/Illumina.png",
      name: "Illumina",
      size: 160,
      top: "10%",
      left: "38%",
    },
    {
      src: "/logos/Mitek.png",
      name: "Mitek Systems",
      size: 120,
      top: "50%",
      left: "65%",
    },
    { src: "/logos/SAP.png", name: "SAP", 
      size: 80,
      top: "72%",
      left: "30%"
    },
    {
      src: "/logos/Amazon.png",
      name: "Amazon",
      size: 80,
      top: "40%",
      left: "56%",
    },
    {
      src: "/logos/Box_logo.png",
      name: "Box",
      size: 90,
      top: "25%",
      left: "65%",
    },
    {
      src: "/logos/IBM_logo.png",
      name: "IBM",
      size: 70,
      top: "64%",
      left: "55%",
    },
    {
      src: "/logos/okta.png",
      name: "Okta",
      size: 110,
      top: "54%",
      left: "40%",
    },
    {
      src: "/logos/Sentinel.png",
      name: "Sentinel One",
      size: 70,
      top: "45%",
      left: "32%",
    },
    {
      src: "/logos/imperva.png",
      name: "Imperva",
      size: 130,
      top: "50%",
      left: "15%",
    },
    {
      src: "/logos/Risksense.png",
      name: "Risksense",
      size: 90,
      top: "50%",
      left: "2%",
    },
    {
      src: "/logos/Cloudflare_Logo.png",
      name: "Cloudflare",
      size: 70,
      top: "30%",
      left: "14%",
    },
    {
      src: "/logos/oracleHealth.png",
      name: "Oracle Health Sciences",
      size: 100,
      top: "20%",
      left: "24%",
    },
  ];
  return (
    <section id="stats" className="flex flex-col gap-4 md:gap-12">
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div key={index}>
            {/* Left Section */}
            <div
              className={`flex flex-col md:${
                stat.label === "Assets Read" ? "flex-col" : "flex-row "
              }
              ${stat.label === "Assets Read" ? "items-center" : "items-start"}
              justify-between gap-4 sm:gap-6`}
            >
              <div
                className={`flex flex-col items-center ${
                  stat.label === "Assets Read" ? "items-center" : "items-start"
                } ${(stat.label === "Vendor Insights" || stat.label === "Insights Analyzed") && "flex-[55]"}`} 
              >
                <div className="flex flex-row items-center gap-2">
                  {stat.icon}
                  <h2 className="text-[28px] sm:text-[36px] !mb-0 !text-primary">
                    {stat.value}
                  </h2>
                </div>
                <h1 className="text-xl sm:text-2xl">{stat.label}</h1>
                <div className="mt-4 sm:mt-6">
                  {Array.isArray(stat.description) ? (
                    stat.description.map((line, idx) => (
                      <p
                        key={idx}
                        className={`${
                          stat.label === "Assets Read"
                            ? "text-center "
                            : "text-start"
                        } text-sm sm:text-base ${
                          (idx == stat.description.length - 1 && (stat.label === "Insights Analyzed" || stat.label === "Vendor Insights"))
                            ? "mb-4 md:mb-8" : ""
                        }`}
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p
                      className={`text-sm max-w-md ${
                        stat.label === "Assets Read"
                          ? "text-center "
                          : "text-start"
                      } sm:text-base`}
                    >
                      {stat.description}
                    </p>
                  )}

                  {stat.label === "Insights Analyzed" && (
                    <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                      <Button
                        variant="primary"
                        onClick={() => setOpen(true)}
                        customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                        label="Book a call"
                      />
                    </div>
                  )}

                  {stat.label === "Vendor Insights" && (
                    <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                      <Button
                        variant="primary"
                        onClick={() => setOpen(true)}
                        customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                        label="Schedule Your Consultation"
                      />
                      <BookingModal
                        isOpen={open}
                        onClose={() => setOpen(false)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right Section */}
              {stat.label === "Insights Analyzed" && (
                <div className="w-full md:w-1/2 flex-[45]">
                  <WorldCloud />
                </div>
              )}

              {stat.label === "Assets Read" && (
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-4 md:gap-8 md:grid-cols-5">
                    {assetsContent.map((content, index) => (
                      <div
                        key={index}
                        className="group cursor-pointer w-full bg-[#ff420011] sm:bg-white sm:p-0 p-2 sm:rounded-none rounded-xl aspect-auto flex flex-col gap-4"
                      >
                        <div className="rounded-xl shadow-xl border border-gray-500 overflow-hidden w-full h-80">
                          <img
                            src={content.img}
                            alt={content.title}
                            title={content.name}
                            className="group-hover:scale-110 duration-1000 transition-all object-cover object-top w-full h-full"
                          />
                        </div>
                        <h4 className="!text-base !text-center">
                          {content.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                  <h3 className="!text-center !text-xl hover:scale-105 duration-300 transition-all hover:!text-primary !font-bold gap-4 md:gap-8">
                    Put your content where your buyers are
                  </h3>
                </div>
              )}

              {stat.label === "Vendor Insights" && logos && (
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
              )}
            </div>
          </div>
          <span className="bg-primary h-1 w-full block"></span>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Stats;
