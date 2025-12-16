"use client";
import React from "react";

function Operations() {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        <div className="order-1 md:order-2">
          <h2 className="section-title !text-center sm:!text-left">
            Accelerate portfolio company growth and<br className="hidden sm:block" />
            <span className="text-primary"> maximize your fund’s ROI</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              We help revive underperforming portfolio companies by
              fixing their sales pipeline, improving customer acquisition and
              retention, and optimizing marketing and sales strategies for
              scalable growth.
            </p>
            <p className="font-semibold text-bissbay-black">
              We deliver high-intent B2B leads and reduce wasted efforts,
              ensuring higher ROI for venture capitalists and driving
              sustainable growth. As an extension of your team, we become your
              trusted marketing partner, obsessing over pipeline growth,
              revenue, and maximizing value for your SaaS portfolio companies
              just like you do.
            </p>
            <p className="!font-semibold">
              Together, we turn strategy into measurable results, making your
              investments more profitable and ensuring long-term success.
            </p>
          </div>
        </div>
        <div className="group flex items-center justify-center order-2 md:order-1">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <img
              className="w-full h-full"
              src="/images/VentureROI.jpg"
              alt="Venture ROI"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Operations;