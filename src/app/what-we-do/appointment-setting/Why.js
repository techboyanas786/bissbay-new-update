"use client";
import React, { useEffect } from "react";
import { Target, Users, Cpu, BarChart4, Handshake } from "lucide-react";
import Image from "next/image";

const FlexibleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v20"></path>
    <path d="M17 5H7.5a2.5 2.5 0 0 0 0 5h9a2.5 2.5 0 0 1 0 5H7"></path>
  </svg>
);

const FeatureCard = ({ title, description, icon, delay }) => {
  return (
    <div
      className="shadow-md metric-card bg-white rounded-xl p-4 md:p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll"
      data-delay={delay}
    >
      <div className="flex flex-row mb-2 items-center gap-2">
        <div className="text-primary flex justify-center items-center">
          {icon}
        </div>
        <h5  >{title}</h5>
      </div>

      <p  >{description}</p>
    </div>
  );
};

const Why = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-on-scroll-active");
          }
        });
      },
      { threshold: 0.1 }
    );
    document
      .querySelectorAll(".animate-on-scroll")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="bg-[#fff] relative">
        <div className="text-center animate-on-scroll">
          <h2 className="section-title !mb-0">
            Why Choose <span className="text-primary">BISSBAY?</span>
          </h2>
          <h3 className="my-4 lg:my-6">
            We don't just book meetings, we connect you with real decision-makers
            who are ready to engage with your solutions.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <FeatureCard
            title="10+ Years of Experience"
            description="We help companies from startups to enterprises. Connect with real decision-makers, not dead-end leads."
            icon={
              <Image
                src="/Icons/MEDAL.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            }
            delay={100}
          />

          <FeatureCard
            title="Built for Revenue Teams"
            description="We empower revenue-focused leaders by delivering tangible business results, not just appointments."
            icon={
              <Image
                src="/Icons/Teams.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            }
            delay={200}
          />

          <FeatureCard
            title="Tech-Enabled, Human-Driven"
            description="We use intelligent data, automation, and expert outreach to deliver scalable, personalized campaigns."
            icon={
              <Image
                src="/Icons/Technology.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            }
            delay={300}
          />
          <FeatureCard
            title="Quality Over Quantity"
            description="We prioritize quality, delivering appointments more likely to turn into real business."
            icon={
              <Image
                src="/Icons/Quality.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            }
            delay={400}
          />

          <FeatureCard
            title="Flexible & Transparent"
            description="We provide solutions aligned to your goals, sales process, team and provide clear real-time reports."
            icon={
              <Image
                src="/Icons/TARGET.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            }
            delay={500}
          />
          <FeatureCard
            title="Our Promise"
            description="Real decision-makers. Real appointments. Real revenue growth."
            icon={
              <Image
                src="/Icons/LOYALTY.svg"
                alt="Revenue Stagnation"
                className="flex-shrink-0"
                width={36}
                height={36}
              />
            }
            delay={500}
          />
        </div>
    </section>
  );
};

export default Why;
