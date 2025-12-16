"use client";
import React from "react";

function Scaling() {
  return (
    <section>
      <div className="flex flex-col lg:h-[500px] lg:flex-row items-center gap-4 lg:gap-8">
        <div className="w-full lg:w-1/2 mb-0">
          <h2 className="section-title !text-center sm:!text-left !mb-4 md:!mb-6">
            Focus on Growth, Let Us Handle the
            <span className="text-primary"> Marketing </span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              With Bissbay's solutions, marketing leaders can focus on
              achieving their objectives while we handle the complexities of
              marketing.
            </p>
            <p className="font-semibold text-bissbay-black">
              Our data-driven strategies are tailored to align with your
              business goals, streamline operations, eliminate inefficiencies,
              and prioritize measurable results. Our team of marketers is
              committed to your success, helping you achieve your targets with
              ease and confidence.{" "}
            </p>
            <p className="!font-semibold">
              For marketing leaders seeking high-quality execution without the
              burden of an in-house team, <br className="hidden md:block" /> we integrate seamlessly to
              accelerate your results.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden animate-on-scroll">
            <img
              className="w-full h-full"
              src="/images/LeadersFocus.jpg"
              alt="Leaders Focus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Scaling;
