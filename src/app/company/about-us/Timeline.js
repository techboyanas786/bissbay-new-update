"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Calendar, TrendingUp, Users, Target, Zap, Globe, Award, Rocket } from 'lucide-react';

const iconMap = {
  2017: Calendar,
  2018: TrendingUp,
  2019: Users,
  2020: Target,
  2021: Zap,
  2022: Globe,
  2023: Award,
  2024: Rocket,
};

const TimelineItem = ({ year, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);
  const Icon = iconMap[year] || Calendar;

  useEffect(() => {
    if (typeof window !== 'undefined' && window.IntersectionObserver) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), index * 200);
          }
        },
        { threshold: 0.3 }
      );

      if (itemRef.current) {
        observer.observe(itemRef.current);
      }

      return () => observer.disconnect();
    }
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`flex my-4 md:my-12 items-center mx-auto !max-w-7xl ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-row relative`}
    >
      <div className="absolute left-7 sm:left-1/2 transform -translate-x-1/2 z-10">
        <div
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary to-red-600 shadow-lg flex items-center justify-center transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            }`}
        >
          <div className="text-white font-bold text-base sm:text-xl">{year}</div>
        </div>
      </div>
      <div
        className={`sm:w-5/12 w-full pl-15 sm:pl-0 ${isEven ? 'sm:ml-8' : 'sm:mr-8'} transition-opacity duration-800 ${isVisible
          ? 'sm:opacity-100 sm:translate-x-0 opacity-100'
          : `sm:opacity-0 opacity-0 ${isEven ? 'sm:!-translate-x-8' : 'sm:!translate-x-8'}`
          }`}
      >
        <div className="bg-white rounded-xl shadow-xl p-2 md:p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
          <h3 className="text-2xl font-semibold text-bissbay-black mb-3 font-quicksand group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed font-quicksand font-medium">
            {description}
          </p>
          <div className="mt-4 md:mt-6 w-full h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-red-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;