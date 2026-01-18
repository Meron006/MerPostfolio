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

  return (
    <div className="space-y-16">
      {/* Technical Skills - Main Focus */}
      <div>
        <div className="mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 flex items-center gap-4">
            <span className="w-1.5 h-10 bg-gradient-to-b from-primary-600 to-primary-400 rounded-full"></span>
            Technical Skills
          </h3>
          <p className="text-gray-600 text-lg ml-6">
            Technologies and tools I work with to build modern web applications
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {technicalSkills.map((skill, index) => (
            <span
              key={skill}
              className="group px-6 py-3 bg-gradient-to-br from-white to-primary-50 text-primary-700 rounded-xl text-base font-bold shadow-lg border-2 border-primary-200/50 hover:border-primary-400 hover:from-primary-50 hover:to-primary-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-default animate-fade-in-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
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
          <p className="text-gray-600 text-lg ml-6">
            Core competencies that drive effective collaboration and project success
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {softSkills.map((skill, index) => (
            <span
              key={skill}
              className="group px-6 py-3 bg-gradient-to-br from-white to-gray-50 text-gray-700 rounded-xl text-base font-semibold shadow-lg border-2 border-gray-200/50 hover:border-primary-300 hover:from-primary-50 hover:to-white hover:text-primary-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-default animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.06}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SkillsGrid

