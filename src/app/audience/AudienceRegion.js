import React, { useEffect, useState } from "react";
import { inView, motion } from "framer-motion";
import Section from "@/components/WhatWeDo/Section";
import RegionChart from "@/components/WhatWeDo/RegionChart";
import IndustryChart from "@/components/WhatWeDo/IndustryChart";
import CompanySizeChart from "@/components/WhatWeDo/CompanySizeChart";
import SeniorityChart from "@/components/WhatWeDo/SeniorityChart";
import JobFunctionChart from "@/components/WhatWeDo/JobFunctionChart";

function AudienceRegion() {
  const Counter = ({ endValue, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        },
        { threshold: 0.1 }
      );

      const element = document.getElementById(`counter-${endValue}`);
      if (element) observer.observe(element);

      return () => {
        if (element) observer.unobserve(element);
      };
    }, [endValue]);

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const increment = endValue / (duration / 16); // 60 FPS approximation
        const timer = setInterval(() => {
          start += increment;
          if (start >= endValue) {
            setCount(endValue);
            clearInterval(timer);
          } else {
            setCount(Math.round(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, endValue, duration]);

    return <span id={`counter-${endValue}`}>{`${count}${suffix}`}</span>;
  };

  return (
    <>
      <div>
        <div className="flex justify-center items-center mb-4 sm:mb-6">
          <h1 className="section-title !mb-0 text-center">
            Global Audience <span className="text-primary">Insights</span>
          </h1>
        </div>
        <Section title="Audience by Region">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 md:mb-0">
              <motion.p
                className="text-lg mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Our audience spans across four major regions globally, with EMEA
                representing the largest share at nearly 33%, followed by APAC
                at 24%.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 justify-center sm:justify-start items-center sm:mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="bg-primaryLight rounded-xl flex flex-col items-center">
                  <h2 className="!text-[#ff4200]">
                    <Counter endValue={113} suffix="M+" />
                  </h2>
                  <p>Total Global Audience</p>
                </div>
                <div className="rounded-xl flex flex-col items-center">
                  <h2 className="!text-[#ff4200]">
                    <Counter endValue={4} />
                  </h2>
                  <p>Major Regions</p>
                </div>
              </motion.div>
            </div>
            <div className="w-full md:w-1/2">
              <RegionChart />
            </div>
          </div>
        </Section>
      </div>
      <div>
        <Section title="Audience by Industry" delay={0.3}>
          <div className="sm:mb-6 max-w-3xl">
            <motion.p
              className="text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              Technology & IT leads with over 27% of our audience, followed by
              Banking & Insurance at 18%.<br />These visualizations show distribution
              across 13 major industry sectors.
            </motion.p>
          </div>
          <IndustryChart />
        </Section>
      </div>
      <div>
        <Section title="Audience by Company Size" delay={0.4}>
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <CompanySizeChart />
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <motion.div
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      1
                    </div>
                    <p>
                      Large enterprises (10,001+ employees) represent our largest
                      audience segment at nearly 20%
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      2
                    </div>
                    <p>
                      Mid-size companies (501-10,000 employees) make up 40.9% of our
                      audience
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-primary text-white flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      3
                    </div>
                    <p>
                      Small businesses (11-500 employees) collectively account for
                      40% of the total audience
                    </p>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>
      <div>
        <section title="Audience by Seniority Level" delay={0.5}>
          <div className="flex flex-col justify-between md:flex-row items-center">
            <div className="w-full md:w-[40%] order-2 md:order-1">
              <div
                className="bg-white p-4 md:p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-4">Seniority Distribution</h3>
                <p className="mb-4">
                  Our audience spans the entire corporate hierarchy, with
                  strongest representation at the Manager Level (25%) and Director
                  Level (20%).
                </p>
                <div className="bg-primaryLight rounded-xl">
                  <p className="font-semibold">Leadership Coverage</p>
                  <p className="text-sm mt-2">
                    Executive leadership (C-Level and above) comprises 30% of our
                    total audience, representing direct access to key decision
                    makers.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[58%] order-1 md:order-2">
              <SeniorityChart />
            </div>
          </div>
        </section>
      </div>
        <Section title="Job Function Distribution" delay={0.6}>
          <div className="flex flex-col items-center">
            <div className="text-center md:mb-6">
              <motion.p
                className="text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                Our audience spans across 10 key job functions, with IT &
                Engineering (22%) and Finance & Accounting (17%) representing the
                largest segments.
              </motion.p>
            </div>
            <div className="w-full max-w-3xl mx-auto">
              <JobFunctionChart />
            </div>
          </div>
        </Section>
    </>
  );
}

export default AudienceRegion;
