import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-50px 0px',
    delay = 0,
    duration = 0.8,
  } = options

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return {
    ref,
    inView: hasAnimated,
    shouldAnimate: inView && !hasAnimated,
  }
}

export const useScrollTrigger = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-50px 0px',
  } = options

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  })

  return {
    ref,
    inView,
  }
}

export default useScrollAnimation
