"use client";
import React from "react";
import Hero from "./Hero";
import Operations from "./Operations";
import Solutions from "./Solutions";
import Growth from "./Growth";
import Fit from "./Fit";
import CTA from "./CTA";

function Marketing_Layout() {
  return (
    <>
      <div className="container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-12 flex flex-col gap-4 md:gap-12">
        <Hero />
        <span className="bg-primary h-1 w-full"></span>
        <Operations />
        <span className="bg-primary h-1 w-full"></span>
        <Growth />
        <span className="bg-primary h-1 w-full"></span>
        <Solutions />
        <span className="bg-primary h-1 w-full"></span>
        <Fit />
      </div>
      <CTA />
    </>
  );
}
export default Marketing_Layout;
