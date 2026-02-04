import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui'
import { Event } from '@/config/home.config'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface EventsSectionProps {
  events: Event[]
}

export const EventsSection: React.FC<EventsSectionProps> = ({ events }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ triggerOnce: true })
  return (
    <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="events-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className={`flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <header className="flex-1">
            <h2 id="events-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans ">
              Upcoming Events
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-sans ">
              Join us for these special events and fellowship opportunities.
            </p>
          </header>
          <Link
            href="/events"
            className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1 whitespace-nowrap font-sans "
            aria-label="View all upcoming events"
          >
            View All →
          </Link>
        </div>
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 font-sans transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {events.map((event) => (
            <Card
              key={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              time={event.time}
              location={event.location}
              className="border-l-4 border-primary-500 hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2 font-sans "
            />
          ))}
        </div>
      </div>
    </section>
  )
}