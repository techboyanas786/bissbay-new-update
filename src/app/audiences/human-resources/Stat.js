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
      src: "/logos/Workday_logo.png",
      name: "Workday",
      size: 160,
      top: "10%",
      left: "38%",
    },
    {
      src: "/logos/ZOHO_logo.png",
      name: "Zoho",
      size: 120,
      top: "50%",
      left: "65%",
    },
    {
      src: "/logos/cornerstone.png",
      name: "Glintic",
      size: 80,
      top: "72%",
      left: "30%",
    },
    {
      src: "/logos/phenom.png",
      name: "Phenom",
      size: 80,
      top: "40%",
      left: "56%",
    },
    { src: "/logos/UKG.png", name: "UKG", 
      size: 90,
      top: "25%",
      left: "65%"
    },
    {
      src: "/logos/Zendesk.png",
      name: "Zendesk",
      size: 70,
      top: "64%",
      left: "55%",
    },
    {
      src: "/logos/kainos.png",
      name: "Kainos",
      size: 110,
      top: "54%",
      left: "40%",
    },
    {
      src: "/logos/glint.svg",
      name: "Corner Stone",
      size: 70,
      top: "45%",
      left: "32%",
    },
    { src: "/logos/SAP.png", name: "SAP", 
      size: 130,
      top: "50%",
      left: "15%"
    },
    {
      src: "/logos/8x8_logo.png",
      name: "8x8",
      size: 90,
      top: "50%",
      left: "2%",
    },
    { src: "/logos/okta.png", name: "Okta", 
      size: 70,
      top: "30%",
      left: "14%"
    },
    {
      src: "/logos/citrix.png",
      name: "Citrix",
      size: 100,
      top: "20%",
      left: "24%",
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
      value: "1,820",
      label: "Vendor Insights",
      suffix: "",
      description: [
        "HR teams need solutions that simplify and optimize workflows. ",
        "At Bissbay, we use vendor insights aligned with HR buyer behaviors, helping you reach the most compatible markets with sharper targeting and perfectly timed outreach.",
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
      value: "4,700",
      label: "Assets Read",
      suffix: "",
      description: [
        "B2B HR buyers prefer self-education, engaging with content well before connecting with a vendor.",
        "Bissbay gives you visibility into the content HR decision-makers consume, so you can refine your messaging, time your outreach, and seamlessly align with their interests.",
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
      value: "17,000",
      label: "Insights Analyzed",
      suffix: "",
      description: [
        "HR prioritize are shifting rapidly. ",
        "Bissbay uncovers HR trends and changing needs,",
        "giving you the data to engage smarter and move faster.",
      ],
    },
  ];

  const assetsContent = [
    {
      img: "/images/HROkta.png",
      title: "Cover Your Bases: Best Practices for Protecting Remote Work",
    },
    {
      img: "/images/HREdudip.png",
      title:
        "Successful video communication for SMEs: KEMPER digitalizes Trainings and delights customers",
    },
    {
      img: "/images/HRSap.png",
      title: "7 Step Guide to ERP Transformation",
    },
    {
      img: "/images/HROkta2.png",
      title: "The Future Of Smart Working",
    },
    {
      img: "/images/HRBeyond.png",
      title: "Enable & Secure Your Remote Workforce",
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
                    <p
                      className={`${
                        stat.label === "Assets Read"
                          ? "text-center "
                          : "text-start"
                      } text-sm sm:text-base ${
                        stat.label === "Vendor Insights" || stat.label === "Insights Analyzed" 
                        ? "mb-4 md:mb-8" : ""
                      }`}
                    >
                      {stat.description.map((line, idx) => (
                        <span key={idx}>
                          {line}
                          { stat.label == "Vendor Insights" || stat.label === "Insights Analyzed" 
                              ? idx < stat.description.length - 1 && " " :
                              idx < stat.description.length - 1 && <br /> 
                          }
                        </span>
                      ))}
                    </p>
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
                  <p className="!text-center mt-4 md:mt-6 !text-xl hover:scale-105 duration-300 transition-all hover:!text-primary !font-bold">
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
          <span className="bg-primary h-1 w-full block"></span>
        </React.Fragment>
      ))}
    </section>
  );
};

export default Stats;
