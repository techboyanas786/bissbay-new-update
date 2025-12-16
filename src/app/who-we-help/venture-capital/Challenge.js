"use client";
import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useState } from "react";

function Operations() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        <div className="order-1 md:order-2">
          <h2 className="section-title !text-center sm:!text-left !mb-4 md:!mb-6">
            Growth Support for <br className="sm:hidden block" />
            <span className="text-primary"> SaaS Portfolios</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Your SaaS portfolio companies need proven marketing support to
              generate consistent, reliable growth. Between scaling
              challenges and limited resources, achieving measurable success
              can feel like an uphill battle.

            </p>
            <p><strong>The real challenge? </strong>Building the right team
              to make it happen.</p>
            <p className="mb-4 md:mb-6 ">
              <span className="!font-semibold !text-primary lg:!text-[1.125rem]">
                That’s where we step in.{" "}
              </span>
              <br />
              We support SaaS portfolio companies by simplifying marketing,
              focusing on understanding audiences, communicating value, and
              solving real problems.
            </p>
            <div className="md:w-fit flex flex-col md:flex-row gap-4 animate-on-scroll justify-center md:justify-start">
              <Button
                variant="primary"
                label="Contact Us"
                customClass="text-base"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="group flex items-center justify-center order-2 md:order-1">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <img
              className="w-full h-full"
              src="/images/VentureSaas.jpg"
              alt="SaaS Portfolio"
            />
          </div>
        </div>
      </section>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
export default Operations;
