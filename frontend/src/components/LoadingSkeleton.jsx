import { motion } from 'framer-motion';

const LoadingSkeleton = ({
  type = 'card',
  lines = 3,
  className = '',
  animate = true,
}) => {
  const shimmerAnimation = animate
    ? {
        background:
          'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }
    : {};

  const skeletonVariants = {
    card: (
      <div className={`card ${className}`}>
        <div className='space-y-4'>
          {/* Image placeholder */}
          <div
            className='h-48 bg-gray-200 dark:bg-dark-700 rounded-lg'
            style={shimmerAnimation}
          />

          {/* Title placeholder */}
          <div
            className='h-6 bg-gray-200 dark:bg-dark-700 rounded w-3/4'
            style={shimmerAnimation}
          />

          {/* Description placeholders */}
          {Array.from({ length: lines }).map((_, index) => (
            <div
              key={index}
              className={`h-4 bg-gray-200 dark:bg-dark-700 rounded ${
                index === lines - 1 ? 'w-2/3' : 'w-full'
              }`}
              style={shimmerAnimation}
            />
          ))}
        </div>
      </div>
    ),

    text: (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`h-4 bg-gray-200 dark:bg-dark-700 rounded ${
              index === lines - 1 ? 'w-2/3' : 'w-full'
            }`}
            style={shimmerAnimation}
          />
        ))}
      </div>
    ),

    avatar: (
      <div className={`flex items-center space-x-4 ${className}`}>
        <div
          className='w-12 h-12 bg-gray-200 dark:bg-dark-700 rounded-full'
          style={shimmerAnimation}
        />
        <div className='space-y-2 flex-1'>
          <div
            className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-1/2'
            style={shimmerAnimation}
          />
          <div
            className='h-3 bg-gray-200 dark:bg-dark-700 rounded w-3/4'
            style={shimmerAnimation}
          />
        </div>
      </div>
    ),

    list: (
      <div className={`space-y-4 ${className}`}>
        {Array.from({ length: lines }).map((_, index) => (
          <div key={index} className='flex items-center space-x-3'>
            <div
              className='w-4 h-4 bg-gray-200 dark:bg-dark-700 rounded'
              style={shimmerAnimation}
            />
            <div
              className='h-4 bg-gray-200 dark:bg-dark-700 rounded flex-1'
              style={shimmerAnimation}
            />
          </div>
        ))}
      </div>
    ),

    table: (
      <div className={`space-y-3 ${className}`}>
        {/* Header */}
        <div className='flex space-x-4'>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className='h-4 bg-gray-200 dark:bg-dark-700 rounded flex-1'
              style={shimmerAnimation}
            />
          ))}
        </div>

        {/* Rows */}
        {Array.from({ length: lines }).map((_, rowIndex) => (
          <div key={rowIndex} className='flex space-x-4'>
            {Array.from({ length: 4 }).map((_, colIndex) => (
              <div
                key={colIndex}
                className='h-4 bg-gray-200 dark:bg-dark-700 rounded flex-1'
                style={shimmerAnimation}
              />
            ))}
          </div>
        ))}
      </div>
    ),

    grid: (
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className='card space-y-4'>
            <div
              className='h-32 bg-gray-200 dark:bg-dark-700 rounded-lg'
              style={shimmerAnimation}
            />
            <div className='space-y-2'>
              <div
                className='h-5 bg-gray-200 dark:bg-dark-700 rounded w-3/4'
                style={shimmerAnimation}
              />
              <div
                className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-full'
                style={shimmerAnimation}
              />
              <div
                className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-2/3'
                style={shimmerAnimation}
              />
            </div>
          </div>
        ))}
      </div>
    ),
  };

  return (
    <>
      {skeletonVariants[type]}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </>
  );
};

export default LoadingSkeleton;
