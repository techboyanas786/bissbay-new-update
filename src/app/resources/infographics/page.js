"use client";
import React from "react";
import Donut1 from "./Donut1";
import IndustryBreak1 from "./IndustryBreak1";
import Hero2 from "./Hero2";
import { TrafficMetrics } from "./TrafficMetrics";
import CompanySizePolarChart from "./CompanySizePolarChart";
import SeniorityLevel from "./SeniorityLevel";
import DepartmentOverview from "./DepartmentOverview";
import CompanySizePie from "./CompanySizePie";
import CTA from "./CTA";
import MapSection from "./MapSection";

function page() {
  return (
    <>
      <div className="container px-4 lg:px-2 mx-auto pt-[115px] flex flex-col gap-4 md:gap-12 mb-4 md:mb-6">
        <MapSection />
        <span className="bg-primary h-1 w-full"></span>
        <Hero2 />
        <Donut1 />
        <IndustryBreak1 />
        <CompanySizePolarChart />
        <CompanySizePie />
        <SeniorityLevel />
        <DepartmentOverview />
        <TrafficMetrics />
      </div>
      <CTA />
    </>
  );
}

export default page;
