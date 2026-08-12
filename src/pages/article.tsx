import React from 'react'
import Head from 'next/head'

export default function ArticlePage() {
  return (
    <>
      <Head>
        <title>News &amp; Articles | RCCG Grace Tabernacle</title>
        <meta name="description" content="Latest news, articles, and daily devotionals from RCCG Grace Tabernacle." />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">News &amp; Articles</h1>
            <p className="text-xl opacity-90 leading-relaxed">Stay updated with the latest from Grace Tabernacle.</p>
          </div>
        </section>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Articles, news updates, and daily devotionals will be published here. Check back regularly for fresh content to encourage and inspire your walk with God.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
