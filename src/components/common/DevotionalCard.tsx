import Image from 'next/image'
import { useState } from 'react'

import { DevotionalItem } from '../../types/devotional'

interface DevotionalCardProps {
  devotional: DevotionalItem
  onClick: (devotional: DevotionalItem) => void
}

export const DevotionalCard: React.FC<DevotionalCardProps> = ({ devotional, onClick }) => {
  const [imageError, setImageError] = useState(false)
  const previewText = devotional.excerpt || devotional.content


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
      <div className="aspect-video bg-gray-200 overflow-hidden flex items-center justify-center relative">
        {imageError ? (
          <div className="flex items-center justify-center h-full text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        ) : (
          <Image
            src="/assets/images/openHeavenImg.png"
            alt={devotional.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-4">
        {/* <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 font-sans">{devotional.day}</span>
          <span className="text-sm text-gray-500 font-sans">{devotional.date}</span>
        </div> */}
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 font-sans">
          {devotional.title}
        </h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3 font-sans">
          {previewText}
        </p>
      </div>
    </div>
  )
}
