'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  Code,
  Users,
  Lightbulb,
  TrendingUp,
  Zap,
  Target,
  Award,
  Star,
} from 'lucide-react';
import {
  techSkills,
  softSkills,
  otherSkills,
  skillCategories,
  radarChartData,
} from '@/data/skills';

export const metadata: Metadata = {
  title: 'Skills | React Native Portfolio',
  description:
    'Explore my technical skills, soft skills, and expertise in React Native development, mobile app creation, and cross-platform solutions.',
  openGraph: {
    title: 'Skills | React Native Portfolio',
    description:
      'Explore my technical skills, soft skills, and expertise in React Native development, mobile app creation, and cross-platform solutions.',
    url: 'https://mikportfolio.com/skills',
    siteName: 'MIK Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal Khan - Skills',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills | React Native Portfolio',
    description:
      'Explore my technical skills, soft skills, and expertise in React Native development, mobile app creation, and cross-platform solutions.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/skills',
  },
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut',
      },
    }),
  };

  // Radar chart data for tech skills
  const radarData = techSkills.map(skill => ({
    subject: skill.name,
    A: skill.level,
    fullMark: 100,
  }));

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'tech':
        return <Code className='w-6 h-6' />;
      case 'soft':
        return <Users className='w-6 h-6' />;
      case 'other':
        return <Lightbulb className='w-6 h-6' />;
      default:
        return <Star className='w-6 h-6' />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'tech':
        return 'from-blue-500 to-cyan-500';
      case 'soft':
        return 'from-green-500 to-emerald-500';
      case 'other':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  const getSkillLevelColor = (level: number) => {
    if (level >= 90) return 'text-green-500';
    if (level >= 80) return 'text-blue-500';
    if (level >= 70) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getSkillLevelLabel = (level: number) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <div className='min-h-screen py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-12'>
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
                Skills
              </span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              A comprehensive overview of my technical expertise, soft skills,
              and professional competencies in mobile development and beyond.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex flex-wrap justify-center gap-4'
          >
            {skillCategories.map(category => (
              <button
                key={category.name}
                onClick={() =>
                  setSelectedCategory(
                    category.name.toLowerCase().replace(' ', '-')
                  )
                }
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory ===
                    category.name.toLowerCase().replace(' ', '-') ||
                  selectedCategory === 'all'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {getCategoryIcon(category.name.toLowerCase().replace(' ', '-'))}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Content */}
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='space-y-12'
          >
            {/* Technical Skills - Radar Chart */}
            {(selectedCategory === 'all' ||
              selectedCategory === 'technical-skills') && (
              <motion.div variants={itemVariants} className='space-y-6'>
                <div className='text-center space-y-4'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Code className='w-8 h-8 text-primary' />
                    <h2 className='text-3xl font-bold text-foreground'>
                      Technical Skills
                    </h2>
                  </div>
                  <p className='text-muted-foreground max-w-2xl mx-auto'>
                    My proficiency in programming languages, frameworks, and
                    development tools. Each skill represents years of hands-on
                    experience and project work.
                  </p>
                </div>

                {/* Radar Chart */}
                <div className='bg-card rounded-xl border border-border p-6'>
                  <div className='h-96 w-full'>
                    <ResponsiveContainer width='100%' height='100%'>
                      <RadarChart data={radarData}>
                        <PolarGrid stroke='#374151' />
                        <PolarAngleAxis
                          dataKey='subject'
                          tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <PolarRadiusAxis
                          angle={90}
                          domain={[0, 100]}
                          tick={{ fill: '#9CA3AF', fontSize: 10 }}
                        />
                        <Radar
                          name='Technical Proficiency'
                          dataKey='A'
                          stroke='#1A2A6C'
                          fill='#1A2A6C'
                          fillOpacity={0.3}
                          strokeWidth={2}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Tech Skills Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {techSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className='bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300'
                    >
                      <div className='flex items-center space-x-3 mb-4'>
                        <span className='text-2xl'>{skill.icon}</span>
                        <div>
                          <h3 className='font-semibold text-foreground'>
                            {skill.name}
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            {skill.experience}
                          </p>
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                          <span className='text-sm text-muted-foreground'>
                            Proficiency
                          </span>
                          <span
                            className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}
                          >
                            {getSkillLevelLabel(skill.level)}
                          </span>
                        </div>

                        <div className='w-full bg-muted rounded-full h-2'>
                          <motion.div
                            className='h-2 rounded-full bg-gradient-to-r from-primary to-accent'
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                          />
                        </div>

                        <div className='flex justify-between text-xs text-muted-foreground'>
                          <span>{skill.level}%</span>
                          <span>{skill.projects} projects</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Soft Skills - Progress Bars */}
            {(selectedCategory === 'all' ||
              selectedCategory === 'soft-skills') && (
              <motion.div variants={itemVariants} className='space-y-6'>
                <div className='text-center space-y-4'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Users className='w-8 h-8 text-green-500' />
                    <h2 className='text-3xl font-bold text-foreground'>
                      Soft Skills
                    </h2>
                  </div>
                  <p className='text-muted-foreground max-w-2xl mx-auto'>
                    Interpersonal skills and professional competencies that
                    complement my technical expertise and enable effective
                    collaboration and leadership.
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className='bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300'
                    >
                      <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center space-x-3'>
                          <span className='text-2xl'>{skill.icon}</span>
                          <div>
                            <h3 className='font-semibold text-foreground'>
                              {skill.name}
                            </h3>
                            <p className='text-sm text-muted-foreground'>
                              {skill.experience}
                            </p>
                          </div>
                        </div>
                        <div className='text-right'>
                          <div
                            className={`text-lg font-bold ${getSkillLevelColor(skill.level)}`}
                          >
                            {skill.level}%
                          </div>
                          <div className='text-xs text-muted-foreground'>
                            {getSkillLevelLabel(skill.level)}
                          </div>
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='w-full bg-muted rounded-full h-3'>
                          <motion.div
                            className='h-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                          />
                        </div>

                        <p className='text-sm text-muted-foreground'>
                          {skill.description}
                        </p>

                        <div className='flex justify-between text-xs text-muted-foreground'>
                          <span>{skill.projects} projects</span>
                          <span>Applied in {skill.projects} projects</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Other Skills */}
            {(selectedCategory === 'all' ||
              selectedCategory === 'other-skills') && (
              <motion.div variants={itemVariants} className='space-y-6'>
                <div className='text-center space-y-4'>
                  <div className='flex items-center justify-center space-x-2'>
                    <Lightbulb className='w-8 h-8 text-purple-500' />
                    <h2 className='text-3xl font-bold text-foreground'>
                      Other Skills
                    </h2>
                  </div>
                  <p className='text-muted-foreground max-w-2xl mx-auto'>
                    Additional expertise in marketing, design, management, and
                    emerging technologies that enhance my overall professional
                    capabilities.
                  </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {otherSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      className='bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300'
                    >
                      <div className='flex items-center space-x-3 mb-4'>
                        <span className='text-2xl'>{skill.icon}</span>
                        <div>
                          <h3 className='font-semibold text-foreground'>
                            {skill.name}
                          </h3>
                          <p className='text-sm text-muted-foreground'>
                            {skill.experience}
                          </p>
                        </div>
                      </div>

                      <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                          <span className='text-sm text-muted-foreground'>
                            Expertise
                          </span>
                          <span
                            className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}
                          >
                            {getSkillLevelLabel(skill.level)}
                          </span>
                        </div>

                        <div className='w-full bg-muted rounded-full h-2'>
                          <motion.div
                            className='h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: index * 0.1 }}
                          />
                        </div>

                        <p className='text-sm text-muted-foreground'>
                          {skill.description}
                        </p>

                        <div className='flex justify-between text-xs text-muted-foreground'>
                          <span>{skill.level}%</span>
                          <span>{skill.projects} projects</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Skills Summary */}
            <motion.div
              variants={itemVariants}
              className='bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-border p-8'
            >
              <div className='text-center space-y-4'>
                <div className='flex items-center justify-center space-x-2'>
                  <Award className='w-8 h-8 text-primary' />
                  <h2 className='text-2xl font-bold text-foreground'>
                    Skills Summary
                  </h2>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-primary'>
                      {techSkills.length}
                    </div>
                    <div className='text-muted-foreground'>
                      Technical Skills
                    </div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-green-500'>
                      {softSkills.length}
                    </div>
                    <div className='text-muted-foreground'>Soft Skills</div>
                  </div>
                  <div className='text-center'>
                    <div className='text-3xl font-bold text-purple-500'>
                      {otherSkills.length}
                    </div>
                    <div className='text-muted-foreground'>Other Skills</div>
                  </div>
                </div>

                <p className='text-muted-foreground max-w-2xl mx-auto'>
                  Continuously learning and expanding my skill set to stay
                  current with the latest technologies and industry best
                  practices.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
