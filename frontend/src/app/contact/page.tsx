'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Toast from '@/components/Toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    isVisible: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    isVisible: false,
    message: '',
    type: 'success',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({
      isVisible: true,
      message,
      type,
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use proxy URL for development
      const apiUrl =
        process.env.NODE_ENV === 'production'
          ? 'http://localhost:5000/api/contact'
          : '/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showToast(data.message || 'Message sent successfully!', 'success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast(
          data.message || 'Failed to send message. Please try again.',
          'error'
        );
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      showToast(
        'Network error. Please check your connection and try again.',
        'error'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='contact' className='min-h-screen py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-12'>
          {/* Header */}
          <div className='text-center space-y-4'>
            <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
              Get In Touch
            </h1>
            <p className='text-xl text-muted-foreground'>
              Let&apos;s discuss your React Native project and bring your mobile
              app ideas to life
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Contact Form */}
            <div className='space-y-6'>
              <h2 className='text-2xl font-semibold text-foreground'>
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Name *
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                      placeholder='Your name'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-foreground mb-2'
                    >
                      Email *
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                      placeholder='your.email@example.com'
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-foreground mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all duration-300'
                    placeholder='Tell me about your mobile app project...'
                  />
                </div>

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='btn-primary w-full px-6 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {isSubmitting ? (
                    <span className='inline-flex items-center'>
                      <span className='animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2'></span>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className='space-y-8'>
              <h2 className='text-2xl font-semibold text-foreground'>
                Let&apos;s Connect
              </h2>

              <div className='space-y-6'>
                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Email
                    </h3>
                    <p className='text-muted-foreground'>
                      devmuhammadiqbal@gmail.com
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      I&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h2.28a2 2 0 011.7 1.06l.94 1.88a2 2 0 01-.45 2.45l-1.27 1.02a11.042 11.042 0 005.516 5.516l1.02-1.27a2 2 0 012.45-.45l1.88.94A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C7.163 23 1 16.837 1 9V8a2 2 0 012-2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Phone
                    </h3>
                    <p className='text-muted-foreground'>0332 8001541</p>
                    <p className='text-sm text-muted-foreground'>
                      WhatsApp & Calls
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Location
                    </h3>
                    <p className='text-muted-foreground'>Remote / Worldwide</p>
                    <p className='text-sm text-muted-foreground'>
                      Available for remote work
                    </p>
                  </div>
                </div>

                <div className='flex items-start space-x-4'>
                  <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0'>
                    <svg
                      className='w-6 h-6 text-primary-foreground'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-foreground'>
                      Availability
                    </h3>
                    <p className='text-muted-foreground'>
                      Open to new opportunities
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Full-time, part-time, or contract work
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className='space-y-4'>
                <h3 className='text-lg font-semibold text-foreground'>
                  Follow Me
                </h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://github.com/miqbaldev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-accent/20'
                    aria-label='GitHub'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
                    </svg>
                  </a>
                  <a
                    href='https://linkedin.com/in/miqbaldev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-accent/20'
                    aria-label='LinkedIn'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                  <a
                    href='https://twitter.com/miqbaldev'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-accent/20'
                    aria-label='Twitter'
                  >
                    <svg
                      className='w-5 h-5'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  );
}
