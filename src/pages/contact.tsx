import React from 'react'
import Head from 'next/head'
import { ContactForm } from '@/components/forms/ContactForm'
import { ContactInfo } from '@/components/sections/ContactInfo'
import { GoogleMap } from '@/components/ui/GoogleMap'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - RCCG Grace Tabernacle</title>
        <meta 
          name="description" 
          content="Get in touch with RCCG Grace Tabernacle. Find our location, contact information, and send us a message. We're here to serve you." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="RCCG Grace Tabernacle contact, church location, Lagos church, Palmgrove church" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container-custom">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                We'd love to hear from you. Get in touch with our church family.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-soft p-8">
                  <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>

              {/* Contact Information */}
              <div className="order-1 lg:order-2">
                <ContactInfo />
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                  Find Us
                </h2>
                <p className="text-gray-600">
                  Visit us at our location in Palmgrove, Lagos. We're easily accessible and look forward to welcoming you.
                </p>
              </div>
              <GoogleMap />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}