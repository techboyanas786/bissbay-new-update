"use client";
import Button from "@/components/Button";
import {
  BarChart3,
  Building,
  Database,
  Mail,
  Target,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const AnimatedCard = ({
  icon,
  title,
  description,
  src,
  index,
  isAutoAnimated = false,
  animationDelay = 0,
  className = "",
  isActive = false,
  onCardClick,
  cardIndex,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
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
      className={`animate-on-scroll bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 overflow-hidden relative group flex items-center justify-center ${
        isMobile ? "cursor-pointer" : ""
      } ${className}`}
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative z-10 bg-white w-full h-full p-4 sm:p-6 flex flex-col justify-center items-center text-center overflow-hidden">
        <div
          className={`flex flex-col items-center space-y-3 transition-all duration-500 ease-in-out h-[45%] mx-4 md:mx-6 transform absolute ${
            shouldShowContent ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <icon.icon className="medium-icon" />
          <h5>{title}</h5>
        </div>
        <div
          className={`absolute inset-x-0 flex flex-col justify-center items-center text-center transition-all duration-500 ease-in-out transform ${
            shouldShowContent ? "translate-y-0 opacity-100" : "translate-y-32 opacity-0"
          } space-y-4 px-4 sm:px-6`}
        >
          <p className="text-gray-600 leading-relaxed">{description}</p>
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

function Demand() {
  const [animateCards, setAnimateCards] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (hasAnimated) return;

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
      icon: () => (
        <Image
          src="/Icons/TARGET.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "ABM",
      description: "Strategic targeting for better conversions",
      src: "/what-we-do/account-based-marketing",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Digital_marketing.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Digital Advertising",
      description: "Expand your reach on digital platforms",
      src: "/what-we-do/digital-advertising",
    },
    {
      icon: () => (
        <Image
          src="/Icons/MESSAGING.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Email Marketing",
      description: "Nurture campaigns that work",
      src: "/what-we-do/email-marketing",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Database.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Intent Data",
      description: "Identify prospects ready to buy",
      src: "/what-we-do/intent-data",
    },
    {
      icon: () => (
        <Image
          src="/Icons/sales.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Lead Generation",
      description: "Delivering quality leads that convert",
      src: "/what-we-do/lead-generation",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Screening.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Webinars",
      description: "Create educational content that sells",
      src: "/what-we-do/events",
    },
  ];

  return (
    <section id="services" ref={sectionRef}>
      <div className="text-center">
        <h2 className="section-title mb-6">
          Driving
          <span className="text-primary"> Qualified Leads </span>to Your
          Pipeline
        </h2>
        <p className="text-xl text-black mb-4 md:mb-6 leading-relaxed">
          Bissbay serves as your on-demand marketing team that deliver real
          results. We helps you capture the right opportunities and scale your
          business with precision.
        </p>

        {/* Desktop Cards - Original Design */}
        <div className="hidden md:grid grid-cols-2 max-w-6xl mx-auto lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-on-scroll flex flex-col items-start zoom-in group bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-3 gap-3">
                <service.icon className="medium-icon" />
                <h5>{service.title}</h5>
              </div>
              <p className="!text-start text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <Link href={service.src}>
                <span className="font-semibold text-base underline-offset-2 mt-2 underline text-primary">
                  Learn more
                </span>
              </Link>
              <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards - Animated Design */}
        <div className="grid md:hidden grid-cols-2 max-w-6xl mx-auto gap-4">
          {services.map((service, index) => (
            <div key={index} className="border-2 hover:border-2 hover:border-primary border-transparent rounded-xl">
              <AnimatedCard
                icon={service}
                title={service.title}
                description={service.description}
                src={service.src}
                index={index}
                isAutoAnimated={animateCards}
                animationDelay={index * 300}
                className="h-[200px]"
                isActive={activeCardIndex === index}
                onCardClick={(cardIndex) => {
                  setActiveCardIndex(activeCardIndex === cardIndex ? null : cardIndex);
                }}
                cardIndex={index}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-5xl card hover-card !border-[#FF4200] !p-4 sm:!p-6 mt-6 md:mt-12 md-8 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 md:mb-6">
          We're not here to just say
          <span className="text-primary"> "yes."</span>
        </h2>
        <div className="space-y-8 text-xl leading-relaxed text-gray-700">
          <p>
            We actively challenge the status quo, ask the hard questions, and
            collaborate closely with you and your marketing leaders.
            <br className="hidden sm:block" /> Consider us an extension of your in-house team your fully dedicated
            to scaling your business with the same passion and commitment as if
            it were our own.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Demand;
