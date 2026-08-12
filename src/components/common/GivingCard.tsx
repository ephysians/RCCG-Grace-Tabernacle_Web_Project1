import React from 'react'
import Image from 'next/image'
import { GivingItem } from '@/config/giving.config'

interface GivingCardProps {
  item: GivingItem
  onClick: () => void
}

export const GivingCard: React.FC<GivingCardProps> = ({ item, onClick }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  w-full">
      <div className="relative h-[200px] w-full">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover font-sans"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-6">
        <header className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 font-sans">
            {item.name}
          </h3>
          <button
            type="button"
            className="cursor-pointer"
            onClick={onClick}
            aria-label={`Learn more about ${item.name}`}
          >
            →
          </button>
        </header>
        <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed font-sans">
          {item.description}
        </p>
      </div>
    </article>
  );
}