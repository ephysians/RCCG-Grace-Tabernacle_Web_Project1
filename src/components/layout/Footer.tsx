import React from 'react'
import Link from 'next/link'
import { SocialIcon } from '../ui/SocialIcon'
import { socialLinks, contactInfo, footerSections } from '../../config/footer.config'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200"
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
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>{contactInfo.address}</p>
              <p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-4 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location"
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
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
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RCCG Grace Tabernacle. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}