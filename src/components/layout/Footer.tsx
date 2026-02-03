import React from 'react'
import Link from 'next/link'
import { SocialIcon } from '../ui/SocialIcon'
import { socialLinks, contactInfo, footerSections } from '../../config/footer.config'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black dark:bg-gray-950 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4 font-sans">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 font-sans"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact & Map Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-sans">Visit Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>{contactInfo.address}</p>
              <p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors duration-200 font-sans"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200 font-sans"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-4 bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
                className="w-full font-sans"
              />
            </div>
          </div>
        </div>

        {/* Social Links, Give Now Button & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon name={social.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => {
                  const givingSection = document.getElementById('giving')
                  if (givingSection) {
                    givingSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
                role="button"
                aria-label="Scroll to giving section"
              >
                Give Now
              </button>
              
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} RCCG Grace Tabernacle. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}