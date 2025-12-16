import React from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

const problems = [
  {
    title: "Low Open Rates",
    description: "Generic messaging that gets ignored in crowded inboxes.",
  },
  {
    title: "Spam Issues",
    description: "Poor deliverability kills engagement before it starts.",
  },
  {
    title: "Weak Conversions",
    description:
      "Irrelevant content and ineffective CTAs fail to drive action.",
  },
  {
    title: "No Insights",
    description: "Unclear data on what's working and what needs improvement.",
  },
];

const solutions = [
  {
    title: "Personalized Content",
    description: "Every email tailored to individual customer journeys",
  },
  {
    title: "99% Deliverability",
    description: "Our systems ensure your emails reach the inbox",
  },
  {
    title: "Conversion-Focused Design",
    description: "Clear CTAs and user-centric copywriting.",
  },
  {
    title: "Real-Time Analytics",
    description: "Actionable insights to optimize performance.",
  },
];

const WhySection = () => {
  return (
    <section id="why-us">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="text-center animate-on-scroll">
          <h2 className="section-title !mb-6">
            Why Most Email Marketing<span className="text-red-500"> Fails </span>
            and How BISSBAY <span className="text-[#72bf44]">Fixes</span> It
          </h2>
        </div>

        <div className="flex flex-row gap-8 items-center justify-center">
          {/* Problems Column */}
          <div className="p-6 w-full lg:w-[40%] bg-white rounded-md shadow-xl hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in">
            <h5 className="text-2xl relative text-center font-bold mb-6 animate-on-scroll">
              Most businesses struggle with
            </h5>
            <div className="space-y-4 md:space-y-6">
              {problems.map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold flex justify-center items-center gap-2 text-lg"><AlertCircle className="!text-[#d6084c] small-icon" />{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="p-6 w-full lg:w-[40%] bg-white rounded-md shadow-xl hover:border-b-6 border-b-6 border-t-6 border-white transition-all duration-300 hover:border-t-6 hover:border-b-gray-500 hover:border-t-primary md:border-white border-b-gray-500 border-t-primary fade-in">
            <h5 className="text-2xl relative text-center mb-4 md:mb-6 font-bold">
              The BISSBAY Solution
            </h5>

            <div className="space-y-4 md:space-y-6">
              {solutions.map((item, index) => (
                <div key={index} className="text-center">
                  <h3 className="font-bold flex justify-center items-center gap-2 text-lg"><CheckCircle className="small-icon !text-[#72bf44]" />{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block lg:hidden">
        {/* Problems Section */}
        <div className="text-center animate-on-scroll mb-4 md:mb-8">
          <h2 className="section-title !mb-4 md:!mb-8">
            Why Most Email Marketing<span className="text-red-500"> Fails</span>
          </h2>
        </div>

        <div className="p-4 md:p-6 w-full bg-white rounded-md shadow-xl border-b-6 border-t-6 border-b-gray-500 border-t-primary fade-in mb-4 lg:mb-12">
          <h5 className="text-2xl relative text-center font-bold mb-2 md:mb-6 animate-on-scroll">
            Most businesses struggle with
          </h5>
          <div className="space-y-4 md:space-y-6">
            {problems.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold flex items-center gap-2 text-lg"><AlertCircle className="!text-[#d6084c] small-icon" />{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="text-center animate-on-scroll mb-4 md:mb-8">
          <h2 className="section-title !mb-4 md:!mb-8">
            How BISSBAY <span className="text-[#72bf44]">Fixes</span> It
          </h2>
        </div>

        <div className="p-4 md:p-6 w-full bg-white rounded-md shadow-xl border-b-6 border-t-6 border-b-gray-500 border-t-primary fade-in">
          <h5 className="text-2xl relative text-center mb-2 md:mb-6 font-bold">
            The BISSBAY Solution
          </h5>
          <div className="space-y-4 md:space-y-6">
            {solutions.map((item, index) => (
              <div key={index}>
                <h3 className="font-bold flex items-center gap-2 text-lg"><CheckCircle className="small-icon !text-[#72bf44]" />{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h3 className="!text-center mt-4 md:mt-6">
        Our AI-driven, data-backed approach ensures
        your emails stand out, land in inboxes, and drive real revenue.<br />BISSBAY changes the game.
      </h3>
    </section>
  );
};

export default WhySection;
