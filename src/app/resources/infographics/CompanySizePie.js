"use client";
import { motion } from "framer-motion";
import { AgCharts } from "ag-charts-react";
import React, { useState } from "react";
import { DataCard } from "./DataCard";

function CompanySizePie() {
  const companySizeRevenueData = [
    { label: "<$1 Million", percentage: 10.46 },
    { label: "$1 Million - $9 Million", percentage: 11.26 },
    { label: "$10 Million - $99 Million", percentage: 26.86 },
    { label: "$100 Million - $499 Million", percentage: 15.22 },
    { label: "$500 Million - $999 Million", percentage: 5.98 },
    { label: "$1 Billion+ Annual Revenue", percentage: 30.22 },
  ];

  const [chartOptions, setChartOptions] = useState({
    data: [
      { category: "<$1M", companies: 2681506, percentage: 10.46 },
      { category: "$1M - $9M", companies: 6337606, percentage: 11.26 },
      { category: "$10M - $99M", companies: 11158846, percentage: 26.86 },
      { category: "$100M - $499M", companies: 6324272, percentage: 15.22 },
      { category: "$500M - $999M", companies: 2485597, percentage: 5.98 },
      { category: "$1 Billion+", companies: 12553222, percentage: 30.22 },
    ],

    series: [
      {
        type: "pie",
        angleKey: "percentage",
        labelKey: "category",
        fills: [
          "#ff4200",
          "#7536f0",
          "#72bf44",
          "#1acfbf",
          "#d6084d",
          "#5c6371",
        ],
        strokes: ["#ffffff"],
        strokeWidth: 0.7,
        calloutLabelKey: "category",
        sectorLabelKey: "percentage",
        sectorLabel: {
          color: "#ffffff",
          fontWeight: "bold",
          fontSize: 8,
          formatter: ({ datum }) => `${datum.percentage}%`,
          minRequiredAngle: 0, // Show label on all segments
        },
        calloutLabel: {
          enabled: false,
        },
        tooltip: {
          renderer: ({ datum }) => {
            return {
              title: datum.category,
              data: [
                {
                  label: "Percentage",
                  value: `${datum.percentage}%`,
                },
              ],
            };
          },
        },

        highlightStyle: {
          item: {
            strokeWidth: 0,
            fillOpacity: 0.5,
          },
        },
      },
    ],

    legend: {
      enabled: true,
      position: "bottom",
      spacing: 20,
      item: {
        marker: {
          shape: "circle",
          size: 8,
        },
        label: {
          fontSize: 12,
          color: "#374151",
        },
        paddingY: 4,
      },
    },

    theme: {
      overrides: {
        common: {
          background: {
            fill: "transparent",
          },
        },
      },
    },
  });

  return (
    <motion.section>
      <div>
        <h2 className="text-center section-title !mb-0">
          Company Size Distribution by Revenue
        </h2>
        <h3 className="text-center my-4 md:my-6">
          Distribution of companies across different revenue categories.
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <AgCharts className="scale-110 md:scale-100 h-[500px]" options={chartOptions} />
        </div>
        <div className="self-center">
          <DataCard
            title="Company Size (Revenue)"
            data={companySizeRevenueData}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default CompanySizePie;
