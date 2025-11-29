import Navbar from './Navbar'
import Footer from './Footer'

/**
 * Layout component that wraps all pages
 * Contains Navbar and Footer that appear on every page
 */
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout

