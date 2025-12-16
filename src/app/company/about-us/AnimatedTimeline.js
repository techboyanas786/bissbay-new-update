import React, { useRef } from "react";
import TimelineItem from "./Timeline";
import Animated from "./Animated";

function AnimatedTimeline() {
  const timelineContainerRef = useRef(null);
  
  const timelineData = [
    {
      year: "2017",
      title: "Foundation & Vision",
      description:
        "BISSBAY was founded with the mission to build a business driving predictable and scalable growth. The company was bootstrapped, leveraging expertise in B2B sales and marketing assembling a team of specialists based on shared values.",
    },
    {
      year: "2018",
      title: "Expansion & Culture",
      description:
        "The company rapidly expanded its client base and established a culture of experimentation. Focused on collaboration, creating value, expanding client engagement, and solidifying the foundation for adaptability.",
    },
    {
      year: "2019",
      title: "Innovation & Client Focus",
      description:
        "BISSBAY focused on innovation and client-centricity, continuing to scale while aligning more closely with evolving customer needs. This deepened their understanding of high-impact strategies.",
    },
    {
      year: "2020",
      title: "Operational Excellence",
      description:
        "BISSBAY streamlined internal processes, implemented new project management systems, and formed key strategic partnerships to position the company for sustainable, long-term success.",
    },
    {
      year: "2021",
      title: "Strategic Scaling",
      description:
        "This was a significant year for scaling. The company refined its offerings, expanded into new customer segments, and improved service delivery, solidifying its reputation as a trusted growth partner.",
    },
    {
      year: "2022",
      title: "Technology & Team Growth",
      description:
        "BISSBAY accelerated its momentum through increased investment in technology and team growth. This led to improved client retention, higher satisfaction, and a stronger competitive edge through an evolved go-to-market strategy.",
    },
    {
      year: "2023",
      title: "Sustainable Growth",
      description:
        "The company achieved steady, sustainable growth by optimizing operations and strengthening its brand presence. Scaled strategically and made efficient decisions to remain resilient amid market changes.",
    },
    {
      year: "2024",
      title: "Innovation & Global Expansion",
      description:
        "Innovation continued to be a primary focus. BISSBAY expanded into new markets, explored advanced data-driven tactics, and aimed to deliver exceptional value, driven by global ambitions for the future. Today, our journey continues, driven by the principles laid out in our history and a clear vision for the future. ",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b">
      <div className="mx-auto px-0 md:px-6">
        <div className="text-center">
          <h2 className="leading-tight text-center">
            Journey Through <span className="text-primary">Time</span>
          </h2>
          <h4 className="!text-[#5C6371] my-4 md:my-6" >
            Each milestone reflects our commitment to driving scalable growth
            while adapting to the ever-changing landscape of B2B.
          </h4>
        </div>
        <div ref={timelineContainerRef} className="relative">
          <Animated containerRef={timelineContainerRef} />

          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              year={item.year}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-bissbay-black">
            The Journey <span className="text-primary">Continues</span>
          </h2>
          <h4 className="mb-0 my-4 md:my-6 !text-[#5C6371]">
            From our founding in 2017 to our global ambitions today, BISSBAY
            remains committed to innovation, growth, and excellence.
          </h4>
        </div>
      </div>
    </section>
  );
}

export default AnimatedTimeline;