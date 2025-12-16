"use client";
import React from "react";
import Hero from "./Hero";
import Process from "./Process";
import Service from "./Service";
import Why from "./Why";
import CTA from "./CTA";
import WhyOmnichannel from "./WhyOmnichannel";
import OmniChannel from "./OmniChannel";
import MultiLayerd from "./MultiLayerd";

function Process_layout() {
  return (
    <div className="container px-4 lg:px-2 mx-auto pt-[115px] flex flex-col gap-4 md:gap-12">
      <Hero />
      <OmniChannel/>
      <MultiLayerd/>
      <WhyOmnichannel/>
      <Process/>
      <Service/>
      <Why/>
      <CTA/>
    </div>
  );
}

export default Process_layout;
