import React from 'react'
import Head from 'next/head'

export default function EldersMinistryPage() {
  return (
    <>
      <Head>
        <title>Elders Ministry | RCCG Grace Tabernacle</title>
        <meta name="description" content="The Elders Ministry at RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Elders Ministry</h1>
            <p className="text-xl opacity-90 leading-relaxed">Wisdom, experience, and faithful service to God's people.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Elders Ministry honours the wisdom and experience of our senior members, providing them with opportunities for fellowship, spiritual growth, and meaningful service within the church community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The elders play a vital role in the life of our church — offering counsel, intercession, and the kind of seasoned faith that comes from years of walking with God.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
