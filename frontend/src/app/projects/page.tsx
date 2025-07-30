'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Project,
  sampleProjects,
  categories,
  technologies,
} from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects | React Native Portfolio',
  description:
    'Explore my React Native projects, mobile applications, and cross-platform solutions. View live demos, source code, and case studies of innovative mobile apps.',
  openGraph: {
    title: 'Projects | React Native Portfolio',
    description:
      'Explore my React Native projects, mobile applications, and cross-platform solutions. View live demos, source code, and case studies of innovative mobile apps.',
    url: 'https://mikportfolio.com/projects',
    siteName: 'MIK Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Iqbal Khan - Projects',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | React Native Portfolio',
    description:
      'Explore my React Native projects, mobile applications, and cross-platform solutions. View live demos, source code, and case studies of innovative mobile apps.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeatured, setShowFeatured] = useState(false);

  // Fetch projects from API
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const apiUrl =
        process.env.NODE_ENV === 'production'
          ? 'http://localhost:5000/api/projects'
          : '/api/projects';

      const response = await fetch(apiUrl);

      if (response.ok) {
        const data = await response.json();
        setProjects(data.data || []);
      } else {
        // Fallback to sample data if API fails
        console.log('API not available, using sample data');
        setProjects(sampleProjects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to sample data
      setProjects(sampleProjects);
    } finally {
      setLoading(false);
    }
  };

  // Filter projects based on selected criteria
  const filterProjects = () => {
    let filtered = [...projects];

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(
        project => project.category === selectedCategory
      );
    }

    // Filter by technology
    if (selectedTechnology !== 'all') {
      filtered = filtered.filter(project =>
        project.technologies.some(tech =>
          tech.toLowerCase().includes(selectedTechnology.toLowerCase())
        )
      );
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        project =>
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.shortDescription
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          project.technologies.some(tech =>
            tech.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Filter by featured
    if (showFeatured) {
      filtered = filtered.filter(project => project.featured);
    }

    setFilteredProjects(filtered);
  };

  // Apply filters when dependencies change
  useEffect(() => {
    filterProjects();
  }, [
    projects,
    selectedCategory,
    selectedTechnology,
    searchQuery,
    showFeatured,
  ]);

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  const getTechnologyIcon = (tech: string) => {
    const iconMap: { [key: string]: string } = {
      'React Native': '⚛️',
      TypeScript: '📘',
      JavaScript: '📜',
      'Node.js': '🟢',
      Firebase: '🔥',
      MongoDB: '🍃',
      Redux: '🔄',
      'Express.js': '🚂',
      'Socket.io': '🔌',
      AWS: '☁️',
      'Google Maps API': '🗺️',
      'Stripe API': '💳',
      PayPal: '💰',
      'OpenWeather API': '🌤️',
      PostgreSQL: '🐘',
      Redis: '🔴',
    };
    return iconMap[tech] || '⚙️';
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      mobile: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
      web: 'bg-green-500/10 text-green-600 border-green-500/20',
      fullstack: 'bg-purple-500/10 text-purple-600 border-purple-500/20',
      ai: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
      other: 'bg-gray-500/10 text-gray-600 border-gray-500/20',
    };
    return (
      colorMap[category] || 'bg-gray-500/10 text-gray-600 border-gray-500/20'
    );
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
                Projects
              </span>
            </h1>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Explore my React Native projects and mobile applications. Each
              project showcases different aspects of mobile development, from
              UI/UX design to backend integration.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-6'
          >
            {/* Search Bar */}
            <div className='relative'>
              <input
                type='text'
                placeholder='Search projects...'
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className='w-full px-4 py-3 pl-12 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
              />
              <svg
                className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>

            {/* Filter Buttons */}
            <div className='flex flex-wrap gap-4'>
              {/* Category Filter */}
              <div className='flex flex-wrap gap-2'>
                {categories.map(category => (
                  <button
                    key={category.value}
                    onClick={() => setSelectedCategory(category.value)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category.value
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* Technology Filter */}
              <div className='flex flex-wrap gap-2'>
                <select
                  value={selectedTechnology}
                  onChange={e => setSelectedTechnology(e.target.value)}
                  className='px-4 py-2 rounded-lg font-medium bg-card text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300'
                >
                  <option value='all'>All Technologies</option>
                  {technologies.map(tech => (
                    <option key={tech} value={tech}>
                      {tech}
                    </option>
                  ))}
                </select>
              </div>

              {/* Featured Filter */}
              <button
                onClick={() => setShowFeatured(!showFeatured)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  showFeatured
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-foreground border border-border hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {showFeatured ? '✓ Featured' : 'Featured'}
              </button>
            </div>

            {/* Results Count */}
            <div className='text-sm text-muted-foreground'>
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='space-y-8'
          >
            {loading ? (
              <div className='text-center py-12'>
                <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto'></div>
                <p className='text-muted-foreground mt-4'>
                  Loading projects...
                </p>
              </div>
            ) : error ? (
              <div className='text-center py-12'>
                <p className='text-destructive'>{error}</p>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className='text-center py-12'>
                <p className='text-muted-foreground'>
                  No projects found matching your criteria.
                </p>
              </div>
            ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project._id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className='group bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300 overflow-hidden'
                    whileHover={{ y: -5 }}
                  >
                    {/* Project Image */}
                    <div className='aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden'>
                      <div className='text-center space-y-2'>
                        <div className='w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto'>
                          <span className='text-primary-foreground font-bold text-2xl'>
                            📱
                          </span>
                        </div>
                        <div className='text-sm font-medium text-foreground'>
                          {project.name}
                        </div>
                      </div>
                      {project.featured && (
                        <div className='absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-bold'>
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className='p-6 space-y-4'>
                      {/* Header */}
                      <div>
                        <h3 className='text-xl font-semibold text-foreground group-hover:text-primary transition-colors'>
                          {project.name}
                        </h3>
                        <p className='text-sm text-muted-foreground mt-1'>
                          {project.shortDescription}
                        </p>
                      </div>

                      {/* Category Badge */}
                      <div className='flex items-center space-x-2'>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(project.category)}`}
                        >
                          {project.category.charAt(0).toUpperCase() +
                            project.category.slice(1)}
                        </span>
                        {project.status && (
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              project.status === 'completed'
                                ? 'bg-green-500/10 text-green-600 border-green-500/20'
                                : project.status === 'in-progress'
                                  ? 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
                                  : 'bg-gray-500/10 text-gray-600 border-gray-500/20'
                            }`}
                          >
                            {project.status.charAt(0).toUpperCase() +
                              project.status.slice(1)}
                          </span>
                        )}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className='text-sm font-semibold text-foreground mb-2'>
                          Technologies:
                        </h4>
                        <div className='flex flex-wrap gap-2'>
                          {project.technologies.slice(0, 4).map(tech => (
                            <span
                              key={tech}
                              className='flex items-center space-x-1 px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium border border-accent/20'
                            >
                              <span>{getTechnologyIcon(tech)}</span>
                              <span>{tech}</span>
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className='px-2 py-1 bg-muted text-muted-foreground rounded text-xs'>
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Project Details */}
                      {project.client && (
                        <div className='text-sm text-muted-foreground'>
                          <span className='font-medium'>Client:</span>{' '}
                          {project.client}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className='flex gap-3 pt-4'>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 px-4 py-2 bg-card text-foreground border border-border rounded-lg text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-center'
                          >
                            GitHub
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 text-center'
                          >
                            Live Demo
                          </a>
                        )}
                        {project.playStoreUrl && (
                          <a
                            href={project.playStoreUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex-1 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all duration-300 text-center'
                          >
                            Play Store
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
