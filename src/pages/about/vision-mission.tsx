import React from 'react'
import Head from 'next/head'

export default function VisionMissionPage() {
  return (
    <>
      <Head>
        <title>Vision &amp; Mission | RCCG Grace Tabernacle</title>
        <meta name="description" content="Our vision and mission at RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Vision &amp; Mission</h1>
            <p className="text-xl opacity-90 leading-relaxed">Guided by purpose, driven by faith.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a thriving, Spirit-filled community that transforms lives, families, and society through the power of the Gospel of Jesus Christ.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-sans">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To make heaven, to take as many people as possible with us, to have a member of RCCG in every family of all nations, and to accomplish these objectives through planting of churches within five minutes walking distance in every city and town of developing countries, and within five minutes driving distance in every city and town of developed countries.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
