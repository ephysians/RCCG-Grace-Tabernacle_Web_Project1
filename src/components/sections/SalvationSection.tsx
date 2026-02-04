import React from 'react'
import { Accordion } from '../ui/Accordion'
import { salvationConfig } from '../../config/salvation.config'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const SalvationSection: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true })
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({ triggerOnce: true })
  return (
    <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="salvation-section-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 id="salvation-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
            {salvationConfig.title}
          </h1>
          <h3 className="text-xl text-gray-600 dark:text-gray-300 font-medium font-sans">
            {salvationConfig.subtitle}
          </h3>
        </header>

        <div ref={contentRef} className={`transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Accordion 
            items={salvationConfig.steps}
            allowMultiple={false}
            className="max-w-3xl mx-auto font-sans"
          />
        </div>
      </div>
    </section>
  )
}