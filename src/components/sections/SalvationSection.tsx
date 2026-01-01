import React from 'react'
import { Accordion } from '../ui/Accordion'
import { salvationConfig } from '../../config/salvation.config'

export const SalvationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="salvation-section-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h1 id="salvation-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            {salvationConfig.title}
          </h1>
          <h3 className="text-xl text-gray-600 font-medium font-sans">
            {salvationConfig.subtitle}
          </h3>
        </header>

        <Accordion 
          items={salvationConfig.steps}
          allowMultiple={false}
          className="max-w-3xl mx-auto font-sans"
        />
      </div>
    </section>
  )
}