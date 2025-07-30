import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Muhammad Iqbal Khan</title>
        <meta
          name='description'
          content="The page you're looking for doesn't exist. Navigate back to Muhammad Iqbal Khan's portfolio to explore React Native development projects and services."
        />
        <meta
          name='keywords'
          content='404, Page Not Found, Muhammad Iqbal Khan, React Native Developer'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='404 - Page Not Found | Muhammad Iqbal Khan'
        />
        <meta
          property='og:description'
          content="The page you're looking for doesn't exist. Navigate back to Muhammad Iqbal Khan's portfolio to explore React Native development projects and services."
        />
        <meta property='og:url' content='https://muhammadiqbalkhan.com/404' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://muhammadiqbalkhan.com/og-image.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='404 - Page Not Found | Muhammad Iqbal Khan'
        />
        <meta
          name='twitter:description'
          content="The page you're looking for doesn't exist. Navigate back to Muhammad Iqbal Khan's portfolio to explore React Native development projects and services."
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com/404' />
      </Helmet>

      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900'>
        <div className='container-max text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='max-w-2xl mx-auto'
          >
            {/* 404 Number */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='text-8xl md:text-9xl font-bold text-primary-600 dark:text-primary-400 mb-8'
            >
              404
            </motion.div>

            {/* Error Message */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'
            >
              Page Not Found
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto'
            >
              Oops! The page you're looking for doesn't exist. It might have
              been moved, deleted, or you entered the wrong URL.
            </motion.p>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='flex flex-col sm:flex-row gap-4 justify-center items-center'
            >
              <Link
                to='/'
                className='btn-primary inline-flex items-center space-x-2'
              >
                <Home className='w-4 h-4' />
                <span>Go Home</span>
              </Link>

              <button
                onClick={() => window.history.back()}
                className='btn-outline inline-flex items-center space-x-2'
              >
                <ArrowLeft className='w-4 h-4' />
                <span>Go Back</span>
              </button>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='mt-12 pt-8 border-t border-gray-200 dark:border-dark-700'
            >
              <p className='text-gray-600 dark:text-gray-400 mb-4'>
                Or explore these pages:
              </p>
              <div className='flex flex-wrap justify-center gap-4'>
                {[
                  { path: '/about', label: 'About' },
                  { path: '/projects', label: 'Projects' },
                  { path: '/skills', label: 'Skills' },
                  { path: '/contact', label: 'Contact' },
                ].map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200'
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
