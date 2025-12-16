"use client";
import React, { useState, useEffect, useRef } from 'react';

export const CountUpAnimation = ({
  end,
  start = 0,
  duration = 2,
  prefix,
  suffix='',
  className =''
  
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(null);
  const observerRef = useRef(null);

  const easeOutQuad = (t) => t * (2 - t);

  const animateCount = () => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * (end - start) + start));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    // Set up intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCount();
          // Unobserve after animation starts
          if (observerRef.current && countRef.current) {
            observerRef.current.unobserve(countRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current && countRef.current) {
        observerRef.current.unobserve(countRef.current);
      }
    };
  }, [end, start, duration]);

  return <span ref={countRef} className={className}>{prefix}{count}{suffix}</span>;
};