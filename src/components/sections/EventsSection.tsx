import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { Event } from '@/config/home.config'

interface EventsSectionProps {
  events: Event[]
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600">
              Join us for these special events and fellowship opportunities.
            </p>
          </div>
          <Link
            href="/events"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              className="border-l-4 border-primary-500"
            />
          ))}
        </div>
      </div>
    </section>
  )
}