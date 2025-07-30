import axios from 'axios'

// Create axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for adding auth token and logging
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    // Add request timestamp for debugging
    config.metadata = { startTime: new Date() }

    // Log request in development
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 API Request:', {
        method: config.method?.toUpperCase(),
        url: config.url,
        data: config.data,
        headers: config.headers,
      })
    }

    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor for handling responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Calculate response time
    const endTime = new Date()
    const startTime = response.config.metadata?.startTime
    const duration = startTime ? endTime - startTime : 0

    // Log response in development
    if (process.env.NODE_ENV === 'development') {
      console.log('✅ API Response:', {
        status: response.status,
        url: response.config.url,
        duration: `${duration}ms`,
        data: response.data,
      })
    }

    return response
  },
  (error) => {
    // Calculate response time for errors
    const endTime = new Date()
    const startTime = error.config?.metadata?.startTime
    const duration = startTime ? endTime - startTime : 0

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error('❌ API Error:', {
        status: error.response?.status,
        url: error.config?.url,
        duration: `${duration}ms`,
        message: error.message,
        data: error.response?.data,
      })
    }

    // Handle specific error cases
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          localStorage.removeItem('authToken')
          window.location.href = '/login'
          break
        case 403:
          // Forbidden - show access denied message
          console.error('Access denied')
          break
        case 404:
          // Not found - could show custom 404 page
          console.error('Resource not found')
          break
        case 500:
          // Server error - show server error message
          console.error('Server error occurred')
          break
        default:
          // Other errors
          console.error('API error occurred')
      }
    } else if (error.request) {
      // Network error - no response received
      console.error('Network error - no response received')
    } else {
      // Other error
      console.error('Request setup error:', error.message)
    }

    return Promise.reject(error)
  }
)

// API utility functions
export const api = {
  // GET request
  get: async (url, config = {}) => {
    try {
      const response = await axiosInstance.get(url, config)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // POST request
  post: async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.post(url, data, config)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // PUT request
  put: async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.put(url, data, config)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // PATCH request
  patch: async (url, data = {}, config = {}) => {
    try {
      const response = await axiosInstance.patch(url, data, config)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // DELETE request
  delete: async (url, config = {}) => {
    try {
      const response = await axiosInstance.delete(url, config)
      return response.data
    } catch (error) {
      throw error
    }
  },

  // Upload file
  upload: async (url, file, onProgress = null) => {
    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await axiosInstance.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: onProgress,
      })
      return response.data
    } catch (error) {
      throw error
    }
  },
}

// API endpoints configuration
export const endpoints = {
  // Projects
  projects: {
    getAll: () => '/projects',
    getById: (id) => `/projects/${id}`,
    create: () => '/projects',
    update: (id) => `/projects/${id}`,
    delete: (id) => `/projects/${id}`,
  },

  // Contact
  contact: {
    send: () => '/contact',
  },

  // Auth
  auth: {
    login: () => '/auth/login',
    register: () => '/auth/register',
    logout: () => '/auth/logout',
    refresh: () => '/auth/refresh',
    profile: () => '/auth/profile',
  },

  // Skills
  skills: {
    getAll: () => '/skills',
    getCategories: () => '/skills/categories',
  },

  // Experience
  experience: {
    getAll: () => '/experience',
    getWork: () => '/experience/work',
    getEducation: () => '/experience/education',
  },
}

// Error handling utilities
export const handleApiError = (error) => {
  if (error.response) {
    // Server responded with error status
    const { status, data } = error.response

    switch (status) {
      case 400:
        return {
          type: 'validation',
          message: data.message || 'Invalid request data',
          errors: data.errors || [],
        }
      case 401:
        return {
          type: 'auth',
          message: 'Authentication required',
        }
      case 403:
        return {
          type: 'permission',
          message: 'Access denied',
        }
      case 404:
        return {
          type: 'not_found',
          message: 'Resource not found',
        }
      case 500:
        return {
          type: 'server',
          message: 'Server error occurred',
        }
      default:
        return {
          type: 'unknown',
          message: data.message || 'An error occurred',
        }
    }
  } else if (error.request) {
    // Network error
    return {
      type: 'network',
      message: 'Network error - please check your connection',
    }
  } else {
    // Other error
    return {
      type: 'unknown',
      message: error.message || 'An unexpected error occurred',
    }
  }
}

// Request/Response utilities
export const createQueryString = (params) => {
  const searchParams = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (Array.isArray(value)) {
        value.forEach(item => searchParams.append(key, item))
      } else {
        searchParams.append(key, value)
      }
    }
  })

  return searchParams.toString()
}

export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem('authToken', token)
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    localStorage.removeItem('authToken')
    delete axiosInstance.defaults.headers.common['Authorization']
  }
}

export const getAuthToken = () => {
  return localStorage.getItem('authToken')
}

export default axiosInstance
