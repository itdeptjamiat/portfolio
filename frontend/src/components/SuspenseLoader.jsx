import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SuspenseLoader = ({
  pageName = 'Page',
  showProgress = true,
  className = '',
}) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing');
  const [dots, setDots] = useState('');

  // Simulate loading progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    const textInterval = setInterval(() => {
      setLoadingText(prev => {
        const texts = [
          'Initializing',
          'Loading components',
          'Preparing content',
          'Optimizing performance',
          'Almost ready',
        ];
        const currentIndex = texts.indexOf(prev);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 1000);

    const dotsInterval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? '' : prev + '.'));
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900 ${className}`}
    >
      <div className='text-center max-w-md mx-auto px-6'>
        {/* Main Spinner */}
        <motion.div
          className='w-20 h-20 border-4 border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400 rounded-full mx-auto mb-8 relative'
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Inner ring */}
          <motion.div
            className='absolute inset-2 border-2 border-primary-300 dark:border-primary-700 border-t-primary-500 dark:border-t-primary-300 rounded-full'
            animate={{ rotate: -360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='space-y-3'
        >
          <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
            Loading {pageName}
          </h2>
          <p className='text-gray-600 dark:text-gray-400'>
            {loadingText}
            {dots}
          </p>
        </motion.div>

        {/* Progress Bar */}
        {showProgress && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='mt-8'
          >
            <div className='w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 overflow-hidden'>
              <motion.div
                className='bg-gradient-to-r from-primary-600 to-secondary-600 h-3 rounded-full'
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className='flex justify-between items-center mt-2'>
              <span className='text-xs text-gray-500 dark:text-gray-400'>
                {Math.round(progress)}% complete
              </span>
              <span className='text-xs text-primary-600 dark:text-primary-400 font-medium'>
                Optimizing...
              </span>
            </div>
          </motion.div>
        )}

        {/* Loading Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='mt-8 grid grid-cols-3 gap-4 text-xs'
        >
          <div className='text-center'>
            <motion.div
              className='w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-2'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className='text-green-600 dark:text-green-400'>✓</span>
            </motion.div>
            <div className='font-medium text-gray-700 dark:text-gray-300'>
              Performance
            </div>
            <div className='text-green-600 dark:text-green-400'>Optimized</div>
          </div>

          <div className='text-center'>
            <motion.div
              className='w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-2'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <span className='text-blue-600 dark:text-blue-400'>⚡</span>
            </motion.div>
            <div className='font-medium text-gray-700 dark:text-gray-300'>
              Speed
            </div>
            <div className='text-blue-600 dark:text-blue-400'>Fast</div>
          </div>

          <div className='text-center'>
            <motion.div
              className='w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-2'
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              <span className='text-purple-600 dark:text-purple-400'>🔒</span>
            </motion.div>
            <div className='font-medium text-gray-700 dark:text-gray-300'>
              Security
            </div>
            <div className='text-purple-600 dark:text-purple-400'>
              Protected
            </div>
          </div>
        </motion.div>

        {/* Loading Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className='mt-8 p-4 bg-white/50 dark:bg-dark-800/50 rounded-lg border border-gray-200 dark:border-dark-700'
        >
          <p className='text-xs text-gray-600 dark:text-gray-400'>
            💡 <strong>Tip:</strong> This page is being loaded with code
            splitting for optimal performance.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SuspenseLoader;
