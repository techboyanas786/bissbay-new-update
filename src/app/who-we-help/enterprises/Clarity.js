"use client";
import React, { useEffect, useState } from "react";
import { Brain, Network, BarChart3, Cpu, Zap, CheckCircle } from "lucide-react";
import Image from "next/image";

const AnimatedCard = ({
  heading = "Default Heading",
  paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.",
  className = "",
  icon,
  tech = "",
  autoAnimate = false,
  delay = 0,
  isActive = false,
  onCardClick,
  cardIndex,
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
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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

  const shouldShowContent = isMobile
    ? isActive || isAutoPlaying
    : isHovered || isAutoPlaying;

  const handleCardClick = () => {
    if (isMobile && onCardClick) {
      onCardClick(cardIndex);
    }
  };

  return (
    <div
      className={`bg-white w-full hover-card justify-center rounded-xl items-center overflow-hidden relative shadow-lg group ${isMobile ? "cursor-pointer" : ""
        } ${className}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        className="absolute bg-white/10 backdrop-blur-xl"
        style={{ zIndex: 0 }}
      />

      <div className="relative rounded-xl z-10 text-primary bg-white w-full h-full p-4 sm:p-6  flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className={`flex flex-col w-full px-4 md:px-0 items-center space-y-3 transition-all duration-500 ease-in-out h-[50%] transform  ${shouldShowContent
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
          <div className="mb-2 md:mb-8 w-fit text-center px-2 py-1 bg-primary/10 text-primary text-base rounded-full border border-primary/20">
            {tech}
          </div>
          <p className="md:text-lg" style={{ lineHeight: "normal" }}>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

const Clarity = () => {
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
        rootMargin: "0px 0px -100px 0px",
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
          src="/Icons/CUSTOMERUNDERSTANDING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}

        />
      ),
      title: "Customer Understanding",
      description:
        "Deep dive into your ideal customer profile, buyer personas, and decision-making processes to create targeted, resonant messaging.",
      color: "from-primary to-primary/80",
      tech: "AI-Powered Analytics",
    },
    {
      icon: (
        <Image
          src="/Icons/Earth-Globe.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
      title: "Journey Mapping",
      description:
        "Comprehensive analysis of every touchpoint in your customer's journey, identifying opportunities for optimization and engagement.",
      color: "from-primary to-primary/80",
      tech: "Neural Network Mapping",
    },
    {
      icon: (
        <Image
          src="/Icons/DATA_DRIVEN.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
      title: "Data-Driven Strategy",
      description:
        "Evidence-based decision making powered by comprehensive analytics, market research, and competitive intelligence.",
      color: "from-primary to-primary/80",
      tech: "Machine Learning Insights",
    },
    {
      icon: (
        <Image
          src="/Icons/SUSTAINABLE.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
      title: "Revenue Optimization",
      description:
        "Continuous optimization of campaigns, funnels, and processes to maximize revenue impact and improve conversion rates.",
      color: "from-primary to-primary/80",
      tech: "Predictive Algorithms",
    },
  ];

  return (
    <section
      id="approach-section"
      ref={sectionRef}
    >
      <div className="transition-all duration-1000">
        <div className="text-center mb-4 md:mb-6">
          <h2 className="section-title mb-6">
            From Complexity to
            <span className="text-primary"> Clarity</span>
          </h2>
          <p className="text-gray-600 max-w-6xl mx-auto leading-relaxed">
            We start by understanding your ideal customer, mapping their
            journey, identifying pain points, and crafting data-driven
            strategies that resonate.
            <br /> Every move we make is designed to fuel revenue growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-3 lg:gap-6">
        {services.map((card, index) => (
          <div key={index}>
            <AnimatedCard
              heading={card.title}
              paragraph={card.description}
              icon={card.icon}
              tech={card.tech}
              className="!h-[280px] md:h-[300px]"
              autoAnimate={animateCards}
              delay={index * 300}
              isActive={activeCardIndex === index}
              onCardClick={() => {
                setActiveCardIndex(prev => prev === index ? null : index);
              }}
              cardIndex={index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clarity;
