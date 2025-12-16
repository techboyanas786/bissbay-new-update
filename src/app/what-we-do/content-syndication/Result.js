import React, { useRef, useState, useEffect } from "react";
import { CheckCircle, Target, TrendingUp } from "lucide-react";
import Image from "next/image";

const AnimatedStat = ({ value, suffix, label, duration, delay, content }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const timer = setTimeout(() => {
      if (start === end) return;
      const incrementTime = (duration / end) * 1000;
      let timer = setInterval(() => {
        start += 1;
        setCount(start);

        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  return (
    <div className="hover-card rounded-xl p-4 md:p-6 shadow-xl transition-all duration-300 hover:scale-105">
      <div className="text-5xl font-bold mb-4 flex items-center justify-center">
        <span className="text-primary">{count}</span>
        <span className="text-primary">{suffix}</span>
      </div>
      <h5 className="text-center !mb-2">{label}</h5>
      <p className="text-center">{content}</p>
    </div>
  );
};

const Results = () => {
  const sectionRef = useRef(null);

  const results = [
    {
      value: 92,
      suffix: "%",
      label: "Data Accuracy",
      duration: 2,
      delay: 0,
      content: "No fake leads, no wasted efforts",
    },
    {
      value: 28,
      suffix: "%",
      label: "Faster Sales Cycles",
      duration: 2,
      delay: 500,
      content: "Content that pre-sells and shortens negotiation",
    },
    {
      value: 17,
      suffix: "%",
      label: "Pipeline Growth",
      duration: 2,
      delay: 1000,
      content: "Measurable business impact",
    },
    {
      value: 10,
      suffix: "+",
      label: "Years Experience",
      duration: 2,
      delay: 1000,
      content: "12,000+ successful campaigns",
    },
  ];
  const benefits = [
    {
      icon: <Image
        src="/Icons/LOYALTY.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      header: "Build Trust",
      content: "Deliver peer-validated insights to C-suite buyers.",
    },
    {
      icon: <Image
        src="/Icons/handshake.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      header: "Shorten Negotiations",
      content: "Address objections before sales calls.",
    },
    {
      icon: <Image
        src="/Icons/Dominate.svg"
        alt="Revenue Stagnation"
        className="flex-shrink-0"
        width={36}
        height={36}
      />,
      header: "Dominate Markets",
      content: "Access competitor intelligence your team can't find elsewhere.",
    },
  ];

  return (
    <section id="results" ref={sectionRef}>
      <div className="text-center">
        <h2 className=" text-center section-title mb-4 md:!mb-6">
          From <span className="!text-primary">Invisible</span> to <span className="!text-primary">Unignorable</span>
        </h2>
      </div>
      <div className="bg-white grid md:grid-cols-3 mb-8 lg:mb-12 gap-4 lg:gap-8">
        {benefits.map((benefit, index) => (
          <div
            className={`metric-card hover-card rounded-xl p-5`}
            key={index}
          >
            <div className="flex flex-row w-full gap-3 items-center justify-start mb-2">
              <div>{benefit.icon}</div>
              <h5 className="text-2xl font-bold">{benefit.header}</h5>
            </div>

            <p  >{benefit.content}</p>
          </div>
        ))}
      </div>

      <div  >
        <h2 className="section-title text-center">
          <span className="text-primary">Results</span> That{" "}
          Speaks For Themselves
        </h2>
      </div>

      <div className="grid md:grid-cols-4 gap-4 lg:gap-8 ">
        {results.map((stat, index) => (
          <AnimatedStat
            key={index}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            duration={stat.duration}
            delay={stat.delay}
            content={stat.content}
          />
        ))}
      </div>


    </section>
  );
};

export default Results;
