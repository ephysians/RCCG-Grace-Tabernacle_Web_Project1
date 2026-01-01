import { aboutNavigationItems } from './about.config'

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export const navigationConfig: NavigationItem[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
    children: aboutNavigationItems,
  },
  {
    label: 'Resources',
    href: '/resources',
    children: [
      { label: 'Gallery', href: '/gallery' },
      // { label: 'Join Live Service', href: '/live-service' },
      { label: 'News & Updates', href: '/article' },
      { label: 'Daily devotional', href: '/article' },
      
    ],
  },
  {
    label: 'FAQ',
    href: '/faq',
  },
  // {
  //   label: 'News & Updates',
  //   href: '/news',
  // },
  {
    label: 'Contact',
    href: '/contact',
  },
  {
    label: 'Ministries',
    href: '/ministries',
    children: [
      { label: 'Children Ministry', href: '/ministries/children' },
      { label: 'Elders Ministry', href: '/ministries/elders' },
      { label: "Men's Fellowship", href: '/ministries/mens-fellowship' },
      { label: "Women's Fellowship", href: '/ministries/womens-fellowship' },
    ],
  },
  {
    label: 'Join Live Service',
    href: '/live-service',
  },
];
