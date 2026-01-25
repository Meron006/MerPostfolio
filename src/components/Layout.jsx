import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

/**
 * Layout component that wraps all pages
 * Contains Navbar and Footer that appear on every page
 */
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="skip-to-main"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow" role="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default Layout

