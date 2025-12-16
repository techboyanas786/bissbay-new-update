"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

const HeroSection = lazy(() => import('./Hero'));
const WhatIsIntentData = lazy(() => import('./What'));
const BissbaySection = lazy(() => import('./BissbayTurn'));
const HowItTransforms = lazy(() => import('./How'));
const PrivacySection = lazy(() => import('./Privacy'));
const Results = lazy(() => import('./Results'));
const CTASection = lazy(() => import('./CTASection'));

function Intent_Layout() {
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
          <HeroSection onScrollDown={scrollToNext} />
        </Suspense>

        <span className="bg-primary h-1 w-full"></span>

        <div ref={nextRef}>
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading What Is Intent Data...</div>}>
            <WhatIsIntentData />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Bissbay Section...</div>}>
          <BissbaySection />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading How It Transforms...</div>}>
          <HowItTransforms />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Privacy...</div>}>
          <PrivacySection />
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

export default Intent_Layout;