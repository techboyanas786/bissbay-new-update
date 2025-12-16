"use client";
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

function RightPanel({ data, selectedIndex }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  // Determine arrow position and rotation based on selected segment
  const getArrowStyles = () => {
    let topPosition = "50%"; // default

    switch (selectedIndex) {
      case 0: // Planning - top-right quadrant
        topPosition = "30%";
        return {
          className: `absolute -left-[40px] hidden sm:block !z-[-1]`,
          style: { top: topPosition },
          rotation: ""
        };
      case 1: // Promotion - bottom-right quadrant
        topPosition = "55%";
        return {
          className: `absolute -left-[40px] hidden sm:block !z-[-1]`,
          style: { top: topPosition },
          rotation: ""
        };
      case 2: // Day of Event - bottom-left quadrant
        topPosition = "55%";
        return {
          className: `absolute -right-[40px] hidden sm:block rotate-180 !z-[-1]`,
          style: { top: topPosition },
          rotation: "rotate-180"
        };
      case 3: // Post Event - top-left quadrant
        topPosition = "30%";
        return {
          className: `absolute -right-[40px] hidden sm:block rotate-180 !z-[-1]`,
          style: { top: topPosition },
          rotation: "rotate-180"
        };
      default:
        return {
          className: `absolute -left-[40px] hidden sm:block !z-[-1]`,
          style: { top: '50%' },
          rotation: ""
        };
    }
  };

  const arrowStyles = getArrowStyles();

  return (
    <div className="relative">

      <svg
        width="49"
        height="58"
        viewBox="0 0 49 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={arrowStyles.className}
        style={arrowStyles.style}
      >
        <path d="M3.62891 26.1162C0.65912 27.8539 0.659123 32.1461 3.62891 33.8838L44.9775 58.0752C47.9775 59.8303 51.75 57.666 51.75 54.1904V5.80957C51.75 2.33396 47.9775 0.169736 44.9775 1.9248L3.62891 26.1162Z" fill="#FFFFFF" stroke="#FF4200" />
      </svg>

      {/* Main panel */}
      <div className="bg-gradient-to-bl from-[#FFFFFF] to-[#FFFFFF] rounded-xl border-primary w-full max-w-md sm:w-95 shadow-lg p-3 space-y-1 border mx-auto">
        {data.items.map((item, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => handleToggle(index)}
              className="bg-gradient-to-tr from-[#FE4200] to-[#DFDC42] rounded-xl w-full p-4 text-white text-sm font-semibold cursor-pointer"
            >
              {/* Header row */}
              <div className="flex justify-between items-center">
                {item.title}
                {activeIndex === index ? (
                  <ChevronUp className="ml-2" />
                ) : (
                  <ChevronDown className="ml-2" />
                )}
              </div>
            </div>

            {/* Sliding content */}
            <div
              className={`bg-white rounded-xl border border-gray-300 transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-40 mb-3 p-2' : 'max-h-0 p-0 border-none'
                }`}
            >
              <div className="text-sm space-y-1">
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default RightPanel;