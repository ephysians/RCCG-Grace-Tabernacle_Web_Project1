import React from 'react'
import { SocialIcon } from '@/components/ui/SocialIcon'

interface ContactInfoItem {
  icon: React.ReactNode
  title: string
  content: string | React.ReactNode
  href?: string
}

interface SocialMediaLink {
  name: string
  href: string
  label: string
}

export const ContactInfo: React.FC = () => {
  const contactItems: ContactInfoItem[] = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Our Address',
      content: (
        <div>
          <p>200 Ikorodu Road, Church Street</p>
          <p>Palmgrove, Shomolu</p>
          <p>Lagos, Lagos State, Nigeria</p>
        </div>
      )
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone Number',
      content: '+234 803 359 5273',
      href: 'tel:+2348033595273'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Address',
      content: 'info@rccggracetabernacle.org',
      href: 'mailto:info@rccggracetabernacle.org'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Service Times',
      content: (
        <div>
          <p><strong>Sunday Service:</strong> 8:00 AM</p>
          <p><strong>Digging deep:</strong> Wednesday 6:00 PM</p>
          <p><strong>Faith clinic:</strong> Thursday 6:00 PM</p>
          <p><strong>Prayer Meeting:</strong> Friday 6:00 PM</p>
        </div>
      )
    }
  ]

  const socialMediaLinks: SocialMediaLink[] = [
    {
      name: 'facebook',
      href: 'https://facebook.com/rccggracetabernacle',
      label: 'Follow us on Facebook'
    },
    {
      name: 'instagram',
      href: 'https://instagram.com/rccggracetabernacle',
      label: 'Follow us on Instagram'
    },
    {
      name: 'youtube',
      href: 'https://youtube.com/@rccggracetabernacle',
      label: 'Subscribe to our YouTube channel'
    },
    {
      name: 'twitter',
      href: 'https://twitter.com/rccggracetab',
      label: 'Follow us on Twitter'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Contact Information Cards */}
      <div className="space-y-6">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
          Get in Touch
        </h2>
        
        {contactItems.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <div className="text-gray-600">
                    {item.content}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Social Media Section */}
      <div className="bg-white rounded-xl shadow-soft p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Connect With Us
        </h3>
        <p className="text-gray-600 mb-6">
          Stay connected with our church community through social media for updates, events, and inspirational content.
        </p>
        
        <div className="flex flex-col space-y-4">
          {socialMediaLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-all group"
              aria-label={social.label}
            >
              <div className="w-8 h-8 text-gray-600 group-hover:text-primary-600 transition-colors">
                <SocialIcon name={social.name} className="w-full h-full" />
              </div>
              <div className="flex-1">
                <span className="text-gray-900 font-medium capitalize group-hover:text-primary-700 transition-colors">
                  {social.name}
                </span>
                <p className="text-sm text-gray-500 group-hover:text-primary-600 transition-colors">
                  {social.label}
                </p>
              </div>
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl shadow-soft p-6 text-white">
        <h3 className="text-xl font-semibold mb-4">
          Need Immediate Prayer or Counseling?
        </h3>
        <p className="text-primary-100 mb-4">
          Our pastoral team is available for urgent spiritual needs and counseling.
        </p>
        <a
          href="tel:+2348033595273"
          className="inline-flex items-center space-x-2 bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call Now: 0803 359 5273</span>
        </a>
      </div>
    </div>
  )
}