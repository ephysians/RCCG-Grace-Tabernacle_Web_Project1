export interface AboutPageConfig {
  title: string
  description: string
  shortContent: string
  path: string
}

export const aboutConfig: Record<string, AboutPageConfig> = {
  whoWeAre: {
    title: 'Who We Are | RCCG Grace Tabernacle',
    description: 'RCCG Grace Tabernacle is a vibrant Christian community committed to spreading the Gospel, nurturing believers, and serving our local community with love and purpose.',
    shortContent: 'RCCG Grace Tabernacle is a vibrant Christian community committed to spreading the Gospel, nurturing believers, and serving our local community with love and purpose.',
    path: '/about/who-we-are'
  },
  visionMission: {
    title: 'Our Vision & Mission | RCCG Grace Tabernacle',
    description: 'Our vision is to make heaven and take as many people as possible with us. Our mission is to spread the Gospel of Jesus Christ through worship, discipleship, and community service.',
    shortContent: 'Our vision is to make heaven and take as many people as possible with us. Our mission is to spread the Gospel of Jesus Christ through worship, discipleship, and community service.',
    path: '/about/vision-mission'
  },
  beliefs: {
    title: 'Our Beliefs | RCCG Grace Tabernacle',
    description: 'We believe in the Trinity, salvation through Jesus Christ, the authority of Scripture, and the power of the Holy Spirit to transform lives and communities.',
    shortContent: 'We believe in the Trinity, salvation through Jesus Christ, the authority of Scripture, and the power of the Holy Spirit to transform lives and communities.',
    path: '/about/beliefs'
  },
  leadership: {
    title: 'Leadership | RCCG Grace Tabernacle',
    description: 'Our leadership is committed to servant leadership, biblical integrity, and shepherding the flock with wisdom, love, and accountability.',
    shortContent: 'Our leadership is committed to servant leadership, biblical integrity, and shepherding the flock with wisdom, love, and accountability.',
    path: '/about/leadership'
  },
  ourStory: {
    title: 'Our Story | RCCG Grace Tabernacle',
    description: 'From humble beginnings to a thriving community, discover how God has faithfully guided RCCG Grace Tabernacle through seasons of growth and transformation.',
    shortContent: 'From humble beginnings to a thriving community, discover how God has faithfully guided RCCG Grace Tabernacle through seasons of growth and transformation.',
    path: '/about/our-story'
  },
  values: {
    title: 'Our Values | RCCG Grace Tabernacle',
    description: 'Our core values of faith, love, integrity, excellence, and service guide everything we do as we seek to honor God and serve others.',
    shortContent: 'Our core values of faith, love, integrity, excellence, and service guide everything we do as we seek to honor God and serve others.',
    path: '/about/values'
  },
  affiliation: {
    title: 'Our Affiliation | RCCG Grace Tabernacle',
    description: 'As a parish of the Redeemed Christian Church of God, we are part of a global movement committed to holiness, evangelism, and church planting.',
    shortContent: 'As a parish of the Redeemed Christian Church of God, we are part of a global movement committed to holiness, evangelism, and church planting.',
    path: '/about/affiliation'
  }
}

export const aboutNavigationItems = [
  { label: 'Who We Are', href: aboutConfig.whoWeAre.path },
  { label: 'Our Vision & Mission', href: aboutConfig.visionMission.path },
  { label: 'Our Beliefs', href: aboutConfig.beliefs.path },
  { label: 'Leadership', href: aboutConfig.leadership.path },
  { label: 'Our Story', href: aboutConfig.ourStory.path },
  { label: 'Our Values', href: aboutConfig.values.path },
  { label: 'Our Affiliation', href: aboutConfig.affiliation.path }
]