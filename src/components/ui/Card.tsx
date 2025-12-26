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
    <article className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow ${className}`}>
      {icon && (
        <div className="text-3xl mb-4" aria-hidden="true">{icon}</div>
      )}
      <header>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      </header>
      <p className="text-gray-600 mb-4">{description}</p>
      {date && (
        <footer className="text-sm text-gray-500 space-y-1">
          <div><span aria-label="Date">📅</span> {new Date(date).toLocaleDateString()}</div>
          {time && <div><span aria-label="Time">🕐</span> {time}</div>}
          {location && <div><span aria-label="Location">📍</span> {location}</div>}
        </footer>
      )}
    </article>
  )

  if (href) {
    return (
      <Link href={href} className="block" aria-label={`Read more about ${title}`}>
        {content}
      </Link>
    )
  }

  return content
}