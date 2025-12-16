"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CaseStudiesLanding({ onViewWorkClick, buttonText = "View Our Work" }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const textVariations = [
    { prefix: "We do", main: "PLANNING", bg: "bg-[linear-gradient(to_top_right,_#FF4200_30%,_#DBF14B_100%)]" },
    { prefix: "We Have", main: "STRATEGY", bg: "bg-[linear-gradient(to_top_right,_#05B9F0_30%,_#6DBF4E_100%)]" },
    { prefix: "We Show", main: "RESULTS", bg: "bg-[linear-gradient(to_top_right,_#73C045_30%,_#D4F74F_100%)]" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textVariations.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentText = textVariations[currentIndex];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {textVariations.map((variation, index) => (
        <motion.div
          key={`bg-${index}`}
          className={`absolute inset-0 bg-gradient-to-br ${variation.bg}`}
          initial={false}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0 
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      ))}
      
      {/* Background pattern/texture */}
      {/* <div className="absolute inset-0 opacity-50 z-5">
        <div className="absolute top-[46.1%] md:top-[43.5%] left-0 w-full h-[1.1px] bg-black"></div>
        <div className="absolute top-[51.3%] md:top-[55.5%] left-0 w-full h-[1.1px] bg-black"></div>
      </div> */}

      <motion.div
        key={`content-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 z-10"
      >
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center md:w-fit w-full px-4 md:px-0">
              <div className="w-full mb-2">
                <h2 className="!text-lg md:!text-xl lg:!text-2xl !text-gray-800 !font-medium !text-left ml-0 md:ml-3">
                  {currentText.prefix}
                </h2>
              </div>

              <div className="mb-6">
                <h1 className="!text-6xl md:!text-8xl lg:!text-9xl xl:!text-[10rem] !font-semibold !text-gray-900 leading-none tracking-tight !text-center">
                  {currentText.main}
                </h1>
              </div>

              <div className="w-full flex justify-end">
                <button
                  onClick={onViewWorkClick}
                  className="group flex items-center gap-3 !bg-transparent !border-b-2 !border-gray-900 pb-1 hover:!border-gray-700 transition-colors duration-300"
                >
                  <h3 className="!text-lg md:!text-xl !font-semibold !text-gray-900 group-hover:!text-gray-700">
                    {buttonText}
                  </h3>
                  <motion.div
                    className="flex w-[28px] h-[28px] items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      width="30"
                      height="15"
                      viewBox="0 0 40 20"
                      fill="none"
                      className="text-gray-900 group-hover:text-gray-700"
                    >
                      <path
                        d="M30 2L38 10L30 18M38 10H2"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-row space-x-3 z-20">
          {textVariations.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer hover:bg-gray-700 transition-colors duration-200 ${
                index === currentIndex ? 'bg-gray-900' : 'bg-gray-900/30'
              }`}
              animate={{
                scale: index === currentIndex ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 1.1 }}
            />
          ))}
        </div>
    </div>
  );
}

export default CaseStudiesLanding;