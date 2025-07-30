'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "button, a, [role='button'], .cursor-glow, input, textarea, select"
        )
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOver);
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none z-[9999] fixed left-0 top-0 w-6 h-6 rounded-full transition-transform duration-150 -translate-x-1/2 -translate-y-1/2 border-2 border-neonBlue bg-glass backdrop-blur-md ${
        isActive
          ? 'shadow-[0_0_24px_#8A2BE2,0_0_48px_#50B0FF] scale-150'
          : 'shadow-[0_0_8px_#50B0FF]'
      }`}
      style={{
        mixBlendMode: 'lighten',
        pointerEvents: 'none',
        transitionProperty: 'box-shadow, transform, left, top',
      }}
    />
  );
}
