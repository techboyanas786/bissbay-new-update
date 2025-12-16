"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const AnimatedCard = ({
  heading,
  paragraph,
  className,
  icon,
  src,
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
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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

  const handleCardClick = (e) => {
    if (e.target.closest("a")) {
      return;
    }
    if (isMobile && onCardClick) {
      onCardClick(cardIndex);
    }
  };

  return (
    <div
      className={`bg-white flex hover-card justify-center rounded-2xl items-center overflow-hidden relative shadow-lg group ${isMobile ? "cursor-pointer" : ""
        } ${className}`}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        className="absolute bg-white/10 backdrop-blur-xl"
        style={{ zIndex: 0 }}
      />
      <div className="relative rounded-2xl z-10 text-primary bg-white w-full h-full p-4 sm:p-6 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Front */}
        <div
          className={`px-4 md:px-0 flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out h-auto md:h-[50%] transform absolute ${shouldShowContent
              ? "-translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
            }`}
        >
          {icon}
          <h5>
            {heading}
          </h5>
        </div>
        {/* Back */}
        <div
          className={`absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${shouldShowContent
              ? "translate-y-0 opacity-100"
              : "translate-y-32 opacity-0"
            } space-y-3 lg:px-6 px-4`}
        >
          <p style={{ lineHeight: "normal" }}>{paragraph}</p>
          <Link href={src}>
            <span className="font-semibold text-base underline-offset-2 underline text-primary">
              Learn more
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

function Solutions() {
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
      title: "ABM",
      src: "/what-we-do/account-based-marketing",
      description:
        "Execute precision-targeted ABM strategies that align sales & marketing around high-value accounts, driving personalized engagement & measurable revenue impact.",
    },
    {
      icon: (
        <Image
          src="/Icons/Screening.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Events",
      src: "/what-we-do/events",
      description:
        "High-impact webinar programs that position your portfolio companies as thought leaders while generating qualified sales opportunities.",
    },
    {
      icon: (
        <Image
          src="/Icons/Database.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Intent Data",
      src: "/what-we-do/intent-data",
      description:
        "Advanced data analytics to pinpoint high-intent buyers in your target market, reducing sales cycle time and improving conversion rates.",
    },
    {
      icon: (
        <Image
          src="/Icons/Customer-Support.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Telemarketing",
      src: "/what-we-do/appointment-setting",
      description:
        "Professional outbound calling campaigns that create meaningful conversations and book qualified meetings with decision-makers.",
    },
    {
      icon: (
        <Image
          src="/Icons/MESSAGING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Email Marketing",
      src: "/what-we-do/email-marketing",
      description:
        "Sophisticated email sequences designed to educate, engage, and convert prospects through personalized, value-driven content.",
    },
    
    
    {
      icon: (
        <Image
          src="/Icons/QUALITYLEADS.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={48}
          height={48}
        />
      ),
      title: "Lead Generation",
      src: "/what-we-do/lead-generation",
      description:
        "Strategic lead generation campaigns that deliver qualified prospects directly to your sales pipeline with detailed qualification scoring.",
    },
    
  ];



  const sectionRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
        } else {
          setStartAnimation(false); // re-trigger if desired
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <div
        ref={sectionRef}
        className="border-primary text-center"
      >
        <h2 className="section-title mb-6">
          Consistently Generating{" "}
          <span className="text-primary">High-Value Leads</span>
        </h2>
        <p className="mb-4 md:mb-6">
          Bissbay serves as your on-demand marketing team, delivers the
          expertise and execution you need to overcome challenges and achieve
          sustainable growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl mx-auto lg:gap-6">
          {services.map((card, index) => (
            <div key={index}>
              <AnimatedCard
                heading={card.title}
                paragraph={card.description}
                icon={card.icon}
                src={card.src}
                className="md:h-[250px] h-[300px]"
                autoAnimate={startAnimation}
                delay={index * 400}
                isActive={activeCardIndex === index}
                onCardClick={(cardIndex) => {
                  setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                }}
                cardIndex={index}
              />
            </div>
          ))}
        </div>
        <div className="mx-auto transition-all duration-1000 delay-600 mb-0 my-4 md:my-6">
          <div className="text-center">
            <h5>
              Whether you're navigating growth hurdles or scaling portfolio
              performance.
              <br className="hidden sm:block" /> We help you consistently
              generate quality leads that convert into long-term customers.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
