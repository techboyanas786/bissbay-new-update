"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

const Hero = lazy(() => import('./Hero'));
const ServicesSection = lazy(() => import('./Services'));
const GlobalSolutionsSection = lazy(() => import('./Solutions'));
const EventOffering = lazy(() => import('./EventOffering'));
const EventType = lazy(() => import('./EventType'));
const EventWheel = lazy(() => import('./EventWheel'));
const Process = lazy(() => import('./Process'));
const Why = lazy(() => import('./Why'));
const ComparisonTable = lazy(() => import('./Compare'));
const Results = lazy(() => import('./Results'));
const CTASection = lazy(() => import('./CTASection'));

function Events_Layout() {
  const nextRef = useRef(null);

  const scrollToNext = () => {
    if (nextRef.current) {
      nextRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="container md:container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-8 flex flex-col gap-4 md:gap-12">
        <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading Hero...</div>}>
          <Hero onScrollDown={scrollToNext} />
        </Suspense>

        <span className="bg-primary h-1 w-full"></span>

        <div ref={nextRef}>
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Services...</div>}>
            <ServicesSection />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Solutions...</div>}>
          <GlobalSolutionsSection />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Event Offering...</div>}>
          <EventOffering />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Event Type...</div>}>
          <EventType />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Event Wheel...</div>}>
          <EventWheel />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Process...</div>}>
          <Process />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Why...</div>}>
          <Why />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Comparison...</div>}>
          <ComparisonTable />
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

export default Events_Layout;