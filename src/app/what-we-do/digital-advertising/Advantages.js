"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AnimatedCard = ({
  heading = "Default Heading",
  paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.",
  className = "",
  width = "w-full",
  height = "h-72",
  icon,
  isAutoAnimated = false,
  animationDelay = 0,
  isActive = false,
  onCardClick,
  cardIndex
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isAutoAnimated) {
      const timer = setTimeout(() => {
        setIsAutoPlaying(true);
        setTimeout(() => {
          setIsAutoPlaying(false);
        }, 2000);
      }, animationDelay);

      return () => clearTimeout(timer);
    }
  }, [isAutoAnimated, animationDelay]);

  const shouldShowContent = isHovered || isAutoPlaying || (isMobile && isActive);

  const handleCardClick = () => {
    if (isMobile && onCardClick) {
      onCardClick(cardIndex);
    }
  };

  return (
    <div
      className={`${width} ${height} bg-white flex justify-center rounded-xl items-center overflow-hidden relative shadow-lg group ${className} ${isMobile ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="absolute h-86 bg-white/10 backdrop-blur-xl" style={{ zIndex: 0 }} />
      <div className="relative rounded-xl z-10 bg-white w-full h-full p-4 md:p-6 flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className={`flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform h-auto md:h-[45%] mx-4 md:mx-6 absolute ${shouldShowContent ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
            }`}
        >
          {icon}
          <h3 className="!font-semibold leading-tight !text-[#1F2937]">
            {heading}
          </h3>
        </div>
        <div
          className={`absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${shouldShowContent ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            } space-y-3 px-2 md:px-6`}
        >
          <p className="text-gray-700 leading-relaxed" style={{ lineHeight: "normal" }}>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

const BissbayAdvantage = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  useEffect(() => {
    if (!domLoaded || hasAnimated) return;

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
  }, [domLoaded, hasAnimated]);

  const steps = [
    {
      icon: (
        <Image
          src="/Icons/IDENTIFY.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Audit Insights",
      description:
        "Uncover data-backed opportunities with precision-driven analysis.",
    },
    {
      icon: (
        <Image
          src="/Icons/planning.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Strategic Planning",
      description: `Develop tailored strategies built for measurable business outcomes.`,
    },
    {
      icon: (
        <Image
          src="/Icons/Personalization.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Seamless Execution",
      description:
        "Flawlessly implement campaigns across channels for maximum impact.",
    },
    {
      icon: (
        <Image
          src="/Icons/Technology.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Continuous Optimization",
      description:
        "Refine and enhance strategies with real-time performance data.",
    },
    {
      icon: (
        <Image
          src="/Icons/Faster.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Scalable Growth",
      description:
        "Expand your digital presence with scalable, ROI-driven solutions.",
    },
    {
      icon: (
        <Image
          src="/Icons/bulb.svg"
          alt="Revenue Stagnation"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Innovation-First Approach",
      description:
        "Leverage advanced technologies and creative strategies to stay ahead.",
    },
  ];

  return (
    <section ref={sectionRef}>
      <div className="text-center animate-fade-in-up">
        <h2 className="section-title !mb-0">
          The BISSBAY Advantage: Data-Driven. Performance-Proven.
        </h2>
        <h3 className="my-4 md:my-6">
          Our proven 6-step process transforms your digital presence and
          drives measurable results.
        </h3>
      </div>

      {domLoaded && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto lg:gap-6">
          {steps.map((card, index) => (
            <div key={index} className='border-2 hover:border-2 hover:border-primary border-transparent rounded-xl'>
              <AnimatedCard
                heading={card.title}
                paragraph={card.description}
                icon={card.icon}
                className="h-[250px]"
                isAutoAnimated={animateCards}
                animationDelay={index * 300}
                isActive={activeCardIndex === index}
                onCardClick={(cardIndex) => {
                  console.log('onCardClick called with:', cardIndex, 'current activeCardIndex:', activeCardIndex);
                  setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                }}
                cardIndex={index}
              />
            </div>
          ))}
        </div>
      )}
      <h3 className="mt-4 md:mt-6 text-center">
        We dont just follow trends; We set them.
      </h3>
    </section>
  );
};

export default BissbayAdvantage;
