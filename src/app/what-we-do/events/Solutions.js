import React from "react";
import { Laptop, Users, User } from "lucide-react";
const GlobalSolutionsSection = () => {
  const eventTypes = [
    {
      icon: <User className="medium-icon" />,
      title: "Live Events",
      description:
        "In-person experiences that drive networking, engagement, and action.",
    },
    {
      icon: <Laptop className="medium-icon" />,
      title: "Virtual Events",
      description: "Interactive online events for worldwide audiences.",
    },
    {
      icon: <Users className="medium-icon" />,
      title: "Hybrid Events",
      description:
        "Best of both worlds, live-streamed in-person events for maximum reach.",
    },
  ];

  return (
    <section
      id="solutions"
    >
      <div className="text-center animate-fade-in">
        <h2 className="section-title !mb-0">
          Global<span className="text-primary"> Event</span> Solutions: Reach Your Audience, Anywhere
        </h2>
        <h3 className="my-4 md:my-6 !font-medium">
          Whether you’re hosting a high-profile executive roundtable or a large-scale virtual event,<br /> BISSBAY creates custom event solutions that
          maximize engagement and ROI.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {eventTypes.map((type, index) => (
          <div
            key={index}
            className="metric-card hover-card"
            style={{ animationDelay: `${index * 0.2}s` }}
          >

            <div className="flex flex-row w-full items-center justify-start gap-2">
              <div className="text-primary mb-2">{type.icon}</div>
              <h5 className="mb-2">
                {type.title}
              </h5>
            </div>

            <p className="text-gray-600">{type.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalSolutionsSection;
