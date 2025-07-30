'use client';

import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
}: ToastProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor =
    type === 'success'
      ? 'bg-green-500 dark:bg-green-600'
      : 'bg-red-500 dark:bg-red-600';

  const borderColor =
    type === 'success'
      ? 'border-green-200 dark:border-green-800'
      : 'border-red-200 dark:border-red-800';

  return (
    <div
      className={`fixed top-20 right-4 z-50 max-w-sm w-full ${isAnimating ? 'animate-slide-in' : 'animate-slide-out'}`}
    >
      <div
        className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg border ${borderColor} transition-all duration-300`}
      >
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            {type === 'success' ? (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            ) : (
              <svg
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            )}
            <span className='font-medium'>{message}</span>
          </div>
          <button
            onClick={onClose}
            className='ml-4 text-white hover:text-gray-200 transition-colors'
          >
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
