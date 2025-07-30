import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import SuspenseLoader from './SuspenseLoader';

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20'>
      <div className='text-center max-w-md mx-auto p-6'>
        <div className='text-6xl mb-4'>⚠️</div>
        <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Something went wrong
        </h2>
        <p className='text-gray-600 dark:text-gray-300 mb-6'>
          We encountered an error while loading this page. Please try again.
        </p>
        <div className='space-y-3'>
          <button onClick={resetErrorBoundary} className='btn-primary w-full'>
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className='btn-outline w-full'
          >
            Go Home
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && (
          <details className='mt-4 text-left'>
            <summary className='cursor-pointer text-sm text-gray-500 dark:text-gray-400'>
              Error Details
            </summary>
            <pre className='mt-2 text-xs text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-2 rounded overflow-auto'>
              {error.message}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
};

const LazyWrapper = ({ children, pageName = 'Page' }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<SuspenseLoader pageName={pageName} />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default LazyWrapper;
