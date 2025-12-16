import React, { useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { motion, useInView } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const companySizeData = [
  { size: '11-50', percentage: 11.9},
  { size: '51-200', percentage: 10.2},
  { size: '201-500', percentage: 17.3},
  { size: '501-1000', percentage: 14.4},
  { size: '1001-5000', percentage: 11},
  { size: '5001-10000', percentage: 15.5},
  { size: '10000+', percentage: 19.7},
];

// Find min and max values for normalization
const minPercentage = Math.min(...companySizeData.map(item => item.percentage));
const maxPercentage = Math.max(...companySizeData.map(item => item.percentage));

// Generate orange gradient colors based on data value
const generateOrangeGradient = (value) => {
  // Normalize the value between 0 and 1
  const normalized = (value - minPercentage) / (maxPercentage - minPercentage);
  
  // Orange color base (RGB: 255, 140, 0)
  // For lighter shades (low values): higher RGB values, lower opacity
  // For darker shades (high values): lower RGB values, higher opacity
  
  // Adjust RGB values - lighter orange to darker orange
  const baseRed = 255;
  const baseGreen = 200 - (normalized * 80); // From 200 (light) to 120 (dark)
  const baseBlue = 100 - (normalized * 70);  // From 100 (light) to 30 (dark)
  const opacity = 0.4 + (normalized * 0.6);  // From 0.4 (light) to 1.0 (dark)
  
  return `rgba(${baseRed}, ${Math.round(baseGreen)}, ${Math.round(baseBlue)}, ${opacity})`;
};

const getCompanySizeChartData = () => ({
  labels: companySizeData.map(item => item.size),
  datasets: [{
    label: 'Company Size Distribution',
    data: companySizeData.map(item => item.percentage),
    backgroundColor: companySizeData.map(item => 
      generateOrangeGradient(item.percentage)
    ),
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderWidth: 0,
    borderRadius: 4,
  }]
});

const CompanySizeChart = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false, amount: 0.3 });
  
  const chartData = getCompanySizeChartData();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const percentage = context.raw.toFixed(1);
            return [`${percentage}%`];
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
          }
        }
      },
      y: {
        beginAtZero: true,
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

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      ref={chartRef}
      className="chart-container h-80"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Bar data={chartData} options={options} />
    </motion.div>
  );
};

export default CompanySizeChart;