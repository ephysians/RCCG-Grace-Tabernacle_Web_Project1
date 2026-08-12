import React from 'react'
import Head from 'next/head'

export default function MensFellowshipPage() {
  return (
    <>
      <Head>
        <title>Men&apos;s Fellowship | RCCG Grace Tabernacle</title>
        <meta name="description" content="The Men's Fellowship at RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Men&apos;s Fellowship</h1>
            <p className="text-xl opacity-90 leading-relaxed">Building godly men who lead with integrity and purpose.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Men's Fellowship exists to equip and encourage men to fulfil their God-given roles as spiritual leaders in their homes, workplaces, and communities. Through Bible study, prayer, and fellowship, we build men of character and conviction.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We meet regularly for worship, the Word, and accountability — sharpening one another as iron sharpens iron (Proverbs 27:17).
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
