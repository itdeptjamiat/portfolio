import { useState, useEffect, useCallback } from 'react'

export const useLoading = (initialState = false, timeout = 10000) => {
  const [loading, setLoading] = useState(initialState)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  // Auto-hide loading after timeout
  useEffect(() => {
    if (loading && timeout) {
      const timer = setTimeout(() => {
        setLoading(false)
        setError(new Error('Loading timeout'))
      }, timeout)

      return () => clearTimeout(timer)
    }
  }, [loading, timeout])

  // Reset error when loading starts
  useEffect(() => {
    if (loading) {
      setError(null)
    }
  }, [loading])

  const startLoading = useCallback(() => {
    setLoading(true)
    setError(null)
  }, [])

  const stopLoading = useCallback(() => {
    setLoading(false)
  }, [])

  const setLoadingError = useCallback((error) => {
    setError(error)
    setLoading(false)
  }, [])

  const retry = useCallback(() => {
    setRetryCount(prev => prev + 1)
    setError(null)
    setLoading(true)
  }, [])

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setRetryCount(0)
  }, [])

  return {
    loading,
    error,
    retryCount,
    startLoading,
    stopLoading,
    setLoadingError,
    retry,
    reset,
  }
}

// Specialized loading hooks
export const useAsyncLoading = (asyncFunction, deps = []) => {
  const { loading, error, startLoading, stopLoading, setLoadingError } = useLoading()

  const execute = useCallback(async (...args) => {
    try {
      startLoading()
      const result = await asyncFunction(...args)
      stopLoading()
      return result
    } catch (err) {
      setLoadingError(err)
      throw err
    }
  }, [asyncFunction, startLoading, stopLoading, setLoadingError, ...deps])

  return {
    loading,
    error,
    execute,
  }
}

export const useDelayedLoading = (delay = 300) => {
  const [showLoading, setShowLoading] = useState(false)
  const { loading, startLoading, stopLoading } = useLoading()

  useEffect(() => {
    let timer
    if (loading) {
      timer = setTimeout(() => setShowLoading(true), delay)
    } else {
      setShowLoading(false)
    }
    return () => clearTimeout(timer)
  }, [loading, delay])

  return {
    loading,
    showLoading,
    startLoading,
    stopLoading,
  }
}

export default useLoading
