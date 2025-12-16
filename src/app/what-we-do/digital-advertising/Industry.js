"use client";
import {
  CarIcon,
  ShoppingBag,
  Building2,
  HandHeart,
  Shield,
  Briefcase,
} from "lucide-react";

const IndustrySection = () => {
  const industries = [
    {
      icon: CarIcon,
      title: "Automotive",
      description:
        "Reach in-market buyers with hyper-precision targeting and dynamic inventory strategies.",
    },
    {
      icon: ShoppingBag,
      title: "Retail & eCommerce",
      description:
        "Turn scrolls into sales across social and search with optimized product campaigns.",
    },
    {
      icon: Building2,
      title: "B2B & SaaS",
      description:
        "Fuel pipeline growth with intent-driven ABM and lead nurturing strategies.",
    },
    {
      icon: HandHeart,
      title: "Healthcare",
      description:
        "Stay compliant while connecting with the right patients through targeted campaigns.",
    },
    {
      icon: Shield,
      title: "Finance & Insurance",
      description:
        "Strengthen customer trust with smart targeting and compliance-first strategies.",
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description:
        "Establish authority online and generate qualified leads with content-driven strategies.",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="text-center animate-fade-in ">
        <h2 className="section-title !mb-0 fade-in">
          Industry-Specific <span className="text-primary">Solutions</span>
        </h2>
        <h3 className="my-4 md:my-6">Real Results, Built for Your Industry</h3>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 ">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group relative rounded-lg overflow-hidden border-2 border-primary md:!border-gray-200 md:hover:!border-primary shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-white"
          >
            <div className="p-4 md:p-6">
              <div className="flex flex-row items-center justify-start gap-3 mb-2">
                <industry.icon className="medium-icon" />
                <h5 className="text-2xl font-bold">{industry.title}</h5>
              </div>
              <p className="text-gray-600 ">{industry.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center mt-4 md:mt-6 !text-xl !font-semibold ">
        At BISSBAY, we don't believe in one-size-fits-all marketing. Every
        industry has its own rhythm, pain points, and opportunities and we
        build strategies to match.
      </p>
    </section>
  );
};

export default IndustrySection;
