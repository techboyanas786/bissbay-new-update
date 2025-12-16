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
            Your Partner in Scaling
            <span className="text-primary"> Marketing Success</span>
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Your team is focused on high-value tasks, but the frustration
              of misaligned agencies or the hassle of managing multiple
              freelancers is holding you back.
            </p>
            <p>
              <strong>The real challenge? </strong>Finding a partner with
              the expertise and resources to consistently drive growth.
            </p>
            <p className="font-semibold text-bissbay-black mb-4 md:mb-6">
              <span className="!text-primary !font-semibold lg:!text-[1.125rem]">
                {" "}
                That's where we come in.
              </span>
              <br />
              Our strategic partner model seamlessly integrates with your
              team, delivering proactive support to increase efficiency and
              boost marketing results. We don’t just deliver campaigns, we
              align strategies with your business goals, ensuring you
              connect with the right prospects who can be directly converted
              into revenue.
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
              src="/images/LeadersOperations.jpg"
              alt="Leaders Operations"
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
