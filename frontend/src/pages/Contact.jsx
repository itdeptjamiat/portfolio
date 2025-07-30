import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'muhammadiqbalkhan@example.com',
      link: 'mailto:muhammadiqbalkhan@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'New York, NY',
      link: null,
    },
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/muhammadiqbalkhan', icon: '🐙' },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/muhammadiqbalkhan',
      icon: '💼',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/muhammadiqbalkhan',
      icon: '🐦',
    },
    { name: 'Portfolio', url: 'https://muhammadiqbalkhan.com', icon: '🌐' },
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Muhammad Iqbal Khan | React Native Developer</title>
        <meta
          name='description'
          content='Get in touch with Muhammad Iqbal Khan for React Native development projects, mobile app creation, or collaboration opportunities. Available for freelance and full-time positions.'
        />
        <meta
          name='keywords'
          content='Contact, React Native Developer, Mobile Development, Hire Developer, Freelance, Muhammad Iqbal Khan'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Contact - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          property='og:description'
          content='Get in touch with Muhammad Iqbal Khan for React Native development projects, mobile app creation, or collaboration opportunities. Available for freelance and full-time positions.'
        />
        <meta
          property='og:url'
          content='https://muhammadiqbalkhan.com/contact'
        />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://muhammadiqbalkhan.com/og-image.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Contact - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          name='twitter:description'
          content='Get in touch with Muhammad Iqbal Khan for React Native development projects, mobile app creation, or collaboration opportunities. Available for freelance and full-time positions.'
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com/contact' />
      </Helmet>

      <div className='min-h-screen'>
        {/* Hero Section */}
        <section className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900'>
          <div className='container-max'>
            <div className='text-center max-w-4xl mx-auto'>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
                Get in <span className='text-gradient'>Touch</span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                Ready to start a project or have a question? I'd love to hear
                from you. Let's discuss how we can work together to bring your
                ideas to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
              {/* Contact Form */}
              <div className='card'>
                <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                  Send a Message
                </h2>

                {submitStatus && (
                  <div
                    className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus === 'success'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                        : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle className='w-5 h-5' />
                    ) : (
                      <AlertCircle className='w-5 h-5' />
                    )}
                    <span>
                      {submitStatus === 'success'
                        ? "Message sent successfully! I'll get back to you soon."
                        : 'Failed to send message. Please try again.'}
                    </span>
                  </div>
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
                        className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white'
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
                        className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white'
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
                      className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white'
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
                      rows={6}
                      className='w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-800 text-gray-900 dark:text-white resize-none'
                      placeholder='Tell me about your project or question...'
                    />
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2'
                  >
                    {isSubmitting ? (
                      <>
                        <div className='w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin' />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className='w-4 h-4' />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className='space-y-8'>
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-6'>
                    Contact Information
                  </h2>
                  <div className='space-y-4'>
                    {contactInfo.map(info => (
                      <div
                        key={info.title}
                        className='flex items-center space-x-4'
                      >
                        <div className='w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center'>
                          <info.icon className='w-6 h-6 text-primary-600 dark:text-primary-400' />
                        </div>
                        <div>
                          <h3 className='font-semibold text-gray-900 dark:text-white'>
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a
                              href={info.link}
                              className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200'
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className='text-gray-600 dark:text-gray-300'>
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                    Connect with Me
                  </h3>
                  <div className='grid grid-cols-2 gap-4'>
                    {socialLinks.map(social => (
                      <a
                        key={social.name}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex items-center space-x-3 p-4 bg-gray-50 dark:bg-dark-800 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors duration-200'
                      >
                        <span className='text-2xl'>{social.icon}</span>
                        <span className='font-medium text-gray-900 dark:text-white'>
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className='card'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                    Availability
                  </h3>
                  <div className='space-y-3'>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-600 dark:text-gray-300'>
                        Freelance Projects
                      </span>
                      <span className='text-green-600 dark:text-green-400 font-medium'>
                        Available
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-600 dark:text-gray-300'>
                        Full-time Positions
                      </span>
                      <span className='text-green-600 dark:text-green-400 font-medium'>
                        Open
                      </span>
                    </div>
                    <div className='flex items-center justify-between'>
                      <span className='text-gray-600 dark:text-gray-300'>
                        Response Time
                      </span>
                      <span className='text-gray-900 dark:text-white font-medium'>
                        Within 24h
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
