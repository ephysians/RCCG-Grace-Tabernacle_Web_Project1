import React from 'react'
import Link from 'next/link'
import { JoinChurchLink } from '../../types/community'

interface JoinChurchLinkCardProps {
  link: JoinChurchLink
  className?: string
}

export const JoinChurchLinkCard: React.FC<JoinChurchLinkCardProps> = ({
  link,
  className = ''
}) => {
  return (
    <Link 
      href={link.href} 
      className={`block group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg ${className}`}
      aria-label={`Learn more about ${link.title}`}
    >
      <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 h-full flex flex-col group-hover:bg-primary-50 border-2 border-transparent group-hover:border-primary-200">
        <header className="text-center mb-4">
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
            {link.icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
            {link.title}
          </h3>
        </header>

        <div className="flex-1 text-center">
          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
            {link.description}
          </p>
        </div>

        <footer className="mt-6 text-center">
          <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
            Learn More
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true">→</span>
          </span>
        </footer>
      </article>
    </Link>
  )
}