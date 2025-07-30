import { motion } from 'framer-motion';
import Spinner from './Spinner';

const LoadingButton = ({
  children,
  loading = false,
  loadingText = 'Loading...',
  disabled = false,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary:
      'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary:
      'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline:
      'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    ghost:
      'text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 focus:ring-primary-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white focus:ring-green-500',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || loading}
      whileHover={!loading && !disabled ? { scale: 1.02 } : {}}
      whileTap={!loading && !disabled ? { scale: 0.98 } : {}}
      {...props}
    >
      {loading ? (
        <>
          <Spinner size='sm' color='white' className='mr-2' />
          <span>{loadingText}</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default LoadingButton;
