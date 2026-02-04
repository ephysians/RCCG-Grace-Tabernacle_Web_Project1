import React from 'react'
import Head from 'next/head'

export default function LiveService() {
  return (
    <>
      <Head>
        <title>Join Live Service - RCCG Grace Tabernacle</title>
        <meta
          name="description"
          content="Join our live worship service online. Experience the presence of God from anywhere."
        />
      </Head>

      <div className="min-h-screen bg-primary-800 pt-20">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-200 mb-4 font-sans">
              Join Live Service
            </h1>
            <p className="text-lg text-gray-300 font-sans">
              Experience worship with us online
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-black rounded-lg mb-6 overflow-hidden">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/live_stream?channel=GRACETABERNACLEONLINE"
                title="RCCG Grace Tabernacle Live Stream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="text-center mb-6">
              <a
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-3 text-white font-semibold font-sans hover:bg-red-700 transition-colors"
                href="https://www.youtube.com/@GRACETABERNACLEONLINE/streams"
                target="_blank"
                rel="noreferrer"
              >
                Open in YouTube
              </a>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold mb-4 font-sans text-center">
                Latest Sermon (Fallback)
              </h2>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/rJxLXpUQ1qY"
                  title="Latest Sermon"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-semibold mb-4 font-sans">
                Service Hours
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 font-sans">
                    Tuesday Digging Deep
                  </h3>
                  <p className="text-blue-700 font-sans">6:00 PM - 7:00 PM</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 font-sans">
                    Thursday Faith Clinic
                  </h3>
                  <p className="text-blue-700 font-sans">6:00 PM - 7:00 PM</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-900 font-sans">
                    Sunday Service
                  </h3>
                  <p className="text-blue-700 font-sans">8:00 AM - 10:30 AM</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
