import { useState, useEffect } from 'react'

/**
 * Scroll progress indicator component
 * Shows a progress bar at the top of the page indicating scroll position
 */
function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-gray-200/30 dark:bg-gray-800/30">
      <div
        className="h-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 transition-all duration-150 ease-out shadow-lg"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
    </div>
  )
}

export default ScrollProgress
