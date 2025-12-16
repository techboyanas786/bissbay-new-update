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
    { value: "Health Tracking", count: 9500 },
    { value: "Virtual Care", count: 80 },
    { value: "Data Confidentiality", count: 7000 },
    { value: "Preventive Tracking", count: 6000 },
    { value: "Regulated Studies", count: 5050 },
    { value: "Clinical Support", count: 4000 },
    { value: "System Integration", count: 3000 },
    { value: "Health Data Protection", count: 2000 },
    { value: "Regulatory Delays", count: 1080 },
    { value: "Appointment Management", count: 900 },
    { value: "Regulatory Guidelines", count: 800 },
    { value: "Care Coordination", count: 70 },
    { value: "Digital Health Records", count: 8000 },
    { value: "Remote Diagnostics", count: 40 },
    { value: "Outcome Monitoring", count: 350 },
  ];
  const customRenderer = (tag, size) => {
    // Font weight based on size - adjusted for mobile
    const weight = size > 35 ? 900 : size > 25 ? 700 : size > 18 ? 500 : 300;

    // Custom color mapping like your d3-cloud version
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
