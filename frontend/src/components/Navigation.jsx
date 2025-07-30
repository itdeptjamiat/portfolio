import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Preloader from './Preloader';

function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/skills', label: 'Skills' },
    { path: '/contact', label: 'Contact' },
    { path: '/demo', label: 'Demo' },
  ];

  // Preload functions for each route
  const preloadFunctions = {
    '/about': () => import('../pages/About'),
    '/experience': () => import('../pages/Experience'),
    '/projects': () => import('../pages/Projects'),
    '/skills': () => import('../pages/Skills'),
    '/contact': () => import('../pages/Contact'),
    '/demo': () => import('../pages/AnimationDemo'),
  };

  return (
    <nav className='bg-white dark:bg-dark-900 border-b border-gray-200 dark:border-dark-700 sticky top-0 z-50'>
      <div className='container-max'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link to='/' className='flex items-center space-x-2'>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className='w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center'
            >
              <span className='text-white font-bold text-sm'>R</span>
            </motion.div>
            <span className='text-xl font-bold text-gray-900 dark:text-white'>
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-1'>
            {navItems.map(item => (
              <Preloader
                key={item.path}
                onPreload={preloadFunctions[item.path]}
                preloadTrigger='hover'
                preloadDelay={200}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    location.pathname === item.path
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:text-primary hover:bg-accent/10'
                  }`}
                >
                  {item.label}
                </Link>
              </Preloader>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className='p-2 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-all duration-300 focus-ring'
              aria-label='Toggle theme'
            >
              {isDark ? (
                <Sun className='w-5 h-5' />
              ) : (
                <Moon className='w-5 h-5' />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='md:hidden p-2 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-all duration-300 focus-ring'
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? (
                <X className='w-5 h-5' />
              ) : (
                <Menu className='w-5 h-5' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 border-t border-border bg-background/95 backdrop-blur-md'>
              {navItems.map(item => (
                <Preloader
                  key={item.path}
                  onPreload={preloadFunctions[item.path]}
                  preloadTrigger='hover'
                  preloadDelay={200}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 relative ${
                      location.pathname === item.path
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-foreground hover:text-primary hover:bg-accent/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                </Preloader>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
