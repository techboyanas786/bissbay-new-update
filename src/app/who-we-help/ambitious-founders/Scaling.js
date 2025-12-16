"use client";
import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useState } from "react";

function Scaling() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        <div className="order-1 md:order-2">
          <h2 className="section-title mb-6">
            Scaling Growth
            <span className="text-primary"> is a Challenge</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Marketing shouldn't be a mystery, it's about knowing your
              audience and creating real value.
              <br className="hidden sm:block" /> It’s not about random, inconsistent messaging or just chasing
              sales.
            </p>
            <p>
              <strong>The real challenge?</strong> Having the right
              expertise to make it work.
            </p>
            <p className="mb-4 md:mb-6 ">
              <span className="!text-primary !font-semibold lg:!text-[1.125rem]">
                {" "}
                That's where we come in.
              </span>
              <br />
              When growth is your top priority, scaling requires a strong
              go-to-market strategy. We help you achieve measurable results
              without the cost of building an in-house team. And we’ve done
              this successfully many times before.
            </p>
            <div className="md:w-fit flex flex-col md:flex-row gap-4 animate-on-scroll justify-center md:justify-start">
              <Button
                variant="primary"
                customClass="text-base"
                label="Contact Us"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="group flex items-center justify-center order-2 md:order-1">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <img
              className="w-full h-full"
              src="/images/FoundersROI.jpg"
              alt="Founders ROI"
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

export default Scaling;
