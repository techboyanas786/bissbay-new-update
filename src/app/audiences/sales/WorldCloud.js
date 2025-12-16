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
    { value: "Predictive Planning", count: 9500 },
    { value: "Agreement Tracking", count: 80 },
    { value: "Digital Era", count: 7000 },
    { value: "Cold Outreach", count: 6000 },
    { value: "Prospecting Workflow", count: 5050 },
    { value: "Deal Stages", count: 4000 },
    { value: "Warm Connections", count: 3000 },
    { value: "Proposal Management", count: 2000 },
    { value: "E-signatures", count: 1080 },
    { value: "Lead Scoring", count: 900 },
    { value: "Sales Enablement", count: 800 },
    { value: "Data Enrichment", count: 350 },
    { value: "Opportunity Prioritization", count: 70 },
    { value: "Pipeline Optimization", count: 40 },
  ];

  const customRenderer = (tag, size) => {
    // Font weight based on size
    const weight = size > 35 ? 900 : size > 25 ? 700 : size > 18 ? 500 : 300;

    const color =
      tag.count === 9500
        ? "#ff4200"
        : tag.count === 7000
        ? "#72bf44"
        : tag.count === 4000
        ? "#7536f0"
        : tag.count === 5050
        ? "#1acfbf"
        : tag.count === 900
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
