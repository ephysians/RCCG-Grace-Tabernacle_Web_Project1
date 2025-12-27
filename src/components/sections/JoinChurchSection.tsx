import React from 'react'
import { JoinChurchLinkCard } from '../common/JoinChurchLinkCard'
import { joinChurchLinks } from '../../config/community.config'

interface JoinChurchSectionProps {
  className?: string
}

export const JoinChurchSection: React.FC<JoinChurchSectionProps> = ({
  className = ''
}) => {
  return (
    <section className={`py-16 bg-gradient-to-br from-primary-50 to-blue-50 ${className}`} aria-labelledby="join-church-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="join-church-heading" className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Join Our Church Family
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover your place in God's kingdom and use your gifts to serve others. 
            Whether you're called to leadership, service, or ministry, there's a place for you in our church family.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {joinChurchLinks.map((link) => (
            <JoinChurchLinkCard 
              key={link.id} 
              link={link}
              className="transform hover:scale-105 transition-transform duration-200"
            />
          ))}
        </div>

        <footer className="text-center mt-12">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ready to Take the Next Step?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you're ready to commit your life to Christ and become part of our church family, 
              we'd love to walk alongside you in this journey. Contact our pastoral team for guidance and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:pastor@gracetabernacle.org" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="mr-2" aria-hidden="true">✉️</span>
                Contact Pastor
              </a>
              <a 
                href="tel:+1-555-GRACE-01" 
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="mr-2" aria-hidden="true">📞</span>
                Call Church Office
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  )
}