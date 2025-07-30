import React, { useEffect, useRef, useState } from 'react';
import { useCursor } from '../contexts/CursorContext';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const { cursorState, isVisible } = useCursor();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = e => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = e => {
      const target = e.target;
      if (
        target.closest(
          "button, a, [role='button'], .cursor-glow, input, textarea, select"
        )
      ) {
        setIsActive(true);
        document.body.classList.add('custom-cursor-active');
      } else {
        setIsActive(false);
        document.body.classList.remove('custom-cursor-active');
      }
    };

    const handleMouseEnter = () => {
      // Cursor is already visible from context
    };

    const handleMouseLeave = () => {
      setIsActive(false);
      document.body.classList.remove('custom-cursor-active');
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOver);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOver);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isVisible]);

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  // Get cursor styles based on state
  const getCursorStyles = () => {
    switch (cursorState) {
      case 'clickable':
        return 'scale-150 shadow-[0_0_24px_rgba(59,130,246,0.5),0_0_48px_rgba(59,130,246,0.3)]';
      case 'text':
        return 'scale-125 shadow-[0_0_16px_rgba(59,130,246,0.4)]';
      case 'drag':
        return 'scale-175 shadow-[0_0_32px_rgba(239,68,68,0.5)]';
      case 'resize':
        return 'scale-150 shadow-[0_0_24px_rgba(34,197,94,0.5)]';
      default:
        return isActive
          ? 'scale-150 shadow-[0_0_24px_rgba(59,130,246,0.5),0_0_48px_rgba(59,130,246,0.3)]'
          : 'shadow-[0_0_8px_rgba(59,130,246,0.3)]';
    }
  };

  // Get cursor color based on state
  const getCursorColor = () => {
    switch (cursorState) {
      case 'clickable':
        return 'border-primary-500';
      case 'text':
        return 'border-blue-500';
      case 'drag':
        return 'border-red-500';
      case 'resize':
        return 'border-green-500';
      default:
        return 'border-primary-500';
    }
  };

  return (
    <div
      ref={cursorRef}
      className={`pointer-events-none z-[9999] fixed left-0 top-0 w-6 h-6 rounded-full transition-all duration-150 -translate-x-1/2 -translate-y-1/2 border-2 ${getCursorColor()} bg-white/10 backdrop-blur-md ${getCursorStyles()}`}
      style={{
        mixBlendMode: 'lighten',
        pointerEvents: 'none',
        transitionProperty: 'box-shadow, transform, left, top',
      }}
    />
  );
}
