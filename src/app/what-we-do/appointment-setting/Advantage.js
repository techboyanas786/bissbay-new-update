import Image from "next/image";
import React from "react";

const Advantages = () => {
  const advantages = [
    {
      icon: (
        <Image
          src="/Icons/Quality.svg"
          alt="Quality"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Higher-Quality Leads",
      description:
        "Pre-qualified, intent-driven prospects that match your Ideal Customer Profile (ICP).",
    },
    {
      icon: (
        <Image
          src="/Icons/sales.svg"
          alt="sales"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Boost in Sales Productivity",
      description: "Your team focuses on closing, not prospecting.",
    },
    {
      icon: (
        <Image
          src="/Icons/Accelerate.svg"
          alt="Accelerate"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Shorter, Accelerated Sales Cycles",
      description: "Engage decision-makers sooner, accelerate deal closures.",
    },
    {
      icon: (
        <Image
          src="/Icons/bulb.svg"
          alt="bulb"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      title: "Adaptive, Customized Solutions",
      description: "Whether you need a quick boost or a long-term strategy.",
    },
  ];

  return (
      <section id="advantages" className="mx-auto text-black">
          <div className=" text-center">
            <h2 className="section-title !mb-0">
              The BISSBAY <span className="text-primary">Advantage</span>:
              Scalable, Predictable Growth
            </h2>
            <h3 className="my-4 lg:my-6">
              We don't just book appointments; <br />
              We create a predictable pipeline of high-quality leads that
              convert into revenue.
            </h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="shadow-md metric-card bg-white rounded-xl p-4 md:p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex items-center mb-2 gap-3">
                {advantage.icon}
                <h5  >{advantage.title}</h5>
              </div>
              <p  >{advantage.description}</p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Advantages;
