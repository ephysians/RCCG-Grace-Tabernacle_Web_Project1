import React from 'react'
import Head from 'next/head'

export default function DepartmentsPage() {
  return (
    <>
      <Head>
        <title>Church Departments - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Explore our various departments including choir, drama ministry, media team, and discover where your talents can be used for God's glory." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="church departments, choir, drama ministry, media team, ministry, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Church Departments
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover where your talents and gifts can be used to serve God and His people.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🎵</div>
                <h3 className="text-xl font-semibold text-gray-900">Choir Ministry</h3>
              </div>
              <p className="text-gray-600 mb-4">Lead the congregation in worship through music and song.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Sunday worship leading</li>
                <li>• Special event performances</li>
                <li>• Weekly rehearsals</li>
                <li>• Music ministry training</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Musical ability, commitment to practice
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🎭</div>
                <h3 className="text-xl font-semibold text-gray-900">Drama Ministry</h3>
              </div>
              <p className="text-gray-600 mb-4">Share God's message through creative dramatic presentations.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Biblical drama performances</li>
                <li>• Evangelistic skits</li>
                <li>• Children's program support</li>
                <li>• Special event productions</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Acting ability, creativity, public speaking
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">📹</div>
                <h3 className="text-xl font-semibold text-gray-900">Media Team</h3>
              </div>
              <p className="text-gray-600 mb-4">Capture and broadcast God's work through multimedia.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Live streaming services</li>
                <li>• Video production</li>
                <li>• Photography</li>
                <li>• Social media content</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Technical skills, equipment knowledge
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">📚</div>
                <h3 className="text-xl font-semibold text-gray-900">Teaching Ministry</h3>
              </div>
              <p className="text-gray-600 mb-4">Educate and disciple others in God's Word.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Sunday school classes</li>
                <li>• Bible study groups</li>
                <li>• New member classes</li>
                <li>• Discipleship programs</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Biblical knowledge, teaching ability
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🙏</div>
                <h3 className="text-xl font-semibold text-gray-900">Prayer Ministry</h3>
              </div>
              <p className="text-gray-600 mb-4">Intercede for the church and community through prayer.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Prayer meetings</li>
                <li>• Intercessory prayer</li>
                <li>• Prayer counseling</li>
                <li>• Spiritual warfare</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Strong prayer life, spiritual maturity
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">💼</div>
                <h3 className="text-xl font-semibold text-gray-900">Administration</h3>
              </div>
              <p className="text-gray-600 mb-4">Support church operations through administrative excellence.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Office management</li>
                <li>• Event coordination</li>
                <li>• Record keeping</li>
                <li>• Communication support</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Organizational skills, attention to detail
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🏥</div>
                <h3 className="text-xl font-semibold text-gray-900">Health Ministry</h3>
              </div>
              <p className="text-gray-600 mb-4">Promote physical and spiritual wellness in the community.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Health screenings</li>
                <li>• Wellness education</li>
                <li>• First aid support</li>
                <li>• Community health programs</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Medical background preferred
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="text-xl font-semibold text-gray-900">Missions</h3>
              </div>
              <p className="text-gray-600 mb-4">Spread the Gospel locally and internationally.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Local evangelism</li>
                <li>• International missions</li>
                <li>• Mission trip coordination</li>
                <li>• Cross-cultural ministry</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Heart for evangelism, cultural sensitivity
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">🍽️</div>
                <h3 className="text-xl font-semibold text-gray-900">Hospitality</h3>
              </div>
              <p className="text-gray-600 mb-4">Welcome and serve guests with warmth and excellence.</p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                <li>• Guest reception</li>
                <li>• Event catering</li>
                <li>• Fellowship coordination</li>
                <li>• Visitor follow-up</li>
              </ul>
              <div className="text-sm text-gray-500">
                <strong>Requirements:</strong> Welcoming spirit, service heart
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Find Your Ministry Calling
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Every believer has been gifted by God for service in His kingdom. Whether your talents lie in music, 
                teaching, administration, or service, there's a place for you in our church family.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Started</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Discover Your Gifts</h4>
                  <p className="text-sm text-gray-600">Take our spiritual gifts assessment to identify your calling.</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Meet the Team</h4>
                  <p className="text-sm text-gray-600">Connect with department leaders to learn more about opportunities.</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Start Serving</h4>
                  <p className="text-sm text-gray-600">Begin your ministry journey with training and mentorship.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Join a Department?</h3>
              <p className="text-gray-600 mb-6">
                Contact our Ministry Coordinator to explore department opportunities and find where you can best serve.
              </p>
              <a 
                href="mailto:departments@gracetabernacle.org" 
                className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                <span className="mr-2" aria-hidden="true">🎵</span>
                Explore Departments
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}