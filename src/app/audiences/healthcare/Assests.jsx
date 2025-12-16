// src/components/Stats.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

const Assets = () => {
  const stat = {
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
    
  };
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

  return (
     <div
            className={`flex flex-col items-center justify-between gap-4 sm:gap-6`}
        >
            {/* top Section */}
            <div className={`flex py-0 flex-col items-center`}>
                <div className="flex flex-row items-center gap-2">
                    {stat.icon}
                    <h2 className="text-[28px] sm:text-[36px] !mb-0 !text-primary">
                        {stat.value}
                    </h2>
                </div>
                <h1 className="text-xl sm:text-2xl">{stat.label}</h1>
                <div className="mt-4 sm:mt-6">
                    <p
                        className={`text-center text-sm sm:text-base`}
                    >
                        {stat.description.map((line, idx) => (
                            <span key={idx}>
                                {line} <br />{" "}
                            </span>
                        ))}
                    </p>
                </div>
            </div>

            {/* Bottom Section */}
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
        </div>
  );
};

export default Assets;
