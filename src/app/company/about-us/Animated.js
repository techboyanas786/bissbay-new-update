import React, { useEffect, useRef, useState } from 'react';

const Animated = () => {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Get the timeline's position and dimensions
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const elementBottom = elementTop + elementHeight;

        // Calculate the progress based on viewport position relative to the timeline
        let progress = 0;

        // Start with 25% progress when the section first appears
        const initialProgress = 0.10;

        if (elementTop <= 0 && elementBottom >= windowHeight) {
          // Timeline is larger than viewport and surrounds it
          const scrolledIntoTimeline = Math.abs(elementTop);
          const viewportTravelDistance = elementHeight - windowHeight;
          const scrollProgress = Math.min(1, scrolledIntoTimeline / viewportTravelDistance);
          progress = initialProgress + (scrollProgress * (1 - initialProgress));
        } else if (elementTop <= windowHeight && elementBottom >= 0) {
          // Timeline is partially visible
          if (elementHeight <= windowHeight) {
            // Timeline is smaller than viewport
            const timelineCenter = elementTop + (elementHeight / 2);
            const viewportCenter = windowHeight / 2;
            if (timelineCenter <= viewportCenter) {
              const scrollProgress = Math.min(1, (viewportCenter - elementTop) / elementHeight);
              progress = initialProgress + (scrollProgress * (1 - initialProgress));
            } else {
              progress = initialProgress;
            }
          } else {
            // Timeline is larger than viewport
            if (elementTop > 0) {
              // Top of timeline is visible
              progress = initialProgress;
            } else {
              // We're scrolling through the timeline
              const scrollProgress = Math.min(1, Math.abs(elementTop) / (elementHeight - windowHeight));
              progress = initialProgress + (scrollProgress * (1 - initialProgress));
            }
          }
        }

        setLineHeight(progress * 100);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div
      ref={timelineRef}
      className="absolute left-6 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-gray-200 h-full"
    >
      <div
        className="w-full bg-gradient-to-b from-primary via-red-500 to-primary transition-all duration-100 ease-out"
        style={{ height: `${lineHeight}%` }}
      ></div>
    </div>
  );
};

export default Animated;