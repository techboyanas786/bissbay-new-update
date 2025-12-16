"use client";
import React, { Suspense, useRef } from 'react';
import { lazy } from 'react';

const HeroSection = lazy(() => import('./HeroSection'));
const Why = lazy(() => import('./Why'));
const SolutionsSection = lazy(() => import('./SolutionSection'));
const DataQuality = lazy(() => import('./DataQuality'));
const ChallengesSection = lazy(() => import('./ChallengesTwo'));
const CTASection = lazy(() => import('./CTASection'));

function Page() {
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
          <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Data Quality...</div>}>
            <DataQuality />
          </Suspense>
        </div>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Solutions...</div>}>
          <SolutionsSection />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Challenges...</div>}>
          <ChallengesSection />
        </Suspense>

        <Suspense fallback={<div className="flex justify-center items-center h-64">Loading Why...</div>}>
          <Why />
        </Suspense>

      </div>
      <Suspense fallback={<div className="flex justify-center items-center h-64">Loading CTA...</div>}>
        <CTASection />
      </Suspense>
    </>
  );
}

export default Page;