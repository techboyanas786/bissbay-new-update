"use client";
import React, { useRef, Suspense } from 'react';
import { lazy } from 'react';

const HeroSection = lazy(() => import('./HeroSection'));
const WhyABM = lazy(() => import('./WhyABM'));
const ABMSolutions = lazy(() => import('./ABMSolutions'));
const Process = lazy(() => import('./Process'));
const ResultsSection = lazy(() => import('./Results'));
const CTASection = lazy(() => import('./CTASection'));

function Service01Layout() {
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
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Why ABM...</div>}>
            <WhyABM />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Solutions...</div>}>
          <ABMSolutions />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Process...</div>}>
          <Process />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Results...</div>}>
          <ResultsSection />
        </Suspense>

      </div>
      <Suspense fallback={<div className="flex justify-center items-center h-64">Loading CTA...</div>}>
        <CTASection />
      </Suspense>
    </>
  );
}

export default Service01Layout;