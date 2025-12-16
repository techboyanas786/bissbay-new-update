"use client";
import React from "react";
import Button from "../Button";
import BookingModal from "../BookingModal";
import { useState } from "react";
import Link from "next/link";

export const UnifiedFunnel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="animate-on-scroll">
        <div className="max-w-4xl mx-auto p-4 lg:p-6 bg-gradient-to-br from-[rgb(255,66,0)] to-[rgb(200,50,0)] text-white rounded-xl shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="!font-semibold text-center mb-4 md:mb-6 !text-white">
              The Unified Funnel: Marketing & Sales Working Together
            </h3>

            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <h3 className="!font-semibold !text-white">
                  Marketing (Connect & Nurture)
                </h3>
              </div>
              <ol className="list-decimal list-inside space-y-2">
                <li className="transition-all hover:translate-x-1 !font-semibold">
                  <span className="!font-semibold">Awareness</span> –{" "}
                  <span className="!font-medium">
                    Capturing attention through SEO, social media, and content
                    marketing.
                  </span>
                </li>
                <li className="transition-all hover:translate-x-1 !font-semibold">
                  <span className="!font-semibold">Interest</span> –{" "}
                  <span className="!font-medium">
                    Engaging prospects with blogs, webinars, and email campaigns.
                  </span>
                </li>
                <li className="transition-all hover:translate-x-1 !font-semibold">
                  <span className="!font-semibold">Consideration</span> –{" "}
                  <span className="!font-medium">
                    Educating leads with case studies, comparisons, and
                    testimonials.
                  </span>
                </li>
              </ol>
            </div>

            <div className="flex justify-center my-4">
              <div className="flex flex-col items-center">
                <div className="h-8 w-0.5 bg-white mb-2"></div>
                <div className="px-6 py-3 bg-white rounded-lg text-[rgb(255,66,0)] font-bold">
                  Handoff from Marketing to Sales
                </div>
                <div className="h-8 w-0.5 bg-white mt-2"></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center mb-3">
                <h3 className="text-xl !font-semibold !text-white">
                  Sales (Convert & Retain)
                </h3>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-center">
                <li className="transition-all hover:translate-x-1 !font-semibold">
                  <span className="!font-semibold">Evaluation</span> –{" "}
                  <span className="!font-medium">
                    One-on-one discussions, demos, and personalized offers.
                  </span>
                </li>
                <li className="transition-all hover:translate-x-1 !font-semibold">
                  <span className="!font-semibold">Decision</span> –{" "}
                  <span className="!font-medium">
                    Closing the deal through negotiation and clear value
                    propositions.
                  </span>
                </li>
                <li className="transition-all hover:translate-x-1 !font-semibold">
                  <span className="!font-semibold">Retention & Advocacy</span> –{" "}
                  <span className="!font-medium">
                    Post-purchase support, upselling, and fostering loyalty.
                  </span>
                </li>
              </ol>
            </div>

            <p className="mt-4 md:mt-6 italic !font-semibold !text-white text-center">
              This shows how BISSBAY ensures a smooth transition from
              marketing-generated leads to sales conversions, creating a seamless
              revenue-driven pipeline.
            </p>
          </div>
        </div>
      </section>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
