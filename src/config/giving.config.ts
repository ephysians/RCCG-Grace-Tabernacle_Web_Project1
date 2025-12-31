export interface GivingItem {
  id: string
  name: string
  description: string
  image: string
}

export const givingConfig: GivingItem[] = [
  {
    id: 'tithe',
    name: 'Tithe',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    image: '/assets/images/Tithe.png'
  },
  {
    id: 'offering',
    name: 'Offering',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/assets/images/offering.png'
  },
  {
    id: 'sacrificial-giving',
    name: 'Sacrificial Giving',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
    image: '/assets/images/Sowing sacrificially.png'
  },
  {
    id: 'building-project',
    name: 'Building Project',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.',
    image: '/assets/images/church fund raising.png'
  }
]