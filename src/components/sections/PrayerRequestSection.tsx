import React, { useState, useCallback } from 'react'
import { PrayerRequestModal } from '@/components/ui/PrayerRequestModal'

export const PrayerRequestSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <section className="py-16 bg-primary-50 border-b border-gray-200" aria-labelledby="prayer-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="prayer-section-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-sans">
            Prayer Requests
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-sans">
            We believe in the power of prayer. Share your prayer requests with our community and let us stand with you in faith.
          </p>
          <button
            onClick={handleOpenModal}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors font-sans"
            aria-label="Open prayer request form"
          >
            Submit Prayer Request
          </button>
        </div>
      </div>

      <PrayerRequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  )
}