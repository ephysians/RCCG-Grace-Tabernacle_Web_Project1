import React from 'react'
import { Card } from '@/components/ui'
import { CardItem } from '@/config/home.config'

interface VisionMissionSectionProps {
  items: CardItem[]
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ items }) => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50" aria-labelledby="vision-mission-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 lg:mb-16">
          <h2 id="vision-mission-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Arennnn
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our vision, mission, and the heart of our community.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <Card
              key={`${item.title}-${index}`}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  )
}