"use client";
import React, { useState, useEffect } from "react";
import { Chart } from "primereact/chart";
import { DataCard } from "./DataCard";

export default function CompanySizePolarChart() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  const companySizes = [
    { range: "11-50", audience: 13500000, percentage: 11.95 },
    { range: "51-200", audience: 11500000, percentage: 10.18 },
    { range: "201-500", audience: 19500000, percentage: 17.26 },
    { range: "501-1,000", audience: 16250000, percentage: 14.38 },
    { range: "1,001-5,000", audience: 12500000, percentage: 11.06 },
    { range: "5,001-10,000", audience: 17500000, percentage: 15.49 },
    { range: "10,001+", audience: 22250000, percentage: 19.69 },
  ];
  const companySizeEmployeesData = [
    { label: "11-50", count: 13500000, percentage: 11.95 },
    { label: "51-200", count: 11500000, percentage: 10.18 },
    { label: "201-500", count: 19500000, percentage: 17.26 },
    { label: "501-1,000", count: 16250000, percentage: 14.38 },
    { label: "1,001-5,000", count: 12500000, percentage: 11.06 },
    { label: "5,001-10,000", count: 17500000, percentage: 15.49 },
    { label: "10,000+ Employees", count: 22250000, percentage: 19.69 },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--text-color");

    const data = {
      labels: companySizes.map((size) => size.range),
      datasets: [
        {
          label: "Company Size Audience",
          data: companySizes.map((size) => size.audience),
          backgroundColor: [
            "#05b9f0",
            "#5c6371",
            "#7536f0",
            "#72bf44",
            "#1acfbf",
            "#d6084d",
            "#ff4200",
          ],
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: isMobile ? "bottom" : "left",
          labels: {
            color: textColor,
            font: {
              size: isMobile ? 10 : 12,
            },
            padding: isMobile ? 8 : 10,
            boxWidth: isMobile ? 15 : 20,
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: "#ffffff",
          },
          pointLabels: {
            color: textColor,
            font: {
              size: isMobile ? 10 : 12,
            },
          },
          ticks: {
            display: false,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [isMobile]);

  return (  
    <section>
      <h2 className="section-title text-center mb-12">
        Company Size Distribution by Employees
      </h2>
      <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
        <div className="flex w-full min-h-[400px] md:min-h-[500px] overflow-x-auto flex-col items-center justify-center">
            <Chart
              type="polarArea"
              data={chartData}
              options={chartOptions}
              style={{ width: "100%", height: "100%" }}
            />
        </div>
        <div className="self-center">
          <DataCard
            title="Company Size (Employees)"
            data={companySizeEmployeesData}
            totalCount={113000000}
          />
        </div>
      </div>
    </section>
  );
}
