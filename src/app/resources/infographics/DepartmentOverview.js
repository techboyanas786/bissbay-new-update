"use client";
import React from "react";
import { Treemap } from "d3plus-react";
import { motion } from "framer-motion";
import { DataCard } from "./DataCard";

function DepartmentOverview() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const Departmentdata = [
    {
      label: "IT & Engineering",
      value: 24.86,
      count: 24860000,
      percentage: 22,
    },
    {
      label: "Finance & Accounting",
      value: 19.21,
      count: 19210000,
      percentage: 17,
    },
    { label: "Human Resources", value: 13.56, count: 13560000, percentage: 12 },
    {
      label: "Sales & Business Development",
      value: 13.56,
      count: 13560000,
      percentage: 12,
    },
    {
      label: "Marketing & Public Relations",
      value: 10.17,
      count: 10170000,
      percentage: 9,
    },
    { label: "Operations", value: 9.04, count: 9040000, percentage: 8 },
    { label: "Healthcare", value: 7.91, count: 7910000, percentage: 7 },
    {
      label: "Manufacturing & Engineering",
      value: 7.91,
      count: 7910000,
      percentage: 7,
    },
    { label: "Legal & Compliance", value: 3.39, count: 3390000, percentage: 3 },
    {
      label: "Facilities & Administration",
      value: 3.39,
      count: 3390000,
      percentage: 3,
    },
  ];

  const colorMap = {
    "Finance & Accounting": "#ff4200",
    "IT & Engineering": "#72bf44",
    "Human Resources": "#7536f0",
    "Sales & Business Development": "#1acfbf",
    "Marketing & Public Relations": "#d9fa4f",
    "Healthcare": "#05b9f0",
    "Operations": "#1f2937",
    "Legal & Compliance": "#5c6371",
    "Manufacturing & Engineering": "#d6084d",
    "Facilities & Administration": "#ffa500",
  };
  const methods = {
    groupBy: "label",
    data: Departmentdata,
    label: (d) => `${d.label}`,
    size: (d) => d.value,
    tooltipConfig: {
      title: (d) => d.label,
      body: (d) =>
        `<div>
          <strong>Audience:</strong> ${d.value}M<br/>
          <strong>Percentage:</strong> ${d.percentage}%
        </div>`,
      tbody: [],
      footer: false,
    },
    shapeConfig: {
      fill: (d) => colorMap[d.label] || "#ff4200",
      label: (d) => `${d.label}`,
      labelConfig: {
        fontSize: isMobile ? 9 : 12,
        fontWeight: "normal",
        fontColor: "#ffffff",
      },
    },
  };

  return (
        <motion.section>
          <div className="text-center">
            <h2 className="section-title text-center !mb-0">
              Department Distribution
            </h2>
            <h3 className="my-4 md:my-6">
              IT & Engineering and Finance & Accounting 
              our largest professional segments.
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 md:gap-8">
              <div className="min-h-[350px] overflow-x-auto md:min-h-[450px] lg:min-h-[500px]">
                <Treemap config={methods} />
              </div>
              <DataCard
                title="Department Distribution"
                data={Departmentdata}
              />
          </div>
        </motion.section>
  );
}

export default DepartmentOverview;
