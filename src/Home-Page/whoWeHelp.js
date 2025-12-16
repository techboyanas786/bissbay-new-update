import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const accordionData = [
  {
    id: 1,
    title: "For Enterprises",
    subtitle: "Ready to Dominate with a True Growth Partner",
    description:
      "Scaling your business doesn't have to be complicated. Enterprises need strategic, results-driven B2B marketing solutions to grow with confidence. We turn complexity into clarity building scalable, predictable demand engines that drive real revenue, not just MQLs.",
    backgroundImage:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradientOverlay: "from-black from-gray",
    link: "/who-we-help/enterprises",
  },
  {
    id: 2,
    title: "For Ambitious Founders",
    subtitle: "Aiming to Scale with Confidence",
    description:
      "Marketing can feel like a battle but it doesn't have to. Shift from chaos to clarity with a demand generation engine built for sustainable, scalable growth. No fluff, just a revenue-focused strategy that delivers results.",
    author: "Jenny Thai - Head of Content",
    backgroundImage:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    gradientOverlay: "from-black from-gray",
    link: "/who-we-help/ambitious-founders",
  },
  {
    id: 3,
    title: "For Marketing Leaders",
    subtitle: "Tired of Agencies That Overpromise and Underdeliver",
    description:
      "BISSBAY gives you an expert team without the hassle of managing one yourself. Go beyond MQLs and focus on the metrics that truly drive predictable, scalable revenue. No fluff, just results that actually matter.",
    backgroundImage:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradientOverlay: "from-black from-gray",
    link: "/who-we-help/marketing-leaders",
  },
  {
    id: 4,
    title: "For Venture Capitals",
    subtitle: "Driving Growth in Underperforming SaaS Portfolio Companies.",
    description:
      "Struggling to scale? Get your portfolio back on the growth track with BISSBAY. We've built the team, so you don't have to. Delivering agile, buyer-centric marketing that drives real returns.",
    backgroundImage:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    gradientOverlay: "from-black from-gray",
    link: "/who-we-help/venture-capital",
  },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isMobile;
};

const VerticalAccordion = ({ data = accordionData }) => {
  const [expandedId, setExpandedId] = useState(data[0]?.id || 1);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const accordionRef = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          setExpandedId(data[0].id);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => {
      if (accordionRef.current) {
        observer.unobserve(accordionRef.current);
      }
    };
  }, [data]);

  useEffect(() => {
    let interval;
    if (isVisible && !isPaused) {
      interval = setInterval(() => {
        setExpandedId((prevId) => {
          const currentIndex = data.findIndex((item) => item.id === prevId);
          const nextIndex = (currentIndex + 1) % data.length;
          return data[nextIndex].id;
        });
      }, 6000);
    }

    return () => clearInterval(interval);
  }, [isVisible, isPaused, data]);

  const toggleAccordion = (id) => {
    if (expandedId !== id) {
      setExpandedId(id);
      setIsPaused(true);

      setTimeout(() => {
        setIsPaused(false);
      }, 12000);
    }
  };

  const getItemWidth = (isExpanded) => {
    if (isMobile) {
      if (isExpanded) {
        return "75%";
      } else {
        const collapsedCount = data.length - 1;
        return `${25 / collapsedCount}%`;
      }
    } else {
      return isExpanded ? "60%" : "13.33%";
    }
  };

  return (
    <div ref={accordionRef}>
      <div className={`flex ${isMobile ? "gap-1" : "gap-2"}`}>
        {data.map((item) => {
          const isExpanded = expandedId === item.id;
          const itemWidth = getItemWidth(isExpanded);

          return (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 ease-out"
              onClick={() => toggleAccordion(item.id)}
              style={{
                width: itemWidth,
                height: isMobile ? "65vh" : "55vh",
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className={`absolute inset-0 ${
                  isExpanded
                    ? `bg-gradient-to-br ${item.gradientOverlay}`
                    : "bg-black/60"
                }`}
                style={!isExpanded ? { filter: "grayscale(100%)" } : {}}
              />

              {!isExpanded && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%)",
                  }}
                />
              )}
              {!isExpanded && <div className="absolute inset-0 bg-black/60" />}

              <div
                className={`relative h-full flex flex-col justify-between text-white ${
                  isMobile ? "p-2" : "p-4"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex-1 min-w-0 ${
                      !isExpanded && isMobile
                        ? "h-full flex items-center justify-center"
                        : ""
                    }`}
                  >
                    {!isExpanded && isMobile ? (
                      <div className="vertical-text-container">
                        <span className="vertical-text font-bold text-white text-sm">
                          {item.title}
                        </span>
                      </div>
                    ) : (
                      <h3
                        className={`font-bold mb-2 !text-white transition-all duration-500 ${
                          isExpanded
                            ? isMobile
                              ? "text-lg"
                              : "text-2xl"
                            : isMobile
                            ? "text-xs"
                            : "text-lg"
                        }`}
                      >
                        {item.title}
                      </h3>
                    )}
                    {isExpanded && (
                      <h4
                        className={`opacity-90 !text-white transition-opacity duration-300 ${
                          isMobile ? "text-sm" : ""
                        }`}
                      >
                        {item.subtitle}
                      </h4>
                    )}
                  </div>
                </div>

                {isExpanded && (
                  <div
                    className={`mt-6 space-y-6 flex-col opacity-0 animate-fade-in flex items-end justify-between ${
                      isMobile ? "mt-3 space-y-3" : ""
                    }`}
                  >
                    <div
                      className={`space-y-2 border-amber-50 border bg-black/50 backdrop-blur-sm rounded-xl ${
                        isMobile ? "p-2" : "p-4"
                      }`}
                    >
                      <h4
                        className={`md:leading-relaxed leading-normal !font-medium opacity-95 !text-white ${
                          isMobile ? "!text-md" : ""
                        }`}
                        style={{ lineHeight: isMobile ? "22px" : "25px" }}
                      >
                        "{item.description}"
                      </h4>
                      <div
                        className={`flex flex-row w-full justify-between items-center ${
                          isMobile ? "flex-col gap-2" : "flex-row-reverse"
                        }`}
                      >
                        <div onMouseEnter={(e) => e.stopPropagation()} onMouseLeave={(e) => e.stopPropagation()}>
                          <Link
                            href={item.link}
                            className="inline-flex items-center justify-center gap-2 !bg-white/10 backdrop-blur-sm hover:!bg-white/20 !border-0 !text-white px-6 py-2 rounded-lg font-semibold no-underline transition-all duration-300 ease-in-out cursor-pointer"
                          >
                            <span className="!text-white transition-colors duration-300">Learn more</span>
                            <svg
                              className={isMobile ? "w-3 h-3" : "w-4 h-4"}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                        <div
                          className={`font-black opacity-20 ${
                            isMobile ? "text-3xl" : "text-6xl"
                          }`}
                        >
                          {item.id}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {!isExpanded && (
                <div className="absolute inset-0 border-2 border-white/0 hover:border-white/20 rounded-xl pointer-events-none transition-colors duration-300" />
              )}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out 0.5s forwards;
        }
        .vertical-text-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          white-space: nowrap;
          display: block;
          letter-spacing: 1px;
        }
      `}</style>
    </div>
  );
};

export default function AccordionDemo() {
  return (
    <>
      <div className="flex items-center">
        <div className="container mx-auto">
          <div className="text-center">
            <h1>
              Scalable Growth, Simplified
            </h1>
            <h3 className="block lg:hidden max-w-full mx-auto my-4 md:my-6 !text-[#5C6371]">
              We Turn Strategy into Revenue
            </h3>
            <h3 className="hidden lg:block max-w-full mx-auto my-4 md:my-6 !text-[#5C6371]">
              Helping enterprises, founders, marketing leaders, and VCs turn
              strategy into revenue.
            </h3>
          </div>
          <VerticalAccordion />
          <div className="text-center mt-4 lg:mt-8">
            <h3 className="!text-[#5c6371] max-w-full font-bold mx-auto">
              Bissbay - Where Strategy Meets Revenue Growth.
            </h3>
            <h3 className="!text-[#5c6371] max-w-full mx-auto lg:mt-0 mt-4">
              We turn complexity into clarity, building scalable, predictable demand engines that drive real revenue.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
