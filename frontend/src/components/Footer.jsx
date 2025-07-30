import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <footer className='bg-gray-50 dark:bg-dark-800 border-t border-gray-200 dark:border-dark-700'>
      <div className='container-max section-padding'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <Link to='/' className='flex items-center space-x-2'>
              <div className='w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>R</span>
              </div>
              <span className='text-xl font-bold text-gray-900 dark:text-white'>
                Portfolio
              </span>
            </Link>
            <p className='text-gray-600 dark:text-gray-400 max-w-md'>
              A modern React portfolio showcasing projects and skills built with
              React Router, Tailwind CSS, and Framer Motion.
            </p>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  to='/'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
              Connect
            </h3>
            <div className='flex space-x-4'>
              {socialLinks.map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200'
                  aria-label={social.label}
                >
                  <social.icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 text-center'>
          <p className='text-gray-600 dark:text-gray-400'>
            © {currentYear} React Portfolio. Built with React, Tailwind CSS,
            and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
