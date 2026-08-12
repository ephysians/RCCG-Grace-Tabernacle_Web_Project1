import React from 'react'
import Head from 'next/head'

export default function OurStoryPage() {
  return (
    <>
      <Head>
        <title>Our Story | RCCG Grace Tabernacle</title>
        <meta name="description" content="The history and journey of RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Our Story</h1>
            <p className="text-xl opacity-90 leading-relaxed">A journey of faith, growth, and God's faithfulness.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              RCCG Grace Tabernacle was founded on the unshakeable belief that God had a specific purpose for this community. From humble beginnings, our congregation has grown into a vibrant family of believers united by love, faith, and a shared commitment to the Gospel.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through the years, God has been faithful — providing leadership, resources, and a growing community of disciples. Every milestone in our history is a testament to His grace and the dedication of our members.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We continue to write our story together, trusting God for greater works ahead as we serve our community and advance His kingdom.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
