'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  experienceData,
  leadershipData,
  educationData,
} from '@/data/experience';

export const metadata: Metadata = {
  title: 'Experience | Muhammad Iqbal Khan',
  description:
    'Explore my professional experience, leadership roles, and educational background. From founding Digiod Solutions to contributing to the React Native community.',
  openGraph: {
    title: 'Experience | Muhammad Iqbal Khan',
    description:
      'Explore my professional experience, leadership roles, and educational background. From founding Digiod Solutions to contributing to the React Native community.',
    url: 'https://mikportfolio.com/experience',
    siteName: 'MIK Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal Khan - Experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experience | Muhammad Iqbal Khan',
    description:
      'Explore my professional experience, leadership roles, and educational background. From founding Digiod Solutions to contributing to the React Native community.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/experience',
  },
};

export default function Experience() {
  const getCompanyIcon = (company: string) => {
    switch (company.toLowerCase()) {
      case 'digiod solutions':
        return '🚀';
      case 'emporionsoft':
        return '💼';
      case 'safe':
        return '🛡️';
      default:
        return '🏢';
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'founder':
        return 'bg-gradient-to-r from-primary to-accent text-primary-foreground';
      case 'president':
        return 'bg-gradient-to-r from-green-500 to-blue-500 text-white';
      case 'contributor':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      default:
        return 'bg-accent/10 text-accent border border-accent/20';
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
              My{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent'>
                Experience
              </span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Professional journey from IT support to founding a technology
              company, with leadership roles and community contributions
            </p>
          </motion.div>

          {/* Work Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h2 className='text-3xl font-bold text-foreground'>
                Work Experience
              </h2>
              <p className='text-lg text-muted-foreground'>
                Professional roles and responsibilities across different
                organizations
              </p>
            </div>

            <VerticalTimeline lineColor='var(--primary)'>
              {experienceData.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.id}
                  className='vertical-timeline-element--work'
                  contentStyle={{
                    background: 'var(--card)',
                    color: 'var(--foreground)',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  }}
                  contentArrowStyle={{
                    borderRight: '7px solid var(--card)',
                  }}
                  date={experience.period}
                  dateClassName='text-muted-foreground font-medium'
                  iconStyle={{
                    background: 'var(--primary)',
                    color: 'var(--primary-foreground)',
                    fontSize: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  icon={
                    <div className='text-2xl'>
                      {getCompanyIcon(experience.company)}
                    </div>
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className='space-y-4'
                  >
                    {/* Header */}
                    <div className='flex items-start justify-between'>
                      <div>
                        <h3 className='text-xl font-bold text-foreground'>
                          {experience.role}
                        </h3>
                        <p className='text-lg font-semibold text-primary'>
                          {experience.company}
                        </p>
                        <p className='text-sm text-muted-foreground'>
                          📍 {experience.location}
                        </p>
                      </div>
                      {experience.badge && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(experience.badge)}`}
                        >
                          {experience.badge}
                        </span>
                      )}
                    </div>

                    {/* Description */}
                    <p className='text-muted-foreground leading-relaxed'>
                      {experience.description}
                    </p>

                    {/* Responsibilities */}
                    <div>
                      <h4 className='text-sm font-semibold text-foreground mb-2'>
                        Key Responsibilities:
                      </h4>
                      <ul className='space-y-1'>
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <li
                              key={idx}
                              className='flex items-start space-x-2'
                            >
                              <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                              <span className='text-sm text-muted-foreground'>
                                {responsibility}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className='text-sm font-semibold text-foreground mb-2'>
                        Technologies Used:
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {experience.technologies.map(tech => (
                          <span
                            key={tech}
                            className='px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium border border-accent/20'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </motion.div>

          {/* Leadership Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h2 className='text-3xl font-bold text-foreground'>
                Leadership & Community
              </h2>
              <p className='text-lg text-muted-foreground'>
                Leadership roles and community contributions
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {leadershipData.map((role, index) => (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className='bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300'
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className='flex items-start justify-between mb-4'>
                    <div>
                      <h3 className='text-xl font-bold text-foreground'>
                        {role.role}
                      </h3>
                      <p className='text-lg font-semibold text-primary'>
                        {role.organization}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {role.period}
                      </p>
                    </div>
                    {role.badge && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(role.badge)}`}
                      >
                        {role.badge}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className='text-muted-foreground leading-relaxed mb-4'>
                    {role.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className='text-sm font-semibold text-foreground mb-2'>
                      Key Achievements:
                    </h4>
                    <ul className='space-y-1'>
                      {role.achievements.map((achievement, idx) => (
                        <li key={idx} className='flex items-start space-x-2'>
                          <div className='w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                          <span className='text-sm text-muted-foreground'>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h2 className='text-3xl font-bold text-foreground'>Education</h2>
              <p className='text-lg text-muted-foreground'>
                Academic background and achievements
              </p>
            </div>

            <div className='max-w-4xl mx-auto'>
              {educationData.map((education, index) => (
                <motion.div
                  key={education.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className='bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300'
                  whileHover={{ y: -5 }}
                >
                  {/* Header */}
                  <div className='flex items-start justify-between mb-6'>
                    <div>
                      <h3 className='text-2xl font-bold text-foreground'>
                        {education.degree} in {education.field}
                      </h3>
                      <p className='text-xl font-semibold text-primary'>
                        {education.institution}
                      </p>
                      <p className='text-sm text-muted-foreground'>
                        {education.period} • 📍 {education.location}
                      </p>
                    </div>
                    <div className='w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center'>
                      <span className='text-primary-foreground font-bold text-2xl'>
                        🎓
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className='text-muted-foreground leading-relaxed mb-6'>
                    {education.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className='text-lg font-semibold text-foreground mb-4'>
                      Academic Achievements:
                    </h4>
                    <ul className='space-y-2'>
                      {education.achievements.map((achievement, idx) => (
                        <li key={idx} className='flex items-start space-x-3'>
                          <div className='w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0'></div>
                          <span className='text-muted-foreground'>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className='space-y-8'
          >
            <div className='text-center space-y-4'>
              <h2 className='text-3xl font-bold text-foreground'>
                Skills & Expertise
              </h2>
              <p className='text-lg text-muted-foreground'>
                Technical skills developed through professional experience
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <motion.div
                className='text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary-foreground font-bold text-2xl'>
                    📱
                  </span>
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Mobile Development
                </h3>
                <p className='text-muted-foreground text-sm'>
                  React Native, Flutter, iOS, Android, Cross-platform
                  development
                </p>
              </motion.div>

              <motion.div
                className='text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary-foreground font-bold text-2xl'>
                    ⚙️
                  </span>
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Leadership
                </h3>
                <p className='text-muted-foreground text-sm'>
                  Team management, project leadership, strategic planning
                </p>
              </motion.div>

              <motion.div
                className='text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300'
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className='w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary-foreground font-bold text-2xl'>
                    🌐
                  </span>
                </div>
                <h3 className='text-lg font-semibold text-foreground mb-2'>
                  Community
                </h3>
                <p className='text-muted-foreground text-sm'>
                  Open source contribution, mentoring, knowledge sharing
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
