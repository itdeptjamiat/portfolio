import { motion } from 'framer-motion';

const Spinner = ({
  size = 'md',
  color = 'primary',
  className = '',
  showText = false,
  text = 'Loading...',
}) => {
  const sizeClasses = {
    xs: 'w-4 h-4',
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const colorClasses = {
    primary:
      'border-primary-200 dark:border-primary-800 border-t-primary-600 dark:border-t-primary-400',
    secondary:
      'border-secondary-200 dark:border-secondary-800 border-t-secondary-600 dark:border-t-secondary-400',
    accent:
      'border-accent-200 dark:border-accent-800 border-t-accent-600 dark:border-t-accent-400',
    gray: 'border-gray-200 dark:border-gray-700 border-t-gray-600 dark:border-t-gray-400',
    white: 'border-white/20 border-t-white',
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <motion.div
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} rounded-full`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      {showText && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-sm text-gray-600 dark:text-gray-400 mt-2'
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

export default Spinner;
