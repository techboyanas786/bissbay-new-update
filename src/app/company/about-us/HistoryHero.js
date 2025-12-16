"use client";
import React from 'react'

function HistoryHero() {
  return (
    <div className='mx-auto px-0 md:px-6'>
          <h2
            className={`text-4xl lg:text-5xl font-bold leading-tight text-center`}
          >
            Our <span className="text-primary">History</span>
          </h2>

          <h4
            className={`my-4 md:my-6 text-center !text-[#5C6371] mx-auto leading-relaxed font-medium transition-all duration-1400 delay-600`}
          >
            Key milestones that shaped BISSBAY's journey and identity. <br/>At BISSBAY, our story is built on{' '}
            <span className="text-primary font-semibold">resilience</span>,{' '}
            <span className="text-primary font-semibold">innovation</span>, and{' '}
            <span className="text-primary font-semibold">unwavering purpose</span>.
          </h4>
          <p></p>
    </div>
  )
}

export default HistoryHero