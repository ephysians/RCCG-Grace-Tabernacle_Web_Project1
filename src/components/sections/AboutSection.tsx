import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface AboutSectionProps {
  className?: string
}

export const AboutSection: React.FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 lg:py-20 bg-white dark:bg-gray-900 ${className}`} aria-labelledby="about-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <header className="mb-8">
              <h2 id="about-title" className="text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
                About RCCG Grace Tabernacle
              </h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                A vibrant Christian community committed to spreading the Gospel and serving with love.
              </p>
            </header>

            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                RCCG Grace Tabernacle stands as a beacon of hope and faith in our community. We are more than just a church; we are a family united by our love for Jesus Christ and our commitment to living out His teachings in our daily lives.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sans">
                As a parish of the Redeemed Christian Church of God, we carry forward a rich heritage of holiness, evangelism, and spiritual excellence. Our doors are always open, our hearts are always ready to receive, and our hands are always extended in fellowship.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary-800 dark:text-primary-200 mb-2 font-sans">Founded</h3>
                  <p className="text-primary-700 dark:text-primary-300 font-sans">Established with a heart for community</p>
                </div>
                <div className="bg-primary-50 dark:bg-primary-900 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary-800 dark:text-primary-200 mb-2 font-sans">Affiliation</h3>
                  <p className="text-primary-700 dark:text-primary-300 font-sans">Redeemed Christian Church of God</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link 
                  href="/about/who-we-are"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Learn More About Us
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 dark:text-primary-400 bg-white dark:bg-gray-800 hover:bg-primary-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
                >
                  Visit Us
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg relative">
              <Image
                src="/assets/images/bg3.png"
                alt="RCCG Grace Tabernacle Church Building"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm font-medium">
                "A place where broken hearts are healed and families are restored."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}