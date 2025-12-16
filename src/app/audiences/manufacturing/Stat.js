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
  const logos = [
    {
      src: "/logos/HP_logo.png",
      name: "HP",
      size: 160,
      top: "10%",
      left: "38%",
    },
    {
      src: "/logos/Intel.png",
      name: "Intel",
      size: 120,
      top: "50%",
      left: "65%",
    },
    {
      src: "/logos/BAE_Systems_logo.png",
      name: "Bae Systems",
      size: 80,
      top: "72%",
      left: "30%",
    },
    {
      src: "/logos/Aruba.png",
      name: "Aruba",
      size: 80,
      top: "40%",
      left: "56%",
    },
    { src: "/logos/Mii.png", name: "Mii", 
      size: 90,
      top: "25%",
      left: "65%"
    },
    {
      src: "/logos/Zebra.png",
      name: "Zebra",
      size: 70,
      top: "64%",
      left: "55%",
    },
    {
      src: "/logos/Rohde.png",
      name: "Rohde & Sonwarz",
      size: 110,
      top: "54%",
      left: "40%",
    },
    {
      src: "/logos/vmware.png",
      name: "VMWARE",
      size: 70,
      top: "45%",
      left: "32%",
    },
    {
      src: "/logos/Hitachi_logo.png",
      name: "Hitachi",
      size: 130,
      top: "50%",
      left: "15%",
    },
    {
      src: "/logos/Fujitsu.png",
      name: "Fujitsu",
      size: 90,
      top: "50%",
      left: "2%",
    },
    {
      src: "/logos/AutoDesk.png",
      name: "Auto Desk",
      size: 70,
      top: "30%",
      left: "14%"
    },
    { src: "/logos/Bosch-logo.png", 
      size: 100,
      top: "20%",
      left: "24%"
    },
  ];

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
        "Manufacturers are embracing technology to boost productivity and streamline operations.",
        "BISSBAY connects you with the right buyers, delivering insights that drive engagement and results.",
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
      value: "1,490",
      label: "Assets Read",
      suffix: "",
      description: [
        "Manufacturing buyers explore solutions on their own terms.",
        "BISSBAY uncovers what they read, watch, and trust so you can influence their journey and lead the conversation.",
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
      value: "7,900",
      label: "Insights Analyzed",
      suffix: "",
      description: [
        "Manufacturing decision-making is driven by insights and evolving faster.",
        "Bissbay tracks key signals so you can meet buyers’ needs and trends, generating maximum impact.",
      ],
    },
  ];

  const assetsContent = [
    {
      img: "/images/ManufactureEsker.png",
      title: "Complement Your RPA Investment With AI-Based Features",
    },
    {
      img: "/images/ManufactureForrester.png",
      title:
        "The Forrester Wave™: Infrastructure Automation Platforms, Q3 2019",
    },
    {
      img: "/images/ManufactureHitachi.png",
      title: "How Hitachi Content Intelligence Makes Key Industries Smarter",
    },
    {
      img: "/images/ManufactureHitachi2.png",
      title: "Five challenges to overcome when modernizing your infrastructure",
    },
    {
      img: "/images/ManufactureVMware.png",
      title: "Global Security Insights Report",
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
                      { stat.label === "Vendor Insights" || stat.label === "Insights Analyzed" 
                              ? idx < stat.description.length - 1 && " " :
                              idx < stat.description.length - 1 && <br /> 
                          }
                    </p>
                  ))
                ) : (
                  <p
                    className={`text-sm max-w-md ${
                      stat.label === "Assets Read"
                        ? "text-center "
                        : "text-start"
                    } sm:text-base mb-4 md:mb-8`}
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
                <p className="md:mt-6 mt-4 !text-center !text-xl hover:scale-105 duration-300 transition-all hover:!text-primary !font-bold">
                  Put your content where your buyers are
                </p>
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
        <span className="bg-primary h-1 w-full block "></span>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Stats;
