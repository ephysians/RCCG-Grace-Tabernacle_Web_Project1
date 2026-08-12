import React from 'react'
import Head from 'next/head'

export default function ChildrenMinistryPage() {
  return (
    <>
      <Head>
        <title>Children Ministry | RCCG Grace Tabernacle</title>
        <meta name="description" content="Nurturing the next generation of believers at RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Children Ministry</h1>
            <p className="text-xl opacity-90 leading-relaxed">Raising a generation rooted in faith and the Word of God.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our Children Ministry is dedicated to nurturing the spiritual growth of children from infancy through their early teen years. Through age-appropriate Bible teaching, worship, and fun activities, we help children build a strong foundation of faith.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe every child is a gift from God and deserves to know His love personally. Our trained and passionate team creates a safe, engaging environment where children can encounter God and grow in their relationship with Him.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
