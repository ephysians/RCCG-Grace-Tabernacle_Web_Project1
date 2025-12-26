import React, { useState, useCallback } from 'react'
import { givingConfig, GivingItem } from '@/config/giving.config'
import { GivingCard } from '@/components/common/GivingCard'
import { Modal } from '@/components/ui/Modal'

export const GivingSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GivingItem | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleCardClick = useCallback((item: GivingItem) => {
    setSelectedItem(item)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null)
    setIsProcessing(false)
  }, [])

  const handleProceedToPayment = useCallback(async () => {
    if (!selectedItem) return
    
    setIsProcessing(true)
    try {
      // Placeholder function for payment integration
      console.log(`Proceeding to payment for: ${selectedItem.name}`)
      // TODO: Implement payment gateway integration
      // await paymentService.initializePayment(selectedItem)
      
      // Simulate processing delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For now, just log and close modal
      handleCloseModal()
    } catch (error) {
      console.error('Payment initialization failed:', error)
      // TODO: Show error message to user
    } finally {
      setIsProcessing(false)
    }
  }, [selectedItem, handleCloseModal])

  return (
    <section className="py-16 bg-gray-50" aria-labelledby="giving-section-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="giving-section-title" className="text-3xl font-bold text-gray-900 mb-4">
            Give & Support
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous contributions help us continue our mission and serve our community.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {givingConfig.map((item) => (
            <GivingCard
              key={item.id}
              item={item}
              onClick={() => handleCardClick(item)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedItem}
        onClose={handleCloseModal}
        title={selectedItem?.name || ''}
      >
        {selectedItem && (
          <div className="space-y-6">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedItem.description}
              </p>
              <button
                onClick={handleProceedToPayment}
                disabled={isProcessing}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label={`Proceed to payment for ${selectedItem.name}`}
              >
                {isProcessing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Proceed to Payment'
                )}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}