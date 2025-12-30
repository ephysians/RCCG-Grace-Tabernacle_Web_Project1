export interface FAQItem {
  id: string
  title: string
  content: string
  category: 'visitors' | 'community'
}

export const FAQ_CATEGORIES = {
  visitors: {
    title: 'About Your Visit',
    description: 'Information for first-time visitors and newcomers'
  },
  community: {
    title: 'Our Faith & Community',
    description: 'Understanding our beliefs and community life'
  }
} as const

export const FAQ_DATA: FAQItem[] = [
  // Visitor Questions
  {
    id: 'non-christian-welcome',
    title: "I'm not a Christian—am I still allowed to attend?",
    content: "Absolutely. Grace Tabernacle is a place for all people. Whether you are a seeker, a skeptic, or just curious, our doors are wide open. We believe everyone deserves a safe space to explore faith and have an authentic encounter with Christ at their own pace.",
    category: 'visitors'
  },
  {
    id: 'service-expectations',
    title: 'What should I expect during a typical service?',
    content: "You can expect a vibrant atmosphere filled with heartfelt worship, followed by a practical, Bible-based message designed to help you navigate daily life. Our services generally last about 90 to 120 minutes, and we prioritize creating an environment where the presence of God is tangible.",
    category: 'visitors'
  },
  {
    id: 'dress-code',
    title: 'Is there a dress code at Grace Tabernacle?',
    content: "We are more interested in your presence than your wardrobe. You will see people in traditional attire, suits, and casual wear. Please wear whatever makes you feel comfortable and respectful; you will fit right in.",
    category: 'visitors'
  },
  {
    id: 'giving-obligation',
    title: 'Do I have to give money when I visit?',
    content: "No. Giving is an act of worship for our regular members who call Grace Tabernacle their home. As our guest, please do not feel any pressure or obligation to give. We are just happy to have you with us.",
    category: 'visitors'
  },
  {
    id: 'children-programs',
    title: 'What programs do you have for my children?',
    content: "We love families! We have a dedicated Children's Ministry where your little ones can learn about God in a safe, fun, and age-appropriate environment. Our teachers are vetted and passionate about helping children discover their own gifts from an early age.",
    category: 'visitors'
  },
  {
    id: 'belonging-imperfect',
    title: 'How do I "belong" if I don\'t have my life figured out yet?',
    content: "None of us are perfect. Grace Tabernacle is not a showcase for \"perfect people,\" but a hospital for the broken and a school for the curious. You belong here exactly as you are. We believe that belonging often comes before believing or behaving.",
    category: 'visitors'
  },

  // Community & Faith Questions
  {
    id: 'grace-meaning',
    title: 'What does "Grace" actually mean?',
    content: "In our context, Grace is the \"unmerited favor\" of God. It means that God's love and salvation are gifts given to us freely, not because we earned them, but because He loves us. Grace Tabernacle is a place where we celebrate this second chance at life every day.",
    category: 'community'
  },
  {
    id: 'jesus-encounter',
    title: 'Who is Jesus, and why is an "authentic encounter" important?',
    content: "We believe Jesus is the Son of God and the bridge between us and a purposeful life. An \"authentic encounter\" isn't about religion or rituals; it's a personal moment where you realize God's love for you individually. That moment changes everything.",
    category: 'community'
  },
  {
    id: 'discover-gifts',
    title: 'How can I discover my gifts and use them for God?',
    content: "We offer a \"Discovery Path\" or New Members class designed specifically to help you identify your unique talents. Once you find your area of strength, we provide opportunities for you to serve in various departments—from media and music to hospitality and community outreach.",
    category: 'community'
  },
  {
    id: 'house-fellowship',
    title: 'How do I join a "House Fellowship" or small group?',
    content: "Growth happens best in circles, not just rows. We have various small groups that meet during the week in different neighborhoods. You can visit our Information Desk after any service, and we will help you find a group near you.",
    category: 'community'
  },
  {
    id: 'bible-doubts',
    title: 'I have many doubts about the Bible; is there someone I can talk to?',
    content: "Yes. We encourage honest questions. You can reach out to our pastoral team or join our foundational classes where we discuss the \"hard questions\" of faith in a non-judgmental environment.",
    category: 'community'
  },
  {
    id: 'membership-process',
    title: 'How do I become a member of Grace Tabernacle?',
    content: "If you feel that God is calling you to make this your spiritual home, simply signify at the end of a service or speak with one of our ushers. We would be honored to guide you through our membership process and officially welcome you into the family!",
    category: 'community'
  }
]

export const FAQ_PAGE_CONFIG = {
  title: "Questions? We're here to help.",
  subtitle:
    "Whether you are visiting Grace Tabernacle for the first time or looking to take your next step in our community, we know you might have a few questions. We've gathered the most common ones here to help you feel right at home. If you don't find what you're looking for, please don't hesitate to reach out to us.",
  contactInfo: {
    email: 'info@rccggracetabernacle.org',
    phone: '+234 0803 359 5273',
    address:'200 Ikorodu Rd, Sunday St, Palmgrove, Lagos 100252, Lagos, Nigeria',
  },
} as const;