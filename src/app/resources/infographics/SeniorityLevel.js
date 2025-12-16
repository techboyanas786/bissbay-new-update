"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { DataCard } from "./DataCard";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SeniorityLevel() {
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const seniorityLevels = [
    { label: "Mid-Level (Executives)", count: 22600000, percentage: 20 },
    { label: "Manager Level", count: 30500000, percentage: 27 },
    { label: "Director Level", count: 25950000, percentage: 23 },
    { label: "Vice President (VP) Level", count: 16950000, percentage: 15 },
    {
      label: "C-Level (Executive Leadership)",
      count: 11300000,
      percentage: 10,
    },
    { label: "Board & Ownership", count: 5700000, percentage: 5 },
  ];

  const chartData = {
    labels: seniorityLevels.map(item => item.label.split(' ')),
    datasets: [{
      label: 'Seniority Level',
      data: seniorityLevels.map(item => item.percentage),
      backgroundColor: '#ff4200',
      borderRadius: 4,
      borderWidth: 0,
      count: seniorityLevels.map(item => item.count),
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: isMobile ? 20 : 10,
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const count = seniorityLevels[context.dataIndex].count;
            const percentage = context.raw;
            const countInMillions = (count / 1000000).toFixed(2);
            return `${countInMillions}M - ${percentage.toFixed(2)}%`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Quicksand',
            size: isMobile ? 9 : 12,
          },
          maxRotation: isMobile ? 45 : 0,
          minRotation: isMobile ? 45 : 0,
          autoSkip: false,
          padding: isMobile ? 4 : 8,
        }
      },
      y: {
        beginAtZero: true,
        max: 30,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            family: 'Quicksand',
          },
          callback: function(value) {
            return value + '%';
          }
        }
      }
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <motion.section>
      <div>
        <h2 className="section-title !mb-0 text-center">
          Seniority Level Breakdown
        </h2>
        <h3 className="text-center my-4 md:my-6">
          Representation across multiple leadership and management levels, from professionals to board executives.
        </h3>
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
          <div className="w-full overflow-x-auto h-[350px] md:h-[450px] lg:h-full">
            <Bar data={chartData} options={chartOptions} />
          </div>
          <DataCard
            title="Seniority Level"
            data={seniorityLevels}
          />
        </div>
      </div>
    </motion.section>
  );
}

export default SeniorityLevel;
