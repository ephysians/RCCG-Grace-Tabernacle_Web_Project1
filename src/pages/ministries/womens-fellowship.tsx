import React from 'react'
import Head from 'next/head'

export default function WomensFellowshipPage() {
  return (
    <>
      <Head>
        <title>Women&apos;s Fellowship | RCCG Grace Tabernacle</title>
        <meta name="description" content="The Women's Fellowship at RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">Women&apos;s Fellowship</h1>
            <p className="text-xl opacity-90 leading-relaxed">Empowering women to walk boldly in their God-given calling.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Women's Fellowship is a vibrant community of women committed to growing in faith, supporting one another, and making a difference in their families and communities. We celebrate the strength, grace, and purpose God has placed in every woman.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through prayer, Bible study, mentorship, and outreach, we equip women to live out their faith with confidence and joy.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
