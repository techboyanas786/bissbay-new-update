import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';

// Define data directly in the component file
const seniorityData = [
  { level: 'Board & Ownership', percentage: '5%', audience: 'Top Leadership' },
  { level: 'Executive Leadership', percentage: '10%', audience: 'Executives' },
  { level: 'Vice President (VP) Level', percentage: '15%', audience: 'Senior Leadership' },
  { level: 'Director Level', percentage: '20%', audience: 'Directors' },
  { level: 'Manager Level', percentage: '25%', audience: 'Managers' },
  { level: 'Mid-Level (Executives)', percentage: '25%', audience: 'Professionals' },
];

const SeniorityChart = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false, amount: 0.3 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Sort the data by level hierarchy (custom order)
  const orderMap = {
    'Board & Ownership': 0,
    'C-Level (Executive Leadership)': 1,
    'Vice President (VP) Level': 2,
    'Director Level': 3,
    'Manager Level': 4,
    'Mid-Level (Executives)': 5
  };
  
  const sortedData = [...seniorityData].sort((a, b) => 
    orderMap[a.level] - orderMap[b.level]
  );

  // Animation variants for pyramid levels
  const levelVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: (i) => ({
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  return (
    <div
      ref={chartRef}
      className="pyramid-chart w-full max-w-3xl mx-auto space-y-4"
    >
      {sortedData.map((item, index) => {
        // Calculate width percentage based on the level's position in hierarchy
        const widthPercentage = 40 + (index * 10);
        const isHovered = hoveredIndex === index;
        
        return (
          <div
            key={item.level}
            className="pyramid-level mx-auto flex flex-col md:flex-row gap-2 md:gap-4 items-center overflow-hidden"
            style={{ width: `${widthPercentage}%` }}
            variants={levelVariants}
            custom={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div 
              className="bg-gradient-to-t from-primary to-[#E1E345] w-full py-3 rounded text-white text-center font-semibold px-0 md:px-4 relative overflow-hidden"
              animate={{
                scale: isHovered ? 1.03 : 1
              }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10">{item.level}</span>
              <div 
                className="absolute top-0 left-0 h-full bg-[#ff4200]"
                initial={{ width: '0%' }}
                animate={{ width: isHovered ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <div 
              animate={{
                scale: isHovered ? 1.1 : 1,
                color: isHovered ? 'rgb(255, 66, 0)' : 'rgb(0, 0, 0)',
              }}
            >
              <div className="text-lg font-bold !text-center sm:!text-left">
                  <CountUp 
                    end={parseFloat(item.percentage.replace('%', ''))} 
                    suffix="%" 
                    duration={1.5}
                    delay={index * 0.1}
                  />
              </div>
              <div className="text-sm opacity-75">{item.audience}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeniorityChart;