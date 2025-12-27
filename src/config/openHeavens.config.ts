import { DevotionalConfig } from '../types/devotional'
import { generateDevotionalDates } from '../utils/date'

const devotionalDates = generateDevotionalDates()

export const openHeavensConfig: DevotionalConfig = {
  devotionals: [
    {
      id: 'oh-001',
      title: 'Walking in Divine Purpose',
      date: devotionalDates[0].formattedDate,
      day: devotionalDates[0].dayName,
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      id: 'oh-002',
      title: 'The Power of Faith',
      date: devotionalDates[1].formattedDate,
      day: devotionalDates[1].dayName,
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel sapien vel nulla facilisis maximus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
    },
    {
      id: 'oh-003',
      title: 'Grace Upon Grace',
      date: devotionalDates[2].formattedDate,
      day: devotionalDates[2].dayName,
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Eget sit amet tellus cras adipiscing enim eu turpis egestas pretium.'
    },
    {
      id: 'oh-004',
      title: 'Strength in Weakness',
      date: devotionalDates[3].formattedDate,
      day: devotionalDates[3].dayName,
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.'
    },
    {
      id: 'oh-005',
      title: 'Divine Restoration',
      date: devotionalDates[4].formattedDate,
      day: devotionalDates[4].dayName,
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat.'
    },
    {
      id: 'oh-006',
      title: 'Abundant Life',
      date: devotionalDates[5].formattedDate,
      day: devotionalDates[5].dayName,
      image: '/assets/images/open-heavens-devotional.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.'
    }
  ]
}