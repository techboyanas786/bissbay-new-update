import React, { useState } from "react";
import {
  Target,
  ChevronRight,
  Monitor,
  ClipboardList,
  Users,
  BarChart3,
  RefreshCw,
  Search,
} from "lucide-react";

const StrategyDevelopment = () => {
  const [activeTab, setActiveTab] = useState("competency");

  // --- Content Data ---

  const competencyContent = {
    id: "competency",
    goal: "Define your ideal audience, craft sharp messaging, and identify the best channels to reach and convert them.",
    type: "timeline",
    items: [
      {
        title: "In-depth Discovery",
        description:
          "We begin by understanding your business model, objectives, and value proposition to ensure our strategy aligns with your growth vision.",
      },
      {
        title: "Audience Profiling",
        description:
          "We map your key decision-makers, buying committees, and customer personas to uncover their motivations, challenges, and triggers.",
      },
      {
        title: "Messaging Framework",
        description:
          "We build positioning and messaging frameworks that clearly communicate your brand’s value across every stage of the buyer journey.",
      },
      {
        title: "Industry Intelligence",
        description:
          "We analyze your competitive environment and market trends to pinpoint high-potential sectors and emerging opportunities.",
      },
      {
        title: "Market Potential Mapping",
        description:
          "We calculate your total addressable market (TAM) and segment it into actionable clusters for precision targeting.",
      },
    ],
  };

  const channelAuditContent = {
    id: "audit",
    goal: "Evaluate your existing marketing and sales ecosystem to identify gaps, opportunities, and growth levers.",
    type: "grid",
    items: [
      {
        icon: <Monitor className="w-6 h-6 text-orange-500" />,
        title: "Channel Performance Review",
        description:
          "We assess your current marketing and outreach channels — analyzing effectiveness, engagement quality, and ROI to uncover what drives impact.",
      },
      {
        icon: <ClipboardList className="w-6 h-6 text-orange-500" />,
        title: "Message-Market Fit Audit",
        description:
          "We evaluate whether your existing positioning and messaging align with your audience’s pain points, buying intent, and decision journey — revealing gaps that limit engagement or conversion.",
      },
      {
        icon: <Users className="w-6 h-6 text-orange-500" />,
        title: "Team Alignment Workshop",
        description:
          "We collaborate with your marketing, sales, and leadership teams to ensure unified goals, audience priorities, and communication strategy.",
      },
    ],
  };

  const channelSelectionContent = {
    id: "selection",
    goal: "Build a powerful omnichannel strategy that drives awareness, qualified leads, and consistent revenue outcomes.",
    type: "grid",
    items: [
      {
        icon: <Target className="w-6 h-6 text-orange-500" />,
        title: "Channel Evaluation",
        description:
          "We identify which platforms and channels have the highest impact on your visibility, lead generation, and buyer engagement.",
      },
      {
        icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
        title: "Channel Activation Planning",
        description:
          "We select and prioritize the most effective mix of channels to reach your decision-makers and deliver your value proposition with precision.",
      },
      {
        icon: <RefreshCw className="w-6 h-6 text-orange-500" />,
        title: "Omnichannel Blueprint Development",
        description:
          "We design a customized engagement framework that integrates your chosen channels — creating a unified buyer journey and consistent brand experience.",
      },
    ],
  };

  // Helper to get current content
  const getCurrentContent = () => {
    switch (activeTab) {
      case "competency":
        return competencyContent;
      case "audit":
        return channelAuditContent;
      case "selection":
        return channelSelectionContent;
      default:
        return competencyContent;
    }
  };

  const content = getCurrentContent();

  return (
    <div className="min-h-screen  p-8 flex flex-col items-center font-sans">
        <div className="flex flex-col items-center">
            <div className="mb-4">

            <h2>Our Step-by-Step Growth Process</h2>
            </div>
   
      {/* Top Header Section */}
      <div className=" w-full mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 font-bold text-xl bg-white shrink-0">
            1
          </div>
          <h2 className="text-4xl font-bold text-gray-800">
            Strategy development
          </h2>
        </div>
        <p className="text-gray-500 max-w-4xl ml-16 leading-relaxed text-lg">
          We dive deep into your business goals, audience behavior, and market
          landscape to design a data-driven, omnichannel growth plan tailored to
          your brand. Each stage blends research, insights, and strategy to set
          the foundation for scalable success.
        </p>
      </div>

      {/* Main Content Wrapper */}
      <div className="max-w-8xl w-full">
        {/* CUSTOM SLANTED TABS 
          Using clip-path for the exact shapes.
          Z-index manages the stacking order so active tab is always on top.
        */}
        <div className="flex relative z-10 ml-2 filter drop-shadow-sm">
          {/* Tab 1: Competency */}
          <button
            onClick={() => setActiveTab("competency")}
            className={`relative h-12 hover:text-orange-500 px-8 flex z-3 items-center justify-center font-semibold text-sm transition-all duration-200 focus:outline-none ${
              activeTab === "competency"
                ? "bg-orange-500 !text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            style={{
              // Right side slantesd inward
              clipPath: "polygon(0 0, 95% 0, 100% 100%, 0% 100%)",
              paddingRight: "3rem", // compensate for slant
              borderTopLeftRadius: "6px",
            }}
          >
            Day 1–5: Competency mapping
          </button>

          {/* Tab 2: Audit */}
          <button
            onClick={() => setActiveTab("audit")}
            className={`relative hover:text-orange-500 h-12 z-2 px-10 -ml-5 flex items-center justify-center font-semibold text-sm transition-all duration-200 focus:outline-none ${
              activeTab === "audit"
                ? "bg-orange-500 !text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            style={{
              // Both sides slanted
              clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
              paddingLeft: "2.5rem",
              paddingRight: "2.5rem",
            }}
          >
            Day 6–10: 360-degree channel audit
          </button>

          {/* Tab 3: Selection */}
          <button
            onClick={() => setActiveTab("selection")}
            className={`relative h-12 px-8 -ml-5 z-1 hover:text-orange-500 flex items-center  justify-center font-semibold text-sm transition-all duration-200 focus:outline-none ${
              activeTab === "selection"
                ? "bg-orange-500 !text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
            style={{
              // Left side slanted inward
              clipPath: "polygon(5% 0, 95% 0, 100% 100%, 0% 100%)",
              paddingLeft: "3rem",
              borderTopRadius: "6px",
            }}
          >
            Day 11–14: Channel selection
          </button>
        </div>

        {/* White Card Container */}
        <div className="bg-white rounded-b-xl rounded-tr-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 p-12 relative z-10 min-h-[400px]">
          {/* Goal Header */}
          <div className="flex items-start gap-3 mb-16">
            <div className="mt-1 p-0.5 rounded-full border border-orange-500">
              <Target className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-gray-800 text-lg">
              <span className="font-bold text-orange-900/80">Goal: </span>
              <span className="font-bold text-gray-800">{content.goal}</span>
            </div>
          </div>

          {/* --- CONDITIONAL RENDERING BASED ON TYPE --- */}

          {content.type === "timeline" ? (
            /* TIMELINE VIEW (Tab 1) - FIXED LAYOUT */
            <div className="relative w-full h-[400px]">
              {/* 1. The "Simple Image" Line */}
              <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 flex items-center">
                <svg
                  className="w-full h-4 overflow-visible"
                  preserveAspectRatio="none"
                >
                  {/* The Line */}
                  <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="#fb923c"
                    strokeWidth="2"
                  />
                  {/* The Arrow Head */}
                  <path
                    d="M 100% 50% L calc(100% - 10px) 0 L calc(100% - 10px) 100% Z"
                    fill="#fb923c"
                    transform="translate(-2, 0)"
                  />
                </svg>
              </div>

              {/* 2. The Content Grid */}
              <div className="grid grid-cols-5 gap-3 h-full relative z-10">
                {content.items.map((item, index) => {
                  const isAbove = index % 2 === 0; // 0, 2, 4 are Top

                  return (
                    <div
                      key={index}
                      className={`
                        flex flex-col items-center h-[50%]
                        ${
                          isAbove
                            ? "self-start justify-end"
                            : "self-end justify-start"
                        }
                      `}
                    >
                      {/* Structure for "Above" items: Card -> Line -> Dot (at bottom)
                          Structure for "Below" items: Dot (at top) -> Line -> Card
                       */}

                      <div
                        className={`
                            w-3 h-3 rounded-full bg-orange-500 ring-4 ring-white z-20 shrink-0
                            ${
                              isAbove
                                ? "order-3 translate-y-[50%]"
                                : "order-1 -translate-y-[50%]"
                            }
                          `}
                      />
                      <div
                        className={`
                          bg-gray-50 p-3 h-53    rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-65
                          ${isAbove ? "order-1 mb-1" : "order-3 mt-1"}
                        `}
                      >
                        <h3 className="font-bold text-gray-800 mb-1 text-xs leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-[11px] leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-8 mt-4">
              {content.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
           </div>
    </div>
  );
};

export default StrategyDevelopment;
