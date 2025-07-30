import { api, endpoints, handleApiError } from '../utils/axiosInstance'

// Projects API Service
export const projectsService = {
  // Get all projects
  getAll: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString()
      const url = queryString ? `${endpoints.projects.getAll()}?${queryString}` : endpoints.projects.getAll()
      return await api.get(url)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Get project by ID
  getById: async (id) => {
    try {
      return await api.get(endpoints.projects.getById(id))
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Create new project
  create: async (projectData) => {
    try {
      return await api.post(endpoints.projects.create(), projectData)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Update project
  update: async (id, projectData) => {
    try {
      return await api.put(endpoints.projects.update(id), projectData)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Delete project
  delete: async (id) => {
    try {
      return await api.delete(endpoints.projects.delete(id))
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Upload project image
  uploadImage: async (file, onProgress = null) => {
    try {
      return await api.upload('/projects/upload-image', file, onProgress)
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// Contact API Service
export const contactService = {
  // Send contact message
  sendMessage: async (messageData) => {
    try {
      return await api.post(endpoints.contact.send(), messageData)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Get contact messages (admin only)
  getMessages: async (params = {}) => {
    try {
      const queryString = new URLSearchParams(params).toString()
      const url = queryString ? `/contact/messages?${queryString}` : '/contact/messages'
      return await api.get(url)
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// Skills API Service
export const skillsService = {
  // Get all skills
  getAll: async () => {
    try {
      return await api.get(endpoints.skills.getAll())
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Get skill categories
  getCategories: async () => {
    try {
      return await api.get(endpoints.skills.getCategories())
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Get skills by category
  getByCategory: async (category) => {
    try {
      return await api.get(`/skills/category/${category}`)
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// Experience API Service
export const experienceService = {
  // Get all experience
  getAll: async () => {
    try {
      return await api.get(endpoints.experience.getAll())
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Get work experience
  getWork: async () => {
    try {
      return await api.get(endpoints.experience.getWork())
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Get education
  getEducation: async () => {
    try {
      return await api.get(endpoints.experience.getEducation())
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// Auth API Service
export const authService = {
  // Login
  login: async (credentials) => {
    try {
      const response = await api.post(endpoints.auth.login(), credentials)
      // Store token if login successful
      if (response.token) {
        localStorage.setItem('authToken', response.token)
      }
      return response
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Register
  register: async (userData) => {
    try {
      return await api.post(endpoints.auth.register(), userData)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Logout
  logout: async () => {
    try {
      await api.post(endpoints.auth.logout())
      localStorage.removeItem('authToken')
    } catch (error) {
      // Even if logout fails, remove token locally
      localStorage.removeItem('authToken')
      throw handleApiError(error)
    }
  },

  // Get user profile
  getProfile: async () => {
    try {
      return await api.get(endpoints.auth.profile())
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Update profile
  updateProfile: async (profileData) => {
    try {
      return await api.put(endpoints.auth.profile(), profileData)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Refresh token
  refreshToken: async () => {
    try {
      const response = await api.post(endpoints.auth.refresh())
      if (response.token) {
        localStorage.setItem('authToken', response.token)
      }
      return response
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// File Upload Service
export const uploadService = {
  // Upload single file
  uploadFile: async (file, onProgress = null) => {
    try {
      return await api.upload('/upload/file', file, onProgress)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Upload multiple files
  uploadFiles: async (files, onProgress = null) => {
    try {
      const formData = new FormData()
      files.forEach((file, index) => {
        formData.append(`files[${index}]`, file)
      })

      const response = await api.post('/upload/files', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: onProgress,
      })
      return response
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Delete uploaded file
  deleteFile: async (fileId) => {
    try {
      return await api.delete(`/upload/files/${fileId}`)
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// Analytics Service
export const analyticsService = {
  // Track page view
  trackPageView: async (pageData) => {
    try {
      return await api.post('/analytics/pageview', pageData)
    } catch (error) {
      // Don't throw error for analytics - just log it
      console.error('Analytics error:', error)
    }
  },

  // Track event
  trackEvent: async (eventData) => {
    try {
      return await api.post('/analytics/event', eventData)
    } catch (error) {
      console.error('Analytics error:', error)
    }
  },
}

// Search Service
export const searchService = {
  // Search projects
  searchProjects: async (query, filters = {}) => {
    try {
      const params = { q: query, ...filters }
      const queryString = new URLSearchParams(params).toString()
      return await api.get(`/search/projects?${queryString}`)
    } catch (error) {
      throw handleApiError(error)
    }
  },

  // Search skills
  searchSkills: async (query) => {
    try {
      return await api.get(`/search/skills?q=${encodeURIComponent(query)}`)
    } catch (error) {
      throw handleApiError(error)
    }
  },
}

// Cache Service
export const cacheService = {
  // Get cached data
  get: (key) => {
    try {
      const cached = localStorage.getItem(`cache_${key}`)
      if (cached) {
        const { data, timestamp } = JSON.parse(cached)
        // Check if cache is still valid (5 minutes)
        if (Date.now() - timestamp < 5 * 60 * 1000) {
          return data
        }
      }
      return null
    } catch (error) {
      console.error('Cache get error:', error)
      return null
    }
  },

  // Set cached data
  set: (key, data) => {
    try {
      const cacheData = {
        data,
        timestamp: Date.now(),
      }
      localStorage.setItem(`cache_${key}`, JSON.stringify(cacheData))
    } catch (error) {
      console.error('Cache set error:', error)
    }
  },

  // Clear cache
  clear: (key) => {
    try {
      if (key) {
        localStorage.removeItem(`cache_${key}`)
      } else {
        // Clear all cache
        Object.keys(localStorage).forEach(k => {
          if (k.startsWith('cache_')) {
            localStorage.removeItem(k)
          }
        })
      }
    } catch (error) {
      console.error('Cache clear error:', error)
    }
  },
}

export default {
  projects: projectsService,
  contact: contactService,
  skills: skillsService,
  experience: experienceService,
  auth: authService,
  upload: uploadService,
  analytics: analyticsService,
  search: searchService,
  cache: cacheService,
}
