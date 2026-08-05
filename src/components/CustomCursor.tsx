import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if target is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('button') !== null ||
          target.closest('a') !== null ||
          target.classList.contains('interactive');

        setIsPointer(isClickable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrame: number;
    const updateTrail = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(updateTrail);
    };
    animationFrame = requestAnimationFrame(updateTrail);
    return () => cancelAnimationFrame(animationFrame);
  }, [position]);

  return (
    <>
      {/* Small Precision Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-purple-400 rounded-full pointer-events-none z-50 transition-transform duration-75 mix-blend-screen"
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isPointer ? 1.8 : 1})`,
          boxShadow: '0 0 10px #A855F7, 0 0 20px #EC4899',
        }}
      />

      {/* Outer Glowing Ring */}
      <div
        className="fixed top-0 left-0 w-10 h-10 border border-purple-500/50 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - 20}px, ${trailingPos.y - 20}px, 0) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'rgba(168, 85, 247, 0.15)' : 'transparent',
          boxShadow: isPointer ? '0 0 25px rgba(168, 85, 247, 0.4)' : 'none',
        }}
      />

      {/* Mouse Spotlight Background Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(124, 58, 237, 0.07), transparent 80%)`,
        }}
      />
    </>
  );
};
