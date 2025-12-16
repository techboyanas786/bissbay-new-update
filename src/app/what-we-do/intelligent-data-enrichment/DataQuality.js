"use client";
import React, { useEffect, useRef, useState } from "react";
import { TrendingUp, PieChart, Target, DollarSign, TrendingDown, AlertCircle } from "lucide-react";
import Image from "next/image";


const AnimatedCard = ({
  heading = "Default Heading",
  paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.",
  className = "",
  icon,
  isAutoAnimated = false,
  animationDelay = 0,
  isActive = false,
  onCardClick,
  cardIndex
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
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
      className={`bg-white flex hover-card justify-center rounded-2xl p-4 md:p-6 items-center overflow-hidden relative shadow-lg group ${className} ${isMobile ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        className="absolute bg-white/10 backdrop-blur-xl"
        style={{ zIndex: 0 }}
      />
      <div className="relative rounded-2xl z-10 text-primary bg-white w-full h-full flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className={`flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform absolute ${shouldShowContent
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
            }`}
        >
          {icon}
          <h5 className="!font-semibold leading-tight !text-[#1F2937]">
            {/* {heading.split(" ").map((word, index, arr) => (
                <React.Fragment key={index}>
                  {word}
                  {index < arr.length - 1 && <br className="md:hidden block"/>}
                </React.Fragment>
              ))} */}
            {heading}
          </h5>
        </div>
        <div
          className={`absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${shouldShowContent
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
            } space-y-3 lg:px-5 px-2`}
        >
          <p className="text-gray-700 leading-relaxed" style={{ lineHeight: "normal" }}>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

const DataQuality = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animateCards, setAnimateCards] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const sectionRef = useRef(null);
  const observerRefs = useRef([]);
  const steps = [
    {
      icon: (
        <Image
          src="/Icons/Personalization.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Hyper-Personalization",
      description:
        "Target with precision by layering behavioral, transactional, and intent data for focused engagement.",
    },
    {
      icon: (
        <Image
          src="/Icons/CUSTOMERUNDERSTANDING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Unified Customer View",
      description:
        "Create complete customer profiles by merging CRM data, web activity, and external insights.",
    },
    {
      icon: (
        <Image
          src="/Icons/Artificial-Intelligence.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Intelligent Segmentation",
      description:
        "Group prospects based on buying signals across industries to identify active opportunities.",
    },
    {
      icon: (
        <Image
          src="/Icons/SUSTAINABLE.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Revenue Acceleration",
      description:
        "Convert more leads with clean data that drives personalized, timely customer interactions.",
    },
  ];
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
  }, [domLoaded, hasAnimated]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          if (entry.target.classList.contains("animate-fade-in")) {
            entry.target.classList.add("opacity-100");
          }
        }
      });
    }, options);

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <section>
      <div ref={addToRefs} className="animate-fade-in text-center">
        <h2 className="!mb-0 section-title">
          Why Data Quality Determines{" "}
          <span className="text-primary">Business Success</span>
        </h2>
      </div>

      <div ref={addToRefs} className="animate-fade-in">
        <h3 className="text-center  my-4 md:my-6">
          Data is the foundation of every customer interaction.
          <br />
          Yet, incomplete, inaccurate, or siloed data can sabotage even the
          most sophisticated strategies.
        </h3>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-12">
        <div ref={addToRefs} className="observer-element animate-fade-in ">
          <div className="metric-card p-8 rounded-lg bg-white shadow-xl hover:border-b-6 border-t-6 transition-all duration-300 border-b-6 border-white hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary fade-in">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <TrendingDown className="medium-icon !text-[#d6084d]" />
              <h5 className="relative text-2xl text-center font-bold animate-on-scroll">
                Bad Data Costs You
              </h5>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <AlertCircle className="!text-[#d6084c] small-icon" />
                <span>
                  <p className="text-gray-600">
                    Wasted ad spend targeting unqualified leads
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="!text-[#d6084c] small-icon" />
                <span>
                  <p className="text-gray-600">
                    Low engagement due to irrelevant messaging
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="!text-[#d6084c] small-icon" />
                <span>
                  <p className="text-gray-600">
                    Missed opportunities with high-intent prospects
                  </p>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="!text-[#d6084c] small-icon" />
                <span>
                  <p className="text-gray-600">
                    Damaged brand reputation from poor personalization
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          ref={addToRefs}
          className="observer-element animate-fade-in delay-200"
        >
          <div className="metric-card p-8 rounded-lg bg-white shadow-xl hover:border-b-6 border-t-6 transition-all duration-300 border-b-6 border-white hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary fade-in">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <TrendingUp className="medium-icon !text-bissbay-green" />
              <h5 className="text-2xl relative text-center font-bold animate-on-scroll">
                Great Data Accelerates Growth
              </h5>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="bullet-point !bg-bissbay-green mt-2 mr-3"></span>
                <span>
                  <p className="text-gray-600">
                    Hyper-personalized outreach that resonates
                  </p>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bullet-point !bg-bissbay-green mt-2 mr-3"></span>
                <span>
                  <p className="text-gray-600">
                    Optimized decision-making across channels
                  </p>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bullet-point !bg-bissbay-green mt-2 mr-3"></span>
                <span>
                  <p className="text-gray-600">
                    Scalable, predictable revenue generation
                  </p>
                </span>
              </li>
              <li className="flex items-start">
                <span className="bullet-point !bg-bissbay-green mt-2 mr-3"></span>
                <span>
                  <p className="text-gray-600">
                    Enhanced customer experiences driving loyalty
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h3 className="text-center  my-4 md:my-6">BISSBAY bridges the gap, ensuring your data is clean, enriched, and primed for action.</h3>
      {domLoaded && (
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 lg:px-36 mb-4 lg:mb-12">
          {steps.map((card, index) => (
            <div key={index}>
              <AnimatedCard
                heading={card.title}
                paragraph={card.description}
                icon={card.icon}
                className="h-[250px]"
                isAutoAnimated={animateCards}
                animationDelay={index * 300}
                isActive={activeCardIndex === index}
                onCardClick={(cardIndex) => {
                  setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                }}
                cardIndex={index}
              />
            </div>
          ))}
        </div>
      )}
      <div
        ref={addToRefs}
        className="observer-element animate-fade-in delay-300 mt-9 text-center"
      >
        <h3 className="!font-semibold text-center">
          BISSBAY turns raw data into a{" "}
          <span className="text-primary">strategic advantage</span>.
        </h3>
      </div>
    </section>
  );
};

export default DataQuality;
