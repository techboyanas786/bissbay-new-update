import React from "react";
import {
  Database,
  Users,
  Globe,
  GitBranch,
  Brain,
  Cloudy,
  Link,
  Check,
} from "lucide-react";

const DataTypeCard = ({ icon: Icon, title, description, isActive, onClick }) => {
  return (
    <div
      className={`border-l-6 metric-card transition-all duration-500 cursor-pointer md:cursor-default ${isActive ? "border-primary md:border-primary" : "md:border-primary border-gray-200"
        }`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-start gap-3 mb-2">
        <Icon className="medium-icon" />
        <h5  >{title}</h5>
      </div>

      <div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const BissbaySection = () => {
  const [activeCard, setActiveCard] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);
  const sectionRef = React.useRef(null);

  const handleCardClick = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setActiveCard(index);
    setIsPaused(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 700);

    setTimeout(() => {
      setIsPaused(false);
    }, 10000);
  };

  const dataTypes = [
    {
      icon: Users,
      title: "First-Party",
      description:
        "Website visits, content downloads, and engagement on your platforms.",
    },
    {
      icon: GitBranch,
      title: "Second-Party",
      description: "Insights from trusted partners and data-sharing networks.",
    },
    {
      icon: Globe,
      title: "Third-Party",
      description:
        "Broader market signals, social media trends, event participation and tech stack changes.",
    },
  ];
  const Implement = [
    "Ensure Data Accuracy: Use real-time, high-quality signals.",
    "Integrate with CRM & Automation Tools: Connect with HubSpot, Marketo, Salesforce etc",
    "Identify & Engage In-Market Buyers: Prioritize outreach based on realtime buying intent.",
    "Personalize Website Content: Adapt messaging dynamically based on visitor behavior.",
    "Track & Optimize Performance: Continuously refine campaigns for better ROI.",
  ];
  const gatheringMethods = [
    "Website & Search Behavior: Tracking visits, searches, and engagement.",
    "Event Engagement: Capturing insights from global industry events.",
    "Social Media Intelligence: Monitoring LinkedIn conversations and market trends.",
    "Tech Stack Insights: Identifying the tools your prospects are using.",
    "CRM Integration: Syncing data seamlessly across marketing and sales systems.",
  ];

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted && window.innerWidth < 768) {
            setHasStarted(true);
            setActiveCard(0);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  React.useEffect(() => {
    if (window.innerWidth >= 768) return;

    const interval = setInterval(() => {
      if (!isAnimating && !isPaused && hasStarted) {
        setIsAnimating(true);
        setActiveCard((prev) => (prev < dataTypes.length - 1 ? prev + 1 : 0));

        setTimeout(() => {
          setIsAnimating(false);
        }, 700);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isAnimating, isPaused, dataTypes.length, hasStarted]);

  return (
    <section ref={sectionRef}>
      <div className="text-center">
        <h2 className="section-title !mb-0">
          <span className="text-primary">BISSBAY</span>: Turning Data into
          Revenue
        </h2>
        <h3 className="my-4 md:my-6">
          BISSBAY goes beyond surface-level insights.<br /><span className="text-[20px]">
            Our AI-driven algorithms
            analyze thousands of real buyer signals across multiple channels,
            revealing sales opportunities your competitors miss.
          </span>
        </h3>
      </div>

      {/* Types of Intent Data */}
      <div className="mb-6 md:mb-12">
        <h3 className="mb-4 md:mb-6 text-center">
          Types of Intent Data We Use:
        </h3>
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
          {dataTypes.map((type, index) => (
            <DataTypeCard
              key={type.title}
              icon={type.icon}
              title={type.title}
              description={type.description}
              isActive={index === activeCard}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      {/* How BISSBAY Gathers Data */}
      <div className="grid lg:grid-cols-2 gap-4 md:gap-6 items-center">
        {/* Left - Methods */}
        <div className="flex flex-col h-full items-start justify-start">
          <h5 className="mb-4 md:mb-6 self-center">
            How we Gather & Activate Intent Data:
          </h5>

          <div className="space-y-4 md:space-y-6 w-full">
            {gatheringMethods.map((method, index) => {
              const [boldText, normalText] = method.split(":");
              return (
                <div
                  key={index}
                  className="flex items-center hover:scale-102 space-x-4 p-4 md:p-6 bg-white shadow-sm hover:shadow-2xl rounded-lg hover-card transition-all duration-300"
                >
                  <div className="bullet-point"></div>
                  <span className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-[#1f2937]">{boldText} : </span>
                    {normalText}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col h-full items-start justify-start">
          <h5 className="mb-4 md:mb-6 self-center">
            Maximize Impact with Intent Data:
          </h5>

          <div className="space-y-4 md:space-y-6 w-full">
            {Implement.map((method, index) => {
              const [boldText, normalText] = method.split(":");
              return (
                <div
                  key={index}
                  className="flex items-start hover:scale-102 space-x-4 p-4 md:p-6 bg-white shadow-sm hover:shadow-2xl rounded-lg hover-card transition-all duration-300"
                >
                  <p className="!text-primary font-bold mr-2">✔</p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-[#1f2937]">{boldText} : </span>
                    {normalText}
                  </p>
                </div>
              );
            })}
          </div>
        </div>



      </div>
    </section>
  );
};

export default BissbaySection;
