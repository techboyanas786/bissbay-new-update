import React from 'react';

const AICircle = ({
  top,
  left,
  right,
  bottom,
  size = "w-64 h-64",
  delay = "0s"
}) => {
  const style = {
    top,
    left,
    right,
    bottom,
    animationDelay: delay
  };

  return (
    <div 
      className={`ai-circle bg-primary/10 ${size}`}
      style={style}
    />
  );
};

export default AICircle;