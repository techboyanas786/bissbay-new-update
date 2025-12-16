
import React from "react";
import { useFunnel } from "./FunnelContext";

export const FunnelStage = ({ number, title, description, isLast = false, className = "" }) => {
  const { activeStage, setActiveStage } = useFunnel();
  
  // Map stage titles to indices
  const stageIndex = {
    "Top of the Funnel (TOFU)": 0,
    "Middle of the Funnel (MOFU)": 1,
    "Bottom of the Funnel (BOFU)": 2,
    "Post-Purchase": 3
  }[title];

  const isActive = activeStage === stageIndex;

  return (
    <div
      className={`flex group p-4 lg:p-0 ${isActive ? 'transform scale-[1.02]' : ''} ${className}`}
      onMouseEnter={() => setActiveStage(stageIndex)}
      onMouseLeave={() => setActiveStage(null)}
    >
      <div className="flex flex-col items-center">
        <div className={`flex items-center justify-center w-12 h-12 ${isActive ? 'bg-gradient-to-r from-red-500 via-orange-400 to-red-500 scale-110 shadow-lg' : 'bg-[rgb(255,66,0)]'} text-white font-bold text-xl transition-all duration-500 ease-in-out group-hover:scale-110 hover:shadow-lg relative overflow-hidden perfect-circle`}>
          <span className="relative z-10">{number}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 to-red-500 bg-[length:200%_100%] animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        {/* Progress line connecting to the next stage */}
        {!isLast && (
          <div className="h-[calc(100%-3rem)] w-1 bg-primary mt-2 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-70"></div>
        )}
      </div>
      <div className={`flex-1 transition-all duration-300 ${isActive ? 'translate-x-1' : ''} group-hover:translate-x-1`}>
        <h5 className={`mb-2 text-center !font-semibold transition-colors duration-300 ${isActive ? 'text-[rgb(255,66,0)]' : ''} group-hover:text-[rgb(255,66,0)]`}>{title}</h5>
        <p className="transition-all duration-500">{description}</p>
      </div>
    </div>
  );
};
