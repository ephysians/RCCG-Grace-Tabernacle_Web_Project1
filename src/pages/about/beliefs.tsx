import React from 'react'
import Head from 'next/head'

const beliefs = [
  { title: 'The Holy Bible', body: 'We believe the Bible is the inspired, infallible Word of God and the supreme authority for faith and practice.' },
  { title: 'The Trinity', body: 'We believe in one God eternally existing in three persons: Father, Son, and Holy Spirit.' },
  { title: 'Salvation', body: 'We believe in the death and resurrection of Jesus Christ and that salvation is by grace through faith alone.' },
  { title: 'The Holy Spirit', body: 'We believe in the baptism of the Holy Spirit with the evidence of speaking in tongues and the gifts of the Spirit.' },
  { title: 'Water Baptism', body: 'We believe in water baptism by immersion as an outward sign of an inward transformation.' },
  { title: 'The Second Coming', body: 'We believe in the personal, visible return of Jesus Christ to establish His kingdom.' },
]

export default function BeliefsPage() {
  return (
    <>
      <Head>
        <title>Our Beliefs | RCCG Grace Tabernacle</title>
        <meta name="description" content="The core beliefs and doctrinal foundations of RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Our Beliefs</h1>
            <p className="text-xl opacity-90 leading-relaxed">The theological foundations that guide our faith and practice.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              {beliefs.map((b) => (
                <div key={b.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 font-sans">{b.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
