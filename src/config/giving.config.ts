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
    description:
      'Fulfill your biblical calling to give back. Your faithful tithing supports our local congregation, daily operations, and community outreach.',
    image: '/assets/images/Tithe.png',
  },
  {
    id: 'offering',
    name: 'Offering',
    description:
      'Give a freewill offering beyond your tithe to support special church initiatives, facility updates, and urgent community needs',
    image: '/assets/images/offering.png',
  },
  {
    id: 'sacrificial-giving',
    name: 'First Fruit',
    description:
    'Honor God with the first fruits of your income to sustain our church mission, facilities, and regular ministries.',
    image: '/assets/images/Sowing sacrificially.png',
  },
  {
    id: 'building-project',
    name: 'Building Project',
    description:
      'Support our churches building projects to expand our facilities and better serve our community.',
    image: '/assets/images/church fund raising.png',
  },
];