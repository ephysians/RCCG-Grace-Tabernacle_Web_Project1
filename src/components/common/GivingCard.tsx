import React from 'react'
import Image from 'next/image'
import { GivingItem } from '@/config/giving.config'

interface GivingCardProps {
  item: GivingItem
  onClick: () => void
}

export const GivingCard: React.FC<GivingCardProps> = ({ item, onClick }) => {
  return (
    <article 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:scale-[1.02] w-full"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick()
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Learn more about ${item.name}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6">
        <header>
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">{item.name}</h3>
        </header>
        <p className="text-gray-600 line-clamp-3 leading-relaxed">{item.description}</p>
      </div>
    </article>
  )
}