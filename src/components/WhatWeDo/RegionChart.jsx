'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

ChartJS.register(ArcElement, Tooltip, Legend);

const RegionChart = () => {
  const chartRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const regionData = [
    { region: 'APAC', percentage: '24%' },
    { region: 'EMEA', percentage: '32.9%' },
    { region: 'LATAM', percentage: '20.6%' },
    { region: 'North America', percentage: '22.5%' },
  ];

  const getChartData = () => ({
    labels: regionData.map((d) => d.region),
    datasets: [
      {
        data: regionData.map((d) => parseFloat(d.percentage)),
        backgroundColor: [
          'rgba(114, 191, 68, 1)',
          'rgba(255, 66, 0, 1)',
          'rgba(26, 207, 191, 1)',
          'rgba(117, 54, 240, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(114, 191, 68, 0.7)',
          'rgba(255, 66, 0, 0.7)',
          'rgba(26, 207, 191, 0.7)',
          'rgba(117, 54, 240, 0.7)',
        ],
      },
    ],
  });

  const [chartData, setChartData] = useState(getChartData());

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
      },
    },
    plugins: {
      legend: {
        position: 'right',
        align: 'center',
        labels: {
          font: { family: 'Quicksand', font:400, size: 14 },
          usePointStyle: true,
          padding: 10,
          boxWidth: 10,
          boxHeight: 10,
        },
      },
      tooltip: {
        enabled: true, // ✅ keep default tooltip
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value.toFixed(1)}%`;
          },
        },
      },
    },
    cutout: '60%',
    onClick: (_, elements) => {
      if (elements.length > 0) {
        const clickedIndex = elements[0].index;
        setActiveIndex(activeIndex === clickedIndex ? null : clickedIndex);
      } else {
        setActiveIndex(null);
      }
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      const newDatasets = [...chartData.datasets];
      const baseColors = [
        'rgba(114, 191, 68, 1)',
        'rgba(255, 66, 0, 1)',
        'rgba(26, 207, 191, 1)',
        'rgba(117, 54, 240, 1)',
      ];
      newDatasets[0].backgroundColor = baseColors.map((c, i) =>
        activeIndex !== null && activeIndex !== i ? c.replace('1)', '0.3)') : c
      );
      setChartData({ ...chartData, datasets: newDatasets });
    }
  }, [activeIndex]);

  return (
    <motion.div
      className="chart-container h-60 md:h-80"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-full ">
        <Doughnut ref={chartRef} data={chartData} options={options} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {activeIndex === null ? (
            <img
              src="/images/bissbay.svg"
              alt="logo"
              className="w-16 h-16 mr-35 sm:w-32 sm:h-32 object-contain pointer-events-auto"
              onClick={() => setActiveIndex(null)}
            />
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center cursor-pointer pointer-events-auto mr-[130px]"
              onClick={() => setActiveIndex(null)}
            >
              <h3 className="text-lg font-semibold">
                {regionData[activeIndex]?.region}
              </h3>
              <div className="text-xl font-bold text-primary">
                <CountUp
                  end={parseFloat(regionData[activeIndex]?.percentage)}
                  suffix="%"
                  decimals={2}
                  duration={1}
                />
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default RegionChart;
