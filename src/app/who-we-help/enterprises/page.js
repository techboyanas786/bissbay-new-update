"use client";
import React from 'react'
import Hero from './Hero';
import Problem from './Problem';
import Clarity from './Clarity';
import Scalable from './Scalable';
import Engine from './Engine';
import CTA from './CTA';
import Marketing from './Marketing';

function Enterprises_page() {
  return (
    <>
      <div className="container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-12 flex flex-col gap-4 md:gap-12">
        <Hero />
        <span className="bg-primary h-1 w-full"></span>
        <Problem />
        <span className="bg-primary h-1 w-full"></span>
        <Clarity />
        <span className="bg-primary h-1 w-full"></span>
        <Scalable />
        <span className="bg-primary h-1 w-full"></span>
        <Engine />
        <span className="bg-primary h-1 w-full"></span>
        <Marketing />
      </div>
      <CTA />
    </>
  )
}
export default Enterprises_page