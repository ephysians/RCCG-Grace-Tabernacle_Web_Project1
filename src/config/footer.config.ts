export interface SocialLink {
  name: string
  href: string
  icon: string
  ariaLabel: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  mapEmbedUrl: string
}

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/rccggracetabernacle',
    icon: 'facebook',
    ariaLabel: 'Visit our Facebook page',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/rccggracetabernacle',
    icon: 'instagram',
    ariaLabel: 'Follow us on Instagram',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@rccggracetabernacle',
    icon: 'youtube',
    ariaLabel: 'Subscribe to our YouTube channel',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/rccggracetab',
    icon: 'twitter',
    ariaLabel: 'Follow us on Twitter',
  },
]

export const contactInfo: ContactInfo = {
  address:
    '200 Ikorodu Road, Church Street Palmgrove, Shomolu Lagos, Lagos State, Nigeria',
  phone: '+234 803 359 5273',
  email: 'info@rccggracetabernacle.org',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMCcwMC4wIk4gNzPCsDU4JzQ4LjAiVw!5e0!3m2!1sen!2sus!4v1234567890',
};

export const footerSections: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Ministries', href: '/ministries' },
      { label: 'Events', href: '/events' },
      { label: 'Sermons', href: '/sermons' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Prayer Request', href: '/prayer-request' },
      { label: 'Give Online', href: '/give' },
      { label: 'Testimonies', href: '/testimonies' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Visit Us', href: '/visit' },
      { label: 'Join a Group', href: '/groups' },
      { label: 'Volunteer', href: '/volunteer' },
    ],
  },
]
