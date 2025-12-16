import React from 'react'
import Hero from "./Hero";
import CareersIntro from './CareersIntro';
import Jobs from './jobs';
import CareerCaraousal from './CareerCaraousal';
import AboutCareer from './AboutCareer';
import SignCareer from './SignCareer';


function page() {
  return (
    <>
    <div className='container px-4 lg:px-2 pb-4 md:pb-6 mx-auto pt-[115px] flex flex-col gap-4 md:gap-12'>
        <Hero />
        <CareersIntro />
        <CareerCaraousal/>
        <AboutCareer/>
        <Jobs />
        <SignCareer/>
    </div>
    </>
  )
}

export default page