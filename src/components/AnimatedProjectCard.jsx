import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import ProjectCard from './ProjectCard'

/**
 * Animated wrapper for ProjectCard with scroll-triggered animations
 */
function AnimatedProjectCard({ project, index }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 })
  
  return (
    <div 
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <ProjectCard project={project} />
    </div>
  )
}

export default AnimatedProjectCard
