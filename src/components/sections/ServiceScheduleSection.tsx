import React from 'react'
import { ServiceSchedule } from '@/config/home.config'

interface ServiceScheduleSectionProps {
  services: ServiceSchedule[]
}

export const ServiceScheduleSection: React.FC<ServiceScheduleSectionProps> = ({ services }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us for worship, fellowship, and spiritual growth throughout the week.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article key={index} className="bg-primary-50 rounded-lg p-6 text-center">
              <header>
                <h3 className="text-xl font-semibold text-primary-800 mb-2">
                  {service.name}
                </h3>
              </header>
              <div className="text-primary-600 font-medium mb-1">
                <time>{service.day}</time>
              </div>
              <div className="text-primary-600 font-medium mb-3">
                <time>{service.time}</time>
              </div>
              <p className="text-gray-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}