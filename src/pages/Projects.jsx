import { useState, useMemo } from 'react'
import AnimatedProjectCard from '../components/AnimatedProjectCard'

/**
 * Projects page component
 * 
 * To add/edit projects:
 * - Modify the projects array below
 * - Each project should have: title, description, image (optional), tech, features, github, demo (optional)
 */
function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  // Edit this array to add, remove, or modify projects
  const projects = [
    {
      title: 'SmartApply Y',
      description: 'An AI-powered career platform that transforms job searching with intelligent matching, automated applications, and career growth tools.',
      image: '/SmartyApplyY.png',
      tech: ['React', 'JavaScript', 'Python', 'AWS', 'Supabase', 'AI/ML'],
      features: [
        'AI-powered job matching with personalized recommendations',
        'Automated application submission system',
        'Social media job listing integration',
        'Application tracker for monitoring job applications',
        'Resume builder with professional templates',
        'Career growth analytics and performance tracking',
        'User dashboard for managing job applications',
        'Career insights with market trends and analytics',
      ],
      github: 'https://github.com/Meron006/SmartApply',
      demo: 'https://smartapplyy.com/',
    },
    {
      title: 'Smart Calendar',
      description: 'A modern, fully responsive calendar platform with event management, filtering, and multiple view options. Optimized for seamless experience across all devices and screen sizes.',
      image: '/smart-calendar.png',
      tech: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Fully responsive platform - works on mobile, tablet, and desktop',
        'Month, Week, and Day view options',
        'Event filtering by category (Work, Personal, Meeting, Reminder, Event, Other)',
        'Create and manage events',
        'Upcoming events sidebar',
        'Search functionality for events',
      ],
      github: 'https://github.com/Meron006/Smart-Calender',
      demo: null, // Add your demo URL if available
    },
    {
      title: 'Social Media Analytics Dashboard',
      description: 'A comprehensive analytics dashboard for tracking social media performance across multiple platforms.',
      image: null,
      tech: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js', 'REST API'],
      features: [
        'Multi-platform social media integration',
        'Real-time analytics and metrics',
        'Customizable reports and visualizations',
        'Scheduled report generation',
        'Export data to CSV/PDF',
        'User role management',
      ],
      github: 'https://github.com/Meron006/social-analytics',
      demo: null, // No demo available
    },
  ]

  // Get all unique technologies from projects
  const allTechs = useMemo(() => {
    const techSet = new Set()
    projects.forEach((project) => {
      project.tech.forEach((tech) => techSet.add(tech))
    })
    return ['All', ...Array.from(techSet).sort()]
  }, [])

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'All') {
      return projects
    }
    return projects.filter((project) => project.tech.includes(selectedFilter))
  }, [selectedFilter])

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A collection of projects showcasing my skills and experience in software development
          </p>
          <div className="section-divider mt-6"></div>
        </div>

        {/* Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 ${
                selectedFilter === tech
                  ? 'bg-primary-600 dark:bg-primary-500 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
              aria-pressed={selectedFilter === tech}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <AnimatedProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in-up">
            <div className="inline-block p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
              <svg
                className="w-16 h-16 mx-auto text-gray-400 dark:text-gray-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                No projects found
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Try selecting a different technology filter
              </p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="inline-block bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100/50 dark:border-gray-700/50">
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg font-medium">
              Interested in seeing more? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="https://github.com/Meron006"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects

