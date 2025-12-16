"use client";
import React from 'react'
import LeadCalculator from './LeadCalculator';
import ROIcalculator from './ROIcalculator';
import Pricing from './Pricing';

function page() {
  return (
    <div className='min-h-screen font-quicksand'>
        <LeadCalculator />
        <ROIcalculator />
        <Pricing/>
    </div>
  )
}

export default page