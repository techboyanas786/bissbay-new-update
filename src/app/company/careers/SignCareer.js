"use client";
import Button from "@/components/Button";
import FormModal from "@/components/careerModal";
import Image from "next/image";
import React, { useState } from "react";

function SignCareer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (data) => {
    console.log("Form submitted:", data);
    // send to API / Firebase here
  };
  return (
    <>
      <div   >
        <div className="w-full bg-gray-50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-8 items-center">
            {/* Video Section */}
            <div className="space-y-4 md:space-y-6 p-2 md:p-6">
              <h1>
                Stay Ahead – Explore Opportunities With BISSBAY
              </h1>
              <h6 className="lg:!text-[1.125rem] lg:!leading-relaxed lg:!font-semibold !text-[#5C6371]">
                Get insights into life at BISSBAY and discover career paths made
                for you.
              </h6>
              <Button label="Apply now" variant="primary" onClick={() => setIsModalOpen(true)} />
            </div>
            <div className="relative h-[200px] md:h-[400px]">
              <Image
                unoptimized
                src="/images/CareerAhead.png"
                className="w-full h-full object-cover rounded-2xl"
                width={400}
                height={200}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default SignCareer;
