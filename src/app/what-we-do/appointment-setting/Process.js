import React from "react";
import { useInView } from "react-intersection-observer";
import {
  CheckCircle,
  CircleCheckBig,
} from "lucide-react";
import Timeline from "./Timeline";
import Image from "next/image";

const Process = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps = [
    {
      prefixIcon: (
        <Image
          src="/Icons/IDENTIFY.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      icon: <CircleCheckBig className="medium-icon !w-9 !h-9" />,
      title: "Market Fit Validation",
      description: `Test your product's market demand & refine messaging`,
    },
    {
      prefixIcon: (
        <Image
          src="/Icons/Screening.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      icon: <CircleCheckBig className="medium-icon !w-9 !h-9" />,

      title: "Lead Screening",
      description: "Identify decision-makers with high buying potential",
    },
    {
      prefixIcon: (
        <Image
          src="/Icons/Maximum.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      icon: <CircleCheckBig className="medium-icon !w-9 !h-9" />,
      title: "Multi-Channel Plan",
      description: "Email, LinkedIn, phone calls, texts & more",
    },
    {
      prefixIcon: (
        <Image
          src="/Icons/CalendarOrange.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      icon: <CircleCheckBig className="medium-icon !w-9 !h-9" />,
      title: "Schedule Confirmation",
      description: "Reduce no-shows with reminders & follow-ups.",
    },
  ];

  return (
    <section id="process" className="relative">
      <div className="z-10 mb-4 sm:mb-12">
        <div className="text-center">
          <h2
            className="section-title !mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Our Proven <span className="text-primary">Appointment Setting</span>{" "}
            Process
          </h2>
          <h3
            className="my-4 lg:my-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A systematic approach that delivers consistent, high-quality
            appointments
          </h3>
        </div>

        <div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Horizontal timeline */}
          <div className="absolute top-7 left-0 w-full h-0.5 bg-primary z-0 hidden lg:block right-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex-1 flex flex-col items-center gap-4"
              >
                {/* Icon and Step Label */}
                <div className="hidden lg:flex flex-col items-center relative">
                  <div className="w-16 h-16 rounded-full bg-white border-3 border-primary flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                  <div className="absolute top-full mt-2 text-gray-500 font-medium"></div>
                </div>

                {/* Card Content */}
                <div className="shadow-md metric-card w-full md:w-auto  rounded-xl p-4 md:p-6 border-white border-3 hover:border-primary transition-all duration-300 card-hover animate-on-scroll">
                  <div className="flex flex-row min-h-12 lg:min-h-16 items-center gap-3 mb-2">
                    {step.prefixIcon}
                    <h5 className="font-bold">{step.title}</h5>
                  </div>
                  <p className="!font-semibold mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {index === 0 && (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Ideal Customer Profile development</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Message testing and optimization</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Competitor analysis</p>
                        </li>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Proprietary intent data signals</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Advanced B2B databases</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>AI-powered contact verification</p>
                        </li>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Personalized email sequences</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>LinkedIn outreach & engagement</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Strategic cold calling</p>
                        </li>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Confirmation emails and reminders</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Calendar integration</p>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="small-icon" />
                          <p>Detailed prospect briefings</p>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Timeline />
    </section>
  );
};

export default Process;
