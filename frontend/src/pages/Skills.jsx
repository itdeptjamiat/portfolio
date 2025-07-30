import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Zap,
  Users,
  Lightbulb,
  Target,
} from 'lucide-react';
import AnimatedContainer from '../components/AnimatedContainer';
import AnimatedItem from '../components/AnimatedItem';

function Skills() {
  const technicalSkills = [
    { name: 'React Native', level: 90, category: 'Mobile Development' },
    { name: 'React.js', level: 95, category: 'Frontend Development' },
    { name: 'TypeScript', level: 85, category: 'Programming Languages' },
    { name: 'JavaScript', level: 90, category: 'Programming Languages' },
    { name: 'Firebase', level: 80, category: 'Backend & Database' },
    { name: 'Node.js', level: 75, category: 'Backend Development' },
    { name: 'Tailwind CSS', level: 85, category: 'Styling & Design' },
    { name: 'Git & GitHub', level: 90, category: 'Version Control' },
    { name: 'Redux', level: 80, category: 'State Management' },
    { name: 'Jest & Testing', level: 75, category: 'Testing' },
    { name: 'AWS', level: 70, category: 'Cloud Services' },
    { name: 'Docker', level: 65, category: 'DevOps' },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 90, icon: Target },
    { name: 'Communication', level: 85, icon: Users },
    { name: 'Creativity', level: 80, icon: Lightbulb },
    { name: 'Team Leadership', level: 75, icon: Users },
    { name: 'Time Management', level: 85, icon: Target },
    { name: 'Adaptability', level: 90, icon: Lightbulb },
  ];

  const skillCategories = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: [
        'React Native',
        'iOS Development',
        'Android Development',
        'Mobile UI/UX',
      ],
      description:
        'Cross-platform mobile app development with React Native and native technologies.',
    },
    {
      title: 'Frontend Development',
      icon: Code,
      skills: [
        'React.js',
        'TypeScript',
        'JavaScript',
        'HTML/CSS',
        'Responsive Design',
      ],
      description:
        'Modern web development with React ecosystem and modern JavaScript features.',
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: ['Node.js', 'Firebase', 'MongoDB', 'REST APIs', 'GraphQL'],
      description:
        'Server-side development and database management for scalable applications.',
    },
    {
      title: 'DevOps & Tools',
      icon: Zap,
      skills: ['Git', 'CI/CD', 'Docker', 'AWS', 'Testing'],
      description:
        'Development operations, deployment, and quality assurance practices.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Skills - Muhammad Iqbal Khan | React Native Developer</title>
        <meta
          name='description'
          content="Explore Muhammad Iqbal Khan's technical skills, programming languages, frameworks, and soft skills in React Native development and mobile app creation."
        />
        <meta
          name='keywords'
          content='Skills, React Native, Mobile Development, Technical Skills, Programming, JavaScript, TypeScript, Firebase, Muhammad Iqbal Khan'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Skills - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          property='og:description'
          content="Explore Muhammad Iqbal Khan's technical skills, programming languages, frameworks, and soft skills in React Native development and mobile app creation."
        />
        <meta
          property='og:url'
          content='https://muhammadiqbalkhan.com/skills'
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
          content='Skills - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          name='twitter:description'
          content="Explore Muhammad Iqbal Khan's technical skills, programming languages, frameworks, and soft skills in React Native development and mobile app creation."
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com/skills' />
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
                My <span className='text-gradient'>Skills</span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                A comprehensive overview of my technical expertise, programming
                languages, frameworks, and soft skills that drive successful
                project delivery.
              </p>
            </AnimatedItem>
          </div>
        </AnimatedContainer>

        {/* Technical Skills Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Technical Skills
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Programming languages, frameworks, and tools I work with.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.1}
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
              {technicalSkills.map((skill, index) => (
                <AnimatedItem
                  key={skill.name}
                  animationType='slideLeft'
                  className='card'
                >
                  <div className='flex items-center justify-between mb-2'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                      {skill.name}
                    </h3>
                    <span className='text-sm text-gray-600 dark:text-gray-400'>
                      {skill.level}%
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 mb-2'>
                    <motion.div
                      className='bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full'
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {skill.category}
                  </p>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Skill Categories Section */}
        <section className='section-padding bg-gray-50 dark:bg-dark-800'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Skill Categories
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Organized expertise across different development domains.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='scale'
              staggerChildren={0.2}
              className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
              {skillCategories.map((category, index) => (
                <AnimatedItem
                  key={category.title}
                  animationType='scale'
                  className='card'
                >
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-lg flex items-center justify-center'>
                      <category.icon className='w-6 h-6 text-primary-600 dark:text-primary-400' />
                    </div>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                      {category.title}
                    </h3>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300 mb-4'>
                    {category.description}
                  </p>
                  <div className='flex flex-wrap gap-2'>
                    {category.skills.map(skill => (
                      <span
                        key={skill}
                        className='px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Soft Skills Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Soft Skills
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  Personal attributes that enhance my professional
                  effectiveness.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.2}
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            >
              {softSkills.map((skill, index) => (
                <AnimatedItem
                  key={skill.name}
                  animationType='slideRight'
                  className='card text-center'
                >
                  <div className='w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <skill.icon className='w-8 h-8 text-primary-600 dark:text-primary-400' />
                  </div>
                  <h3 className='text-lg font-semibold text-gray-900 dark:text-white mb-2'>
                    {skill.name}
                  </h3>
                  <div className='w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mb-2'>
                    <motion.div
                      className='bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full'
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className='text-sm text-gray-600 dark:text-gray-400'>
                    {skill.level}%
                  </span>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Learning Section */}
        <section className='section-padding bg-gradient-primary'>
          <div className='container-max text-center'>
            <AnimatedContainer animationType='fadeUp'>
              <AnimatedItem
                animationType='fadeUp'
                className='max-w-2xl mx-auto'
              >
                <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
                  Always Learning
                </h2>
                <p className='text-xl text-white/90 mb-8'>
                  I'm constantly expanding my skill set to stay current with the
                  latest technologies and best practices in mobile development.
                </p>
                <div className='flex flex-wrap justify-center gap-4'>
                  {[
                    'Flutter',
                    'Kotlin',
                    'Swift',
                    'GraphQL',
                    'Machine Learning',
                  ].map(skill => (
                    <span
                      key={skill}
                      className='px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm'
                    >
                      Learning {skill}
                    </span>
                  ))}
                </div>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skills;
