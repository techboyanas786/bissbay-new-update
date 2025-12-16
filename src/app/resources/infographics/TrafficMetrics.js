"use client";
import { useEffect, useState } from "react";
import { TrendingUp, Users, Eye, Clock } from "lucide-react";
import MetricCard from "./MetricCard";
import { CountUpAnimation } from "@/app/what-we-do/account-based-marketing/animation/CountUpAnimation";

export const TrafficMetrics = () => {
  const MetricCard2 = ({
    title,
    value,
    prefix,
    percentage,
    suffix,
    icon,
    color = "",
    delay = 0,
    subtitle,
  }) => {
    return (
      <div
        className="card backdrop-blur-sm bg-white rounded-xl p-4 md:p-6 hover-card hover:scale-105 text-black fade-in"
        style={{
          animationDelay: `${delay}s`,
          animationFillMode: "forwards",
        }}
      >
        <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
          {icon && (
            <div className="text-primary group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xs md:text-sm font-medium mb-1">{title}</h3>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-baseline justify-center gap-2">
            <CountUpAnimation
              end={value}
              prefix={prefix}
              suffix={suffix}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2 hover:scale-105 transition-transform duration-300"
            />
            {percentage && <span className="metric-badge">{percentage}%</span>}
          </div>
          {subtitle && (
            <p className="text-center text-xs md:text-sm">
              {subtitle}
            </p>
          )}
          {/* Progress bar */}
          {percentage && (
            <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  backgroundColor: color,
                  width: `${percentage}%`,
                  transitionDelay: `${delay + 0.5}s`,
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`transition-all duration-1000 mb-4 md:mb- ${
        isVisible ? "fade-in-up" : ""
      }`}
    >
      <h2 className="text-center mb-4 md:mb-6">
        Engaged Audience, Extended Visits
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <MetricCard2
          title="Monthly Traffic"
          value="500"
          suffix={"k"}
          subtitle="Desktop Visitors"
          icon={<TrendingUp className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
        />

        <MetricCard2
          title="Growth Trends"
          value="9"
          prefix={"+"}
          suffix={".5%"}
          subtitle="Year-on-Year"
          icon={<Users className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
        />

        <MetricCard2
          title="Pages per Visit"
          value="2"
          suffix={".2"}
          subtitle="Average Engagement"
          icon={<Clock className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" />}
        />
      </div>

    </div>
  );
};
