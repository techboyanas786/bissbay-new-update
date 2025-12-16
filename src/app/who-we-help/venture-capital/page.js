"use client";
import React from "react";
import Hero from "./Hero";
import Challenge from "./Challenge";
import Accelerate from "./Accelerate";
import Solutions from "./Solutions";
import Fit from "./Fit";
import CTA from "./CTA";

function Venture_Layout() {
  return (
    <>
      <div className="container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-12 flex flex-col gap-4 md:gap-12">
        <Hero />
        <span className="bg-primary h-1 w-full"></span>
        <Challenge />
        <span className="bg-primary h-1 w-full"></span>
        <Solutions />
        <span className="bg-primary h-1 w-full"></span>
        <Accelerate />
        <span className="bg-primary h-1 w-full"></span>
        <Fit />
      </div>
      <CTA />
    </>
  );
}
export default Venture_Layout;
