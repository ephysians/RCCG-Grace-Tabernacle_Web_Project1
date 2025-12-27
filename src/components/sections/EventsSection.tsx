import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { Event } from '@/config/home.config'

interface EventsSectionProps {
  events: Event[]
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  return (
    <section className="py-16 bg-white" aria-labelledby="events-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12">
          <header className="flex-1">
            <h2 id="events-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Join us for these special events and fellowship opportunities.
            </p>
          </header>
          <Link
            href="/events"
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1 whitespace-nowrap"
            aria-label="View all upcoming events"
          >
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              className="border-l-4 border-primary-500 hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2"
            />
          ))}
        </div>
      </div>
    </section>
  )
}