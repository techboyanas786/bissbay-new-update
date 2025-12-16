"use client";
import { motion } from "framer-motion";
import React from "react";
import { CountUpAnimation } from "../account-based-marketing/animation/CountUpAnimation";
const DifferenceSection = () => {
  return (
    <section className="bg-gradient-dark text-black">
        <div className="text-center animate-fade-in">
          <h2 className="section-title !mb-0">The <span className="text-primary">BISSBAY </span>Difference</h2>
          <h3
            className="my-4 md:my-6"
            style={{ animationDelay: "0.2s" }}
          >
            Expanding into new markets? Launching a new product? Scaling
            globally?<br/> BISSBAY delivers predictable, measurable & scalable
            growth.
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap:6 lg:gap-16 items-center">
          <div className="animate-fade-in-up">
            
            <div className="space-y-4 md:space-y-6 mb-4 md:mb-0">
              {[
                  {
                  title: "AI-Powered Intelligence Engine",
                  description: "Our AI-driven platform turns demand generation into a science."
                },
                {
                  title: "Predictive Analytics",
                  description: "Identify in-market accounts 6–9 months before they buy."
                },
                {
                  title: "Campaign Transparency",
                  description: "Real-time dashboards track lead sources, ROI, and sales follow-up activities."
                },
                {
                  title: "Global Scalability",
                  description: "Execute campaigns in multiple languages with localized messaging."
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start metric-card hover-card"
                >
                  <div>
                    <h5 className="mb-2">{feature.title}</h5>
                    <p  >{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="card hover-card !p-4 md:!p-6">
              <h3 className="text-2xl font-bold mb-4 md:mb-6 text-center text-primary">Go-to-Market Excellence</h3>
              
              <div className="space-y-4">
                {[
                  { label: "Lower CAC", description: "Reduce customer acquisition costs", progress: 85 },
                  { label: "Competitor Takeover", description: "Convert rival solution users", progress: 92 },
                  { label: "Retention & Expansion", description: "Reactivate dormant accounts", progress: 78 }
                ].map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="!font-bold !text-[#1f2937]">{metric.label}</p>
                        <p className="text-sm text-gray-600">{metric.description}</p>
                      </div>
                      <span className="text-primary font-bold">
                        <CountUpAnimation
                      start={0}
                      end={metric.progress}
                      className="text-primary font-bold"
                      />%
                      </span>
                      
                    </div>
                    <motion.div className="h-2 bg-black/20 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                        initial={{width:0}}
                        animate={{width: `${metric.progress}%`}}
                      ></motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default DifferenceSection;