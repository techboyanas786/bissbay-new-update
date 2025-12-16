"use client";
import React, { useEffect, useState } from "react";
import { TagCloud } from "react-tagcloud";

function WorldCloud() {
  const [fontSize, setFontSize] = useState({ min: 15, max: 45 });

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Mobile
        setFontSize({ min: 10, max: 28 });
      } else if (width < 768) {
        // Small tablet
        setFontSize({ min: 12, max: 35 });
      } else {
        // Desktop
        setFontSize({ min: 15, max: 45 });
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);
  const data = [
    { value: "Campaign Automation", count: 9500 },
    { value: "Buyer Persona", count: 800 },
    { value: "Market Intelligence", count: 7000 },
    { value: "Account Based Personalization", count: 900 },
    { value: "Key Accounts", count: 5050 },
    { value: "Buyer Journey", count: 4000 },
    { value: "Demand Generation", count: 3000 },
    { value: "Audience Insights", count: 2000 },
    { value: "Content Interaction", count: 1080 },
    { value: "Attribution Modeling", count: 6000 },
    { value: "Conversion Metrics", count: 800 },
    { value: "Engagement Funnel", count: 350 },
    { value: "Prospect Targeting", count: 70 },
  ];

  const customRenderer = (tag, size) => {
    // Font weight based on size
    const weight = size > 35 ? 900 : size > 25 ? 700 : size > 18 ? 500 : 300;

    const color =
      tag.count === 7000
        ? "#ff4200"
        : tag.count === 9500
        ? "#72bf44"
        : tag.count === 4000
        ? "#7536f0"
        : tag.count === 5050
        ? "#1acfbf"
        : tag.count === 2000
        ? "#d6084d"
        : "#8c9092";

    return (
      <span
        key={tag.value}
        style={{
          fontSize: `${size}px`,
          fontWeight: weight,
          margin: "2px 3px",
          fontFamily: "Quicksand, sans-serif",
          color: color,
          display: "inline-block",
          textAlign: "center",
          lineHeight: "1.3",
        }}
      >
        {tag.value}
      </span>
    );
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex min-h-80 justify-center items-center shadow-xl sm:shadow-none sm:p-0 rounded-xl sm:rounded-none sm:border-0  overflow-hidden">
        <TagCloud
          minSize={fontSize.min}
          maxSize={fontSize.max}
          tags={data}
          renderer={customRenderer}
          className="text-center"
        />
      </div>
    </div>
  );
}

export default WorldCloud;
