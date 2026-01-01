import React from 'react'
import Head from 'next/head'

export default function LiveService() {
  return (
    <>
      <Head>
        <title>Join Live Service - RCCG Grace Tabernacle</title>
        <meta name="description" content="Join our live worship service online. Experience the presence of God from anywhere." />
      </Head>
      
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Live Service</h1>
            <p className="text-lg text-gray-600">Experience worship with us online</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
              <p className="text-white text-lg">Live Stream Will Appear Here</p>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4">Service Times</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Sunday Service</h3>
                  <p className="text-blue-700">9:00 AM - 11:30 AM</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900">Wednesday Bible Study</h3>
                  <p className="text-blue-700">6:00 PM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}