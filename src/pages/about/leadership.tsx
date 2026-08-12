import React from 'react'
import Head from 'next/head'

export default function LeadershipPage() {
  return (
    <>
      <Head>
        <title>Leadership | RCCG Grace Tabernacle</title>
        <meta name="description" content="Meet the pastoral team and church leaders of RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Our Leadership</h1>
            <p className="text-xl opacity-90 leading-relaxed">Shepherds committed to serving God and His people.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our leadership team is dedicated to guiding the congregation with wisdom, humility, and a heart for God. Details about our pastoral team and church officers will be featured here.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
