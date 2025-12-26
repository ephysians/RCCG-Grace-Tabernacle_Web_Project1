import { DevotionalConfig } from '../types/devotional'

const generateDevotionalDates = (): string[] => {
  const dates: string[] = []
  const today = new Date()
  
  for (let i = 0; i < 6; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    dates.push(date.toISOString().split('T')[0])
  }
  
  return dates
}

const getDayName = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

const formatDisplayDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}

const dates = generateDevotionalDates()

export const openHeavensConfig: DevotionalConfig = {
  devotionals: [
    {
      id: 'oh-001',
      title: 'Walking in Divine Purpose',
      date: formatDisplayDate(dates[0]),
      day: getDayName(dates[0]),
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      id: 'oh-002',
      title: 'The Power of Faith',
      date: formatDisplayDate(dates[1]),
      day: getDayName(dates[1]),
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sapien vel nulla facilisis maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 'oh-003',
      title: 'Grace Upon Grace',
      date: formatDisplayDate(dates[2]),
      day: getDayName(dates[2]),
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Eget sit amet tellus cras adipiscing enim eu turpis egestas pretium.'
    },
    {
      id: 'oh-004',
      title: 'Strength in Weakness',
      date: formatDisplayDate(dates[3]),
      day: getDayName(dates[3]),
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    },
    {
      id: 'oh-005',
      title: 'Divine Restoration',
      date: formatDisplayDate(dates[4]),
      day: getDayName(dates[4]),
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.'
    },
    {
      id: 'oh-006',
      title: 'Abundant Life',
      date: formatDisplayDate(dates[5]),
      day: getDayName(dates[5]),
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.'
    }
  ]
}