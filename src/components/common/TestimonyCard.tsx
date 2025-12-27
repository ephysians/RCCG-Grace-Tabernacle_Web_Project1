import React from 'react'
import { Testimony } from '../../types/community'

interface TestimonyCardProps {
  testimony: Testimony
  className?: string
}

const getCategoryIcon = (category: Testimony['category']): string => {
  const icons = {
    healing: '🙏',
    breakthrough: '✨',
    salvation: '✝️',
    provision: '🎁',
    other: '💝'
  }
  return icons[category]
}

const getCategoryLabel = (category: Testimony['category']): string => {
  const labels = {
    healing: 'Healing',
    breakthrough: 'Breakthrough',
    salvation: 'Salvation',
    provision: 'Provision',
    other: 'Testimony'
  }
  return labels[category]
}

export const TestimonyCard: React.FC<TestimonyCardProps> = ({
  testimony,
  className = ''
}) => {
  return (
    <article className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 h-full flex flex-col ${className} ${testimony.featured ? 'ring-2 ring-primary-200' : ''}`}>
      <header className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
            <span aria-hidden="true">{getCategoryIcon(testimony.category)}</span>
            {getCategoryLabel(testimony.category)}
          </span>
          {testimony.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
              <span aria-hidden="true">⭐</span>
              Featured
            </span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 leading-tight">{testimony.title}</h3>
      </header>

      <div className="flex-1 mb-4">
        <blockquote className="text-gray-600 leading-relaxed italic">
          "{testimony.content}"
        </blockquote>
      </div>

      <footer className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
        <cite className="font-medium text-gray-700 not-italic">— {testimony.author}</cite>
        <time dateTime={testimony.date} className="text-gray-500">
          {new Date(testimony.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
          })}
        </time>
      </footer>
    </article>
  )
}