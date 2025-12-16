"use client";
import React, { useState, useEffect } from "react";
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
    { value: "Spend Transparency", count: 9500 },
    { value: "Online Payments", count: 80 },
    { value: "AP Automation", count: 7000 },
    { value: "Threat Detection", count: 6000 },
    { value: "Predictive Analytics", count: 5050 },
    { value: "Expense Management", count: 4000 },
    { value: "Tax Compliance", count: 3000 },
    { value: "Business Digitization", count: 2000 },
    { value: "Business Continuity", count: 1080 },
    { value: "Invoice Automation", count: 900 },
    { value: "Liquidity Management", count: 800 },
    { value: "Procure-to-Pay", count: 350 },
    { value: "ERP Integration", count: 8000 },
    { value: "Compliance Automation", count: 40 },
  ];

  const customRenderer = (tag, size) => {
    // Font weight based on size - adjusted for mobile
    const weight = size > 35 ? 900 : size > 25 ? 700 : size > 18 ? 500 : 300;

    // Custom color mapping
    const color =
      tag.count === 9500
        ? "#ff4200"
        : tag.count === 7000
        ? "#72bf44"
        : tag.count === 2000
        ? "#7536f0"
        : tag.count === 4000
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