import React from 'react'
import Head from 'next/head'
import { Layout } from '@/components/layout'
import { aboutConfig } from '@/config/about.config'

const WhoWeArePage: React.FC = () => {
  const config = aboutConfig.whoWeAre

  return (
    <>
      <Head>
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
      </Head>

      <Layout>
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 mt-10 font-sans">
                Who We Are
              </h1>
              <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-sans">
                {config.shortContent}
              </p>
            </div>
          </section>

          {/* Content Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <article className="prose prose-lg max-w-none">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                      Our Identity in Christ
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      RCCG Grace Tabernacle stands as a beacon of hope and faith in our community. We are more than just a church; we are a family united by our love for Jesus Christ and our commitment to living out His teachings in our daily lives. Our identity is rooted in the transformative power of the Gospel and the unshakeable foundation of God's Word.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      As a parish of the Redeemed Christian Church of God, we carry forward a rich heritage of holiness, evangelism, and spiritual excellence. We believe that every person who walks through our doors is precious to God and has a divine purpose to fulfill.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                      Our Core Mandate
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Our mandate is clear and biblical: to make disciples of all nations, teaching them to observe all that Christ has commanded us. We are called to be salt and light in our community, demonstrating God's love through our words, actions, and service to others.
                    </p>
                    <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-600">
                      <p className="text-lg text-primary-800 font-medium italic">
                        "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you."
                      </p>
                      <cite className="text-primary-600 font-semibold">— Matthew 28:19-20</cite>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                      Our Community Focus
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      We are deeply committed to serving our local community and meeting people where they are. Our church is a place where broken hearts are healed, where the lost find direction, where families are restored, and where individuals discover their God-given potential.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Through various outreach programs, community service initiatives, and pastoral care, we extend Christ's love beyond our church walls. We believe in practical Christianity that addresses both spiritual and physical needs, following Jesus' example of compassionate ministry.
                    </p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">
                      A Welcoming Home
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At RCCG Grace Tabernacle, you'll find a warm, welcoming environment where people from all walks of life come together in unity. We celebrate diversity while maintaining our commitment to biblical truth and Christian values. Whether you're a longtime believer or just beginning your spiritual journey, you have a place here.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our doors are always open, our hearts are always ready to receive, and our hands are always extended in fellowship. We invite you to join us as we grow together in faith, hope, and love, building a community that reflects the heart of God.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>
      </Layout>
    </>
  )
}

export default WhoWeArePage