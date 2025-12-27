import React from 'react'
import Head from 'next/head'

export default function EldershipPage() {
  return (
    <>
      <Head>
        <title>Eldership Program - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Learn about our leadership development program and the path to becoming an elder or deacon in our church community." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="eldership, leadership, deacon, church leadership, spiritual maturity, RCCG Grace Tabernacle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Eldership Program
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Develop as a spiritual leader and serve God's people with wisdom and integrity.
            </p>
          </header>

          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Leadership Positions</h2>
            
            <div className="space-y-8 mb-8">
              <div className="border-l-4 border-primary-500 pl-6">
                <h3 className="text-xl font-semibold text-primary-600 mb-3">👑 Church Elder</h3>
                <p className="text-gray-600 mb-4">
                  Elders provide spiritual oversight, pastoral care, and leadership guidance to the congregation. 
                  They work closely with the pastor in making important church decisions and shepherding God's people.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Spiritual oversight and guidance</li>
                      <li>• Pastoral care and counseling</li>
                      <li>• Church governance participation</li>
                      <li>• Teaching and preaching</li>
                      <li>• Conflict resolution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Qualifications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Meets biblical elder qualifications (1 Timothy 3)</li>
                      <li>• Demonstrated spiritual maturity</li>
                      <li>• Strong biblical knowledge</li>
                      <li>• Leadership experience</li>
                      <li>• Exemplary Christian character</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">⚖️ Deacon</h3>
                <p className="text-gray-600 mb-4">
                  Deacons serve the practical needs of the church and community, ensuring smooth operations 
                  and supporting the ministry work of elders and pastors.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Administrative support</li>
                      <li>• Practical ministry coordination</li>
                      <li>• Community service oversight</li>
                      <li>• Financial stewardship</li>
                      <li>• Facility management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Qualifications:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Meets biblical deacon qualifications (1 Timothy 3)</li>
                      <li>• Proven faithfulness in service</li>
                      <li>• Good reputation in community</li>
                      <li>• Administrative or practical skills</li>
                      <li>• Heart for service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Development Path</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Spiritual Foundation</h4>
                    <p className="text-gray-600 text-sm">Demonstrate consistent Christian character, regular church attendance, and active participation in church life for at least 3 years.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Leadership Training</h4>
                    <p className="text-gray-600 text-sm">Complete our comprehensive leadership development program including biblical studies, pastoral care, and church governance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mentorship Period</h4>
                    <p className="text-gray-600 text-sm">Serve under the guidance of current elders/deacons, gaining practical experience in leadership and ministry.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Evaluation & Appointment</h4>
                    <p className="text-gray-600 text-sm">Undergo thorough evaluation by current leadership and congregation before formal appointment to office.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Biblical Qualifications</h3>
              <p className="text-gray-600 mb-4">
                Our leadership standards are based on the biblical qualifications found in 1 Timothy 3:1-13 and Titus 1:5-9:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Character Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Above reproach</li>
                    <li>• Faithful spouse (if married)</li>
                    <li>• Temperate and self-controlled</li>
                    <li>• Respectable and hospitable</li>
                    <li>• Not given to drunkenness</li>
                    <li>• Not violent but gentle</li>
                    <li>• Not quarrelsome</li>
                    <li>• Not a lover of money</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Spiritual Requirements:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Able to teach (for elders)</li>
                    <li>• Not a recent convert</li>
                    <li>• Good reputation with outsiders</li>
                    <li>• Manages own family well</li>
                    <li>• Holds firmly to trustworthy message</li>
                    <li>• Not overbearing or quick-tempered</li>
                    <li>• Loves what is good</li>
                    <li>• Upright, holy, and disciplined</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Interested in Leadership?</h3>
              <p className="text-gray-600 mb-6">
                If you feel called to leadership in God's house, we encourage you to speak with our pastoral team 
                about beginning the leadership development journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:leadership@gracetabernacle.org" 
                  className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <span className="mr-2" aria-hidden="true">👑</span>
                  Inquire About Leadership
                </a>
                <a 
                  href="/resources/leadership-handbook.pdf" 
                  className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                >
                  <span className="mr-2" aria-hidden="true">📚</span>
                  Download Leadership Handbook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}