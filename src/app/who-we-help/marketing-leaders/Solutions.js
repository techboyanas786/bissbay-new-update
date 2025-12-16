"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react'

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
      className={`bg-white flex hover-card justify-center !rounded-xl items-center overflow-hidden relative shadow-lg group ${isMobile ? 'cursor-pointer' : ''} ${className}`}
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
          className={`px-4 md:px-0 flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out h-[50%] transform absolute ${shouldShowContent
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
            }`}
        >
          {icon}
          <h5>
            {heading}
          </h5>
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

function Solutions() {
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


  return (
    <section id="services" className="text-center" ref={sectionRef}>
        <h2 className="section-title mb-6">
          Bissbay's Comprehensive B2B <span className="text-primary">
            Marketing Solutions</span>
        </h2>
        <p className="text-xl text-black mb-4 md:mb-6 leading-relaxed">
          Bissbay helps marketing leaders achieve more by aligning marketing efforts with business goals, driving high-quality lead generation, and optimizing campaigns for maximum ROI.        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto lg:gap-6">
          {[
            {
              title: "Strategic Alignment", icon: (
                <Image
                  src="/Icons/MisalignNew.svg"
                  alt="Define Goals"
                  className="flex-shrink-0"
                  width={48}
                  height={48}
                />
              ), description: "Align marketing efforts with business goals for maximum impact and measurable ROI."
            },
            {
              title: "High-Quality Lead Generation", icon: (
                <Image
                  src="/Icons/QUALITYLEADS.svg"
                  alt="Define Goals"
                  className="flex-shrink-0"
                  width={48}
                  height={48}
                />
              ), description: "Generate qualified prospects who are ready to convert into revenue-driving opportunities."
            },
            {
              title: "Campaign Optimization", icon: (
                <Image
                  src="/Icons/OPTIMIZATION.svg"
                  alt="Define Goals"
                  className="flex-shrink-0"
                  width={48}
                  height={48}
                />
              ), description: "Data-driven campaign optimization that maximizes performance and delivers results."
            },
            {
              title: "Lead Nurturing", icon: (
                <Image
                  src="/Icons/SUSTAINABLE.svg"
                  alt="Define Goals"
                  className="flex-shrink-0"
                  width={48}
                  height={48}
                />
              ), description: "Streamlined lead nurturing processes that guide prospects through your sales funnel."
            },
            {
              title: "Market Intelligence", icon: (
                <Image
                  src="/Icons/Artificial-Intelligence.svg"
                  alt="Define Goals"
                  className="flex-shrink-0"
                  width={48}
                  height={48}
                />
              ), description: "Stay ahead of competitors with comprehensive market insights and analysis."
            },
            {
              title: "Customer Retention", icon: (
                <Image
                  src="/Icons/CUSTOMERUNDERSTANDING.svg"
                  alt="Define Goals"
                  className="flex-shrink-0"
                  width={48}
                  height={48}
                />
              ), description: "Maximize revenue from existing clients through strategic retention and upsell programs."
            }
          ].map((service, index) => (
            <div key={index}>
              <AnimatedCard
                heading={service.title}
                paragraph={service.description}
                icon={service.icon}
                className="h-[250px]"
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
        <div className="max-w-7xl shadow-xl hover:scale-103 hover-card p-4 md:p-6 rounded-xl md:mt-8 mt-4 mx-auto text-center">
          <h3 className="!text-[#1f2937] mb-4 md:mb-6">
            We empower marketing leaders to meet and exceed their sales goals with efficiency and agility.
          </h3>
          <div className="text-xl text-gray-700">
            <p>
              Through data-driven insights, we streamlined lead nurturing, ensure seamless collaboration between sales and marketing,
              <br className="hidden sm:block" /> and impactful targeted Account-Based Marketing strategies.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Solutions