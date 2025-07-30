import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Calendar } from 'lucide-react';
import { useFetch } from '../hooks/useApi';
import { endpoints } from '../utils/axiosInstance';
import AnimatedContainer from './AnimatedContainer';
import AnimatedItem from './AnimatedItem';

function ProjectsList() {
  const [filter, setFilter] = useState('all');

  // Fetch projects using the useFetch hook
  const {
    data: projects,
    loading,
    error,
    refetch,
  } = useFetch(endpoints.projects.getAll());

  // Filter projects based on selected category
  const filteredProjects =
    projects?.filter(project => {
      if (filter === 'all') return true;
      return project.category === filter;
    }) || [];

  // Handle error state
  if (error) {
    return (
      <div className='text-center py-12'>
        <div className='text-red-600 dark:text-red-400 text-6xl mb-4'>⚠️</div>
        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
          Failed to load projects
        </h3>
        <p className='text-gray-600 dark:text-gray-300 mb-4'>{error.message}</p>
        <button onClick={refetch} className='btn-primary'>
          Try Again
        </button>
      </div>
    );
  }

  // Handle loading state
  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={item} className='card animate-pulse'>
            <div className='h-48 bg-gray-200 dark:bg-dark-700 rounded-lg mb-4'></div>
            <div className='space-y-3'>
              <div className='h-6 bg-gray-200 dark:bg-dark-700 rounded w-3/4'></div>
              <div className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-full'></div>
              <div className='h-4 bg-gray-200 dark:bg-dark-700 rounded w-2/3'></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className='space-y-8'>
      {/* Filter Buttons */}
      <div className='flex flex-wrap gap-2 justify-center'>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
              filter === category.id
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className='text-center py-12'>
          <div className='text-gray-400 dark:text-gray-500 text-6xl mb-4'>
            📁
          </div>
          <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
            No projects found
          </h3>
          <p className='text-gray-600 dark:text-gray-300'>
            {filter === 'all'
              ? 'No projects available at the moment.'
              : `No projects in the "${filter}" category.`}
          </p>
        </div>
      ) : (
        <AnimatedContainer
          animationType='fadeUp'
          staggerChildren={0.1}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {filteredProjects.map(project => (
            <AnimatedItem
              key={project.id}
              animationType='scale'
              className='card group hover:shadow-xl transition-all duration-300'
            >
              {/* Project Image */}
              <div className='relative overflow-hidden rounded-lg mb-4'>
                <img
                  src={project.image || '/placeholder-project.jpg'}
                  alt={project.title}
                  className='w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'
                    >
                      <Eye className='w-5 h-5' />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200'
                    >
                      <Github className='w-5 h-5' />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200'>
                  {project.title}
                </h3>

                <p className='text-gray-600 dark:text-gray-300 line-clamp-2'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-2'>
                  {project.technologies?.map(tech => (
                    <span
                      key={tech}
                      className='px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-200 text-xs rounded'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Meta */}
                <div className='flex items-center justify-between text-sm text-gray-500 dark:text-gray-400'>
                  <div className='flex items-center space-x-1'>
                    <Calendar className='w-4 h-4' />
                    <span>{project.year}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Code className='w-4 h-4' />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Project Links */}
                <div className='flex items-center space-x-2 pt-2'>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors duration-200'
                    >
                      <span>Live Demo</span>
                      <ExternalLink className='w-3 h-3' />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200'
                    >
                      <span>Source Code</span>
                      <ExternalLink className='w-3 h-3' />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedContainer>
      )}
    </div>
  );
}

export default ProjectsList;
