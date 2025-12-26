import { useState } from 'react'
import { openHeavensConfig } from '../../config/openHeavens.config'
import { DevotionalItem } from '../../types/devotional'
import { DevotionalCard } from '../common/DevotionalCard'
import { Modal } from '../ui/Modal'

export const OpenHeavensSection: React.FC = () => {
  const [selectedDevotional, setSelectedDevotional] = useState<DevotionalItem | null>(null)

  const handleCardClick = (devotional: DevotionalItem) => {
    setSelectedDevotional(devotional)
  }

  const handleCloseModal = () => {
    setSelectedDevotional(null)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Open Heavens
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Daily devotionals to strengthen your faith journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="font-medium">{selectedDevotional.day}</span>
              <span>{selectedDevotional.date}</span>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {selectedDevotional.content}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}