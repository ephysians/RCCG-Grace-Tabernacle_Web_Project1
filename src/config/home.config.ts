export interface HeroConfig {
  headline: string
  subtext: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA: {
    text: string
    href: string
  }
}

export interface CardItem {
  title: string
  description: string
  icon?: string
}

export interface ServiceSchedule {
  name: string
  day: string
  time: string
  description: string
}

export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  date: string
  href: string
}

export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

export const heroConfig: HeroConfig = {
  headline: "Welcome to RCCG Grace Tabernacle",
  subtext: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  primaryCTA: {
    text: "Join Us This Sunday",
    href: "/contact"
  },
  secondaryCTA: {
    text: "Learn More",
    href: "/about"
  }
}

export const visionMissionCommunity: CardItem[] = [
  {
    title: "Our Vision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "👁️"
  },
  {
    title: "Our Mission",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    icon: "🎯"
  },
  {
    title: "Our Community",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    icon: "🤝"
  }
]

export const serviceSchedule: ServiceSchedule[] = [
  {
    name: "Sunday Service",
    day: "Sunday",
    time: "10:00 AM - 12:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    name: "Bible Study",
    day: "Wednesday",
    time: "7:00 PM - 8:30 PM",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore."
  },
  {
    name: "Prayer Meeting",
    day: "Friday",
    time: "6:00 PM - 7:00 PM",
    description: "Ut enim ad minim veniam, quis nostrud exercitation."
  }
]

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Lorem Ipsum Church Event Success",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
    date: "2024-01-15",
    href: "/news/lorem-ipsum-event"
  },
  {
    id: "2",
    title: "Community Outreach Program",
    excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    date: "2024-01-10",
    href: "/news/community-outreach"
  },
  {
    id: "3",
    title: "New Ministry Launch",
    excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.",
    date: "2024-01-05",
    href: "/news/new-ministry"
  }
]

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Annual Church Conference",
    date: "2024-02-15",
    time: "9:00 AM",
    location: "Main Sanctuary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: "2",
    title: "Youth Fellowship Meeting",
    date: "2024-02-20",
    time: "6:00 PM",
    location: "Youth Hall",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore."
  },
  {
    id: "3",
    title: "Community Service Day",
    date: "2024-02-25",
    time: "8:00 AM",
    location: "Community Center",
    description: "Ut enim ad minim veniam, quis nostrud exercitation."
  }
]