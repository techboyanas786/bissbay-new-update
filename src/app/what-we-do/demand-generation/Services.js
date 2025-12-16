import React from 'react'
import { User, Users, Layers, BarChart, Rocket } from 'lucide-react';

function Services() {

  const SolutionCard = ({ title, description, features, delay, result }) => {
    return (
      <div className={`card hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in ${delay}`}>
        <div className="flex items-center mb-2">
          <h5  >{title}</h5>
        </div>
        <p className="!font-medium mb-2">{description}</p>

        <ul>
          {features.map((feature, index) => {
            const [beforeDash, afterDash] = feature.split(':')
            return (
              <li key={index} className="flex items-start mb-2">
                <p className="text-gray-700">
                  <span className="text-primary font-bold mr-2">✔</span>
                  <span className='font-bold text-[#1f2937]'>{beforeDash} - </span> {afterDash}
                </p>
              </li>
            )
          })}
        </ul>

        <div className="mt-2">
          <p className='!text-primary !font-bold'>{result}</p>

        </div>
      </div>
    );
  };
  return (
    <section id="solutions">
      <div className="text-center">
        <h2 className="section-title !mb-0 fade-in">
          Core <span className="text-primary">Demand Generation</span> Services
        </h2>
        <h3 className="my-4 md:my-6">
          Our comprehensive suite of demand generation services is designed to drive results at every stage of the buyer's journey.
        </h3>
      </div>

      <div className=" mx-auto">
        {/* Grid for the first three cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <SolutionCard
            title="Lead Generation: Precision Targeting, Proven Results"
            description="Leverage BISSBAY’s AI-powered Audience Intelligence Platform to pinpoint decision-makers actively researching solutions for your business."
            features={[
              "Intent-Driven Leads : Identify high-intent accounts through billions of data points.",
              "Multi-Channel Outreach : Engage buyers via email, social, webinars, and telemarketing.",
              "Triple-Verified Quality : Leads are verified, real, and 100% sales-ready.",
            ]}
            delay="delay-1"
            result="Close deals 40% faster."
          />

          <SolutionCard
            title="Pipeline Generation: Turn Interest into Action"
            description="Move beyond MQLs and deliver sales-ready opportunities that match your ideal customer profile (ICP)."
            features={[
              "ABM-Driven Precision : Hyper-target high-value accounts with custom messaging.",
              "Deal-Based Nurturing : Nurture leads with insights specific to their buying process.",
              "Appointment Setting : We book and reconfirm meetings so your reps focus on closing.",
            ]}
            delay="delay-2"
            result="Increase win rates by 30%."
          />

          <SolutionCard
            title="Integrated Demand Generation: Omnichannel Excellence"
            description="Unify digital and offline tactics for a seamless buyer journey."
            features={[
              "Content Syndication : Tap into 450K+ global publishers, pay only for verified leads.",
              "Nurture Campaigns : Keep prospects engaged with automated multi-touch workflows.",
              "Real-Time Lead Routing : Qualify, verify, and deliver leads straight to your CRM.",
            ]}
            delay="delay-3"
            result="Reduce cost per lead by 50%."
          />
          <SolutionCard
            icon={<Layers size={32} />}
            title="Predictive Nurturing: Never Let a Lead Go Cold"
            description="Don’t let valuable leads slip away. We ensure buyers hear from you when it matters most."
            features={[
              "Intent Tracking : Monitor behavioral signals like research patterns and competitor activity.",
              "Dynamic Messaging : Deliver personalized content tailored to buying stage and interests.",
              "Sales-Ready Alerts : Get notified the moment a lead re-engages.",
            ]}
            delay="delay-3"
            result="Unlock 25% more revenue from existing leads."
          />
        </div>

      </div>
    </section>
  )
}

export default Services