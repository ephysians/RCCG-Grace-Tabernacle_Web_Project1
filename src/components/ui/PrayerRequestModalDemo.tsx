import React, { useState } from 'react'
import { PrayerRequestModal } from './PrayerRequestModal'

/**
 * Demo component to test PrayerRequestModal functionality
 * This component can be used for testing and development purposes
 */
export const PrayerRequestModalDemo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Prayer Request Modal Demo
        </h2>
        <p className="text-gray-600 mb-6">
          Click the button below to test the prayer request modal functionality.
        </p>
        <button
          onClick={handleOpenModal}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Open Prayer Request Modal
        </button>
      </div>

      <PrayerRequestModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}