import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { aboutNavigationItems } from '@/config/about.config'

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About Us | RCCG Grace Tabernacle</title>
        <meta name="description" content="Learn about RCCG Grace Tabernacle - our vision, mission, beliefs, leadership, and story. Discover who we are and what we stand for as a Christian community." />
        <meta property="og:title" content="About Us | RCCG Grace Tabernacle" />
        <meta property="og:description" content="Learn about RCCG Grace Tabernacle - our vision, mission, beliefs, leadership, and story. Discover who we are and what we stand for as a Christian community." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us | RCCG Grace Tabernacle" />
        <meta name="twitter:description" content="Learn about RCCG Grace Tabernacle - our vision, mission, beliefs, leadership, and story. Discover who we are and what we stand for as a Christian community." />
      </Head>

      <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-950 text-white py-16">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-8 leading-tight font-serif">
                About Grace Tabernacle
              </h1>
              <p className="text-lg md:text-xxl opacity-90 leading-relaxed">
                Discover our heart, our mission, and our commitment to serving God and our community with love and purpose.
              </p>
            </div>
          </section>

          {/* Quick Overview */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-cinzel">
                    Welcome to Our Family
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    RCCG Grace Tabernacle is more than just a church; we are a vibrant Christian community committed to spreading the Gospel, nurturing believers, and serving our local community with love and purpose.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    As a parish of the Redeemed Christian Church of God, we carry forward a rich heritage of holiness, evangelism, and spiritual excellence while maintaining our unique identity and calling in this community.
                  </p>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/assets/images/building.png"
                    alt="RCCG Grace Tabernacle Church Building"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Navigation Cards */}
          <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-cinzel">
                Learn More About Us
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutNavigationItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group bg-gray-50 hover:bg-primary-50 p-6 rounded-lg border border-gray-200 hover:border-primary-300 transition-all duration-200"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 mb-3">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 group-hover:text-primary-600 text-sm">
                      {getCardDescription(index)}
                    </p>
                    <div className="mt-4 flex items-center text-primary-600 group-hover:text-primary-700">
                      <span className="text-sm font-medium">Learn more</span>
                      <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-primary-600 text-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6 font-cinzel">
                Ready to Join Our Community?
              </h2>
              <p className="text-xl opacity-90 mb-8 leading-relaxed">
                We would love to welcome you into our church family. Come as you are and discover the love, fellowship, and purpose that awaits you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
                >
                  Visit Us This Sunday
                </Link>
                <Link
                  href="/about/who-we-are"
                  className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
                >
                  Read Our Full Story
                </Link>
              </div>
            </div>
          </section>
        </main>
    </>
  )
}

// Helper function to provide descriptions for each navigation card
function getCardDescription(index: number): string {
  const descriptions = [
    "Discover our identity, values, and what makes us unique as a Christian community.",
    "Learn about our vision for the future and our mission to serve God and others.",
    "Understand our core beliefs and theological foundations that guide our faith.",
    "Meet our pastoral team and church leaders who shepherd our congregation.",
    "Read about our journey, growth, and God's faithfulness throughout our history.",
    "Explore the values that shape our character and guide our decisions.",
    "Learn about our connection to the global RCCG family and our denominational heritage."
  ]
  return descriptions[index] || "Learn more about this aspect of our church."
}

export default AboutPage