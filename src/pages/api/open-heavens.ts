import type { NextApiRequest, NextApiResponse } from 'next'

import { DevotionalItem } from '@/types/devotional'

type OpenHeavensApiItem = {
  id: number
  title: string
  date: string
  permalink: string
  excerpt: string
  message: string
}

const stripHtml = (value?: string | null) => {
  if (!value) {
    return ''
  }
  return value
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

const formatDate = (value: string) => {
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) {
    return { formatted: value, day: value }
  }
  return {
    formatted: parsed.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }),
    day: parsed.toLocaleDateString('en-US', { weekday: 'long' })
  }
}

const toDevotionalItem = (item: OpenHeavensApiItem): DevotionalItem => {
  const { formatted, day } = formatDate(item.date)
  return {
    id: `oh-${item.id}`,
    title: stripHtml(item.title) || 'Open Heavens Devotional',
    date: formatted,
    day,
    image: '/assets/images/open-heavens-devotional.jpg',
    excerpt: stripHtml(item.excerpt),
    content: stripHtml(item.message),
    permalink: item.permalink
  }
}

const formatApiDate = (value: Date) => {
  const year = value.getFullYear()
  const month = String(value.getMonth() + 1).padStart(2, '0')
  const day = String(value.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const fetchJson = async (url: string) => {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'RCCG-OpenHeavens/1.0 (+https://rccg-grace-tabernacle.local)'
      }
    })
    return response
  } finally {
    clearTimeout(timeoutId)
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  try {
    const now = new Date()
    const dates = Array.from({ length: 6 }, (_, index) => {
      const date = new Date(now)
      date.setDate(now.getDate() - index)
      return formatApiDate(date)
    })

    const responses = await Promise.all(
      dates.map(async (date) => {
        const response = await fetchJson(`https://micromab.com/wp-json/openheavens/v1/date/${date}`)
        if (!response || !response.ok) {
          return null
        }
        const data: OpenHeavensApiItem = await response.json()
        return data
      })
    )

    const items = responses
      .filter((item): item is OpenHeavensApiItem => Boolean(item))
      .map(toDevotionalItem)

    if (items.length === 0) {
      const latestResponse = await fetchJson('https://micromab.com/wp-json/openheavens/v1/latest')
      if (!latestResponse || !latestResponse.ok) {
        throw new Error('Open Heavens service unavailable')
      }
      const latestData: OpenHeavensApiItem = await latestResponse.json()
      items.push(toDevotionalItem(latestData))
    }

    return res.status(200).json({ items })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({
      message: 'Open Heavens service unavailable',
      details: message
    })
  }
}
