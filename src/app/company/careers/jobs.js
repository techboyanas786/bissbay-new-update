"use client";
import React, { useState } from "react";
import IconCard from "../../../components/IconCard";
import FormModal from "@/components/careerModal";

function Jobs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const jobCategories = [
    {
      src: "../../Icons/account.svg",
      title: "Account Manager",
      gradient: "from-lime-400 via-green-400 to-emerald-500",
    },
    {
      src: "../../Icons/Facilities.svg",
      title: "Administration & Facilities",
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    },
    {
      src: "../../Icons/DATA_DRIVEN.svg",
      title: "Business Development",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
    },
    {
      src: "../../Icons/account.svg",
      title: "Campaign Manager",
      gradient: "from-orange-400 via-red-400 to-pink-500",
    },
    {
      src: "../../Icons/account.svg",
      title: "Client Success Manager",
      gradient: "from-cyan-400 via-sky-400 to-indigo-500",
    },
    {
      src: "../../Icons/IMPACTFUL.svg",
      title: "Content Writer",
      gradient: "from-rose-400 via-pink-400 to-fuchsia-500",
    },
    {
      src: "../../Icons/Digital_marketing.svg",
      title: "Digital Marketing",
      gradient: "from-indigo-400 via-blue-400 to-teal-500",
    },
    {
      src: "../../Icons/MESSAGING.svg",
      title: "Email Marketing",
      gradient: "from-green-400 via-cyan-400 to-blue-500",
    },
    {
      src: "../../Icons/CUSTOMERUNDERSTANDING.svg",
      title: "Human Resources",
      gradient: "from-pink-400 via-rose-400 to-red-500",
    },
    {
      src: "../../Icons/INTELLIGENCE_AI.svg",
      title: "Information Technology",
      gradient: "from-green-400 via-emerald-400 to-teal-500",
    },
    {
      src: "../../Icons/handshake.svg",
      title: "Partnerships & Alliances",
      gradient: "from-violet-400 via-purple-400 to-fuchsia-500",
    },
    {
      src: "../../Icons/CUSTOMERUNDERSTANDING.svg",
      title: "Product & Strategy",
      gradient: "from-violet-400 via-purple-400 to-indigo-500",
    },
    {
      src: "../../Icons/QUALITYLEADS.svg",
      title: "Quality",
      gradient: "from-amber-400 via-orange-400 to-red-500",
    },
    {
      src: "../../Icons/IDENTIFY.svg",
      title: "Research Analyst",
      gradient: "from-teal-400 via-emerald-400 to-green-500",
    },
    {
      src: "../../Icons/DATA_ANALYSIS.svg",
      title: "Data Analyst",
      gradient: "from-blue-400 via-sky-400 to-cyan-500",
    },
    {
      src: "../../Icons/STAGNATION.svg",
      title: "Finance",
      gradient: "from-yellow-400 via-amber-400 to-orange-500",
    },
    {
      src: "../../Icons/Security.svg",
      title: "Security",
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
    },
    {
      src: "../../Icons/sales.svg",
      title: "Sales",
      gradient: "from-fuchsia-400 via-pink-400 to-rose-500",
    },
    {
      src: "../../Icons/Customer-Support.svg",
      title: "Telemarketing",
      gradient: "from-sky-400 via-blue-400 to-indigo-500",
    },
    {
      src: "../../Icons/ApplyNow.svg",
      title: "Apply Now",
      gradient: "from-primary via-primary/70 to-primary",
    }
  ];


  return (
    <>
      <div   >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            Explore Career Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {jobCategories.map((category, index) => (
            <IconCard
              key={index}
              onClick={() => setIsModalOpen(true)}
              icon={category.src}
              title={category.title}
              gradient={category.gradient}
              className="hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Jobs;