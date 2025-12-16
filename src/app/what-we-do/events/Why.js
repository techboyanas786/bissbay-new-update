import { CirclePercent, DollarSign, TrendingUp } from "lucide-react";
import Image from "next/image";
import React from "react";
import { MdTrendingUp } from "react-icons/md";
function Why() {
  const stats = [
    {
      stat: "10+",
      text: "Years of Event Mastery",
      description: "Proven success in delivering impactful events",
    },
    {
      stat: "35+",
      text: "Industry Events Annually",
      description: "Expertise across diverse industries",
    },
    {
      stat: "500+",
      text: "Hours of Live Streaming",
      description: "Seamless virtual and hybrid event execution",
    },
    {
      stat: "200k+",
      text: "Leads Generated",
      description: "Events that drive measurable ROI",
    },
  ];
  const webinarBenefits = [
    {
      icon: (
        <Image
          src="/Icons/DATA_ANALYSIS.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Lower Costs",
      description: "Reach more people without venue expenses",
    },
    {
      icon: (
        <Image
          src="/Icons/MEDAL.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Proven Success",
      description: "200+ webinars executed across industries",
    },
    {
      icon: (
        <Image
          src="/Icons/Customer-Support.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "360° Support",
      description: "From content creation to post-event analytics",
    },
  ];
  return (
    <section>
      <div className="text-center animate-on-scroll">
        <h2 className="section-title !mb-0 ">
          Why Choose BISSBAY for
          <span className="text-primary"> Event Services</span>?
        </h2>
        <h3 className="my-4 md:my-6">
          Webinars offer a cost-effective approach to generating leads,
          building brand authority, and engaging your audience
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group metric-card hover-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <h5 className="!text-primary !mb-2">{stat.stat}</h5>
            <div className="flex flex-row w-full items-center justify-start gap-2 mb-2">
              <h5  >{stat.text}</h5>
            </div>
            <p  >{stat.description}</p>
          </div>
        ))}
      </div>
      <div className="shadow-lg w-fit mx-auto hover-card bg-white border-primary border-2 md:!border-gray-200 md:hover:!border-primary rounded-xl p-2 lg:p-6 mt-4 lg:mt-12">
        <h2 className="text-3xl font-bold text-center text-bissbay-black mb-4 md:mb-6">
          Webinar Benefits
        </h2>
        <div className="grid grid-cols-1 w-fit mx-auto gap-4 md:gap-6 lg:gap-12 md:grid-cols-3">
          {webinarBenefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group cursor-pointer w-full shadow-md rounded-xl p-6 md:p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl flex justify-center my-4 md:my-5 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              <h5 className="mb-2">{benefit.title}</h5>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
