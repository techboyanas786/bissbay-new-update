import React, { useState } from "react";
import Image from "next/image";

function Assets() {
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
    value: "4,700",
    label: "Assets Read",
    suffix: "",
    description: [
      "B2B HR buyers prefer self-education, engaging with content well before connecting with a vendor.",
      "Bissbay gives you visibility into the content HR decision-makers consume, so you can refine your messaging, time your outreach, and seamlessly align with their interests.",
    ],
  };

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
          <p className={`text-center text-sm sm:text-base`}>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-start gap-4 md:gap-8 md:grid-cols-5 mb-4 md:mb-6">
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
              <h4 className="!text-base !text-center">{content.title}</h4>
            </div>
          ))}
        </div>
        <p className="!text-center !text-xl hover:scale-105 duration-300 transition-all hover:!text-primary !font-bold">
          Put your content where your buyers are
        </p>
      </div>
      <div className="container mx-auto">
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex flex-col justify-center items-center gap-2">
            <h4 className="!text-black !text-center">
                <span className="hover:text-[#ff4200] text-center transition-colors duration-200 cursor-pointer">Sign up{" "}</span>for the BFSI Professionals Newsletter
              </h4>
            <div className="flex flex-row justify-center items-center gap-3 mb-2">
            <p className="text-center">Stay ahead in BFSI with insights delivered straight to your inbox.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assets;
