"use client";
import { ChevronDown } from 'lucide-react';
import React from 'react';

function DonutChart({ selectedIndex, setSelectedIndex, centerContent, BissbayLogo }) {
  const handleClick = (index) => {
    index === selectedIndex ? setSelectedIndex(null) : setSelectedIndex(index);
  };

  // SVG dimensions - responsive
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;
  const size = isMobile ? 300 : 400;
  const center = size / 2;
  const outerRadius = isMobile ? 140 : 190;
  const innerRadius = isMobile ? 75 : 100;
  const textRadius = (outerRadius + innerRadius) / 2; // Middle of the donut for text
  const dashedCircleRadius = isMobile ? 155 : 210;

  // Helper function to create SVG path for each segment
  const createPath = (startAngle, endAngle) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = center + outerRadius * Math.cos(startAngleRad);
    const y1 = center + outerRadius * Math.sin(startAngleRad);
    const x2 = center + outerRadius * Math.cos(endAngleRad);
    const y2 = center + outerRadius * Math.sin(endAngleRad);
    
    const x3 = center + innerRadius * Math.cos(endAngleRad);
    const y3 = center + innerRadius * Math.sin(endAngleRad);
    const x4 = center + innerRadius * Math.cos(startAngleRad);
    const y4 = center + innerRadius * Math.sin(startAngleRad);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  // Helper function to create text path for each segment
  const createTextPath = (startAngle, endAngle, id, reverse = false) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = center + textRadius * Math.cos(startAngleRad);
    const y1 = center + textRadius * Math.sin(startAngleRad);
    const x2 = center + textRadius * Math.cos(endAngleRad);
    const y2 = center + textRadius * Math.sin(endAngleRad);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    if (reverse) {
      return `M ${x2} ${y2} A ${textRadius} ${textRadius} 0 ${largeArc} 0 ${x1} ${y1}`;
    }
    
    return `M ${x1} ${y1} A ${textRadius} ${textRadius} 0 ${largeArc} 1 ${x2} ${y2}`;
  };

  const segments = [
    { 
      path: createPath(-90, 0), 
      textPath: createTextPath(-90, 0, 'textPath0'),
      index: 0, 
      text: 'PLANNING',
      id: 'textPath0'
    },
    { 
      path: createPath(0, 90), 
      textPath: createTextPath(0, 90, 'textPath1', true),
      index: 1, 
      text: 'PROMOTION',
      id: 'textPath1'
    },
    { 
      path: createPath(90, 180), 
      textPath: createTextPath(90, 180, 'textPath2'),
      index: 2, 
      text: 'DAY OF EVENT',
      id: 'textPath2'
    },
    { 
      path: createPath(180, 270), 
      textPath: createTextPath(180, 270, 'textPath3'),
      index: 3, 
      text: 'POST EVENT',
      id: 'textPath3'
    }
  ];

  const containerSize = size + 60;

  return (
    <div className="relative flex items-center justify-center" style={{ width: `${containerSize}px`, height: `${containerSize}px` }}>
      <svg 
        width={containerSize} 
        height={containerSize} 
        viewBox={`0 0 ${containerSize} ${containerSize}`} 
        className="absolute"
        style={{ zIndex: 1 }}
      >
        <defs>
          {segments.map((segment) => (
            <path
              key={segment.id}
              id={segment.id}
              d={segment.textPath}
              fill="none"
              stroke="none"
            />
          ))}
        </defs>

        <circle
          cx={containerSize / 2}
          cy={containerSize / 2}
          r={dashedCircleRadius}
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="8,8"
        />

        <g transform={`translate(30, 30)`}>
          {segments.map((segment) => (
            <g 
              key={segment.index}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedIndex === segment.index ? 'brightness-110 scale-105' : ''
              }`}
              onClick={() => handleClick(segment.index)}
              style={{
                transformOrigin: `${center}px ${center}px`
              }}
            >
              <path
                d={segment.path}
                fill={selectedIndex === segment.index ? '#FF4500' : '#FF4500E6'}
                stroke="white"
                strokeWidth="4"
              />
              
              <text
                fill="white"
                fontSize={isMobile ? "12" : "16"}
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                style={{ userSelect: 'none' }}
              >
                <textPath
                  href={`#${segment.id}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {segment.text}
                </textPath>
              </text>
            </g>
          ))}
        </g>
      </svg>

      <ChevronDown size={isMobile ? 20 : 28} className='absolute text-black rotate-[225deg]' style={{ top: isMobile ? '85px' : '70px', left: isMobile ? '40px' : '65px' }}/>
      <ChevronDown size={isMobile ? 20 : 28} className='absolute text-black -rotate-45' style={{ top: isMobile ? '85px' : '70px', right: isMobile ? '40px' : '65px' }}/>
      <ChevronDown size={isMobile ? 20 : 28} className='absolute text-black rotate-45' style={{ bottom: isMobile ? '85px' : '70px', right: isMobile ? '40px' : '65px' }}/>
      <ChevronDown size={isMobile ? 20 : 28} className='absolute text-black rotate-[135deg]' style={{ bottom: isMobile ? '85px' : '70px', left: isMobile ? '40px' : '65px' }}/>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full flex flex-col justify-center items-center text-center px-4 pointer-events-none"
           style={{ width: isMobile ? '150px' : '200px', height: isMobile ? '150px' : '200px', zIndex: 3 }}>
        
        {centerContent.showLogo && (
          <div className="flex flex-col items-center">
            <BissbayLogo className="mb-0 lg:mb-2" width={isMobile ? 70 : 100} />
            <div className={`text-gray-500 ${isMobile ? 'text-xs' : 'text-sm'}`}>
              <p className='!font-bold'>Event Lifecycle</p>
              <div>Smart event marketing and execution, real results.</div>
            </div>
          </div>
        )}

        {centerContent.title && (
          <>
            <h5 className="text-lg font-semibold">{centerContent.title}</h5>
            {centerContent.subtitle && (
              <p className="text-gray-500 text-sm mt-2">{centerContent.subtitle}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default DonutChart;