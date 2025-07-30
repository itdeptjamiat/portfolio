import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import AnimatedContainer from '../components/AnimatedContainer';
import AnimatedItem from '../components/AnimatedItem';

function AnimationDemo() {
  const animationTypes = [
    {
      name: 'Fade Up',
      description: 'Elements fade in while moving up from below',
    },
    {
      name: 'Slide Left',
      description: 'Elements slide in from the right side',
    },
    {
      name: 'Slide Right',
      description: 'Elements slide in from the left side',
    },
    { name: 'Scale', description: 'Elements scale up from 0 to full size' },
    { name: 'Rotate', description: 'Elements rotate while appearing' },
    { name: 'Fade In', description: 'Simple fade in animation' },
  ];

  const demoItems = [
    {
      id: 1,
      title: 'Interactive Card 1',
      content: 'This card demonstrates smooth animations on scroll.',
    },
    {
      id: 2,
      title: 'Interactive Card 2',
      content: 'Each card has different animation timing and effects.',
    },
    {
      id: 3,
      title: 'Interactive Card 3',
      content: 'Animations are optimized for performance and accessibility.',
    },
    {
      id: 4,
      title: 'Interactive Card 4',
      content: 'Built with Framer Motion and React Intersection Observer.',
    },
    {
      id: 5,
      title: 'Interactive Card 5',
      content: 'Responsive animations that work on all devices.',
    },
    {
      id: 6,
      title: 'Interactive Card 6',
      content: 'Customizable animation variants and transitions.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Animation Demo - Muhammad Iqbal Khan | React Native Developer
        </title>
        <meta
          name='description'
          content='Explore interactive animations and scroll-triggered effects built with Framer Motion and React Intersection Observer. See various animation types in action.'
        />
        <meta
          name='keywords'
          content='Animation Demo, Framer Motion, React Animations, Scroll Effects, Interactive UI, Muhammad Iqbal Khan'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Animation Demo - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          property='og:description'
          content='Explore interactive animations and scroll-triggered effects built with Framer Motion and React Intersection Observer. See various animation types in action.'
        />
        <meta property='og:url' content='https://muhammadiqbalkhan.com/demo' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://muhammadiqbalkhan.com/og-image.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Animation Demo - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          name='twitter:description'
          content='Explore interactive animations and scroll-triggered effects built with Framer Motion and React Intersection Observer. See various animation types in action.'
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com/demo' />
      </Helmet>

      <div className='min-h-screen'>
        {/* Hero Section */}
        <AnimatedContainer
          animationType='fadeUp'
          className='section-padding bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-dark-800 dark:to-dark-900'
        >
          <div className='container-max'>
            <AnimatedItem
              animationType='fadeUp'
              className='text-center max-w-4xl mx-auto'
            >
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
                Animation <span className='text-gradient'>Demo</span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                Scroll down to see different animation types in action. Built
                with Framer Motion and React Intersection Observer for smooth,
                performant animations.
              </p>
            </AnimatedItem>
          </div>
        </AnimatedContainer>

        {/* Animation Types Overview */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Animation Types
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Different animation variants available in this portfolio.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='scale'
              staggerChildren={0.1}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            >
              {animationTypes.map((type, index) => (
                <AnimatedItem
                  key={type.name}
                  animationType='scale'
                  className='card text-center'
                >
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    {type.name}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 text-sm'>
                    {type.description}
                  </p>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Fade Up Demo */}
        <section className='section-padding bg-gray-50 dark:bg-dark-800'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Fade Up Animation
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Elements fade in while moving up from below.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.2}
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
              {demoItems.slice(0, 4).map(item => (
                <AnimatedItem
                  key={item.id}
                  animationType='fadeUp'
                  className='card'
                >
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {item.content}
                  </p>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Slide Animations Demo */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Slide Animations
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Elements slide in from different directions.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <div className='space-y-8'>
              {/* Slide Left */}
              <AnimatedContainer animationType='slideLeft' className='mb-8'>
                <AnimatedItem animationType='slideLeft' className='card'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                    Slide Left Animation
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    This element slides in from the right side of the screen.
                  </p>
                </AnimatedItem>
              </AnimatedContainer>

              {/* Slide Right */}
              <AnimatedContainer animationType='slideRight' className='mb-8'>
                <AnimatedItem animationType='slideRight' className='card'>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                    Slide Right Animation
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    This element slides in from the left side of the screen.
                  </p>
                </AnimatedItem>
              </AnimatedContainer>
            </div>
          </div>
        </section>

        {/* Scale and Rotate Demo */}
        <section className='section-padding bg-gray-50 dark:bg-dark-800'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Scale & Rotate
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Transform animations for dynamic effects.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='scale'
              staggerChildren={0.3}
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
              <AnimatedItem animationType='scale' className='card text-center'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                  Scale Animation
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  This element scales up from 0 to full size with a smooth
                  transition.
                </p>
              </AnimatedItem>

              <AnimatedItem animationType='rotate' className='card text-center'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
                  Rotate Animation
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  This element rotates while appearing for a dynamic effect.
                </p>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </section>

        {/* Performance Stats */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer animationType='fadeUp' className='text-center'>
              <AnimatedItem
                animationType='fadeUp'
                className='max-w-2xl mx-auto'
              >
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                  Performance Features
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2'>
                      60fps
                    </div>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Smooth animations
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2'>
                      Optimized
                    </div>
                    <p className='text-gray-600 dark:text-gray-300'>
                      Performance focused
                    </p>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2'>
                      Responsive
                    </div>
                    <p className='text-gray-600 dark:text-gray-300'>
                      All devices
                    </p>
                  </div>
                </div>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </section>
      </div>
    </>
  );
}

export default AnimationDemo;
