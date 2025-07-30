import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({
  children,
  onPreload,
  preloadTrigger = 'hover',
  preloadDelay = 300,
  className = '',
}) => {
  const [isPreloading, setIsPreloading] = useState(false);
  const [hasPreloaded, setHasPreloaded] = useState(false);

  const handlePreload = async () => {
    if (hasPreloaded || isPreloading) return;

    setIsPreloading(true);
    try {
      await onPreload();
      setHasPreloaded(true);
    } catch (error) {
      console.error('Preload error:', error);
    } finally {
      setIsPreloading(false);
    }
  };

  useEffect(() => {
    if (preloadTrigger === 'mount') {
      const timer = setTimeout(handlePreload, preloadDelay);
      return () => clearTimeout(timer);
    }
  }, [preloadTrigger, preloadDelay]);

  const handleMouseEnter = () => {
    if (preloadTrigger === 'hover') {
      const timer = setTimeout(handlePreload, preloadDelay);
      return () => clearTimeout(timer);
    }
  };

  const handleFocus = () => {
    if (preloadTrigger === 'focus') {
      const timer = setTimeout(handlePreload, preloadDelay);
      return () => clearTimeout(timer);
    }
  };

  return (
    <motion.div
      className={className}
      onMouseEnter={handleMouseEnter}
      onFocus={handleFocus}
      whileHover={preloadTrigger === 'hover' ? { scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}

      {/* Preload Indicator */}
      {isPreloading && (
        <motion.div
          className='absolute top-2 right-2 w-2 h-2 bg-primary-600 rounded-full'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </motion.div>
  );
};

export default Preloader;
