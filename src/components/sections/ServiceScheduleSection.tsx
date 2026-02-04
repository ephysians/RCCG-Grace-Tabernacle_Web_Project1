import React from 'react'
import { ServiceSchedule } from '@/config/home.config'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface ServiceScheduleSectionProps {
  services: ServiceSchedule[]
}

export const ServiceScheduleSection: React.FC<ServiceScheduleSectionProps> = ({ services }) => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ triggerOnce: true })
  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-gray-900" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="services-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
            Service Schedule
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
            Join us for worship, fellowship, and spiritual growth throughout the week.
          </p>
        </header>
        <div ref={cardsRef} className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, index) => (
            <article key={`${service.name}-${index}`} className="bg-primary-50 dark:bg-primary-900 rounded-lg p-6 lg:p-8 text-center h-full flex flex-col">
              <header className="mb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-primary-800 dark:text-primary-200 mb-2 font-sans">
                  {service.name}
                </h3>
              </header>
              <div className="text-primary-600 dark:text-primary-400 font-medium mb-1 font-sans">
                <time dateTime={service.day.toLowerCase()}>{service.day}</time>
              </div>
              <div className="text-primary-600 dark:text-primary-400 font-medium mb-4 font-sans">
                <time>{service.time}</time>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed flex-grow font-sans">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}