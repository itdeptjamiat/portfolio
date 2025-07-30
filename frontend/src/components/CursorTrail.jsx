import React, { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const trailRef = useRef(null);

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isTouchDevice = !window.matchMedia('(hover: hover)').matches;

    if (isTouchDevice) {
      return;
    }

    const trail = trailRef.current;
    if (!trail) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const moveTrail = () => {
      // Smooth trail following
      trailX += (mouseX - trailX) * 0.1;
      trailY += (mouseY - trailY) * 0.1;

      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;

      requestAnimationFrame(moveTrail);
    };

    const handleMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);
    moveTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={trailRef}
      className='pointer-events-none z-[9998] fixed left-0 top-0 w-3 h-3 rounded-full bg-primary-400/30 blur-sm transition-all duration-300 -translate-x-1/2 -translate-y-1/2'
      style={{
        pointerEvents: 'none',
      }}
    />
  );
}
