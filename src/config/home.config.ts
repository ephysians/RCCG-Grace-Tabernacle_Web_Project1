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
  subtext: "A place of worship, fellowship, and spiritual growth. Join our vibrant community as we grow together in faith, love, and service to God and our community.",
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
    description: "To be a church that transforms lives and communities through the power of God's love, creating disciples who make disciples.",
    icon: "👁️"
  },
  {
    title: "Our Mission",
    description: "To worship God, build believers, and reach the world with the Gospel of Jesus Christ through authentic fellowship and service.",
    icon: "🎯"
  },
  {
    title: "Our Community",
    description: "A diverse family united in Christ, supporting one another through life's journey with love, prayer, and practical care.",
    icon: "🤝"
  }
]

export const serviceSchedule: ServiceSchedule[] = [
  {
    name: "Sunday Service",
    day: "Sunday",
    time: "Sunday School: 8:00 AM - 8:45 AM | Main Service: 8:45 AM - 10:00 AM | Yoruba Service: 8:45 AM - 10:00 AM",
    description: "Join us for Sunday school, main worship service, and Yoruba service running simultaneously."
  },
  {
    name: "Digging Deep",
    day: "Tuesday",
    time: "6:00 PM - 7:00 PM",
    description: "Deepen your understanding of God's Word through interactive Bible study and discussion."
  },
  {
    name: "Faith Clinic",
    day: "Thursday",
    time: "6:00 PM - 7:00 PM",
    description: "Come together for prayer, healing, and building faith in our corporate prayer meeting."
  }
]

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "Annual Harvest Thanksgiving Service",
    excerpt: "Join us for our special Harvest Thanksgiving service as we celebrate God's faithfulness and provision throughout the year.",
    date: "2024-01-15",
    href: "/news/harvest-thanksgiving-service"
  },
  {
    id: "2",
    title: "Community Outreach Program Launch",
    excerpt: "We're excited to announce the launch of our new community outreach program, reaching families in need with practical support.",
    date: "2024-01-10",
    href: "/news/community-outreach-launch"
  },
  {
    id: "3",
    title: "Youth Ministry Expansion",
    excerpt: "Our youth ministry is growing! Learn about new programs and activities designed to engage and disciple young people.",
    date: "2024-01-05",
    href: "/news/youth-ministry-expansion"
  }
]

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Annual Church Conference",
    date: "2024-02-15",
    time: "9:00 AM",
    location: "Main Sanctuary",
    description: "A special conference featuring guest speakers, workshops, and fellowship opportunities for spiritual growth."
  },
  {
    id: "2",
    title: "Youth Fellowship Meeting",
    date: "2024-02-20",
    time: "6:00 PM",
    location: "Youth Hall",
    description: "Monthly youth gathering with games, worship, and biblical teaching designed for teenagers and young adults."
  },
  {
    id: "3",
    title: "Community Service Day",
    date: "2024-02-25",
    time: "8:00 AM",
    location: "Community Center",
    description: "Join us as we serve our local community through various volunteer activities and outreach initiatives."
  }
]