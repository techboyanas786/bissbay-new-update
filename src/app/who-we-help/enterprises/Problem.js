"use client";
import BookingModal from "@/components/BookingModal";
import Button from "@/components/Button";
import React, { useEffect, useState } from "react";

const Problem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(85);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        <div className="order-1 md:order-2">
          <h2 className="section-title text-center sm:text-left">
            Scaling Growth <br className="sm:hidden block" />
            <span className="text-primary"> Shouldn't Be a Battle</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Enterprise marketing is complex, but it shouldn’t feel like a
              mystery.

            </p>
            <p >
              <strong>The real challenge?</strong> Aligning your expertise
              to scale efficiently.
            </p>
            <p className="font-semibold space-y-0 text-bissbay-black  mb-4 md:mb-6">
              <span className="text-primary font-bold lg:!text-[1.125rem]">
                That’s where we step in.
              </span>
              <br />
              With our seamless strategies and expert execution, we provide enterprise-grade marketing solutions designed to fuel predictable growth. From strategy refinement to revenue optimization, we bring clarity, precision, and measurable impact.
            </p>
            <div className="md:w-fit flex flex-col md:flex-row gap-4 animate-on-scroll justify-center md:justify-start">
              <Button
                variant="primary"
                customClass="text-base"
                label="Contact Us" onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="group flex items-center justify-center order-2 md:order-1">
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
            <img
              className="w-full h-full"
              src="/images/EnterprisesGrowth.jpg"
              alt="Enterprise Growth"
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
};

export default Problem;
