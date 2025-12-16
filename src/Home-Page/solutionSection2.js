"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";
import Button from "@/components/Button";
import BookingModal from "@/components/BookingModal";
import Image from "next/image";

const AnimatedCard = ({
  heading = "",
  paragraph = "",
  className = "",
  width = "w-full",
  height = "h-86",
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
      <div
        className="absolute h-86 bg-white/10 backdrop-blur-xl"
        style={{ zIndex: 0 }}
      />
      <div className="relative rounded-xl z-10 bg-white w-full h-full md:p-6 p-4 flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className={`flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out transform h-[45%] mx-4 md:mx-6 absolute ${shouldShowContent
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
            }`}
        >
          {icon}
          <h3 className="!font-semibold leading-tight !text-[#1F2937]">{heading}</h3>
        </div>
        <div
          className={`absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${shouldShowContent ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
            } space-y-3 px-2 md:px-6`}
        >
          <p className="leading-relaxed " style={{lineHeight:"normal"}}>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default function SolutionSection1() {
  const { t } = useTranslation("translation");
  const [domLoaded, setDomLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      heading: "Defining Clear Goals",
      paragraph:
        "We analyze your growth targets and past performance to craft a strategic roadmap that aligns with your business vision-ensuring measurable success.",
      icon: (
        <Image
          src="/Icons/DEFINE.svg"
          alt="Defining Clear Goals"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    {
      heading: "Pinpointing Your Ideal Customers",
      paragraph:
        "Through data-driven research, we identify your Ideal Customer Profile (ICP) and key-decision makers, so you focus on the right prospects from day one.",
      icon: (
        <Image
          src="/Icons/PINPOINT.svg"
          alt="Pinpointing Your Ideal Customers"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    {
      heading: "Sharpening Positioning & Messaging",
      paragraph:
        "By working closely with your sales team, we uncover real customer pain points and craft compelling, conversion-driven messaging that resonates and builds trust.",
      icon: (
        <Image
          src="/Icons/SHARPENING.svg"
          alt="Sharpening Positioning & Messaging"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    
    {
      heading: "Creating Impactful, Lead-Generating Content",
      paragraph:
        "From thought leadership to sales-driven assets, we develop high-value content that engages, nurtures, and positions you as a trusted industry leader.",
      icon: (
        <Image
          src="/Icons/IMPACTFUL.svg"
          alt="Creating Impactful Content"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    {
      heading: "Activating the Right Channels",
      paragraph:
        "Your audience is actively searching for solutions. We position you where it matters most, capturing immediate opportunities and establishing a consistent demand-generation system.",
      icon: (
        <Image
          src="/Icons/ACTIVATING.svg"
          alt="Activating the Right Channels"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    {
      heading: "Data-Driven Transparency and Trust",
      paragraph:
        "Data powers everything we do and drives smarter decisions. With unified access across teams, we enable fast, informed collaboration. Our commitment to transparency isn't just a value; it's a catalyst for sustainable growth. ",
      icon: (
        <Image
          src="/Icons/DATA_DRIVEN.svg"
          alt="Data-Driven Transparency"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    {
      heading: "Testing, Refining & Scaling for Maximum ROI",
      paragraph:
        "Marketing isn't static. We continuously test, optimize, and scale campaigns, refining creative, messaging, and targeting to accelerate conversions and revenue growth.",
      icon: (
        <Image
          src="/Icons/ROI.svg"
          alt="Testing, Refining & Scaling for Maximum ROI"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    {
      heading: "Cultivating Collaborative Innovation",
      paragraph:
        "We believe the best solutions are built together. By co-creating strategies with our clients, we solve real-world challenges and spark meaningful innovation across industries.",
      icon: (
        <Image
          src="/Icons/INTELLIGENCE_AI.svg"
          alt="Cultivating Collaborative Innovation"
          width={48}
          height={48}
          style={{ width: '3rem', height: '3rem' }}
        />
      ),
    },
    
  ];
  return (
    <div   ref={sectionRef}>
      <div className="pb-4 md:pb-6">
        <div className="text-center">
          <h2 className="mb-4 lg:mb-6 !font-semibold text-center">
            Executing your go-to-market with precision and purpose, while we handle the challenges for you.
          </h2>
        </div>
        {domLoaded && (
          <div className="grid grid-cols-2 md:grid-cols-2 max-w-7xl mx-auto lg:grid-cols-4 gap-3 lg:gap-6">
            {cardData.map((card, index) => (
              <div key={index} className='border-2 hover:border-2 hover:border-primary border-transparent rounded-xl'>
                <AnimatedCard
                  heading={card.heading}
                  paragraph={card.paragraph}
                  icon={card.icon}
                  className="!h-[320px] md:h-[300px]"
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
      <center>
        <Button label="Book a Call" onClick={() => setIsModalOpen(true)} />
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </center>
    </div>
  );
}