import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Target, MessageCircle, CalendarCheck, ChartLine } from "lucide-react";
import Image from "next/image";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const steps = [
    {
      icon: (
        <Image
          src="/Icons/TARGET.svg"
          alt="Target"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      number: "1",
      title: "Define & Target Your Ideal Prospects",
      items: [
        "ICP Development: Identify high-value leads that match your Ideal Customer Profile.",
        "Intent-Based Research: Use advanced tools to spot in-market buyers with real purchasing potential.",
      ],
      metrics: [
        { label: "Decision Makers", value: 85 },
        { label: "Budget Owners", value: 78 },
        { label: "Active Buyers", value: 92 },
      ],
    },
    {
      icon: (
        <Image
          src="/Icons/Maximum.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      number: "2",
      title: "Multi-Channel Engagement for Maximum Impact",
      items: [
        "Personalized Email & LinkedIn Outreach: Custom messaging that resonates.",
        "Cold Calling Done Right: Value-driven conversations that build trust.",
        "SMS & Other Channels: Multi-touch strategies for higher engagement.",
      ],
      metrics: [
        { label: "Email Open Rate", value: 42 },
        { label: "LinkedIn Response", value: 38 },
        { label: "Call Connection", value: 25 },
      ],
    },
    {
      icon: (
        <Image
          src="/Icons/Engagement.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      number: "3",
      title: "Convert Conversations into Sales-Ready Appointments",
      items: [
        "High-Impact Conversations: We educate, qualify, and engage decision-makers.",
        "Strategic Appointment Scheduling: We book meetings at optimal times to reduce no-shows.",
        "Seamless Handoffs: Your sales team receives warm, well-informed leads, ready to buy.",
      ],
      metrics: [
        { label: "Qualified Meetings", value: 65, color: "bg-bissbay-green" },
        { label: "Needs Follow-up", value: 25, color: "bg-yellow-500" },
        { label: "Not a Good Fit", value: 10, color: "bg-red-500" },
        {
          label: "No-show Rate",
          value: 8,
          color: "text-green-500",
          isNoShow: true,
        },
      ],
    },
    {
      icon: (
        <Image
          src="/Icons/OPTIMIZATION.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0 w-9 h-auto"
          width={36}
          height={36}
        />
      ),
      number: "4",
      title: "Continuous Optimization & Performance Tracking",
      items: [
        "Real-Time Metrics & A/B Testing: Data-backed campaign refinements.",
        "Performance-Driven Adjustments: We tweak strategies for maximum appointment conversions.",
      ],
      metrics: [
        { label: "Average Improvement  After Optimization", value: 28 },
        {
          label: "Average Return  On Investment",
          value: 10,
          isMultiplier: true,
        },
      ],
    },
  ];

  const Counter = ({ endValue, isMultiplier = false, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (inView) {
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
    }, [inView, endValue, duration]);

    return <span>{isMultiplier ? `${count}x` : `${count}%`}</span>;
  };

  const ProgressBar = ({ endValue, duration = 2000 }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
      if (inView) {
        // Small delay to ensure CSS transition triggers
        requestAnimationFrame(() => {
          setIsAnimating(true);
        });
      }
    }, [inView]);

    return (
      <div className="w-2/3 h-4 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full"
          style={{
            width: isAnimating ? `${endValue}%` : '0%',
            transition: `width ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`
          }}
        ></div>
      </div>
    );
  };

  return (
    <section id="how-it-works">
      <div className="text-center ">
        <h2 className="section-title !mb-0 text-button fade-in">
          How <span className="text-primary">BISSBAY's</span> Appointment
          Setting Works
        </h2>
        <h3 className="my-4 lg:my-6">
          We’ve developed a proven process that consistently delivers
          high-quality meetings with decision-makers in your target market.
        </h3>
      </div>

      <div className="space-y-4 lg:space-y-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-4 lg:gap-8 items-center lg:p-0 p-0 lg:border-0 border-2 rounded-md border-[#ff4200]"
            ref={index === 0 ? ref : null}
          >
            <div className="md:w-1/2">
              <div
                className="shadow-md metric-card bg-white rounded-xl !p-4 md:!p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll"
                style={{ animationDelay: `${0.2 * index}s` }}
              >
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {step.number}
                </div>
                <div  >
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <h5  >{step.title}</h5>
                  </div>
                  <ul className="space-y-2">
                    {step.items.map((item, i) => {
                      const [title, description] = item.split(": ");
                      return (
                        <li key={i} className="flex gap-2">
                          <p>
                            <span className="text-[#1f2937] font-bold">
                              {title}:{" "}
                            </span>
                            {description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              {index === 0 && (
                <div
                  className="card bg-white rounded-xl p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll"
                  style={{ animationDelay: `${0.2 * index + 0.1}s` }}
                >
                  <h5 className="font-bold mb-2 border-b pb-2">
                    Target Profiles Analysis
                  </h5>
                  <div className="space-y-4">
                    {step.metrics.map((metric, i) => (
                      <div
                        key={i}
                        className="flex justify-between items-center"
                      >
                        <p className="!font-semibold !text-sm">
                          {metric.label}
                        </p>
                        <ProgressBar endValue={metric.value} />
                        <p className="!font-bold">{metric.value}%</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {index === 1 && (
                <div
                  className="grid grid-cols-3 gap-4 animate-slide-in"
                  style={{ animationDelay: `${0.2 * index + 0.1}s` }}
                >
                  {step.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className="shadow-md metric-card bg-white rounded-xl !p-2 lg:!p-6 border-white border-2 hover:border-primary transition-all duration-300 card-hover animate-on-scroll"
                    >
                      <div className="text-primary font-bold text-2xl mb-2 w-full lg:text-left text-center">
                        <Counter endValue={metric.value} />
                      </div>
                      <p className="!font-semibold !text-sm w-full lg:text-left text-center">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              {index === 2 && (
                <div
                  className="bg-white !p-4 md:!p-6 rounded-xl shadow-md border-white border-2 hover:border-primary transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${0.2 * index + 0.1}s` }}
                >
                  <h5 className="mb-2">Meeting Outcomes</h5>
                  <div className="space-y-2">
                    {step.metrics.slice(0, 3).map((metric, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${metric.color}`}
                        ></div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <p className="!font-semibold !text-sm">
                              {metric.label}
                            </p>
                            <span className="font-bold">
                              <Counter endValue={metric.value} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="mt-4 pt-2 border-t">
                      <div className="flex justify-between text-sm">
                        <p className="!font-semibold !text-sm">
                          {step.metrics[3].label}
                        </p>
                        <span
                          className={`font-bold ${step.metrics[3].color}`}
                        >
                          <Counter endValue={step.metrics[3].value} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {index === 3 && (
                <div
                  className="bg-white border-white border-2 hover:border-primary transition-all duration-300 p-4 md:p-6 rounded-xl shadow-md animate-slide-in"
                  style={{ animationDelay: `${0.2 * index + 0.1}s` }}
                >
                  <div className="flex items-center justify-center gap-4 md:gap-7">
                    {step.metrics.map((metric, i) => (
                      <React.Fragment key={i}>
                        {/* Metric block */}
                        <div className="text-center">
                          <div className="text-5xl font-bold text-primary mb-2">
                            <Counter
                              endValue={metric.value}
                              isMultiplier={metric.isMultiplier}
                            />
                          </div>
                          <div className="text-sm text-gray-600">
                            {metric.label.split("  ").map((word, j) => (
                              <p key={j}>
                                {word}
                                <br />
                              </p>
                            ))}
                          </div>
                        </div>

                        {i < step.metrics.length - 1 && (
                          <div className="h-16 border-2 border-l border-gray-300"></div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
