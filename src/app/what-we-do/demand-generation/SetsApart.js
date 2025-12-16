"use client";
import React from "react";

function SetsApart() {
  return (
    <section className="hover:scale-3d !p-4 md:!p-6 card shadow-lg shadow-md border-2 border-[#FF4200] md:border-gray-200 md:hover:border-[#FF4200] transition-all duration-300">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="section-title">
          What <span className="text-primary">Sets Us</span> Apart
        </h2>
      </div>
      <div className="grid grid-cols-1 w-fit rounded-xl mx-auto gap-4 lg:gap-8 md:grid-cols-2">
        <div className="flex shadow-lg p-2 lg:p-6 rounded-xl shadow-md items-center justify-center group space-x-4 flex-col text-center w-full">
          <h5 className="font-bold !m-0 !mb-2"><span className="text-primary text-2xl font-bold">1{" "}</span> First-Party Data Advantage</h5>
          <p className="text-gray-600">
            Access to 113M+ decision-maker profiles we've built over 10 years.
          </p>
        </div>

        <div className="flex shadow-lg p-2 lg:p-6 shadow-md items-center justify-center group rounded-xl space-x-4 flex-col text-center w-full">
          <h5 className="font-bold !m-0 !mb-2"><span className="text-primary text-2xl font-bold">2{" "}</span> Intent-Driven Approach</h5>
          <p className="text-gray-600">
            We track 80M+ intent signals across the web to find prospects
            actively researching solutions.
          </p>
        </div>

        <div className="flex shadow-lg p-2 lg:p-6 shadow-md items-center justify-center group rounded-xl space-x-4 flex-col text-center w-full">
          <h5 className="font-bold !m-0 !mb-2"><span className="text-primary text-2xl font-bold">3{" "}</span> End-to-End Capability</h5>
          <p className="text-gray-600">
            From initial awareness to closed deals, we manage the entire demand
            generation process.
          </p>
        </div>

        <div className="flex rounded-xl shadow-lg p-2 lg:p-6 shadow-md items-center justify-center group space-x-4 flex-col text-center w-full">
          <h5 className="font-bold !m-0 !mb-2"><span className="text-primary text-2xl font-bold">4{" "}</span> Quality Verification</h5>
          <p className="text-gray-600">
            Triple-verified leads ensure you connect only with qualified, interested buyers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SetsApart;
