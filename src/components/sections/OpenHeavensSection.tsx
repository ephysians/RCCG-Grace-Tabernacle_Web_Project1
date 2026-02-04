import React, { useState, useCallback, useEffect } from 'react'
import { openHeavensConfig } from '../../config/openHeavens.config'
import { DevotionalItem } from '../../types/devotional'
import { DevotionalCard } from '../common/DevotionalCard'
import { Modal } from '../ui/Modal'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const OpenHeavensSection: React.FC = () => {
  const [devotionals, setDevotionals] = useState<DevotionalItem[]>(openHeavensConfig.devotionals)
  const [selectedDevotional, setSelectedDevotional] = useState<DevotionalItem | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLHeadingElement>({ triggerOnce: true })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation<HTMLDivElement>({ triggerOnce: true })

  const handleCardClick = useCallback((devotional: DevotionalItem) => {
    setSelectedDevotional(devotional)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedDevotional(null)
  }, [])

  const formatContent = useCallback((value: string) => {
    if (!value) {
      return ''
    }
    const lines = value.split('\n').map((line) => line.trim())
    const cleaned: string[] = []
    let previousBlank = false

    for (const line of lines) {
      if (!line) {
        if (!previousBlank) {
          cleaned.push('')
          previousBlank = true
        }
        continue
      }
      previousBlank = false
      cleaned.push(line)
    }

    return cleaned.join('\n')
  }, [])

  useEffect(() => {
    let isMounted = true

    const stripHtml = (value: string) =>
      value
        .replace(/<br\s*\/?>/gi, '\n')
        .replace(/<\/p>/gi, '\n\n')
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")

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

    const toDevotionalItem = (item: {
      id: number
      title: string
      date: string
      permalink: string
      excerpt: string
      message: string
    }): DevotionalItem => {
      const today = new Date()
      const { formatted, day } = formatDate(today.toISOString())
      return {
        id: `oh-${item.id}`,
        title: stripHtml(item.title),
        date: formatted,
        day,
        image: '/assets/images/open-heavens-devotional.jpg',
        excerpt: stripHtml(item.excerpt),
        content: stripHtml(item.message),
        permalink: item.permalink
      }
    }

    const fetchDevotional = async () => {
      setIsLoading(true)
      setErrorMessage(null)
      try {
        const todayResponse = await fetch('https://micromab.com/wp-json/openheavens/v1/today')
        if (todayResponse.ok) {
          const todayData = await todayResponse.json()
          console.log('Open Heavens raw (today):', todayData)
          const item = toDevotionalItem(todayData)
          if (isMounted) {
            setDevotionals([item])
            setLastUpdated(new Date())
          }
          return
        }

        const latestResponse = await fetch('https://micromab.com/wp-json/openheavens/v1/latest')
        if (!latestResponse.ok) {
          throw new Error('Open Heavens service unavailable')
        }
        const latestData = await latestResponse.json()
        console.log('Open Heavens raw (latest):', latestData)
        const item = toDevotionalItem(latestData)
        if (isMounted) {
          setDevotionals([item])
          setLastUpdated(new Date())
        }
      } catch (error) {
        if (isMounted) {
          setErrorMessage('Unable to load today’s devotional. Showing recent highlights.')
          setDevotionals([openHeavensConfig.devotionals[0]])
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    fetchDevotional()

    const handleRefresh = () => {
      fetchDevotional()
    }

    window.addEventListener('open-heavens-refresh', handleRefresh)

    return () => {
      window.removeEventListener('open-heavens-refresh', handleRefresh)
      isMounted = false
    }
  }, [])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" aria-labelledby="devotional-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 id="devotional-section-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans">
            Open Heavens
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Daily devotionals to strengthen your faith journey
          </p>
        </header>


        <div ref={cardsRef} className={`flex justify-center transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {(() => {
            const items = isLoading ? openHeavensConfig.devotionals : devotionals
            const devotional = items[0]
            if (!devotional) {
              return null
            }
            return (
              <div className="w-full max-w-md">
                <DevotionalCard devotional={devotional} onClick={handleCardClick} />
              </div>
            )
          })()}
        </div>

        
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          {errorMessage && (
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-md px-4 py-2 text-center font-sans">
              {errorMessage}
            </p>
          )}
          <button
            className="inline-flex items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-white text-sm font-semibold font-sans hover:bg-primary-700 transition-colors disabled:opacity-60"
            type="button"
            onClick={() => {
              const event = new Event('open-heavens-refresh')
              window.dispatchEvent(event)
            }}
            disabled={isLoading}
          >
            {isLoading ? 'Refreshing…' : 'Refresh'}
          </button>
          <span className="text-xs text-gray-500 font-sans">
            Last updated:{' '}
            {lastUpdated
              ? lastUpdated.toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: '2-digit'
                })
              : 'Not yet'}
          </span>
        </div>

        <p className="text-xs text-gray-500 mt-6 text-center font-sans">
          Devotional feed provided by Micromab Open Heavens.{' '}
          <a className="underline hover:text-gray-700" href="https://micromab.com" target="_blank" rel="noreferrer">
            Visit Micromab
          </a>
          .
        </p>
      </div>

      <Modal
        isOpen={!!selectedDevotional}
        onClose={handleCloseModal}
        title={selectedDevotional?.title || ''}
      >
        {selectedDevotional && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-sm text-gray-600 pb-4 border-b border-gray-200">
              <span className="font-medium bg-primary-50 text-primary-700 px-3 py-1 rounded-full font-sans">
                {selectedDevotional.day}
              </span>
              <time dateTime={selectedDevotional.date} className="font-medium font-sans">
                {selectedDevotional.date}
              </time>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed whitespace-normal font-sans">
                {formatContent(selectedDevotional.content)}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
