/**
 * Skeleton loader component for loading states
 * Provides a shimmer effect while content loads
 */
function SkeletonLoader({ className = '' }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
    </div>
  )
}

export function ProjectCardSkeleton() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100/60 dark:border-gray-700/60">
      <div className="h-48 bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-6 space-y-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse"></div>
        <div className="flex gap-2">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-16 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-20 animate-pulse"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded-full w-14 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonLoader
