import React, { useRef } from "react";
import {
  Target,
  TrendingUp,
  LineChart,
  CheckCircle,
  TargetIcon,
} from "lucide-react";
import { MdOutlineSafetyCheck, MdSecurity, MdTrendingUp } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { FaBoltLightning } from "react-icons/fa6";
import { BsLightning } from "react-icons/bs";
import { HiLightningBolt } from "react-icons/hi";
import { PiLightningABold } from "react-icons/pi";
import Image from "next/image";

const benefits = [
  {
    icon: (
      <Image
        src="/Icons/TARGET.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />
    ),
    title: "Precision That Counts",
    description:
      "Every campaign is powered by high-fidelity, first-party intent data, so your content reaches real buyers, not recycled lists.",
  },
  {
    icon: <Image
      src="/Icons/MEDAL.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />,
    title: "B2B Mastery",
    description:
      "With over a decade of experience and 120,000+ campaigns delivered, we understand nuances across the buying cycle, high-stakes industries, and decision-makers.",
  },
  {
    icon: <Image
      src="/Icons/LIST_BUILDING.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />,
    title: "Built for Your GTM",
    description:
      "Whether targeting ABM, demand gen, or market growth, our powerful and proven syndication programs fit your goals and funnel stage.",
  },
  {
    icon: <Image
      src="/Icons/sales.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />,
    title: "Insights to Outcomes",
    description:
      "From day one, we deliver full visibility into performance, from impression to conversion. Precise reporting through CRM integration and analytics.",
  },
];
const contentBenefits = [
  {
    icon: <Image
      src="/Icons/LOYALTY.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />,
    title: "Guaranteed Engagement",
    description: "Reach 113M+ professionals across 30+ industries",
  },
  {
    icon: <Image
      src="/Icons/TARGET.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />,
    title: "Precision Targeting",
    description: "Hyper-accurate outreach based on verified data",
  },
  {
    icon: <Image
      src="/Icons/Faster.svg"
      alt="Revenue Stagnation"
      className="flex-shrink-0"
      width={36}
      height={36}
    />,
    title: "Accelerated Sales",
    description: "28% faster sales cycles with aligned content",
  },
];
const Why = () => {
  const sectionRef = useRef(null);
  return (
    <section id="benefits" ref={sectionRef}>
      <div className="text-center">
        <h2 className={`section-title !mb-0`}>
          Why Choose BISSBAY for
          <span className="text-primary"> Content Syndication</span>?
        </h2>
        <h3 className={`lg:my-6 my-4`}>Built for outcomes, not just outreach</h3>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:gap-8 mb-4 lg:mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={benefit}
            className={`shadow-md h-full metric-card bg-white rounded-xl p-6 hover-card animate-on-scroll`}
          >
            <div className="flex  flex-row w-full items-center justify-start gap-3 mb-2">
              <div>{benefit.icon}</div>
              <h5  >{benefit.title}</h5>
            </div>

            <p  >{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="shadow-lg w-fit mx-auto hover-card bg-white border-primary border-2 md:!border-gray-200 md:hover:!border-primary rounded-xl p-2 lg:p-6">
        <h2 className="!mb-0 text-center section-title">
          Content That <span className="text-primary">Converts</span>
        </h2>
        <h3 className="!text-center my-4 lg:my-5">
          We don't just distribute content we connect it to revenue.
        </h3>
        <div className="grid grid-cols-1 w-fit mx-auto gap-4 lg:gap-8 md:grid-cols-3">
          {contentBenefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center flex flex-col rounded-xl w-full p-2 lg:p-6 shadow-md items-center justify-center group mx-auto cursor-pointer "
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex  flex-col w-full items-center justify-start gap-3 mb-2">
                <div className="medium-icon">{benefit.icon}</div>
                <h5  >{benefit.title}</h5>
              </div>
              <p  >{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
