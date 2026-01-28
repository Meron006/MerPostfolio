import { useState, useEffect } from 'react'

/**
 * Scroll to top button component
 * Appears when user scrolls down and allows smooth scroll back to top
 */
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-br from-primary-600 to-primary-700 dark:from-primary-500 dark:to-primary-600 text-white rounded-full shadow-2xl hover:shadow-primary-500/50 dark:hover:shadow-primary-400/50 hover:scale-110 active:scale-95 transition-all duration-300 group animate-fade-in-up focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          aria-label="Scroll to top of page"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
            Back to top
          </span>
        </button>
      )}
    </>
  )
}

export default ScrollToTop
