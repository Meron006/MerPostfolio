/**
 * SkillsGrid component for displaying technical and soft skills
 * 
 * To edit skills, modify the technicalSkills and softSkills arrays below
 */
function SkillsGrid() {
  // Edit these arrays to customize your skills
  // Technical skills - just a simple list, no percentages needed
  const technicalSkills = [
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

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Agile Methodology',
    'Code Review',
    'Technical Writing',
    'Mentoring',
    'Project Management',
    'Communication',
  ]

  // Icon mapping for technical skills
  const getTechIcon = (skill) => {
    const icons = {
      'React': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-60 12 12)"/>
        </svg>
      ),
      'JavaScript': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.606-.727-1.743-1.03-2.604-1.03-2.03.012-3.093 1.22-3.603 2.45l1.21.486c.262-.88.915-1.56 1.854-1.56.52 0 .888.21 1.175.57.27.33.405.78.33 1.3-.18 1.6-1.125 2.205-2.25 2.73-.855.39-1.35.78-1.545 1.38-.24.765.015 1.83 1.8 2.25 1.14.27 1.965.45 2.4.9.39.405.51.975.405 1.545-.36 2.01-2.625 2.475-4.11 1.98-1.2-.39-1.86-1.26-2.46-2.28l-1.26.78c.585 1.2 1.8 2.445 3.42 3.09 1.44.54 3.24.66 4.86.36 2.19-.405 3.54-1.755 3.93-3.48.24-.99.165-1.83-.135-2.7zm-8.99-5.18h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-2.43.735c.305.63 1.122 1.5 2.19 1.86 1.26.39 2.88.21 3.69-.66.765-.84.78-2.04.78-3.48 0-2.01.015-3.87.015-5.865l.004-.09z"/>
        </svg>
      ),
      'HTML': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      'CSS': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622h10.125l-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.955-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
      'Git': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.546 10.93L13.067 0.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.083 1.9.432.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.334-.404-1.996l-2.84-2.838v7.475c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.177-.177.384-.312.602-.402v-7.537c-.217-.089-.424-.224-.6-.401-.545-.545-.676-1.342-.396-2.011L7.707 3.814 1.054 10.468c-.603.604-.603 1.582 0 2.187l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.186"/>
        </svg>
      ),
      'GitHub': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      'AWS': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.727 0v24h22.546V0H.727zm19.882 20.636H3.39V3.364h17.22v17.272zM6.983 17.454l1.309-2.218c.218.218.509.327.872.327.364 0 .655-.109.873-.327.218-.218.327-.509.327-.872 0-.364-.109-.655-.327-.873-.218-.218-.509-.327-.873-.327-.363 0-.654.109-.872.327l-1.309-2.218c.436-.436.982-.654 1.636-.654.655 0 1.2.218 1.636.655.436.436.655.982.655 1.636 0 .655-.219 1.2-.655 1.636-.436.436-.981.655-1.636.655-.654 0-1.2-.219-1.636-.655zm5.236 0l1.309-2.218c.218.218.509.327.872.327.364 0 .655-.109.873-.327.218-.218.327-.509.327-.872 0-.364-.109-.655-.327-.873-.218-.218-.509-.327-.873-.327-.363 0-.654.109-.872.327l-1.309-2.218c.436-.436.982-.654 1.636-.654.655 0 1.2.218 1.636.655.436.436.655.982.655 1.636 0 .655-.219 1.2-.655 1.636-.436.436-.981.655-1.636.655-.654 0-1.2-.219-1.636-.655zm5.236 0l1.309-2.218c.218.218.509.327.872.327.364 0 .655-.109.873-.327.218-.218.327-.509.327-.872 0-.364-.109-.655-.327-.873-.218-.218-.509-.327-.873-.327-.363 0-.654.109-.872.327l-1.309-2.218c.436-.436.982-.654 1.636-.654.655 0 1.2.218 1.636.655.436.436.655.982.655 1.636 0 .655-.219 1.2-.655 1.636-.436.436-.981.655-1.636.655-.654 0-1.2-.219-1.636-.655z"/>
        </svg>
      ),
      'Python': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.5 0h-5L7.5 3H3C1.34 3 0 4.34 0 6v12c0 1.66 1.34 3 3 3h3.5l2 3h5l2-3H21c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3h-4.5l-2-3zm-4 1.5h3l1.5 2.25h-6l1.5-2.25zM1.5 6.75h21v10.5h-21V6.75zM12 9.75c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25 2.25-1.01 2.25-2.25S13.24 9.75 12 9.75zm-8.25 0C2.51 9.75 1.5 10.76 1.5 12s1.01 2.25 2.25 2.25S6 13.24 6 12 4.99 9.75 3.75 9.75zm16.5 0c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25S21 13.24 21 12s-1.01-2.25-2.25-2.25z"/>
        </svg>
      ),
      'Supabase': (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 10.424a.396.396 0 0 0 .29.662h9.145v8.959a.396.396 0 0 0 .724.232l9.081-10.261a.396.396 0 0 0-.081-.562z"/>
        </svg>
      ),
    }
    return icons[skill] || (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  }

  // Icon mapping for professional skills
  const getSoftSkillIcon = (skill) => {
    const icons = {
      'Problem Solving': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      'Team Collaboration': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      'Agile Methodology': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      'Code Review': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'Technical Writing': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      'Mentoring': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      'Project Management': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      'Communication': (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    }
    return icons[skill] || (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    )
  }

  return (
    <div className="space-y-16">
      {/* Technical Skills - Main Focus */}
      <div>
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-4">
            <span className="w-1.5 h-10 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></span>
            Technical Skills
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg ml-6">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {technicalSkills.map((skill, index) => (
            <span
              key={skill}
              className="group px-6 py-3.5 bg-gradient-to-br from-white to-primary-50 dark:from-gray-800 dark:to-primary-900/30 text-primary-700 dark:text-primary-400 rounded-xl text-base font-bold shadow-lg border-2 border-primary-200/50 dark:border-primary-700/50 hover:border-primary-400 dark:hover:border-primary-500 hover:from-primary-50 hover:to-primary-100 dark:hover:from-primary-900/50 dark:hover:to-primary-800/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-default animate-fade-in-up flex items-center gap-2.5"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <span className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {getTechIcon(skill)}
              </span>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div>
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-4">
            <span className="w-1.5 h-10 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></span>
            Professional Skills
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg ml-6">
            Core competencies that drive effective collaboration and project success
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill, index) => (
            <span
              key={skill}
              className="group px-6 py-3.5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-700/50 text-gray-700 dark:text-gray-300 rounded-xl text-base font-semibold shadow-lg border-2 border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 hover:from-primary-50 hover:to-white dark:hover:from-primary-900/30 dark:hover:to-gray-800 hover:text-primary-700 dark:hover:text-primary-400 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-default animate-fade-in-up flex items-center gap-2.5"
              style={{ animationDelay: `${0.5 + index * 0.06}s` }}
            >
              <span className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {getSoftSkillIcon(skill)}
              </span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsGrid

