import { useState, useEffect, useCallback } from 'react'

export const useLazyLoad = (lazyComponent, options = {}) => {
  const {
    preload = false,
    preloadDelay = 1000,
    cache = true,
  } = options

  const [Component, setComponent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadComponent = useCallback(async () => {
    if (Component) return Component

    setIsLoading(true)
    setError(null)

    try {
      const loadedComponent = await lazyComponent()
      setComponent(() => loadedComponent.default || loadedComponent)
      return loadedComponent.default || loadedComponent
    } catch (err) {
      setError(err)
      console.error('Error loading component:', err)
    } finally {
      setIsLoading(false)
    }
  }, [lazyComponent, Component])

  // Preload component after delay
  useEffect(() => {
    if (preload) {
      const timer = setTimeout(() => {
        loadComponent()
      }, preloadDelay)

      return () => clearTimeout(timer)
    }
  }, [preload, preloadDelay, loadComponent])

  return {
    Component,
    isLoading,
    error,
    loadComponent,
  }
}

export const usePreloadComponents = (components) => {
  const [preloadedComponents, setPreloadedComponents] = useState(new Set())

  const preloadComponent = useCallback(async (componentName, lazyComponent) => {
    if (preloadedComponents.has(componentName)) return

    try {
      await lazyComponent()
      setPreloadedComponents(prev => new Set([...prev, componentName]))
    } catch (error) {
      console.error(`Error preloading ${componentName}:`, error)
    }
  }, [preloadedComponents])

  const preloadAll = useCallback(async () => {
    const promises = Object.entries(components).map(([name, lazyComponent]) =>
      preloadComponent(name, lazyComponent)
    )
    await Promise.all(promises)
  }, [components, preloadComponent])

  return {
    preloadedComponents,
    preloadComponent,
    preloadAll,
  }
}

export default useLazyLoad
