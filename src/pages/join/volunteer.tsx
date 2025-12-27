import React from 'react'
import Head from 'next/head'

export default function VolunteerPage() {
  return (
    <>
      <Head>
        <title>Volunteer Opportunities - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Make a difference in your community through our volunteer programs including outreach, children's ministry, and community service." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="volunteer, outreach, children ministry, community service, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Make a meaningful impact in your community through service and outreach.
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Volunteer Programs</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">🤝 Community Outreach</h3>
                <p className="text-gray-600 mb-4">Reach out to the community with God's love through various outreach programs and social initiatives.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Food distribution programs</li>
                  <li>• Homeless shelter assistance</li>
                  <li>• Community clean-up events</li>
                  <li>• Evangelism campaigns</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">👶 Children's Ministry</h3>
                <p className="text-gray-600 mb-4">Help nurture the next generation through engaging children's programs and activities.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Sunday school teaching</li>
                  <li>• Children's church activities</li>
                  <li>• Vacation Bible school</li>
                  <li>• Youth mentorship programs</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">🏥 Community Service</h3>
                <p className="text-gray-600 mb-4">Serve the community through practical assistance and support programs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Hospital visitation</li>
                  <li>• Elderly care assistance</li>
                  <li>• Educational support programs</li>
                  <li>• Disaster relief efforts</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-primary-600 mb-3">🎨 Special Events</h3>
                <p className="text-gray-600 mb-4">Help organize and execute special church events and community programs.</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Event planning and coordination</li>
                  <li>• Decoration and setup</li>
                  <li>• Registration and check-in</li>
                  <li>• Photography and documentation</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer Requirements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Heart for service and helping others</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Reliable and committed to scheduled activities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Background check for children's ministry volunteers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Willingness to work as part of a team</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">✓</span>
                  <span>Positive attitude and Christian character</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Volunteering Today</h3>
              <p className="text-gray-600 mb-6">
                Contact our Volunteer Coordinator to learn more about current opportunities and how you can get involved.
              </p>
              <a 
                href="mailto:volunteer@gracetabernacle.org" 
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="mr-2" aria-hidden="true">🤝</span>
                Sign Up to Volunteer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}