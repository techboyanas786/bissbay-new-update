import React, { useState, useEffect, useRef } from "react";
import { timelineSteps } from "./TimeData";
import TimelineNode from "./TimeNode";
import TimelinePath from "./TimePath";

const Timeline = () => {
  const [activeStepMobile, setActiveStepMobile] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mobileTimelineRef = useRef(null);

  // Intersection Observer for mobile view only
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setActiveStepMobile(1);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (mobileTimelineRef.current) {
      observer.observe(mobileTimelineRef.current);
    }

    return () => {
      if (mobileTimelineRef.current) {
        observer.unobserve(mobileTimelineRef.current);
      }
    };
  }, []);

  // Auto-advance mobile timeline only when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveStepMobile((prev) => (prev < timelineSteps.length ? prev + 1 : 1));

        setTimeout(() => {
          setIsAnimating(false);
        }, 700);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, isVisible]);

  return (
    <div className="w-full">
      <div className="text-center mb-4 lg:mb-20">
        <h2 className="section-title !mb-0">
          Our End-to-End{" "}
          <span className="text-primary">Appointment Setting</span> Journey
        </h2>
        <h3 className="my-4 lg:my-6">
          From discovery to ROI reporting, we manage the entire process.
        </h3>
      </div>

      {/* Desktop Timeline (hidden on mobile) */}
      <div className="relative hidden lg:block">
        <TimelinePath steps={timelineSteps.length} />
        <div className="flex justify-between relative">
          {timelineSteps.map((step) => (
            <TimelineNode
              key={step.id}
              step={step}
              isActive={true}
            />
          ))}
        </div>
      </div>

      {/* Mobile view (stacked) */}
      <div ref={mobileTimelineRef} className="lg:hidden grid grid-cols-1 gap-4">
        {timelineSteps.map((step) => (
          <div
            key={step.id}
            className={`p-4 md:p-6 rounded-lg border-l-8 transition-all duration-500 ${
              step.id === activeStepMobile ? "border-l-primary bg-neutral-50" : "border-l-gray-200"
            }`}
          >
            <div className="flex flex-col items-center justify-center">
              <div className={`w-10 h-10 rounded-full flex flex-row items-center justify-center mb-3 ${
                step.id === activeStepMobile
                  ? "bg-primary text-white"
                  : "bg-white text-primary border border-primary"
              }`}>
                {React.createElement(step.icon, { size: 30 })}
              </div>
              <div className="text-center">
                <p className="text-xs font-medium text-primary">
                  {step.callout}
                </p>
                <h5  >{step.title}</h5>
                <p className="mt-2 text-sm">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
