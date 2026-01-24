import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for intersection observer to trigger animations on scroll
 * 
 * Usage:
 * const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
 * 
 * Then add ref to element and conditionally apply classes based on isVisible
 */
export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options.threshold, options.rootMargin, hasAnimated])

  return [elementRef, isVisible]
}
