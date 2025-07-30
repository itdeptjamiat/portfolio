import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Code, Palette, Database, Globe, Smartphone, Zap } from 'lucide-react';
import AnimatedContainer from '../components/AnimatedContainer';
import AnimatedItem from '../components/AnimatedItem';

function About() {
  const skills = [
    { name: 'React', level: 90, icon: Code, color: 'primary' },
    { name: 'JavaScript', level: 85, icon: Code, color: 'secondary' },
    { name: 'TypeScript', level: 80, icon: Code, color: 'accent' },
    { name: 'Tailwind CSS', level: 85, icon: Palette, color: 'primary' },
    { name: 'Node.js', level: 75, icon: Database, color: 'secondary' },
    { name: 'Next.js', level: 80, icon: Globe, color: 'accent' },
    { name: 'React Native', level: 70, icon: Smartphone, color: 'primary' },
    { name: 'Performance', level: 85, icon: Zap, color: 'secondary' },
  ];

  const experiences = [
    {
      year: '2023 - Present',
      title: 'Senior React Developer',
      company: 'Tech Company',
      description:
        'Leading development of modern web applications with React 18 and TypeScript.',
    },
    {
      year: '2021 - 2023',
      title: 'Frontend Developer',
      company: 'Startup',
      description:
        'Built responsive user interfaces and implemented complex state management.',
    },
    {
      year: '2020 - 2021',
      title: 'Junior Developer',
      company: 'Agency',
      description:
        'Started journey with React and modern web development practices.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About - Muhammad Iqbal Khan | React Native Developer</title>
        <meta
          name='description'
          content="Learn about Muhammad Iqbal Khan's background, skills, and experience in React Native development, mobile app creation, and modern web technologies."
        />
        <meta
          name='keywords'
          content='About, React Native Developer, Mobile Development, Skills, Experience, Portfolio, Muhammad Iqbal Khan'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='About - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          property='og:description'
          content="Learn about Muhammad Iqbal Khan's background, skills, and experience in React Native development, mobile app creation, and modern web technologies."
        />
        <meta property='og:url' content='https://muhammadiqbalkhan.com/about' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://muhammadiqbalkhan.com/og-image.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='About - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          name='twitter:description'
          content="Learn about Muhammad Iqbal Khan's background, skills, and experience in React Native development, mobile app creation, and modern web technologies."
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com/about' />
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
                About <span className='text-gradient'>Me</span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                A passionate React developer with a love for creating beautiful,
                functional, and user-friendly web applications. I believe in
                writing clean, maintainable code and staying up-to-date with the
                latest technologies.
              </p>
            </AnimatedItem>
          </div>
        </AnimatedContainer>

        {/* Skills Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Skills & Expertise
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Technologies and tools I work with on a daily basis.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.1}
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
              {skills.map((skill, index) => (
                <AnimatedItem
                  key={skill.name}
                  animationType='slideLeft'
                  className='card'
                >
                  <div className='flex items-center space-x-4 mb-4'>
                    <div
                      className={`w-12 h-12 bg-${skill.color}-100 dark:bg-${skill.color}-900/20 rounded-lg flex items-center justify-center`}
                    >
                      <skill.icon
                        className={`w-6 h-6 text-${skill.color}-600 dark:text-${skill.color}-400`}
                      />
                    </div>
                    <div>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                  <div className='w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2'>
                    <motion.div
                      className={`bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-600 h-2 rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className='text-right mt-2'>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      {skill.level}%
                    </span>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Experience Section */}
        <section className='section-padding bg-gray-50 dark:bg-dark-800'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Experience
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  My professional journey in web development.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.2}
              className='space-y-8'
            >
              {experiences.map((experience, index) => (
                <AnimatedItem
                  key={experience.title}
                  animationType='slideRight'
                  className='card'
                >
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                    <div className='flex-1'>
                      <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                        {experience.title}
                      </h3>
                      <p className='text-lg text-primary-600 dark:text-primary-400 mb-2'>
                        {experience.company}
                      </p>
                      <p className='text-gray-600 dark:text-gray-300'>
                        {experience.description}
                      </p>
                    </div>
                    <div className='mt-4 md:mt-0 md:ml-8'>
                      <span className='inline-block bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 px-3 py-1 rounded-full text-sm font-medium'>
                        {experience.year}
                      </span>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Values Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  My Values
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Principles that guide my work and development approach.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='scale'
              staggerChildren={0.2}
              className='grid grid-cols-1 md:grid-cols-3 gap-8'
            >
              {[
                {
                  title: 'Quality',
                  description:
                    'Writing clean, maintainable code that stands the test of time.',
                  icon: '✨',
                },
                {
                  title: 'Innovation',
                  description:
                    'Embracing new technologies and creative solutions.',
                  icon: '🚀',
                },
                {
                  title: 'Collaboration',
                  description:
                    'Working together to achieve exceptional results.',
                  icon: '🤝',
                },
              ].map((value, index) => (
                <AnimatedItem
                  key={value.title}
                  animationType='scale'
                  className='text-center'
                >
                  <div className='text-4xl mb-4'>{value.icon}</div>
                  <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                    {value.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {value.description}
                  </p>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
