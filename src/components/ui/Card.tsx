import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  icon?: string
  href?: string
  date?: string
  time?: string
  location?: string
  className?: string
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  href,
  date,
  time,
  location,
  className = ''
}) => {
  const content = (
    <article className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col ${className}`}>
      {icon && (
        <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
      )}
      <header className="flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
      </header>
      <div className="flex-1">
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      </div>
      {date && (
        <footer className="text-sm text-gray-500 space-y-1 mt-auto pt-2">
          <div className="flex items-center gap-2">
            <span className="text-primary-500" aria-hidden="true">📅</span>
            <time dateTime={date} className="font-medium">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
          {time && (
            <div className="flex items-center gap-2">
              <span className="text-primary-500" aria-hidden="true">🕐</span>
              <span>{time}</span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2">
              <span className="text-primary-500" aria-hidden="true">📍</span>
              <span>{location}</span>
            </div>
          )}
        </footer>
      )}
    </article>
  )

  if (href) {
    return (
      <Link 
        href={href} 
        className="block group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg" 
        aria-label={`Read more about ${title}`}
      >
        {content}
      </Link>
    )
  }

  return content
}