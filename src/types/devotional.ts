export interface DevotionalItem {
  id: string
  title: string
  date: string
  day: string
  image: string
  content: string
}

export interface DevotionalConfig {
  devotionals: DevotionalItem[]
}