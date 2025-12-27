import React from 'react'
import { FellowshipCenterCard } from '../common/FellowshipCenterCard'
import { houseFellowshipCenters } from '../../config/community.config'

interface HouseFellowshipSectionProps {
  className?: string
}

export const HouseFellowshipSection: React.FC<HouseFellowshipSectionProps> = ({
  className = ''
}) => {
  return (
    <section className={`py-16 bg-gray-50 ${className}`} aria-labelledby="fellowship-centers-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="fellowship-centers-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            House Fellowship Centers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join one of our vibrant house fellowship centers for intimate worship, Bible study, and community building. 
            Each center offers a unique atmosphere for spiritual growth and fellowship.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {houseFellowshipCenters.map((center) => (
            <FellowshipCenterCard 
              key={center.id} 
              center={center}
              className="transform hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        <footer className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Can't Find a Center Near You?
            </h3>
            <p className="text-gray-600 mb-4">
              We're always looking to expand our fellowship network. Contact us to learn about starting a new center in your area.
            </p>
            <a 
              href="mailto:fellowship@gracetabernacle.org" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span className="mr-2" aria-hidden="true">✉️</span>
              Contact Fellowship Coordinator
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}