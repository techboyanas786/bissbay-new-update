"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Metrics = () => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    let timeout1;
    let timeout2;
    let timeout3;

    if (inView) {
      let current1 = 0;
      let current2 = 0;
      let current3 = 0;

      const target1 = 200;
      const target2 = 15;
      const target3 = 10;

      const duration = 2000; // 2 seconds
      const steps1 = 50;
      const steps2 = 50;
      const steps3 = 30;

      const increment1 = target1 / steps1;
      const increment2 = target2 / steps2;
      const increment3 = target3 / steps3;

      const interval1 = duration / steps1;
      const interval2 = duration / steps2;
      const interval3 = duration / steps3;

      const animate1 = () => {
        current1 += increment1;
        if (current1 < target1) {
          setCount1(Math.floor(current1));
          timeout1 = window.setTimeout(animate1, interval1);
        } else {
          setCount1(target1);
        }
      };

      const animate2 = () => {
        current2 += increment2;
        if (current2 < target2) {
          setCount2(Math.floor(current2));
          timeout2 = window.setTimeout(animate2, interval2);
        } else {
          setCount2(target2);
        }
      };

      const animate3 = () => {
        current3 += increment3;
        if (current3 < target3) {
          setCount3(Math.floor(current3));
          timeout3 = window.setTimeout(animate3, interval3);
        } else {
          setCount3(target3);
        }
      };

      animate1();
      animate2();
      animate3();
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [inView]);

  const metrics = [
    {
      icon: (
        <Image
          src="/Icons/Calendar.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Sales Opportunities Yearly",
      value: count1,
      suffix: "+",
      description: "A consistent flow of high-value leads",
      bgColor: "bg-primary",
    },
    {
      icon: (
        <Image
          src="/Icons/CloseDeal.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Deal Closing Rate",
      value: count2,
      suffix: "%",
      description: "More qualified leads = more conversions",
      bgColor: "bg-primary",
    },
    {
      icon: (
        <Image
          src="/Icons/ReturnInvestment.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Return on Investment",
      value: count3,
      suffix: ":1",
      description: "Your investment delivers real, measurable growth",
      bgColor: "bg-primary",
    },
  ];

  return (
    <section id="metrics" className="bg-white relative">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="section-title !mb-0"
        >
          Key Performance <span className="text-primary">Metrics</span> That
          Matter
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="my-4 lg:my-6"
        >
          We measure our success by the tangible results we deliver
        </motion.h3>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-4 lg:gap-8"
      >
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="shadow-md card bg-white hover:scale-103 p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll"
          >
            <div className={`${metric.bgColor} rounded-2xl p-6`}>
              <div className="flex justify-between items-start">
                <div className="p-3">{metric.icon}</div>
                <div className="text-right">
                  <p className="!text-white !font-medium">Average</p>
                  <div className="text-4xl md:text-5xl font-bold text-white flex items-end justify-end">
                    {metric.value}
                    <span className="text-white/80">{metric.suffix}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-0 py-3 lg:p-6">
              <h5 className="!mb-2">{metric.title}</h5>
              <p  >{metric.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="lg:mt-12 lg:mb-12 mb-4 mt-4 w-fit mx-auto bg-primary/10 rounded-xl p-4 md:p-6 border-l-7 border-primary"
      >
        <h3 className="mb-2 text-center">Our Results Speak For Themselves</h3>
        <p  >
          Our clients experience shorter sales cycles, higher conversion
          rates, and a stronger, more predictable pipeline.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="rounded-xl p-4 lg:p-6 border border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="my-4">
              Ready to See These Results for Your Business?
            </h3>
            <p className="text-gray-600 mb-4 md:mb-6">
              Book a consultation with our team to learn how BISSBAY can power
              your sales pipeline with high-quality, sales-ready appointments.
            </p>
            <div className="p-0 md:p-6 border-0 md:border-[0.5] border-gray-300 rounded-xl">
              <h5 className="mb-2">What to Expect:</h5>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <p className="!text-primary font-bold mr-2">✔</p>
                  <div>
                    <p className="!font-bold">30-minute discovery call</p>
                    <p className="text-gray-600 text-sm">
                      We'll discuss your goals and challenges
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <p className="!text-primary font-bold mr-2">✔</p>
                  <div>
                    <p className="!font-bold">Custom strategy proposal</p>
                    <p className="text-gray-600 text-sm">
                      Tailored to your specific business needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <p className="!text-primary font-bold mr-2">✔</p>
                  <div>
                    <p className="!font-bold">No pressure, no obligation</p>
                    <p  >
                      Just honest conversation about how we can help
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="shadow-md card bg-white rounded-xl p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll">
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src="/Icons/TARGET.svg"
                  alt="Revenue Stagnation"
                  className="flex-shrink-0"
                  width={36}
                  height={36}
                />
                <div>
                  <h5  >Average Client Results</h5>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <p className="!text-sm !font-semibold">Pipeline Growth</p>
                    <span className="text-gray-900 font-bold">+40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={inView ? { width: "40%" } : { width: "0%" }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                    />
                  </div>
                </div>
                <div className=" p-4 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <p className="!text-sm !font-semibold">
                      Sales Cycle Reduction
                    </p>
                    <span className="text-gray-900 font-bold">-35%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={inView ? { width: "35%" } : { width: "0%" }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.4,
                      }}
                    />
                  </div>
                </div>
                <div className=" p-4 rounded-xl">
                  <div className="flex justify-between mb-2">
                    <p className="!text-sm !font-semibold">
                      Revenue Increase
                    </p>
                    <span className="text-gray-900 font-bold">+25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-primary h-2 rounded-full"
                      initial={{ width: "0%" }}
                      animate={inView ? { width: "25%" } : { width: "0%" }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                        delay: 0.6,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Metrics;
