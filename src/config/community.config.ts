import { HouseFellowshipCenter, Testimony, JoinChurchLink, CommunityConfig } from '../types/community'

export const houseFellowshipCenters: HouseFellowshipCenter[] = [
  {
    id: '1',
    name: 'Grace Fellowship Center - North',
    address: '123 North Avenue, Grace City',
    coordinator: 'Pastor John Smith',
    phone: '+1 (555) 123-4567',
    email: 'north@gracetabernacle.org',
    meetingDay: 'Thursday',
    meetingTime: '7:00 PM - 9:00 PM',
    description: 'A vibrant fellowship center serving the northern community with weekly Bible studies, prayer meetings, and community outreach programs.'
  },
  {
    id: '2',
    name: 'Grace Fellowship Center - South',
    address: '456 South Street, Grace City',
    coordinator: 'Pastor Mary Johnson',
    phone: '+1 (555) 234-5678',
    email: 'south@gracetabernacle.org',
    meetingDay: 'Wednesday',
    meetingTime: '6:30 PM - 8:30 PM',
    description: 'Dedicated to building strong family foundations through biblical teachings, youth programs, and community service initiatives.'
  },
  {
    id: '3',
    name: 'Grace Fellowship Center - East',
    address: '789 East Road, Grace City',
    coordinator: 'Pastor David Wilson',
    phone: '+1 (555) 345-6789',
    meetingDay: 'Friday',
    meetingTime: '7:30 PM - 9:30 PM',
    description: 'Focused on discipleship and spiritual growth with emphasis on prayer, worship, and evangelism in the eastern district.'
  },
  {
    id: '4',
    name: 'Grace Fellowship Center - West',
    address: '321 West Boulevard, Grace City',
    coordinator: 'Pastor Sarah Brown',
    phone: '+1 (555) 456-7890',
    email: 'west@gracetabernacle.org',
    meetingDay: 'Tuesday',
    meetingTime: '6:00 PM - 8:00 PM',
    description: 'Committed to community transformation through practical Christianity, social justice initiatives, and family support programs.'
  }
]

export const testimonies: Testimony[] = [
  {
    id: '1',
    title: 'Miraculous Healing from Cancer',
    content: 'After being diagnosed with stage 3 cancer, our church family rallied around me in prayer. Through God\'s grace and the power of prayer, I am now completely healed and cancer-free. The doctors called it a miracle, and I know it was God\'s hand at work.',
    author: 'Sister Grace Adebayo',
    date: '2024-01-20',
    category: 'healing',
    featured: true
  },
  {
    id: '2',
    title: 'Financial Breakthrough and New Job',
    content: 'I was unemployed for over a year and struggling to provide for my family. After joining the church\'s prayer group and receiving counseling, God opened doors I never imagined. I now have a better job than I ever had before.',
    author: 'Brother Michael Okafor',
    date: '2024-01-15',
    category: 'breakthrough',
    featured: true
  },
  {
    id: '3',
    title: 'Salvation and Life Transformation',
    content: 'I came to church broken and lost, struggling with addiction and depression. Through the love of Christ and this church family, my life has been completely transformed. I am now free and serving God with joy.',
    author: 'Sister Jennifer Thompson',
    date: '2024-01-10',
    category: 'salvation',
    featured: false
  },
  {
    id: '4',
    title: 'Provision During Difficult Times',
    content: 'When my husband lost his job during the pandemic, we didn\'t know how we would survive. God provided through unexpected sources and the generosity of our church family. We never lacked anything we needed.',
    author: 'Sister Ruth Okoro',
    date: '2024-01-05',
    category: 'provision',
    featured: false
  },
  {
    id: '5',
    title: 'Restoration of Marriage',
    content: 'My marriage was on the brink of divorce when we started attending marriage counseling at the church. Through biblical principles and prayer, God restored our relationship stronger than ever before.',
    author: 'Brother and Sister Williams',
    date: '2023-12-28',
    category: 'breakthrough',
    featured: false
  }
]

export const joinChurchLinks: JoinChurchLink[] = [
  {
    id: '1',
    title: 'Become a Worker',
    description: 'Join our dedicated team of church workers and serve in various ministries including ushering, technical support, and administrative roles.',
    href: '/join/worker',
    icon: '👥',
    category: 'worker'
  },
  {
    id: '2',
    title: 'Volunteer Opportunities',
    description: 'Make a difference in your community through our volunteer programs including outreach, children\'s ministry, and community service.',
    href: '/join/volunteer',
    icon: '🤝',
    category: 'volunteer'
  },
  {
    id: '3',
    title: 'Church Departments',
    description: 'Explore our various departments including choir, drama ministry, media team, and discover where your talents can be used for God\'s glory.',
    href: '/join/departments',
    icon: '🎵',
    category: 'department'
  },
  {
    id: '4',
    title: 'Eldership Program',
    description: 'Learn about our leadership development program and the path to becoming an elder or deacon in our church community.',
    href: '/join/eldership',
    icon: '👑',
    category: 'leadership'
  }
]

export const communityConfig: CommunityConfig = {
  houseFellowshipCenters,
  testimonies,
  joinChurchLinks
}