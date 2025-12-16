import React, { useEffect, useRef } from 'react';
import { Bar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend
);

const IndustryChart = () => {
  const chartRef = useRef(null);
  
  // Data sorted by percentage
  const industryData = [
    { industry: 'Technology & IT', percentage: 27.2 },
    { industry: 'Finance & Banking', percentage: 18.1 },
    { industry: 'Healthcare & Life Sciences', percentage: 10.8 },
    { industry: 'Manufacturing & Industrial', percentage: 9.0 },
    { industry: 'Consumer Goods & Retail', percentage: 7.3 },
    { industry: 'Hospitality, Travel & Entertainment', percentage: 6.3 },
    { industry: 'Media & Marketing', percentage: 5.4 },
    { industry: 'Energy & Utilities', percentage: 4.5 },
    { industry: 'Government & Public Sector', percentage: 3.6 },
    { industry: 'Professional Services', percentage: 2.7 },
    { industry: 'Transportation & Logistics', percentage: 2.3 },
    { industry: 'Construction & Engineering', percentage: 1.8 },
    { industry: 'Agriculture & Environmental', percentage: 1.4 }
  ];

  // Generate orange gradient colors for each bar
  const generateOrangeGradient = (index, total) => {
    // Start with deep orange and gradually lighten
    const baseRed = 255;
    const baseGreen = 87 + (index * 10); // Starting from orange, gradually increasing green
    const baseBlue = 34 + (index * 8); // Slight blue increase for lighter shades
    const opacity = 1 - (index * 0.03); // Slight opacity decrease for visual depth
    
    return `rgba(${baseRed}, ${Math.min(baseGreen, 200)}, ${Math.min(baseBlue, 100)}, ${opacity})`;
  };

  const chartData = {
    labels: industryData.map(item => item.industry),
    datasets: [
      {
        label: 'Market Share (%)',
        data: industryData.map(item => item.percentage),
        backgroundColor: industryData.map((_, index) => 
          generateOrangeGradient(index, industryData.length)
        ),
        borderColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 0,
        borderRadius: 4,
        barThickness: 30,
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 30,
        top: 20,
        bottom: 20
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (context) => {
            return `${context.raw}% of audience`;
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 30,
        grid: {
          display: true,
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false,
        },
        ticks: {
          color: '#666',
          font: {
            size: 11,
            family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          },
          callback: function(value) {
            return value + '%';
          }
        }
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          color: '#333',
          font: {
            size: 12,
            family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          },
          padding: 8
        }
      }
    },
    animation: {
      duration: 1500,
      easing: 'easeInOutQuart',
      delay: (context) => {
        return context.dataIndex * 100;
      }
    },
  };

  return (
      <div className="relative" style={{ height: '600px' }}>
        <Bar 
          ref={chartRef}
          data={chartData} 
          options={options} 
        />
      </div>
  );
};

export default IndustryChart;