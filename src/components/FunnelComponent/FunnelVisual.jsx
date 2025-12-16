
import React from "react";
import { useFunnel } from "./FunnelContext";

export const FunnelVisual = () => {
  const { activeStage, setActiveStage } = useFunnel();

  // Map stage names to indices
  const stageMap = {
    "TOFU": 0,
    "MOFU": 1,
    "BOFU": 2,
    "Post-Purchase": 3
  };

  // Stage names in the visual
  const stageNames = ["AWARENESS", "CONSIDERATION", "CONVERSION & DESCISION", "LOYALTY & RETENTION"];

  return (
    <div className="relative h-[500px] perspective-1000 group w-[300px] mx-auto">
      <div className="funnel-container absolute inset-0 transition-transform duration-500 ease-in-out">
        <div 
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[100px] bg-gradient-to-b from-red-500 to-orange-400 rounded-t-lg opacity-80 ${activeStage === 0 ? 'scale-105 brightness-110' : 'animate-float-slow'} z-10 shadow-lg flex items-center justify-center text-white font-bold transition-all duration-300 hover:shadow-xl hover:brightness-110 hover:scale-105`}
          onMouseEnter={() => setActiveStage(0)}
          onMouseLeave={() => setActiveStage(null)}
        >
          AWARENESS
        </div>
        <div 
          className={`absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[240px] h-[120px] bg-gradient-to-b from-orange-400 to-yellow-300 opacity-85 ${activeStage === 1 ? 'scale-105 brightness-110' : 'animate-float-medium'} shadow-lg flex items-center justify-center text-white font-bold transition-all duration-300 hover:shadow-xl hover:brightness-110 hover:scale-105`}
          onMouseEnter={() => setActiveStage(1)}
          onMouseLeave={() => setActiveStage(null)}
        >
          CONSIDERATION
        </div>
        <div 
          className={`absolute top-[260px] left-1/2 transform -translate-x-1/2 w-[180px] h-[120px] bg-gradient-to-b from-yellow-300 to-green-400 opacity-90 ${activeStage === 2 ? 'scale-105 brightness-110' : 'animate-float-medium'} shadow-lg flex items-center justify-center text-white text-center font-bold transition-all duration-300 hover:shadow-xl hover:brightness-110 hover:scale-105`}
          onMouseEnter={() => setActiveStage(2)}
          onMouseLeave={() => setActiveStage(null)}
        >
          CONVERSION & DESCISION
        </div>
        <div 
          className={`absolute top-[400px] left-1/2 transform -translate-x-1/2 w-[120px] h-[80px] bg-gradient-to-b from-green-400 to-blue-500 rounded-b-lg opacity-95 ${activeStage === 3 ? 'scale-105 brightness-110' : 'animate-float-fast'} shadow-lg flex items-center justify-center text-white text-center font-bold transition-all duration-300 hover:shadow-xl hover:brightness-110 hover:scale-105`}
          onMouseEnter={() => setActiveStage(3)}
          onMouseLeave={() => setActiveStage(null)}
        >
          LOYALTY & RETENTION
        </div>
        <div className="absolute top-[90px] left-1/2 transform -translate-x-1/2 w-[30px] h-[40px] border-l-2 border-r-2 border-b-0 border-white opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
        <div className="absolute top-[230px] left-1/2 transform -translate-x-1/2 w-[30px] h-[40px] border-l-2 border-r-2 border-b-0 border-white opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
        <div className="absolute top-[370px] left-1/2 transform -translate-x-1/2 w-[30px] h-[40px] border-l-2 border-r-2 border-b-0 border-white opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
        {/* Animated dots representing leads */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-fall-through-funnel"
            style={{
              left: `${Math.random() * 200 + 50}px`,
              top: `${Math.random() * -100 - 50}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 5 + 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
