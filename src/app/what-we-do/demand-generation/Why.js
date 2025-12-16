import React from "react";
import {
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";
import Image from "next/image";

const Why = () => {
  const features = [
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
      heading: "Target buyers before the search ",
      text: "Reach in-market buyers using predictive intent data.",
      delay: "0ms",
    },
    {
      icon: (
        <Image
          src="/Icons/sales.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      heading: "Align sales and marketing",
      text: "Seamless lead flow drives smoother conversions.",
      delay: "200ms",
    },
    {
      icon: (
        <Image
          src="/Icons/SUSTAINABLE.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      heading: "Nurture leads",
      text: "Keep prospects engaged and your brand top of mind.",
      delay: "400ms",
    },
    {
      icon: (
        <Image
          src="/Icons/SCALING.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      heading: "Maximize ROI",
      text: "Optimize spend and double down on what always works.",
      delay: "600ms",
    },
  ];
  return (
    <section className="relative z-10">
      {/* Main Title */}
      <div className="text-center">
        <h2 className={`section-title !mb-0`}>
          Why
          <span className="text-primary"> Demand Generation</span> Works?
        </h2>

        <h3 className={`my-4 md:my-6`}>
          Modern B2B buyers do their homework long before talking to sales,
          <br />
          That's why demand generation focuses on creating awareness,
          nurturing interest, and driving action across the full funnel
        </h3>
      </div>

      {/* BISSBAY Section */}
      <div className="text-center">
        <div
          className={`inline-flex items-center space-x-4 transition-all duration-1000`}
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-2xl max-w-3xl font-semibold text-brand-black mb-4 md:mb-6">
            At <span className="text-primary font-bold">BISSBAY</span> we
            make it work by
          </h2>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`relative metric-card min-h-36 !py-4 md:!py-6 hover-card border-2 !border-[#FF4200] md:!border-transparent md:hover:!border-[#FF4200] transition-all duration-300`}
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="flex items-center mb-2 gap-3">
                {feature.icon}
                <h5  >{feature.heading}</h5>
              </div>

              <p  >{feature.text}</p>
            </div>
          );
        })}
      </div>
      <p className={`text-center mt-4 md:mt-6 !text-xl !font-semibold `}>
        Demand generation isn't about volume, it's about velocity. And with
        BISSBAY, it delivers measurable growth
      </p>
    </section>
  );
};

export default Why;
