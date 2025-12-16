"use client";
import React, { useState } from "react";
import { User, Users, Layers, BarChart, Rocket } from "lucide-react";
import Button from "@/components/Button";
import { TbTargetArrow } from "react-icons/tb";
import BookingModal from "@/components/BookingModal";
function ABMSolutions() {
   const [isModalOpen, setIsModalOpen] = useState(false);
  const SolutionCard = ({
    className,
    icon,
    title,
    description,
    features,
    delay,
  }) => {
    return (
      <div
        className={`card ${className} hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in ${delay}`}
      >
        <div className="flex items-center mb-2">
          <div className="mr-3 text-primary">{icon}</div>
          <h5 className="text-xl font-bold">{title}</h5>
        </div>
        <p className="text-primary !font-medium mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <p className="!text-primary font-bold mr-2">✔</p>
              <p  >{feature}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <>
    <section id="solutions">
      <div>
        <div className="text-center">
          <h2 className="section-title !mb-0">
            ABM <span className="text-primary">Solutions</span>
          </h2>
          <h3 className="my-4 lg:my-6">
            Built for Every Stage - Whether you're engaging a single enterprise
            or scaling across industries
          </h3>
        </div>

        <div>
          {/* Grid for the first three cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <SolutionCard
              icon={<User className="medium-icon" />}
              title="1:1 ABM"
              description="Ultra-Personalized for Top-Tier Accounts"
              features={[
                "Bespoke campaigns with custom content",
                "Executive engagement programs",
                "Deep analytics and insights",
                "Ideal for enterprise clients requiring a white-glove approach",
              ]}
              delay="delay-1"
            />

            <SolutionCard
              icon={<Users className="medium-icon" />}
              title="1:Few ABM"
              description="Smart Segmentation for Niche Markets"
              features={[
                "Target clusters of accounts by industry, size, or region",
                "Shared but tailored content",
                "Efficient personalization at scale",
                "Perfect for growing focused segments",
              ]}
              delay="delay-2"
            />

            <SolutionCard
              icon={<Layers className="medium-icon" />}
              title="1:Many ABM"
              description="Data-Driven, Scalable Growth"
              features={[
                "Lower-cost, wide-reach ABM",
                "Leverages intent data and behavioral signals",
                "Automated personalization at scale",
                "Dynamic content optimization",
              ]}
              delay="delay-3"
            />

            <SolutionCard
              icon={<BarChart className="medium-icon" />}
              title="ABX (Account-Based Experience)"
              description="Beyond Marketing - Full Customer Journey"
              features={[
                "Align marketing, sales, and customer success",
                "Fuel cross-sell opportunities",
                "Build retention and long-term loyalty",
                "Seamless customer experience across touchpoints",
              ]}
              delay="delay-4"
            />

            <SolutionCard
              icon={<Rocket className="medium-icon" />}
              title="ABM On-Demand"
              description="Agility Meets Impact"
              features={[
                "Rapid execution without straining internal resources",
                "Flexible ABM programs for faster time-to-market",
                "Multi-channel campaign delivery",
                "Flexible engagement models to fit your needs",
              ]}
              delay="delay-5"
            />

            <div className="card flex flex-col justify-center items-center hover:border-b-5 border-b-5 border-t-5 border-white transition-all duration-300 hover:border-t-5 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary">
              <div className="flex mb-4 lg:mb-6 flex-row gap-4 items-center justify-center">
                <TbTargetArrow className="medium-icon"/>
                <h5  >
                Ready to boost your ABM?
              </h5>
              </div>
              
              <p className="mb-4 md:mb-6 text-center">
                Let us design your next high-performing <br/>ABM campaign.
              </p>
              <div className="flex flex-row items-center justify-center">
              <Button customClass=" transform transition-all duration-300 ease-in-out" variant="primary" label="Schedule Your Consultation" onClick={() => setIsModalOpen(true)} />
              </div>
            </div>
          </div>
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

export default ABMSolutions;
