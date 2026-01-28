import { Link } from 'react-router-dom'

/**
 * Hero section component
 * 
 * To edit:
 * - name: Your full name
 * - title: Your job title
 * - tagline: Your professional tagline
 * - description: Short description about you
 * - socialLinks: Your social media links
 * - techStack: Technologies you work with
 */
function Hero() {
  // Edit these to personalize your hero section
  const name = 'Meron Berihu'
  const title = 'Software Developer'
  const tagline = 'Building modern web applications and continuously learning'
  const description = 'Passionate about coding, learning new technologies, and building projects that solve real-world problems.'

  // Edit these to add/remove social links
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Meron006',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/meron-berihu-849632397/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:berihumeron06@gmail.com?subject=Portfolio%20Contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  // Edit these to show your tech stack
  const techStack = [
    'React',
    'JavaScript',
    'HTML',
    'CSS',
    'Git',
    'GitHub',
    'AWS',
    'Python',
    'Supabase',
  ]

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient" style={{ backgroundSize: '200% 200%' }}></div>
      
      {/* Floating shapes for depth */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-800/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-400 dark:bg-primary-700/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Name with gradient effect */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up">
            <span className="gradient-text">{name}</span>
          </h1>

          {/* Title with slide animation */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-primary-600 font-semibold mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {title}
          </h2>

          {/* Tagline with fade */}
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 max-w-3xl mx-auto font-medium animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {tagline}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            {description}
          </p>

          {/* CTA Buttons with stagger */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <Link
              to="/contact"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Hire Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </Link>
            <Link
              to="/projects"
              className="btn-secondary group"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary group inline-flex items-center gap-2"
              aria-label="Download resume"
            >
              <svg className="w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Social Links with hover effects */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                className="group relative p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label={link.name}
                style={{ animationDelay: `${1.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-primary-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-50"></div>
                <div className="relative z-10">{link.icon}</div>
                {/* Tooltip */}
                <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                  {link.name}
                  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Tech Stack with stagger animation */}
          <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium uppercase tracking-wider">
              Tech Stack
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="group/tech px-5 py-2.5 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-primary-50 dark:hover:bg-primary-900/30 cursor-default"
                  style={{ animationDelay: `${1.6 + index * 0.1}s` }}
                >
                  <span className="inline-block group-hover/tech:scale-110 transition-transform duration-300">
                    {tech}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

