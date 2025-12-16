import React, { useEffect, useRef } from "react";
import { Award, Fingerprint, Scale, Shield } from "lucide-react";

const features = [
  {
    icon: <Fingerprint className="medium-icon" />,
    title: "AI-Powered Insights",
    description: "Uncover hidden patterns and opportunities in your data."
  },
  {
    icon: <Scale className="medium-icon" />,
    title: "Unmatched Scale",
    description: "Access 113M+ global profiles and 250+ targeting dimensions."
  },
  {
    icon: <Shield className="medium-icon" />,
    title: "Privacy-First Approach",
    description: "Ethical data practices that prioritize consumer trust."
  },
  {
    icon: <Award className="medium-icon" />,
    title: "End-to-End Expertise",
    description: "From strategy to activation, we're your partner in growth."
  }
];

const Why = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);

  useEffect(() => {
    const animateNumbers = () => {
      numberRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const targetText = ref.dataset.target;
        const match = targetText.match(/^(\d+\.?\d*)([M%+]+)$/);
        if (!match) return;

        const targetValue = parseFloat(match[1]);
        const suffix = match[2];
        let currentValue = 0;
        const increment = targetValue / 100; // Adjust for animation speed
        const duration = 1000; // Animation duration in ms
        const intervalTime = duration / 100;

        const updateCounter = () => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            ref.textContent = `${Math.round(currentValue)}${suffix}`;
            return;
          }
          ref.textContent = `${Math.round(currentValue)}${suffix}`;
          setTimeout(updateCounter, intervalTime);
        };

        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset numbers to 0 before animating
            numberRefs.current.forEach((ref) => {
              if (ref) {
                const suffix = ref.dataset.target.match(/[M%+]+$/)[0];
                ref.textContent = `0${suffix}`;
              }
            });
            animateNumbers();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !numberRefs.current.includes(el)) {
      numberRefs.current.push(el);
    }
  };

  const stats = [
    { value: "113M+", label: "Global Profiles" },
    { value: "5M+", label: "Verified Companies" },
    { value: "30+", label: "Industries Served" },
    { value: "40%", label: "Reduced Spend" },
    { value: "1M+", label: "Monthly Visitors" },
    { value: "99%", label: "Data Accuracy" }
  ];

  return (
    <section id="why-us" ref={sectionRef}>
      <div className="text-center animate-fade-in">
        <h2 className="section-title !mb-0">
          Why<span className="text-primary"> Bissbay </span>Stands Out
        </h2>
        <h3 className="my-4 md:my-6">
          Our unique approach to data management and analytics gives you a competitive advantage in today's fast-paced market.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-12 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="rounded-lg p-4 md:p-6 text-center shadow-md hover:shadow-xl hover-card transition-all duration-300 transform hover:scale-105 hover:bg-white hover:border border-primary/20 border-primary border-2 md:!border-white md:hover:!border-primary"
          >
            <div className="inline-flex items-center justify-center mb-4">
              {feature.icon}
            </div>
            <h5 className="mb-2">{feature.title}</h5>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center transition-all duration-1000 delay-800">
        <h2 className="section-title !mb-4 md:!mb-8"><span className="text-primary"> Results </span>That Speak for Themselves</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 md:p-6 rounded-md bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-primary hover:scale-105">
              <span
                ref={addToRefs}
                data-target={stat.value}
                className="text-5xl mb-2 md:mb-0 font-bold text-primary"
              >
                0{stat.value.match(/[M%+]+$/)[0]}
              </span>
              <p
                className="text-gray-600"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;