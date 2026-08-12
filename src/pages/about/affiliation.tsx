import React from 'react'
import Head from 'next/head'

export default function AffiliationPage() {
  return (
    <>
      <Head>
        <title>Affiliation | RCCG Grace Tabernacle</title>
        <meta name="description" content="Our connection to the Redeemed Christian Church of God global family." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Our Affiliation</h1>
            <p className="text-xl opacity-90 leading-relaxed">Part of a global movement of faith.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              RCCG Grace Tabernacle is a proud parish of the <strong>Redeemed Christian Church of God (RCCG)</strong> — one of the fastest-growing Pentecostal denominations in the world, with a presence in over 190 countries.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded by Pastor Josiah Akindayomi and later led by Pastor Enoch Adejare Adeboye, the RCCG is committed to the pursuit of holiness and the evangelisation of the world. As a parish, we carry this global mandate into our local community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Being part of the RCCG family connects us to a rich heritage of prayer, worship, and discipleship that spans generations and continents.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
