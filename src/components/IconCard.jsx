import React from "react";

function IconCard({
  icon: src,
  title,
  gradient = "from-green-400 via-cyan-400 to-blue-500",
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center cursor-pointer ${className}`}
    >
      <div className="flex justify-center mb-4 md:mb-6">
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center`}
        >
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <img src={src} className="w-10 h-10 object-cover" />
          </div>
        </div>
      </div>
      <h3 className="text-gray-800 font-semibold text-lg leading-tight">
        {title}
      </h3>
    </div>
  );
}

export default IconCard;
