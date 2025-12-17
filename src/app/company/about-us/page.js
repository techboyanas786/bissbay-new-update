"use client";
import React from 'react';
import Hero from './Hero';
import Mission from './Mission';
import Values from './Values';
import HistoryHero from './HistoryHero';
import Inspired from './Inspired';
import dynamic from 'next/dynamic';

const AnimatedTimeline = dynamic(() => import('./AnimatedTimeline'), { ssr: false });

function Page() {
  return (
    <div className="container px-4 lg:px-2 mx-auto pt-[115px] mb-4 md:mb-8 flex flex-col gap-4 md:gap-12">
      <div className='flex flex-col gap-4 lg:gap-8'>
        <Hero />
        <Mission />
      </div>
      <Values />
      <div>
        <HistoryHero />
        <AnimatedTimeline />
      </div>
        <Inspired />
    </div>
  );
}

export default Page;