"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

// Lazy load components
const Hero = lazy(() => import('./Hero'));
const SolutionsSection = lazy(() => import('./Solutions'));
const WhyBissbay = lazy(() => import('./Why'));
const Advantages = lazy(() => import('./Advantage'));
const Results = lazy(() => import('./Results'));
const CTASection = lazy(() => import('./CTASection'));

function Lead_Layout() {
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
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Solutions...</div>}>
            <SolutionsSection />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Why Bissbay...</div>}>
          <WhyBissbay />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Advantages...</div>}>
          <Advantages />
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

export default Lead_Layout;