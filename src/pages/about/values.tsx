import React from 'react'
import Head from 'next/head'

const values = [
  { title: 'Holiness', body: 'We pursue a life set apart for God, reflecting His character in all we do.' },
  { title: 'Evangelism', body: 'We are passionate about sharing the Good News of Jesus Christ with everyone.' },
  { title: 'Discipleship', body: 'We are committed to growing believers into mature followers of Christ.' },
  { title: 'Community', body: 'We foster genuine relationships built on love, trust, and mutual support.' },
  { title: 'Service', body: 'We serve God and others with humility, generosity, and a willing heart.' },
  { title: 'Excellence', body: 'We give our best in everything we do as an offering to God.' },
]

export default function ValuesPage() {
  return (
    <>
      <Head>
        <title>Our Values | RCCG Grace Tabernacle</title>
        <meta name="description" content="The core values that shape RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Our Values</h1>
            <p className="text-xl opacity-90 leading-relaxed">The principles that shape who we are and how we live.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h2 className="text-xl font-bold text-primary-700 mb-3 font-sans">{v.title}</h2>
                  <p className="text-gray-700 leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
