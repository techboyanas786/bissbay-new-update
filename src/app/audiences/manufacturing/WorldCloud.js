"use client";
import React, { useEffect, useState } from "react";
import WordCloud from "react-d3-cloud";
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
    { value: "Resource Optimization", count: 9500 },
    { value: "Intelligent Production", count: 80 },
    { value: "Inventory Monitoring", count: 7000 },
    { value: "Manufacturing Timeline", count: 6000 },
    { value: "Cycle Duration", count: 5050 },
    { value: "Process Efficiency", count: 4000 },
    { value: "Equipment Availability", count: 3000 },
    { value: "Facility Output", count: 2000 },
    { value: "Live Monitoring", count: 1080 },
    { value: "Unexpected Halts", count: 900 },
    { value: "Connected Manufacturing", count: 800 },
    { value: "Edge Connectivity", count: 350 },
    { value: "Operational Insights", count: 70 },
    { value: "Digital Operations", count: 40 },
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
         : tag.count === 3000
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