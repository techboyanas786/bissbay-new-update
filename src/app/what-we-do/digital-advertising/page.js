"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

const HeroSection = lazy(() => import('./Hero'));
const ServicesSection = lazy(() => import('./Services'));
const BissbayAdvantage = lazy(() => import('./Advantages'));
const IndustrySection = lazy(() => import('./Industry'));
const Innovation = lazy(() => import('./Innovation'));
const ResultsSection = lazy(() => import('./Results'));
const CTASection = lazy(() => import('./CTASection'));

function Digital_Layout() {
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
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Services...</div>}>
            <ServicesSection />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Advantages...</div>}>
          <BissbayAdvantage />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Industry...</div>}>
          <IndustrySection />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Innovation...</div>}>
          <Innovation />
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

export default Digital_Layout;