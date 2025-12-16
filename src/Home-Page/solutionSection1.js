'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const AnimatedCard = ({
  heading = "Default Heading",
  paragraph = "Default paragraph text goes here. This component creates a beautiful hover effect with animated borders.",
  paragraph2 = "Default second paragraph.",
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
          className={`flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform h-[45%] mx-4 md:mx-6 absolute ${shouldShowContent ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
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
          <h6 className="leading-relaxed" style={{ lineHeight: "normal" }}>
            {paragraph2}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default function SolutionSection1() {
  const { t } = useTranslation('translation');
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

  const getTranslation = (key, fallback) => {
    try {
      return t(key) || fallback;
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return fallback;
    }
  };

  const cardData = [
    {
      heading: "Revenue Stagnation",
      paragraph: "Stalled revenue growth is limiting your expansion.",
      paragraph2: "Let's break through this plateau.",
      icon: (
        <Image
          src="/Icons/STAGNATION.svg"
          alt="Revenue Stagnation"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      )
    },
    {
      heading: "Slow Deal Closure",
      paragraph: "Your sales cycle is dragging, delaying revenue and costing you valuable opportunities.",
      paragraph2: "We help you close faster.",
      icon: (
        <Image
          src="/Icons/SLOW DEAL.svg"
          alt="Slow Deal Closure"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      )
    },
    {
      heading: "Misaligned Teams",
      paragraph: "When sales and marketing don't align, leads slip through the cracks.",
      paragraph2: "Alignment is the key to unlocking growth.",
      icon: (
        <Image
          src="/Icons/MISALIGNED.svg"
          alt="Misaligned Teams"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      )
    },
    {
      heading: "Internal Constraints and Bottlenecks",
      paragraph: "Operational inefficiencies are holding you back.",
      paragraph2: "Let's remove roadblocks and scale faster.",
      icon: (
        <Image
          src="/Icons/SCALING.svg"
          alt="Internal Constraints"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      )
    },
    {
      heading: "Inconsistent Lead Quality",
      paragraph: "Unqualified leads are draining resources.",
      paragraph2: "It's time to attract the right prospects and boost conversions.",
      icon: (
        <Image
          src="/Icons/INCONSISTENT.svg"
          alt="Inconsistent Lead Quality"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      )
    },
    {
      heading: " Frustrating Vendor Experiences",
      paragraph: "If past vendors let you down, it's time to work with a team that delivers real, measurable results.",
      paragraph2: "You need better ones.",
      icon: (
        <Image
          src="/Icons/FRUSTRATING.svg"
          alt="Frustrating Vendor Experiences"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      )
    }
  ];

  return (
    <div ref={sectionRef}>
      <div className="text-center lg:mb-6">
        <h2 className="mb-4 lg:mb-6 !font-semibold text-center 2xl:!text-[40px]">
          {getTranslation('solutions.tagline1')}
        </h2>
        <h3 className="relative">
          {getTranslation('solutions.tagline4')}
        </h3>
        <h3 className="mb-4 lg:mb-6 text-center">
          {getTranslation('solutions.description2')}
        </h3>
      </div>
      {domLoaded && (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto lg:gap-6">
          {cardData.map((card, index) => (
            <div key={index} className='border-2 hover:border-2 hover:border-primary border-transparent rounded-xl'>
              <AnimatedCard
                heading={card.heading}
                paragraph={card.paragraph}
                paragraph2={card.paragraph2}
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
    </div>
  );
}