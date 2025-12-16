"use client";
import React from "react";
import {
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";

const ServicesSection = () => {

  const services = [
    {
      icon: (
        <Image
          src="/Icons/Digital_marketing.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Paid Social Advertising",
      subtitle: "Turn Engagement into Revenue",
      description:
        "Advanced targeting with AI-optimized creatives across Facebook, Instagram, LinkedIn, TikTok, Pinterest, and Snapchat.",
      features: [
        "Behavioral insights",
        "Dynamic ad placements",
        "Real-time optimization",
      ],
      example:
        "Auto dealers use Facebook’s dynamic inventory ads to deliver vehicle-specific models to in-market buyers, driving test-drive bookings.",
    },
    {
      icon: (
        <Image
          src="/Icons/IDENTIFY.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Paid Search (SEM/PPC)",
      subtitle: "Own the Top Spot",
      description:
        "AI-powered keyword optimization with smart bidding and competitor conquesting strategies.",
      features: [
        "Google Shopping integration",
        "Intent-based targeting",
        "ROI maximization",
      ],
      example:
        "Retailers dynamically adjust Google Shopping bids based on demand and stock availability, ensuring maximum visibility.",
    },
    {
      icon: (
        <Image
          src="/Icons/SEO.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "SEO and Content Strategy",
      subtitle: "Dominate Organic Search",
      description:
        "Tactical local SEO, content creation, and high-value content curation for sustained growth.",
      features: ["Technical optimization", "Local SEO mastery", "Content excellence"],
      example:
        "We helped an auto dealership increase local search visibility by 45% through Google My Business optimization.",
    },
    {
      icon: (
        <Image
          src="/Icons/Screening.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Programmatic and Display",
      subtitle: "Precision Audience Targeting",
      description:
        "Real-time bidding with AI-powered fraud prevention across premium networks.",
      features: ["RTB technology", "Fraud prevention", "Cross-platform reach"],
      example:
        "AI-powered filtering ensures ads reach real buyers across Google Display and programmatic networks.",
    },
    {
      icon: (
        <Image
          src="/Icons/Maximum.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Omni-Channel Marketing",
      subtitle: "Seamless Customer Journeys",
      description:
        "Integrated campaigns across CTV, email, SMS, and social platforms for maximum impact.",
      features: ["Multi-channel sync", "Customer retention", "Journey optimization"],
      example:
        "A retail client saw 25% higher customer lifetime value through integrated email, SMS, and social campaigns.",
    },
    {
      icon: <ShoppingCart className="!text-primary" size={36} />,
      title: "Retail Media and Commerce",
      subtitle: "Optimize Every Purchase Moment",
      description:
        "Amazon and Walmart ads optimization with social commerce integration.",
      features: ["Marketplace mastery", "Social commerce", "Purchase optimization"],
      example:
        "Convert Instagram Reels and Pinterest Pins into direct sales with optimized shopper journey mapping.",
    },
  ];


  return (
    <section id="services">
      <div className={`text-center transition-all duration-800 transform `}>
        <h2 className="section-title !mb-0 text-button fade-in">
          Core Services: <span className="text-primary">Precision</span> Meets
          Performance
        </h2>
        <h3 className="my-4 md:my-6">
          Comprehensive digital marketing solutions designed to drive
          measurable growth across every channel.
        </h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 lg:gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`card hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-100 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in`}
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {service.icon}
                  <h5 className="mb-0">{service.title}</h5>
                </div>
                <p className=" mb-2 text-gray-600 !font-semibold">
                  {service.subtitle}
                </p>
                <p className="mb-0 md:mb-6 text-gray-600">{service.description}</p>

                <div className="flex flex-wrap gap-2 py-4">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-primary/10 text-gray-700 rounded-full text-sm font-medium hover:bg-[rgb(255,66,0)]/10 hover:text-[rgb(255,66,0)] transition-colors duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="p-2 md:p-4 bg-gray-50 rounded-md border-l-6 border-[rgb(255,66,0)]">
                  <p className="text-gray-600">{service.example}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
