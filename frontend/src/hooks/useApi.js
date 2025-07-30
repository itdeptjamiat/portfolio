import { useState, useEffect, useCallback, useRef } from 'react'
import { api, handleApiError } from '../utils/axiosInstance'

export const useApi = (initialData = null) => {
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const abortControllerRef = useRef(null)

  // Reset states
  const reset = useCallback(() => {
    setData(initialData)
    setLoading(false)
    setError(null)
    setSuccess(false)
  }, [initialData])

  // GET request
  const get = useCallback(async (url, config = {}) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      // Cancel previous request if it exists
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      // Create new abort controller
      abortControllerRef.current = new AbortController()
      config.signal = abortControllerRef.current.signal

      const result = await api.get(url, config)
      setData(result)
      setSuccess(true)
      return result
    } catch (err) {
      if (err.name === 'AbortError') {
        // Request was cancelled
        return
      }

      const errorInfo = handleApiError(err)
      setError(errorInfo)
      throw errorInfo
    } finally {
      setLoading(false)
    }
  }, [])

  // POST request
  const post = useCallback(async (url, data = {}, config = {}) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()
      config.signal = abortControllerRef.current.signal

      const result = await api.post(url, data, config)
      setData(result)
      setSuccess(true)
      return result
    } catch (err) {
      if (err.name === 'AbortError') {
        return
      }

      const errorInfo = handleApiError(err)
      setError(errorInfo)
      throw errorInfo
    } finally {
      setLoading(false)
    }
  }, [])

  // PUT request
  const put = useCallback(async (url, data = {}, config = {}) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()
      config.signal = abortControllerRef.current.signal

      const result = await api.put(url, data, config)
      setData(result)
      setSuccess(true)
      return result
    } catch (err) {
      if (err.name === 'AbortError') {
        return
      }

      const errorInfo = handleApiError(err)
      setError(errorInfo)
      throw errorInfo
    } finally {
      setLoading(false)
    }
  }, [])

  // PATCH request
  const patch = useCallback(async (url, data = {}, config = {}) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()
      config.signal = abortControllerRef.current.signal

      const result = await api.patch(url, data, config)
      setData(result)
      setSuccess(true)
      return result
    } catch (err) {
      if (err.name === 'AbortError') {
        return
      }

      const errorInfo = handleApiError(err)
      setError(errorInfo)
      throw errorInfo
    } finally {
      setLoading(false)
    }
  }, [])

  // DELETE request
  const del = useCallback(async (url, config = {}) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()
      config.signal = abortControllerRef.current.signal

      const result = await api.delete(url, config)
      setData(result)
      setSuccess(true)
      return result
    } catch (err) {
      if (err.name === 'AbortError') {
        return
      }

      const errorInfo = handleApiError(err)
      setError(errorInfo)
      throw errorInfo
    } finally {
      setLoading(false)
    }
  }, [])

  // Upload file
  const upload = useCallback(async (url, file, onProgress = null) => {
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }

      abortControllerRef.current = new AbortController()

      const result = await api.upload(url, file, onProgress)
      setData(result)
      setSuccess(true)
      return result
    } catch (err) {
      if (err.name === 'AbortError') {
        return
      }

      const errorInfo = handleApiError(err)
      setError(errorInfo)
      throw errorInfo
    } finally {
      setLoading(false)
    }
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort()
      }
    }
  }, [])

  return {
    data,
    loading,
    error,
    success,
    get,
    post,
    put,
    patch,
    delete: del,
    upload,
    reset,
  }
}

// Hook for fetching data on mount
export const useFetch = (url, config = {}) => {
  const { data, loading, error, success, get, reset } = useApi()

  useEffect(() => {
    if (url) {
      get(url, config)
    }
  }, [url, get, config])

  return { data, loading, error, success, refetch: () => get(url, config), reset }
}

// Hook for mutations (POST, PUT, PATCH, DELETE)
export const useMutation = () => {
  const { data, loading, error, success, post, put, patch, delete: del, reset } = useApi()

  return {
    data,
    loading,
    error,
    success,
    post,
    put,
    patch,
    delete: del,
    reset,
  }
}

// Hook for file uploads
export const useUpload = () => {
  const { data, loading, error, success, upload, reset } = useApi()

  return {
    data,
    loading,
    error,
    success,
    upload,
    reset,
  }
}

export default useApi
