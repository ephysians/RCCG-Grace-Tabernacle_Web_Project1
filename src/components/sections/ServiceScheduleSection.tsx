import React from 'react'
import { ServiceSchedule } from '@/config/home.config'

interface ServiceScheduleSectionProps {
  services: ServiceSchedule[]
}

export const ServiceScheduleSection: React.FC<ServiceScheduleSectionProps> = ({ services }) => {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 lg:mb-16">
          <h2 id="services-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Service Schedule
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Join us for worship, fellowship, and spiritual growth throughout the week.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article key={`${service.name}-${index}`} className="bg-primary-50 rounded-lg p-6 lg:p-8 text-center h-full flex flex-col">
              <header className="mb-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-primary-800 mb-2">
                  {service.name}
                </h3>
              </header>
              <div className="text-primary-600 font-medium mb-1">
                <time dateTime={service.day.toLowerCase()}>{service.day}</time>
              </div>
              <div className="text-primary-600 font-medium mb-4">
                <time>{service.time}</time>
              </div>
              <p className="text-gray-600 leading-relaxed flex-grow">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}