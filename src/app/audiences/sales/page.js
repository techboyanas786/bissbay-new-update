"use client";
import React from "react";
import Hero from "./Hero";
import Stats from "./Stat";
import Newsletter from "./Newsletter";
import Categories from "./Categories";
import Vendor from "./Vendor";
import Insights from "./Insights";
import Assets from "./Assets";

function page() {
  return (
    <div className="container px-4 lg:px-2 mx-auto pt-[115px] flex flex-col gap-4 md:gap-12 lg:gap-12">
      <Hero />
      <span className="bg-primary h-1 w-full"></span>
      <Categories/>
      <span className="bg-primary h-1 w-full"></span>
      <Vendor />
      <span className="bg-primary h-1 w-full"></span>
      <Insights />
      <span className="bg-primary h-1 w-full"></span>
      <Assets />
      <span className="bg-primary h-1 w-full"></span>
      <Newsletter/>
    </div>
  );
}

export default page;
