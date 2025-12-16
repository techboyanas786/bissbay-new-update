"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

const Hero = lazy(() => import('./Hero'));
const Why = lazy(() => import('./Why'));
const Services = lazy(() => import('./Services'));
const DifferenceSection = lazy(() => import('./Difference'));
const SetsApart = lazy(() => import('./SetsApart'));
const Results = lazy(() => import('./Results'));
const CTASection = lazy(() => import('./CTASection'));

function Demand_Layout() {
  const nextRef = useRef(null);

  const scrollToNext = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-8 flex flex-col gap-4 md:gap-12">
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading Hero...</div>}>
          <Hero onScrollDown={scrollToNext} />
        </Suspense>

        <span className="bg-primary h-1 w-full"></span>

        <div ref={nextRef}>
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Why...</div>}>
            <Why />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Services...</div>}>
          <Services />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Difference...</div>}>
          <DifferenceSection />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Sets Apart...</div>}>
          <SetsApart />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Results...</div>}>
          <Results />
        </Suspense>

      </div>
      <Suspense fallback={<div className="flex justify-center items-center h-64">Loading CTA...</div>}>
        <CTASection />
      </Suspense>
    </>
  );
}

export default Demand_Layout;