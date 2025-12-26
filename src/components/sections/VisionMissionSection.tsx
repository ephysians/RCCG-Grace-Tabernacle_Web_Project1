import React from 'react'
import { Card } from '@/components/ui'
import { CardItem } from '@/config/home.config'

interface VisionMissionSectionProps {
  items: CardItem[]
}

export const VisionMissionSection: React.FC<VisionMissionSectionProps> = ({ items }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our vision, mission, and the heart of our community.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}