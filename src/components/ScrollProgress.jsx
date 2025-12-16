// ScrollProgress.tsx
'use client';
import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const totalScroll = window.scrollY;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const scroll = `${(totalScroll / windowHeight) * 100}`;
    setScrollProgress(Number(scroll));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: `${scrollProgress}%`,
        height: '4px',
        backgroundColor: "#FF5722",
        zIndex: 9999,
        transition: 'width 0.25s ease-out',
      }}
    />
  );
};

export default ScrollProgress;
