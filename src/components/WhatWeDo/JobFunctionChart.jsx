import React, { useRef } from 'react';
import { Radar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  RadialLinearScale, 
  PointElement, 
  LineElement, 
  Filler, 
  Tooltip, 
  Legend 
} from 'chart.js';
import { motion, useInView } from 'framer-motion';

// Register ChartJS components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const JobFunctionChart = () => {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false, amount: 0.3 });
  
  // Define chart data inline with strategic label positioning
  const chartData = {
    labels: ['Finance & Accounting', 'Marketing & Public Relations', 'IT & Engineering', 'Healthcare', 'Operations', 'Human Resources (HR)', 'Sales & Business Development', 'Legal & Compliance', 'Manufacturing & Engineering', 'Facilities & Administration'],
    datasets: [
      {
        label: 'Team Distribution',
        data: [17, 9, 22, 7, 8, 12, 12, 3, 7, 3],
        backgroundColor: 'rgba(255, 99, 71, 0.2)',
        borderColor: 'rgba(255, 99, 71, 1)',
        pointBackgroundColor: 'rgba(255, 99, 71, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 71, 1)',
      },
    ],
  };
   const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          font: {
            family: 'Quicksand',
          },
          backdropColor: 'rgba(255, 255, 255, 0.75)',
          callback: function(value) {
            return value + '%';
          }
        },
        pointLabels: {
          font: {
            family: 'Quicksand',
            size: 12
          },
          padding: window.innerWidth < 768 ? 15 : 20,
          callback: function(label) {
            if (window.innerWidth < 768) {
              // Split long labels into multiple lines on mobile
              if (label.length > 15) {
                const words = label.split(' ');
                if (words.length > 2) {
                  const mid = Math.ceil(words.length / 2);
                  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
                }
              }
            }
            return label;
          }
        },
        grid: {
          circular: true
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.raw}%`;
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.2,
        borderWidth: 3
      },
      point: {
        radius: 4,
        hoverRadius: 6,
        borderWidth: 2
      }
    },
    animation: {
      duration: 2000
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: "easeInOut"
      } 
    }
  };

  return (
    <motion.div 
      ref={chartRef}
      className="chart-container h-[350px] lg:h-[500px]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <Radar data={chartData} options={options} />
    </motion.div>
  );
};

export default JobFunctionChart;