import React, { useState } from 'react';

const TimelineNode = ({ step, isActive }) => {
  const Icon = step.icon;

  return (
    <div className="relative group">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded text-sm font-medium whitespace-nowrap z-10">
        {step.callout}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-primary"></div>
      </div>

      <div className="relative mx-auto flex items-center justify-center w-14 h-14 rounded-full border-3 border-primary bg-white">
        <Icon className="medium-icon !text-primary" />
      </div>

      <div className="mt-6 max-w-[230px]">
        <h5 className="text-center font-quicksand font-bold !text-base md:!text-lg text-black">{step.title}</h5>
        <p className="text-center font-quicksand text-xs md:text-sm mt-2">
          {step.description}
        </p>
      </div>
    </div>
  );
};

export default TimelineNode;