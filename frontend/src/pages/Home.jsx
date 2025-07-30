import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import AnimatedContainer from '../components/AnimatedContainer';
import AnimatedItem from '../components/AnimatedItem';

function Home() {
  const features = [
    {
      icon: Code,
      title: 'React Development',
      description:
        'Building modern web applications with React 18 and latest features.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description:
        'Creating beautiful and intuitive user interfaces with Tailwind CSS.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description:
        'Optimized applications with smooth animations and fast loading.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Muhammad Iqbal Khan | React Native Developer</title>
        <meta
          name='description'
          content='Professional React Native developer specializing in cross-platform mobile app development with Firebase, modern tools, and exceptional user experiences.'
        />
        <meta
          name='keywords'
          content='React Native, Mobile Development, Firebase, Cross-platform, JavaScript, TypeScript, Mobile Apps, iOS, Android'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          property='og:description'
          content='Professional React Native developer specializing in cross-platform mobile app development with Firebase, modern tools, and exceptional user experiences.'
        />
        <meta property='og:url' content='https://muhammadiqbalkhan.com' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://muhammadiqbalkhan.com/og-image.jpg'
        />
        <meta property='og:site_name' content='Muhammad Iqbal Khan Portfolio' />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          name='twitter:description'
          content='Professional React Native developer specializing in cross-platform mobile app development with Firebase, modern tools, and exceptional user experiences.'
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />
        <meta name='twitter:creator' content='@muhammadiqbalkhan' />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com' />
      </Helmet>

      <div className='min-h-screen'>
        {/* Hero Section */}
        <Hero />

        {/* Features Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  What I Do
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                  Specializing in modern web development with a focus on user
                  experience and performance.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='scale'
              staggerChildren={0.2}
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
            >
              {features.map((feature, index) => (
                <AnimatedItem
                  key={feature.title}
                  animationType='scale'
                  className='card text-center group hover:shadow-xl transition-all duration-300'
                >
                  <div className='w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300'>
                    <feature.icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-4'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {feature.description}
                  </p>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedContainer
          animationType='fadeUp'
          className='section-padding bg-gradient-primary'
        >
          <div className='container-max text-center'>
            <AnimatedItem animationType='fadeUp' className='max-w-2xl mx-auto'>
              <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                Ready to Start a Project?
              </h2>
              <p className='text-xl text-white/90 mb-8'>
                Let's work together to bring your ideas to life with modern web
                technologies.
              </p>
              <Link
                to='/contact'
                className='bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg inline-flex items-center transition-colors duration-200'
              >
                Get Started
                <ArrowRight className='ml-2 w-4 h-4' />
              </Link>
            </AnimatedItem>
          </div>
        </AnimatedContainer>
      </div>
    </>
  );
}

export default Home;
