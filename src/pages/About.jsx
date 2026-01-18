import SkillsGrid from '../components/SkillsGrid'

/**
 * About/Skills page component
 * 
 * To edit content:
 * - Modify the learning journey timeline in the timeline array
 * - Skills are edited in SkillsGrid component
 */
function About() {
  // Edit this timeline to reflect your education/learning journey
  const learningJourney = [
    {
      year: '2024 - Present',
      title: 'Self-Taught Developer',
      organization: 'Online Learning & Projects',
      description: 'Building full-stack applications, learning modern frameworks, and contributing to open-source projects. Focused on React, Node.js, and cloud technologies.',
    },
    {
      year: '2023 - 2024',
      title: 'Web Development Bootcamp',
      organization: 'Online Course / Self-Study',
      description: 'Completed comprehensive web development curriculum covering HTML, CSS, JavaScript, React, Node.js, databases, and deployment.',
    },
    {
      year: '2022 - 2023',
      title: 'Programming Fundamentals',
      organization: 'Self-Study',
      description: 'Learned core programming concepts, data structures, algorithms, and began building personal projects to apply knowledge.',
    },
  ]

  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="section-title">
            <span className="gradient-text">Skills</span> & Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            A comprehensive overview of my technical capabilities and professional competencies
          </p>
          <div className="section-divider mt-6"></div>
        </div>

        {/* Skills Section - Main Focus */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="glass-effect rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-all duration-300">
            <SkillsGrid />
          </div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="mb-20">
          <h2 className="section-title text-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Learning <span className="gradient-text">Journey</span>
          </h2>
          <div className="relative">
            {/* Animated Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-300 to-primary-200 transform md:-translate-x-0.5 rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {learningJourney.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start animate-fade-in-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                >
                  {/* Animated Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full transform -translate-x-2.5 md:-translate-x-1/2 z-10 shadow-lg border-2 border-white animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.15}s` }}>
                    <div className="absolute inset-0 bg-primary-400 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}
                  >
                    <div className="group bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100/50 hover:border-primary-200 hover:-translate-y-1.5 hover:scale-[1.02]">
                      <div className="text-primary-600 font-semibold mb-2 text-sm uppercase tracking-wide">{item.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">{item.title}</h3>
                      <div className="text-primary-600 font-medium mb-3">{item.organization}</div>
                      <p className="text-gray-700 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

