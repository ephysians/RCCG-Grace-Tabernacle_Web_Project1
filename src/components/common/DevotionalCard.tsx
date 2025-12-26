import { DevotionalItem } from '../../types/devotional'

interface DevotionalCardProps {
  devotional: DevotionalItem
  onClick: (devotional: DevotionalItem) => void
}

export const DevotionalCard: React.FC<DevotionalCardProps> = ({ devotional, onClick }) => {
  const handleClick = () => {
    onClick(devotional)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick(devotional)
    }
  }

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open devotional: ${devotional.title}`}
    >
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img
          src={devotional.image}
          alt={devotional.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600">{devotional.day}</span>
          <span className="text-sm text-gray-500">{devotional.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
          {devotional.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {devotional.content}
        </p>
      </div>
    </div>
  )
}