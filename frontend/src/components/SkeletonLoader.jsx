import { motion } from 'framer-motion';

const SkeletonLoader = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900'>
      {/* Header Skeleton */}
      <div className='section-padding'>
        <div className='container-max'>
          <div className='text-center max-w-4xl mx-auto space-y-6'>
            {/* Title Skeleton */}
            <motion.div
              className='h-12 bg-gray-200 dark:bg-dark-700 rounded-lg mx-auto w-3/4'
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Subtitle Skeleton */}
            <motion.div
              className='h-6 bg-gray-200 dark:bg-dark-700 rounded-lg mx-auto w-1/2'
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2,
              }}
            />
          </div>
        </div>
      </div>

      {/* Content Skeleton */}
      <div className='section-padding'>
        <div className='container-max'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <motion.div
                key={item}
                className='card space-y-4'
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: item * 0.1,
                }}
              >
                {/* Icon Skeleton */}
                <div className='w-16 h-16 bg-gray-200 dark:bg-dark-700 rounded-xl mx-auto' />

                {/* Title Skeleton */}
                <div className='h-6 bg-gray-200 dark:bg-dark-700 rounded-lg w-3/4 mx-auto' />

                {/* Description Skeleton */}
                <div className='space-y-2'>
                  <div className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-full' />
                  <div className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-2/3' />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Loading Indicator */}
      <div className='fixed bottom-8 right-8'>
        <motion.div
          className='bg-white dark:bg-dark-800 rounded-lg shadow-lg p-4 flex items-center space-x-3'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className='w-4 h-4 border-2 border-primary-200 border-t-primary-600 rounded-full'
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          <span className='text-sm text-gray-600 dark:text-gray-300'>
            Loading page...
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
