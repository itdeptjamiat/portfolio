import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useMutation } from '../hooks/useApi';
import { endpoints } from '../utils/axiosInstance';
import LoadingButton from './LoadingButton';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Use mutation hook for form submission
  const { post, loading, error, success, reset } = useMutation();

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Submit form data using the API
      await post(endpoints.contact.send(), formData);

      // Clear form on success
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        reset();
      }, 3000);
    } catch (error) {
      // Error is handled by the useMutation hook
      console.error('Form submission error:', error);
    }
  };

  return (
    <div className='card'>
      <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
        Send a Message
      </h2>

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-6 p-4 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-lg flex items-center space-x-3'
        >
          <CheckCircle className='w-5 h-5' />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </motion.div>
      )}

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-6 p-4 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200 rounded-lg flex items-center space-x-3'
        >
          <AlertCircle className='w-5 h-5' />
          <span>{error.message}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
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
              disabled={loading}
              className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              placeholder='Your name'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
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
              disabled={loading}
              className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed'
              placeholder='your.email@example.com'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='subject'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
          >
            Subject *
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={loading}
            className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white disabled:opacity-50 disabled:cursor-not-allowed'
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label
            htmlFor='message'
            className='block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2'
          >
            Message *
          </label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            rows={6}
            className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white resize-none disabled:opacity-50 disabled:cursor-not-allowed'
            placeholder='Tell me about your project or question...'
          />
        </div>

        <LoadingButton
          type='submit'
          loading={loading}
          loadingText='Sending Message...'
          className='w-full'
          size='lg'
        >
          <Send className='w-4 h-4 mr-2' />
          Send Message
        </LoadingButton>
      </form>
    </div>
  );
}

export default ContactForm;
