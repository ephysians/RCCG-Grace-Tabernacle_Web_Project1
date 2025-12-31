import React from 'react'

interface GoogleMapProps {
  className?: string
}

export const GoogleMap: React.FC<GoogleMapProps> = ({ className = '' }) => {
  // Church address: 200 Ikorodu Road, Church Street, Palmgrove, Shomolu, Lagos, Lagos, Nigeria
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2847982!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0x4f2b2b2b2b2b2b2b!2s200%20Ikorodu%20Rd%2C%20Palmgrove%2C%20Lagos%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1699999999999!5m2!1sen!2sng"

  return (
    <div className={`relative w-full ${className}`}>
      <div className="aspect-w-16 aspect-h-9 lg:aspect-h-10">
        <iframe
          src={mapSrc}
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="RCCG Grace Tabernacle Location"
          className="rounded-lg"
        />
      </div>
      
      {/* Overlay with directions button */}
      <div className="absolute top-4 right-4 z-10">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=200+Ikorodu+Road,+Church+Street,+Palmgrove,+Shomolu,+Lagos,+Lagos,+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-white text-primary-700 px-4 py-2 rounded-lg shadow-lg hover:bg-primary-50 transition-colors font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  )
}