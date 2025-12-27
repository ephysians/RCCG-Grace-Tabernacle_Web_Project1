import React from 'react'
import { HouseFellowshipCenter } from '../../types/community'

interface FellowshipCenterCardProps {
  center: HouseFellowshipCenter
  className?: string
}

export const FellowshipCenterCard: React.FC<FellowshipCenterCardProps> = ({
  center,
  className = ''
}) => {
  return (
    <article className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col ${className}`}>
      <header className="mb-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{center.name}</h3>
        <div className="flex items-start gap-2 text-gray-600 mb-2">
          <span className="text-primary-500 mt-1" aria-hidden="true">📍</span>
          <address className="not-italic">{center.address}</address>
        </div>
      </header>

      <div className="flex-1 space-y-3 mb-4">
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-primary-500" aria-hidden="true">👤</span>
          <span><strong>Coordinator:</strong> {center.coordinator}</span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-primary-500" aria-hidden="true">📞</span>
          <a 
            href={`tel:${center.phone}`} 
            className="hover:text-primary-600 transition-colors"
            aria-label={`Call ${center.coordinator}`}
          >
            {center.phone}
          </a>
        </div>

        {center.email && (
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-primary-500" aria-hidden="true">✉️</span>
            <a 
              href={`mailto:${center.email}`} 
              className="hover:text-primary-600 transition-colors"
              aria-label={`Email ${center.name}`}
            >
              {center.email}
            </a>
          </div>
        )}

        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-primary-500" aria-hidden="true">📅</span>
          <span><strong>{center.meetingDay}s:</strong> {center.meetingTime}</span>
        </div>
      </div>

      <div className="mt-auto">
        <p className="text-gray-600 text-sm leading-relaxed">{center.description}</p>
      </div>
    </article>
  )
}