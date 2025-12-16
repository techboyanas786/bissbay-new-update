// DottedBackground.js
import React from 'react';

const DottedBackground = ({ 
  children, 
  className = '', 
  style = {},
  backgroundColor = '#0a0a0f',
  dotColor = '#2a2a3e',
  dotSize = 1,
  dotSpacing = 20,
  opacity = 0.3,
  secondaryDotColor = '#3a3a4e',
  secondaryDotSize = 1,
  secondaryDotSpacing = 40,
  secondaryOpacity = 0.2,
  animate = true
}) => {
  // Generate unique ID for animations
  const uniqueId = React.useMemo(() => 
    `dotted-bg-${Math.random().toString(36).substr(2, 9)}`, 
  []);

  // Create dynamic styles
  const containerStyle = {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    backgroundColor: backgroundColor,
    overflow: 'hidden',
    ...style
  };

  const patternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
    backgroundPosition: `0 0, ${dotSpacing/2}px ${dotSpacing/2}px`,
    opacity: opacity,
    pointerEvents: 'none',
    animation: animate ? `${uniqueId}-shift 20s ease-in-out infinite` : 'none'
  };

  const secondaryPatternStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `radial-gradient(circle, ${secondaryDotColor} ${secondaryDotSize}px, transparent ${secondaryDotSize}px)`,
    backgroundSize: `${secondaryDotSpacing}px ${secondaryDotSpacing}px`,
    backgroundPosition: `${secondaryDotSpacing/2}px ${secondaryDotSpacing/2}px`,
    opacity: secondaryOpacity,
    pointerEvents: 'none'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    height: '100%'
  };

  // Inject keyframes for animation
  React.useEffect(() => {
    if (!animate) return;

    const styleElement = document.createElement('style');
    styleElement.textContent = `
      @keyframes ${uniqueId}-shift {
        0%, 100% {
          transform: translate(0, 0);
        }
        50% {
          transform: translate(2px, 2px);
        }
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [uniqueId, animate]);

  return (
    <div className={className} style={containerStyle}>
      <div style={patternStyle}></div>
      <div style={secondaryPatternStyle}></div>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default DottedBackground;