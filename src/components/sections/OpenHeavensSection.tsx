import React, { useState, useCallback } from 'react'
import { openHeavensConfig } from '../../config/openHeavens.config'
import { DevotionalItem } from '../../types/devotional'
import { DevotionalCard } from '../common/DevotionalCard'
import { Modal } from '../ui/Modal'

export const OpenHeavensSection: React.FC = () => {
  const [selectedDevotional, setSelectedDevotional] = useState<DevotionalItem | null>(null)

  const handleCardClick = useCallback((devotional: DevotionalItem) => {
    setSelectedDevotional(devotional)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedDevotional(null)
  }, [])

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="devotional-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="devotional-section-title" className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Open Heavens
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-sans">
            Daily devotionals to strengthen your faith journey
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {openHeavensConfig.devotionals.map((devotional) => (
            <DevotionalCard
              key={devotional.id}
              devotional={devotional}
              onClick={handleCardClick}
            />
          ))}
        </div>
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
              <div className="text-gray-700 leading-relaxed whitespace-pre-line font-sans">
                {selectedDevotional.content}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}