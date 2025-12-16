"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const AnimatedCard = ({
  heading = "Default Heading",
  paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.",
  className = "",
  icon,
  autoAnimate = false,
  delay = 0,
  isActive = false,
  onCardClick,
  cardIndex
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto animation effect
  useEffect(() => {
    if (autoAnimate) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
        setTimeout(() => {
          setIsAutoPlaying(false);
        }, 2000);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [autoAnimate, delay]);

  const shouldShowContent = isHovered || (isMobile && isActive) || isAutoPlaying;

  const handleCardClick = () => {
    if (isMobile && onCardClick) {
      onCardClick(cardIndex);
    }
  };

  return (
    <div
      className={`bg-white flex hover-card justify-center rounded-xl items-center overflow-hidden relative shadow-lg group ${isMobile ? 'cursor-pointer' : ''} ${className}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        className="absolute bg-white/10 backdrop-blur-xl"
        style={{ zIndex: 0 }}
      />
      <div className="relative rounded-xl z-10 text-primary bg-white w-full h-full p-4 sm:p-6 flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className={`flex flex-col px-4 md:px-0 items-center space-y-3 transition-all duration-500 ease-in-out h-[50%] transform absolute ${shouldShowContent
            ? "-translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
            }`}
        >
          {icon}
          <h5>{heading}</h5>
        </div>
        <div
          className={`absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${shouldShowContent
            ? "translate-y-0 opacity-100"
            : "translate-y-32 opacity-0"
            } space-y-3 lg:px-6 px-4`}
        >
          <p style={{ lineHeight: "normal" }}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

function Complexity() {
  const [animateCards, setAnimateCards] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const sectionRef = React.useRef(null);

  // Intersection Observer for auto animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setAnimateCards(true);
          setHasAnimated(true);
        }
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
  }, [hasAnimated]);



  const services = [
    {
      icon: (
        <Image
          src="/Icons/TARGET.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Targeted Strategy",
      description:
        "We focus precisely on your ideal customers and market opportunities. Tailored tactics designed to drive meaningful engagement and growth.",
    },
    {
      icon: (
        <Image
          src="/Icons/SCALING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
      title: "Measurable Growth",
      description:
        "Our strategies deliver clear, trackable revenue results. We prioritize ROI to ensure every effort moves the needle.",
    },
    {
      icon: (
        <Image
          src="/Icons/DEFINE.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Expert Team",
      description:
        "Work with proven professionals who understand your business challenges. Dedicated experts committed to accelerating your success.",
    },
    {
      icon: (
        <Image
          src="/Icons/Technology.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
      title: "Rapid Execution",
      description:
        "Operate with the speed and agility of an in-house team. Fast, flexible marketing that adapts as your needs evolve.",
    },
  ];

  return (
    <section id="approach-section" ref={sectionRef} className="mx-auto">
      <div className="transition-all duration-1000">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="section-title mb-6">
            From Complexity to
            <span className="text-primary"> Control</span>
          </h2>
          <div className="space-y-4 container mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              We start by identifying your ideal customers, addressing their challenges, and building strategies that focus on sustainable growth.<br className="block md:hidden" /> From there, we align execution with a clear plan that accelerates results.
            </p>
            <p>
              Our approach is closely aligned with sales, hands-on, data-driven, resluts-focused
              and executed with the agility of an in-house team.<br className="md:hidden block" />
              We don't focus on superficial metrics. Instead, we make
              data-driven decisions that prioritize building a real market
              presence, driving meaningful demand to sales
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-3 lg:gap-6">
        {services.map((card, index) => (
          <div key={index}>
            <AnimatedCard
              heading={card.title}
              paragraph={card.description}
              icon={card.icon}
              className="h-[250px] md:h-[300px]"
              autoAnimate={animateCards}
              delay={index * 300}
              isActive={activeCardIndex === index}
              onCardClick={(cardIndex) => {
                setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
              }}
              cardIndex={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Complexity;