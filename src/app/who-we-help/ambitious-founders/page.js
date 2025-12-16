"use client";
import React from "react";
import Hero from "./Hero";
import Scaling from "./Scaling";
import Complexity from "./Complexity";
import Demand from "./Demand";
import Future from "./Future";
import CTA from "./CTA";

function Founders_layout() {
  return (
    <>
      <div className="container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-12 flex flex-col gap-4 md:gap-12">
        <Hero />
        <span className="bg-primary h-1 w-full"></span>
        <Scaling />
        <span className="bg-primary h-1 w-full"></span>
        <Complexity />
        <span className="bg-primary h-1 w-full"></span>
        <Future />
        <span className="bg-primary h-1 w-full"></span>
        <Demand />
      </div>
      <CTA />
    </>
  );
}

export default Founders_layout;
