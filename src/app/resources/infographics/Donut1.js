"use client";
import { Globe } from "lucide-react";
import React, { useState } from "react";
import MetricCard from "./MetricCard";
import { motion } from "framer-motion";

function Donut1() {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const regions = [
    {
      name: "APAC",
      audience: 27,
      suffix: ".1M",
      percentage: 24.0,
      color: "#ff4200",
    },
    {
      name: "EMEA",
      audience: 37,
      suffix: ".1M",
      percentage: 32.9,
      color: "#72bf44",
    },
    {
      name: "LATAM",
      audience: 23,
      percentage: 20.6,
      suffix: ".3M",
      color: "#7536f0",
    },
    {
      name: "North America",
      audience: 25,
      suffix: ".4M",
      percentage: 22.5,
      color: "#05b9f0",
    },
  ];

  const DonutChart = ({ data, size = 300, strokeWidth = 40, selectedIndex, onSegmentClick }) => {
    const [hoveredSegment, setHoveredSegment] = useState(null);
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    let cumulativePercentage = 0;

    return (
      <div className="relative flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90" style={{ pointerEvents: 'none' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--card-border))"
            strokeWidth={strokeWidth}
            style={{ pointerEvents: 'none' }}
          />
          {data.map((segment, index) => {
            const isSelected = selectedIndex !== null;
            const isThisSelected = selectedIndex === index;

            let segmentPercentage;
            let strokeDasharray;
            let strokeDashoffset;

            if (isSelected) {
              if (isThisSelected) {
                // This segment takes over the entire donut
                segmentPercentage = 1;
                strokeDasharray = `${circumference} ${circumference}`;
                strokeDashoffset = 0;
              } else {
                // Hide other segments
                segmentPercentage = 0;
                strokeDasharray = `0 ${circumference}`;
                strokeDashoffset = 0;
              }
            } else {
              // Normal state
              segmentPercentage = segment.percentage / 100;
              strokeDasharray = `${
                segmentPercentage * circumference
              } ${circumference}`;
              strokeDashoffset = -cumulativePercentage * circumference;
            }

            if (!isSelected) {
              cumulativePercentage += segmentPercentage;
            }

            return (
              <g key={segment.name}>
                <motion.circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke={segment.color}
                  strokeWidth={strokeWidth}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{
                    pointerEvents: 'none'
                  }}
                  initial={{ strokeDasharray: `0 ${circumference}` }}
                  animate={{
                    strokeDasharray,
                    strokeDashoffset,
                    opacity: isSelected && !isThisSelected ? 0 : 1
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                />
                {/* Invisible overlay for better click detection */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="transparent"
                  strokeWidth={strokeWidth + 10}
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  style={{
                    cursor: 'pointer',
                    pointerEvents: isSelected && !isThisSelected ? 'none' : 'stroke',
                    touchAction: 'none'
                  }}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (typeof onSegmentClick === 'function') {
                      onSegmentClick(index);
                    }
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                />
              </g>
            );
          })}
        </svg>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
          key={selectedIndex !== null ? selectedIndex : 'total'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {selectedIndex !== null ? (
            <>
              <div className="text-3xl font-bold mb-1 transition-transform duration-500" style={{ color: data[selectedIndex].color }}>
                {data[selectedIndex].value}M+
              </div>
              <div className="text-sm font-medium">{data[selectedIndex].name}</div>
              <div className="text-xs text-muted-foreground mt-1">
                {data[selectedIndex].percentage}% of total
              </div>
            </>
          ) : (
            <>
              <div className="text-3xl font-bold text-primary mb-1 transition-transform duration-500">
                113M+
              </div>
              <div className="text-sm font-medium">Total Audience</div>
            </>
          )}
        </motion.div>
        {hoveredSegment !== null && (
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white border border-card-border rounded-xl px-4 py-2 shadow-lg z-10 transition-opacity duration-300">
            <div className="text-sm font-semibold">
              {data[hoveredSegment].name}
            </div>
            <div className="text-xs text-muted-foreground">
              {(data[hoveredSegment].value / 1000000).toFixed(1)}M (
              {data[hoveredSegment].percentage}%)
            </div>
          </div>
        )}
      </div>
    );
  };

  const handleCardClick = (index) => {
    setSelectedRegion(selectedRegion === index ? null : index);
  };

  const handleClickOutside = () => {
    if (selectedRegion !== null) {
      setSelectedRegion(null);
    }
  };

  return (
    <section className="max-w-7xl mx-auto" onClick={handleClickOutside}>
      <div className="text-center">
        <h2 className="section-title !mb-0">Global Distribution</h2>
        <h3 className="text-center my-4 md:my-6">
          Our audience spans across four major regions with significant market
          penetration in each territory.
        </h3>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center gap-4 lg:gap-8">
        <div className="flex justify-center">
          <div className="block md:hidden">
            <DonutChart
              data={regions.map((region) => ({
                name: region.name,
                value: region.audience,
                percentage: region.percentage,
                color: region.color,
              }))}
              size={300}
              strokeWidth={50}
              selectedIndex={selectedRegion}
              onSegmentClick={handleCardClick}
            />
          </div>
          <div className="hidden md:block">
            <DonutChart
              data={regions.map((region) => ({
                name: region.name,
                value: region.audience,
                percentage: region.percentage,
                color: region.color,
              }))}
              size={400}
              strokeWidth={50}
              selectedIndex={selectedRegion}
              onSegmentClick={handleCardClick}
            />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 md:gap-8">
          {regions.map((region, index) => (
            <div key={region.name} onClick={(e) => {
              e.stopPropagation();
              handleCardClick(index);
            }}>
              <MetricCard
                title={region.name}
                value={region.audience}
                percentage={region.percentage}
                icon={<Globe className="w-[30px] h-[30px]" />}
                color={region.color}
                suffix={region.suffix}
                delay={index * 0.1}
                subtitle="Regional Market"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Donut1;
