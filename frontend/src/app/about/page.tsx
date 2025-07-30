'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { journeyData, profileData } from '@/data/journey';

export const metadata: Metadata = {
  title: 'About | Muhammad Iqbal Khan',
  description:
    'Learn more about Muhammad Iqbal Khan, a passionate React Native developer with expertise in mobile app development, cross-platform solutions, and innovative UI/UX design.',
  openGraph: {
    title: 'About | Muhammad Iqbal Khan',
    description:
      'Learn more about Muhammad Iqbal Khan, a passionate React Native developer with expertise in mobile app development, cross-platform solutions, and innovative UI/UX design.',
    url: 'https://mikportfolio.com/about',
    siteName: 'MIK Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal Khan - About',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Muhammad Iqbal Khan',
    description:
      'Learn more about Muhammad Iqbal Khan, a passionate React Native developer with expertise in mobile app development, cross-platform solutions, and innovative UI/UX design.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function About() {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'bg-primary/10 border-primary/30 text-primary';
      case 'accent':
        return 'bg-accent/10 border-accent/30 text-accent';
      case 'success':
        return 'bg-green-500/10 border-green-500/30 text-green-600';
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/30 text-yellow-600';
      default:
        return 'bg-primary/10 border-primary/30 text-primary';
    }
  };

  return (
    <div className='min-h-screen py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-16'>
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center space-y-4'
          >
            <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
              About{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                Muhammad Iqbal Khan
              </span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Passionate React Native developer with a love for creating
              innovative mobile experiences
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid grid-cols-1 lg:grid-cols-3 gap-12'
          >
            {/* Profile Picture & Info */}
            <div className='lg:col-span-1 space-y-6'>
              {/* Profile Picture */}
              <div className='flex justify-center lg:justify-start'>
                <motion.div
                  className='relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl'
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className='w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                    <span className='text-primary-foreground font-bold text-4xl'>
                      MIK
                    </span>
                  </div>
                  <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full'></div>
                </motion.div>
              </div>

              {/* Profile Info */}
              <div className='space-y-4'>
                <div>
                  <h2 className='text-2xl font-bold text-foreground'>
                    {profileData.name}
                  </h2>
                  <p className='text-lg text-muted-foreground'>
                    {profileData.title}
                  </p>
                </div>

                <div className='space-y-2'>
                  <div className='flex items-center space-x-2'>
                    <svg
                      className='w-4 h-4 text-muted-foreground'
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
                    <span className='text-muted-foreground'>
                      {profileData.location}
                    </span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <svg
                      className='w-4 h-4 text-muted-foreground'
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
                    <span className='text-muted-foreground'>
                      {profileData.email}
                    </span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className='flex flex-col sm:flex-row gap-3 pt-4'>
                  <motion.a
                    href={profileData.social.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='btn-primary px-6 py-3 rounded-lg font-medium text-center'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    LinkedIn
                  </motion.a>
                  <motion.a
                    href={profileData.social.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='px-6 py-3 border-2 border-accent text-accent rounded-lg font-medium text-center hover:bg-accent hover:text-accent-foreground transition-all duration-300'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    GitHub
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Bio & Skills */}
            <div className='lg:col-span-2 space-y-8'>
              {/* Bio */}
              <div className='space-y-4'>
                <h3 className='text-2xl font-semibold text-foreground'>
                  About Me
                </h3>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                  {profileData.bio}
                </p>
              </div>

              {/* Skills */}
              <div className='space-y-4'>
                <h3 className='text-2xl font-semibold text-foreground'>
                  Skills & Expertise
                </h3>
                <div className='flex flex-wrap gap-3'>
                  {profileData.skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className='px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20'
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
                My{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                  Journey
                </span>
              </h2>
              <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
                From Flutter to React Native, exploring AI and automation -
                here&apos;s my development journey
              </p>
            </div>

            {/* Timeline */}
            <div className='relative'>
              {/* Timeline Line */}
              <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent'></div>

              <div className='space-y-12'>
                {journeyData.map((milestone, index) => (
                  <motion.div
                    key={milestone.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className='relative'
                  >
                    {/* Timeline Dot */}
                    <div className='absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg'></div>

                    {/* Content Card */}
                    <div className='ml-16'>
                      <motion.div
                        className='bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300'
                        whileHover={{ y: -5 }}
                      >
                        {/* Header */}
                        <div className='flex items-start justify-between mb-4'>
                          <div className='flex items-center space-x-3'>
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${getColorClasses(milestone.color)}`}
                            >
                              {milestone.icon}
                            </div>
                            <div>
                              <h3 className='text-xl font-semibold text-foreground'>
                                {milestone.title}
                              </h3>
                              <p className='text-sm text-muted-foreground'>
                                {milestone.period}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className='text-muted-foreground leading-relaxed mb-6'>
                          {milestone.description}
                        </p>

                        {/* Technologies */}
                        <div className='mb-6'>
                          <h4 className='text-sm font-semibold text-foreground mb-3'>
                            Technologies Used
                          </h4>
                          <div className='flex flex-wrap gap-2'>
                            {milestone.technologies.map(tech => (
                              <span
                                key={tech}
                                className='px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20'
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className='text-sm font-semibold text-foreground mb-3'>
                            Key Achievements
                          </h4>
                          <ul className='space-y-2'>
                            {milestone.achievements.map(
                              (achievement, achievementIndex) => (
                                <li
                                  key={achievementIndex}
                                  className='flex items-start space-x-2'
                                >
                                  <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                                  <span className='text-sm text-muted-foreground'>
                                    {achievement}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h2 className='text-3xl md:text-4xl font-bold text-foreground'>
                My{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                  Values
                </span>
              </h2>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <motion.div
                className='text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
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
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Quality
                </h3>
                <p className='text-muted-foreground'>
                  Writing clean, maintainable code that stands the test of time
                </p>
              </motion.div>

              <motion.div
                className='text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
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
                      d='M13 10V3L4 14h7v7l9-11h-7z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Innovation
                </h3>
                <p className='text-muted-foreground'>
                  Embracing new mobile technologies and creative solutions
                </p>
              </motion.div>

              <motion.div
                className='text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
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
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Collaboration
                </h3>
                <p className='text-muted-foreground'>
                  Working together to achieve exceptional results
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
