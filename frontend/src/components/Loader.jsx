import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loader = ({
  type = 'spinner',
  size = 'lg',
  text = 'Loading...',
  subtitle = 'Please wait while we prepare your content',
  showProgress = false,
  progress = 0,
  className = '',
}) => {
  const [dots, setDots] = useState('');

  // Animated dots effect
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Size classes
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  };

  // Spinner variants
  const spinnerVariants = {
    spinner: (
      <motion.div
        className={`${sizeClasses[size]} border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full mx-auto mb-6`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    ),
    pulse: (
      <motion.div
        className={`${sizeClasses[size]} bg-primary-600 dark:bg-primary-400 rounded-full mx-auto mb-6`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ),
    dots: (
      <div className='flex justify-center space-x-2 mb-6'>
        {[0, 1, 2].map(index => (
          <motion.div
            key={index}
            className='w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full'
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>
    ),
    bars: (
      <div className='flex justify-center space-x-1 mb-6'>
        {[0, 1, 2, 3, 4].map(index => (
          <motion.div
            key={index}
            className='w-1 h-8 bg-primary-600 dark:bg-primary-400 rounded-full'
            animate={{
              scaleY: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}
      </div>
    ),
    ring: (
      <motion.div
        className={`${sizeClasses[size]} border-4 border-primary-600 dark:border-primary-400 rounded-full mx-auto mb-6 relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <motion.div
          className='absolute inset-0 border-4 border-transparent border-t-primary-400 dark:border-t-primary-300 rounded-full'
          animate={{ rotate: -360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    ),
    cube: (
      <motion.div
        className={`${sizeClasses[size]} mx-auto mb-6 relative`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className='w-full h-full bg-primary-600 dark:bg-primary-400 rounded-lg transform rotate-45' />
      </motion.div>
    ),
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900 ${className}`}
    >
      <div className='text-center max-w-md mx-auto px-6'>
        {/* Spinner */}
        {spinnerVariants[type]}

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='space-y-2'
        >
          <h2 className='text-xl font-semibold text-gray-900 dark:text-white'>
            {text}
            {dots}
          </h2>
          {subtitle && (
            <p className='text-gray-600 dark:text-gray-400 text-sm'>
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-6'
          >
            <div className='w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2'>
              <motion.div
                className='bg-primary-600 dark:bg-primary-400 h-2 rounded-full'
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className='text-xs text-gray-500 dark:text-gray-400 mt-2'>
              {progress}% complete
            </p>
          </motion.div>
        )}

        {/* Loading Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className='mt-8 text-xs text-gray-500 dark:text-gray-400'
        >
          <div className='flex justify-center space-x-4'>
            <div>
              <div className='font-medium'>Performance</div>
              <div className='text-primary-600 dark:text-primary-400'>
                Optimized
              </div>
            </div>
            <div>
              <div className='font-medium'>Security</div>
              <div className='text-green-600 dark:text-green-400'>
                Protected
              </div>
            </div>
            <div>
              <div className='font-medium'>Loading</div>
              <div className='text-blue-600 dark:text-blue-400'>Fast</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;
