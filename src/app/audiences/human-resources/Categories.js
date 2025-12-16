"use client";
import Button from "@/components/Button";
import RequestProposalPopup from "@/components/RequestProposalPopup";
import TextType from "@/components/typeWriter";
import { Handshake } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const categories = [
  {
    category: "HR Professionals & Specialists",
    value: "229K",
    percentage: 100,
  },
  {
    category: "Talent Acquisition & Recruitment",
    value: "142K",
    percentage: 62,
  },
  {
    category: "Compensation & Payroll Management",
    value: "44K",
    percentage: 20,
  },
  {
    category: "Talent Management & Development",
    value: "45K",
    percentage: 22,
  },
  {
    category: "Workforce Relations & Engagement",
    value: "35K",
    percentage: 12,
  },
  { category: "HR Executive Leadership", value: "4.5K", percentage: 2 },
];

function Categories({}) {
  const [showRequestProposal, setShowRequestProposal] = useState(false);
  const [animatedBars, setAnimatedBars] = useState({});
  const chartRef = useRef(null);

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true, // Ensures animations run only once
  });
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        categories.forEach((_, index) => {
          setTimeout(() => {
            setAnimatedBars((prev) => ({
              ...prev,
              [index]: true,
            }));
          }, index * 250);
        });
      }, 400);

      return () => clearTimeout(timer); // Cleanup initial delay
    }
  }, [inView]);

  return (
    <>
      <section id="chart" ref={ref}>
        <div ref={chartRef} className=" animate">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 md:grid-cols-2 place-items- ">
            <div className="sm:border-r-2 border-gray-300">
              <Image
                src="/Icons/handshake.svg"
                alt="Define Goals"
                className="flex-shrink-0"
                width={48}
                height={48}
              />
              <h2 className="text-[36px] !mb-0 !text-primary">499,500</h2>
              <h1  >
                Engaged
                <br /> Decision-Makers
              </h1>
              <p className="mt-4 md:mt-6 max-w-2xl mb-4 md:mb-8">
                We match content to HR professionals by role and expertise,
                enabling precise targeting to reach the right decision-makers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Button
                  variant="outline"
                  customClass="hover:scale-[1.05] transform transition-all duration-300 ease-in-out"
                  label="Request Proposal"
                  onClick={() => setShowRequestProposal(true)}
                />
              </div>
            </div>
            <div className="space-y-4 w-full sm:mt-8">
              {categories.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="mb-5">
                      <TextType
                        text={[item.category]}
                        typingSpeed={75}
                        pauseDuration={3000}
                        showCursor={false}
                        className="!font-semibold !text-[#1f2937] absolute"
                        textColors={["#1f2937"]}
                      />
                    </span>
                    <span
                      className={`font-bold text-sm md:text-base animated-number ${
                        animatedBars[index] ? "animate" : ""
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-xl h-10 w-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-bl from-[#DCEB49] to-[#FE4200] rounded-xl overflow-hidden ${
                        animatedBars[index]
                          ? "transition-[width] duration-1000 ease-in-out"
                          : ""
                      }`}
                      style={{
                        width: animatedBars[index]
                          ? `${item.percentage}%`
                          : "0%",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <RequestProposalPopup
        isOpen={showRequestProposal}
        onClose={() => setShowRequestProposal(false)}
      />
    </>
  );
}

export default Categories;
