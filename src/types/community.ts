export interface HouseFellowshipCenter {
  id: string
  name: string
  address: string
  coordinator: string
  phone: string
  email?: string
  meetingDay: string
  meetingTime: string
  description: string
}

export interface Testimony {
  id: string
  title: string
  content: string
  author: string
  date: string
  category: 'healing' | 'breakthrough' | 'salvation' | 'provision' | 'other'
  featured?: boolean
}

export interface JoinChurchLink {
  id: string
  title: string
  description: string
  href: string
  icon: string
  category: 'worker' | 'volunteer' | 'department' | 'leadership'
}

export interface CommunityConfig {
  houseFellowshipCenters: HouseFellowshipCenter[]
  testimonies: Testimony[]
  joinChurchLinks: JoinChurchLink[]
}