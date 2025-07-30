import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import AnimatedContainer from '../components/AnimatedContainer';
import AnimatedItem from '../components/AnimatedItem';

function Experience() {
  const workExperience = [
    {
      title: 'Senior React Native Developer',
      company: 'TechCorp Solutions',
      period: '2023 - Present',
      location: 'Remote',
      description:
        'Leading mobile app development with React Native, implementing advanced features and optimizing performance.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Jest'],
      achievements: [
        'Reduced app loading time by 40% through optimization',
        'Implemented CI/CD pipeline for mobile deployments',
        'Mentored 3 junior developers',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'InnovateLab',
      period: '2021 - 2023',
      location: 'San Francisco, CA',
      description:
        'Developed full-stack web applications using React, Node.js, and modern cloud technologies.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      achievements: [
        'Built 5+ production applications',
        'Improved team productivity by 25%',
        'Implemented automated testing suite',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'StartupHub',
      period: '2020 - 2021',
      location: 'New York, NY',
      description:
        'Created responsive user interfaces and implemented modern web development practices.',
      technologies: ['JavaScript', 'React', 'CSS3', 'Git', 'Webpack'],
      achievements: [
        'Developed 3 client websites',
        'Improved site performance scores',
        'Collaborated with design team',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2016 - 2020',
      location: 'New York, NY',
      description:
        'Focused on software engineering, algorithms, and web development fundamentals.',
      achievements: [
        'GPA: 3.8/4.0',
        "Dean's List: 3 semesters",
        'Senior Project: Mobile App Development',
      ],
    },
    {
      degree: 'Web Development Certification',
      institution: 'Coding Bootcamp',
      period: '2020',
      location: 'Online',
      description:
        'Intensive 12-week program covering modern web development technologies.',
      achievements: [
        'Top 10% of cohort',
        'Built 4 full-stack projects',
        'Learned React, Node.js, and databases',
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Experience - Muhammad Iqbal Khan | React Native Developer</title>
        <meta
          name='description'
          content="Explore Muhammad Iqbal Khan's professional experience, work history, and educational background in React Native development and mobile app creation."
        />
        <meta
          name='keywords'
          content='Experience, Work History, React Native Developer, Mobile Development, Professional Background, Muhammad Iqbal Khan'
        />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Experience - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          property='og:description'
          content="Explore Muhammad Iqbal Khan's professional experience, work history, and educational background in React Native development and mobile app creation."
        />
        <meta
          property='og:url'
          content='https://muhammadiqbalkhan.com/experience'
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
          content='Experience - Muhammad Iqbal Khan | React Native Developer'
        />
        <meta
          name='twitter:description'
          content="Explore Muhammad Iqbal Khan's professional experience, work history, and educational background in React Native development and mobile app creation."
        />
        <meta
          name='twitter:image'
          content='https://muhammadiqbalkhan.com/twitter-image.jpg'
        />

        {/* Additional Meta */}
        <meta name='author' content='Muhammad Iqbal Khan' />
        <meta name='robots' content='index, follow' />
        <link rel='canonical' href='https://muhammadiqbalkhan.com/experience' />
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
                My <span className='text-gradient'>Experience</span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-300 leading-relaxed'>
                A journey through my professional career, showcasing my growth
                in mobile development and web technologies.
              </p>
            </AnimatedItem>
          </div>
        </AnimatedContainer>

        {/* Work Experience Section */}
        <section className='section-padding'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Work Experience
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  My professional journey in mobile and web development.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.2}
              className='space-y-8'
            >
              {workExperience.map((job, index) => (
                <AnimatedItem
                  key={job.title}
                  animationType='slideRight'
                  className='card'
                >
                  <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-2 mb-2'>
                        <Briefcase className='w-5 h-5 text-primary-600 dark:text-primary-400' />
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                          {job.title}
                        </h3>
                      </div>
                      <p className='text-lg text-primary-600 dark:text-primary-400 mb-2'>
                        {job.company}
                      </p>
                      <div className='flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4'>
                        <div className='flex items-center space-x-1'>
                          <Calendar className='w-4 h-4' />
                          <span>{job.period}</span>
                        </div>
                        <div className='flex items-center space-x-1'>
                          <MapPin className='w-4 h-4' />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className='text-gray-600 dark:text-gray-300 mb-4'>
                        {job.description}
                      </p>

                      {/* Technologies */}
                      <div className='mb-4'>
                        <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                          Technologies:
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {job.technologies.map(tech => (
                            <span
                              key={tech}
                              className='px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 rounded-full text-sm'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                          Key Achievements:
                        </h4>
                        <ul className='space-y-1'>
                          {job.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className='text-sm text-gray-600 dark:text-gray-400 flex items-start space-x-2'
                            >
                              <span className='text-primary-600 dark:text-primary-400 mt-1'>
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* Education Section */}
        <section className='section-padding bg-gray-50 dark:bg-dark-800'>
          <div className='container-max'>
            <AnimatedContainer
              animationType='fadeUp'
              className='text-center mb-12'
            >
              <AnimatedItem animationType='fadeUp'>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4'>
                  Education
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300'>
                  My academic background and certifications.
                </p>
              </AnimatedItem>
            </AnimatedContainer>

            <AnimatedContainer
              animationType='fadeUp'
              staggerChildren={0.2}
              className='space-y-8'
            >
              {education.map((edu, index) => (
                <AnimatedItem
                  key={edu.degree}
                  animationType='slideLeft'
                  className='card'
                >
                  <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between'>
                    <div className='flex-1'>
                      <div className='flex items-center space-x-2 mb-2'>
                        <GraduationCap className='w-5 h-5 text-primary-600 dark:text-primary-400' />
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                          {edu.degree}
                        </h3>
                      </div>
                      <p className='text-lg text-primary-600 dark:text-primary-400 mb-2'>
                        {edu.institution}
                      </p>
                      <div className='flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4'>
                        <div className='flex items-center space-x-1'>
                          <Calendar className='w-4 h-4' />
                          <span>{edu.period}</span>
                        </div>
                        <div className='flex items-center space-x-1'>
                          <MapPin className='w-4 h-4' />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <p className='text-gray-600 dark:text-gray-300 mb-4'>
                        {edu.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2'>
                          Achievements:
                        </h4>
                        <ul className='space-y-1'>
                          {edu.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className='text-sm text-gray-600 dark:text-gray-400 flex items-start space-x-2'
                            >
                              <span className='text-primary-600 dark:text-primary-400 mt-1'>
                                •
                              </span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedContainer>
          </div>
        </section>

        {/* CTA Section */}
        <section className='section-padding'>
          <div className='container-max text-center'>
            <AnimatedContainer animationType='fadeUp'>
              <AnimatedItem
                animationType='fadeUp'
                className='max-w-2xl mx-auto'
              >
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6'>
                  Ready to Work Together?
                </h2>
                <p className='text-xl text-gray-600 dark:text-gray-300 mb-8'>
                  Let's discuss how I can contribute to your next project with
                  my experience in mobile and web development.
                </p>
                <a
                  href='/contact'
                  className='btn-primary inline-flex items-center space-x-2'
                >
                  <span>Get in Touch</span>
                  <ExternalLink className='w-4 h-4' />
                </a>
              </AnimatedItem>
            </AnimatedContainer>
          </div>
        </section>
      </div>
    </>
  );
}

export default Experience;
