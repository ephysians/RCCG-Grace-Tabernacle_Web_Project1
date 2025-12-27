import React from 'react'
import Head from 'next/head'

export default function BecomeWorkerPage() {
  return (
    <>
      <Head>
        <title>Become a Church Worker - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Join our dedicated team of church workers. Learn about requirements, responsibilities, and how to serve in various ministries including ushering and technical support." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="church worker, ministry, ushering, technical support, serve, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Become a Church Worker
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Join our dedicated team and serve God's people with excellence and commitment.
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Worker Opportunities</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">👥 Ushering Ministry</h3>
                <p className="text-gray-600 mb-4">Welcome and guide congregation members, maintain order during services, and assist with special events.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sunday service coordination</li>
                  <li>• Guest reception and guidance</li>
                  <li>• Offering collection assistance</li>
                  <li>• Event crowd management</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">🎵 Technical Support</h3>
                <p className="text-gray-600 mb-4">Operate sound systems, lighting, and multimedia equipment to enhance worship experiences.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Audio/visual equipment operation</li>
                  <li>• Live streaming coordination</li>
                  <li>• Equipment maintenance</li>
                  <li>• Recording services</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">📋 Administrative Support</h3>
                <p className="text-gray-600 mb-4">Assist with church operations, record keeping, and communication coordination.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Member registration</li>
                  <li>• Event coordination</li>
                  <li>• Communication support</li>
                  <li>• Data management</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">🚗 Transportation Ministry</h3>
                <p className="text-gray-600 mb-4">Provide transportation services for church members and coordinate travel for events.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Member transportation</li>
                  <li>• Event logistics</li>
                  <li>• Emergency assistance</li>
                  <li>• Outreach support</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Born-again Christian with a personal relationship with Jesus Christ</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Regular church attendance for at least 6 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Completion of new members class</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Commitment to serve with excellence and integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Willingness to undergo training and mentorship</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Serve?</h3>
              <p className="text-gray-600 mb-6">
                Contact our Workers Coordinator to begin your journey of service in God's house.
              </p>
              <a 
                href="mailto:workers@gracetabernacle.org" 
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="mr-2" aria-hidden="true">✉️</span>
                Apply to Become a Worker
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}