"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

const HeroSection = lazy(() => import('./HeroSection'));
const Why = lazy(() => import('./Why'));
const HowItWorks = lazy(() => import('./HowItWorks'));
const Advantages = lazy(() => import('./Advantage'));
const Process = lazy(() => import('./Process'));
const Timeline = lazy(() => import('./Timeline'));
const MetricsSection = lazy(() => import('./Metrics'));
const CTASection = lazy(() => import('./CTASection'));

function Services02Layout() {
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
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading How It Works...</div>}>
            <HowItWorks />
          </Suspense>
        </div>
        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Advantages...</div>}>
          <Advantages />
        </Suspense>
        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Process...</div>}>
          <Process />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Why...</div>}>
          <Why />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Metrics...</div>}>
          <MetricsSection />
        </Suspense>

      </div>
      <Suspense fallback={<div className="flex justify-center items-center h-64">Loading CTA...</div>}>
        <CTASection />
      </Suspense>
    </>
  );
}

export default Services02Layout;