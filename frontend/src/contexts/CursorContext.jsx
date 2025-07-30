import React, { createContext, useContext, useState, useEffect } from 'react';

const CursorContext = createContext();

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

export const CursorProvider = ({ children }) => {
  const [cursorState, setCursorState] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const isTouchDevice = !window.matchMedia('(hover: hover)').matches;

    if (!isTouchDevice) {
      setIsVisible(true);
    }
  }, []);

  const setCursor = state => {
    setCursorState(state);
  };

  const resetCursor = () => {
    setCursorState('default');
  };

  const value = {
    cursorState,
    isVisible,
    setCursor,
    resetCursor,
  };

  return (
    <CursorContext.Provider value={value}>{children}</CursorContext.Provider>
  );
};

export default CursorContext;
