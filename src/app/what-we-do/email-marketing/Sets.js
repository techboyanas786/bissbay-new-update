"use client";
import React, { useState, useEffect } from "react";
import { UserCheck, TrendingUp, Target, Shield } from "lucide-react";
import Image from "next/image";

const iconComponents = {
  UserCheck,
  TrendingUp,
  Target,
  Shield,
};

const SetsApart = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isInViewport, setIsInViewport] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
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

  useEffect(() => {
    if (!isMobile || isPaused || !isInViewport) return;

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile, isPaused, isInViewport]);

  const handleCardClick = (index) => {
    if (!isMobile) return;

    setActiveCardIndex(index);
    setIsPaused(true);

    setTimeout(() => {
      setIsPaused(false);
    }, 10000); // 10 seconds pause
  };

  const features = [
    {
      id: 1,
      title: "1:1 Personalization",
      description:
        "Every email is tailored to individual customer journeys, increasing engagement and conversions.",
      icon: (
        <Image
          src="/Icons/Personalization.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
    {
      id: 2,
      title: "300% Higher ROI",
      description:
        "Clients see 3x better returns compared to other marketing channels through our optimization techniques.",
      icon: (
        <Image
          src="/Icons/SCALING.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
    {
      id: 3,
      title: "Precision Targeting",
      description:
        "Reach the right decision-makers with real-time signals and behavioral data.",
      icon: (
        <Image
          src="/Icons/TARGET.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
    {
      id: 4,
      title: "Compliance & Trust",
      description:
        "100% opted-in, marketing-nurtured lists that build trust and maintain your reputation.",
      icon: (
        <Image
          src="/Icons/LOYALTY.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={sectionRef}>
      <div className="text-center">
        <h2 className="section-title !mb-0">
          What Sets Us <span className="text-primary">Apart</span>
        </h2>
        <h3 className="my-4 md:my-6">
          Email is the backbone of effective marketing automation.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-8">
        {features.map((feature, index) => {

          const isActive = isMobile && activeCardIndex === index;

          return (
            <div
              key={feature.id}
              variants={itemVariants}
              onClick={() => handleCardClick(index)}
              className={`card duration-300 ${isMobile
                  ? (isActive ? 'border-l-7 border-primary' : 'border-l-7 border-gray-200')
                  : 'border-l-7 border-primary'
                } ${isMobile ? 'cursor-pointer' : ''}`}
            >
              <div className="flex flex-row w-full items-center justify-start gap-4 mb-2">
                {feature.icon}

                <h5 className="text-xl font-semibold">{feature.title}</h5>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-center mt-4 md:mt-6">
        {" "}
        We blend creativity, technology, and deep audience insights to
        maximize ROI.
      </h3>
    </section>
  );
};

export default SetsApart;
