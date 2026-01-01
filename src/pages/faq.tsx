import { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '@/components/layout'
import { Accordion } from '@/components/ui'
import { FAQ_DATA, FAQ_CATEGORIES, FAQ_PAGE_CONFIG, FAQItem } from '@/config/faq.config'

const FAQPage: NextPage = () => {
  // Group FAQ items by category
  const visitorQuestions = FAQ_DATA.filter(item => item.category === 'visitors')
  const communityQuestions = FAQ_DATA.filter(item => item.category === 'community')

  // Transform FAQ items to Accordion format
  const transformToAccordionItems = (items: FAQItem[]) => 
    items.map(item => ({
      id: item.id,
      title: item.title,
      content: item.content
    }))

  return (
    <>
      <Head>
        <title>Frequently Asked Questions | Grace Tabernacle</title>
        <meta
          name="description"
          content="Find answers to common questions about visiting Grace Tabernacle, our faith, community, and how to get involved."
        />
        <meta
          name="keywords"
          content="FAQ, questions, Grace Tabernacle, church, faith, community, visit"
        />
        <meta
          property="og:title"
          content="Frequently Asked Questions | Grace Tabernacle"
        />
        <meta
          property="og:description"
          content="Find answers to common questions about visiting Grace Tabernacle, our faith, community, and how to get involved."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <main className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary-600 to-primary-950 text-white py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2 mt-9 leading-tight">
                  {FAQ_PAGE_CONFIG.title}
                </h1>
                <p className="text-lg md:text-xl leading-relaxed opacity-90 max-w-3xl mx-auto">
                  {FAQ_PAGE_CONFIG.subtitle}
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                {/* Visitor Questions Section */}
                <div className="mb-16">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {FAQ_CATEGORIES.visitors.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {FAQ_CATEGORIES.visitors.description}
                  </p>

                  <Accordion
                    items={transformToAccordionItems(visitorQuestions)}
                    allowMultiple={true}
                    variant="faq"
                    showNumbers={false}
                    className="mb-8"
                  />
                </div>

                {/* Community Questions Section */}
                <div className="mb-16">
                  <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                    {FAQ_CATEGORIES.community.title}
                  </h3>
                  <p className="text-gray-600 mb-8 text-lg">
                    {FAQ_CATEGORIES.community.description}
                  </p>

                  <Accordion
                    items={transformToAccordionItems(communityQuestions)}
                    allowMultiple={true}
                    variant="faq"
                    showNumbers={false}
                    className="mb-8"
                  />
                </div>

                {/* Contact Section */}
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    We're here to help! If you didn't find the answer you were
                    looking for, please don't hesitate to reach out to us
                    directly.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Email Us</p>
                          <a
                            href={`mailto:${FAQ_PAGE_CONFIG.contactInfo.email}`}
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {FAQ_PAGE_CONFIG.contactInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-primary-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Call Us</p>
                          <a
                            href={`tel:${FAQ_PAGE_CONFIG.contactInfo.phone}`}
                            className="text-primary-600 hover:text-primary-700 transition-colors"
                          >
                            {FAQ_PAGE_CONFIG.contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                          <svg
                            className="w-5 h-5 text-primary-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Visit Us</p>
                          <p className="text-gray-600 leading-relaxed">
                            {FAQ_PAGE_CONFIG.contactInfo.address}
                          </p>
                        </div>
                      </div>

                      <div className="bg-primary-50 p-4 rounded-lg">
                        <p className="text-sm text-primary-800 font-medium mb-1">
                          Service Times
                        </p>
                        <p className="text-sm text-primary-700">
                          Sunday: 8:00 AM & 10:30 AM <br />
                          Tuesday: 6:00 pm <br />
                          Thursday: 6:00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

export default FAQPage