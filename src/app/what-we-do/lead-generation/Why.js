import React from "react";
import {
  Target,
  Zap,
  CheckCircle,
  Users,
  BarChart3,
  Funnel,
} from "lucide-react";
import Image from "next/image";

const WhyBissbay = () => {
  const features = [
    {
      icon: () => (
        <Image
          src="/Icons/Insights_Analyzed.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Full-Funnel Strategies",
      description:
        "Drive high-impact campaigns from awareness to decision-making.",
      points: [
        "Educate prospects via webinars and content syndication",
        "Nurture leads with ABM and drip campaigns",
        "Convert buyers with personalized offers",
      ],
    },
    {
      icon: () => (
        <Image
          src="/Icons/INTENT.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Intent-Driven Targeting",
      points: [
        "Identify buyers actively researching solutions",
        "Engage prospects at the right moment",
        "Track real-time buyer behavior signals",
      ],
      description:
        "Our proprietary intent data tracks multiple businesses across 30+ industries, identifying buyers actively researching solutions just like yours ensuring you engage them at the right moment.",
    },
    {
      icon: () => (
        <Image
          src="/Icons/Facilities.svg"
          alt="Define Goals"
          className="flex-shrink-0"
          width={36}
          height={36}
        />
      ),
      title: "Lead Scoring Frameworks",
      points: [
        "BANT (Budget, Authority, Need, Timing) : Pre-qualified, sales-ready leads.",
        "HQL (High-Quality Leads) : Verified contacts primed for meaningful sales conversations.",
        "MQL (Marketing Qualified Leads) : Leads showing interest through campaign engagement, ready for nurturing.",
        "SQL (Sales Qualified Leads) : Hand-off ready leads validated for sales outreach.",
        "Custom Criteria : Lead scoring tailored to your customer profile.",
      ],
    },
  ];

  return (
    <section>
      <div className="text-center animate-fade-in-up">
        <h2 className="section-title !mb-0 text-button fade-in group">
          Why BISSBAY? Lead Generation That Drives
          <span className="text-primary"> Real Results</span>
        </h2>
        <h3 className="my-4 md:my-6">
          We combine cutting-edge technology, deep market insights, and a
          customer-first approach to deliver leads that convert.
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4 lg:gap-8 mb-4 md:mb-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-4 md:p-6 hover-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-row items-center justify-start gap-2 mb-4">
                <div className="flex items-center">
                  <IconComponent className="medium-icon" />
                  <div className="text-2xl font-semibold text-primary"></div>
                </div>

                <h5 className="text-xl font-bold">{feature.title}</h5>
              </div>

              {feature.description && (
                <p className="text-gray-600 !font-medium my-4">
                  {feature.description}
                </p>
              )}

              {feature.points && (
                <ul className="space-y-2">
                  {feature.points.map((point, pointIndex) => {
                    const [beforeDash, afterDash] = point.split(":");

                    return (
                      <li
                        key={pointIndex}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle className="small-icon" />
                        <p className="text-gray-600 text-sm">
                          <span
                            className={`${feature.title === "Lead Scoring Frameworks"
                                ? "!font-semibold"
                                : ""
                              }`}
                          >
                            {beforeDash}{" "}
                          </span>{" "}
                          {feature.title === "Lead Scoring Frameworks"
                            ? "-"
                            : ""}{" "}
                          {afterDash}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <div className="lg:border-0 border-2 border-primary card !p-2 lg:!p-6 duration-300 transition-all">
        <h2 className="section-title !mb-0 text-button fade-in group text-center">
          Modern Challenges Need Modern Solutions
        </h2>

        <h4 className="text-xl text-center my-4 md:my-6">
          Today's B2B buyers complete <strong>70%</strong> of their journey
          before engaging sales. BISSBAY helps you bridge that gap by:
        </h4>

        <div className="grid md:grid-cols-3 gap-4 md:gap-8">
          <div className="shadow-md md:shadow-none text-center card bg-white hover:shadow-lg p-4 md:p-6 rounded-2xl duration-300 hover:scale-105">
            <Image
              src="/Icons/Personalization.svg"
              alt="Define Goals"
              className="flex-shrink-0 mx-auto"
              width={36}
              height={36}
            />
            <h5 className="text-xl font-bold mb-2 md:my-4">Persona Mapping</h5>
            <p className="text-gray-600">
              Identify decision-makers and buying triggers
            </p>
          </div>
          <div className="shadow-md md:shadow-none text-center card bg-white hover:shadow-lg p-4 md:p-6 rounded-2xl duration-300 hover:scale-105">
            <Image
              src="/Icons/IMPACTFUL.svg"
              alt="Define Goals"
              className="flex-shrink-0 mx-auto"
              width={36}
              height={36}
            />
            <h5 className="text-xl font-bold mb-2 md:my-4">Content Development</h5>
            <p className="text-gray-600">
              Crafting high-impact assets for each stage of the funnel
            </p>
          </div>
          <div className="shadow-md md:shadow-none text-center card bg-white hover:shadow-lg p-4 md:p-6 rounded-2xl duration-300 hover:scale-105">
            <Image
              src="/Icons/SCALING.svg"
              alt="Define Goals"
              className="flex-shrink-0 mx-auto"
              width={36}
              height={36}
            />
            <h5 className="text-xl font-bold mb-2 md:my-4">Lead Scoring</h5>
            <p className="text-gray-600">
              Prioritize leads with the highest potential value
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBissbay;
