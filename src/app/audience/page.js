"use client";
import React from 'react'
import MapSection from './MapSection'
import AudienceSection from './AudienceRegion'
import CTA from './CTA';

function page() {
  return (
    <>
      <div className="container mb-6 lg:mb-8 px-4 lg:px-2 mx-auto pt-[115px] flex flex-col gap-4 md:gap-12">
        <MapSection />
        <span className="bg-primary h-1 w-full"></span>
        <AudienceSection />
      </div>
      <CTA />
    </>
  )
}

export default page
