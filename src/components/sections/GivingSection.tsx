import React, { useState, useCallback } from 'react'
import Image from 'next/image'
import { givingConfig, GivingItem } from '@/config/giving.config'
import { GivingCard } from '@/components/common/GivingCard'
import { Modal } from '@/components/ui/Modal'
import { usePaymentGateway } from '@/hooks/usePaymentGateway'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export const GivingSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GivingItem | null>(null)
  const [amount, setAmount] = useState<string>('')
  const { processPayment, isProcessing, error, reset } = usePaymentGateway()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ triggerOnce: true })
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ triggerOnce: true })

  const handleCardClick = useCallback((item: GivingItem) => {
    setSelectedItem(item)
  }, [])

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null)
    setAmount('')
    reset()
  }, [reset])

  const handleProceedToPayment = useCallback(async () => {
    if (!selectedItem || !amount || parseFloat(amount) <= 0) return
    
    const response = await processPayment(selectedItem.id, parseFloat(amount))
    
    if (response.success) {
      // Payment successful - could show success message or redirect
      handleCloseModal()
    }
    // Error handling is managed by the hook
  }, [selectedItem, amount, processPayment, handleCloseModal])

  return (
    <section
      id="giving"
      className="py-16 bg-gray-50 dark:bg-gray-800"
      aria-labelledby="giving-section-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2
            id="giving-section-title"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 font-sans"
          >
            Give & Support
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
            Your generous contributions help us continue our mission and serve
            our community.
          </p>
        </header>

        <div ref={cardsRef} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {givingConfig.map(item => (
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
              <Image
                src={selectedItem.image}
                alt={selectedItem.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover font-sans"
              />
            </div>
            <div>
              <p className="text-gray-700 leading-relaxed mb-6 font-sans">
                {selectedItem.description}
              </p>

              <div className="mb-6">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700 mb-2 font-sans"
                >
                  Amount (NGN)
                </label>
                <input
                  id="amount"
                  type="number"
                  min="1"
                  step="0.01"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  aria-describedby={error ? 'payment-error' : undefined}
                  disabled={isProcessing}
                />
              </div>

              {error && (
                <div
                  id="payment-error"
                  className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                </div>
              )}

              <button
                onClick={handleProceedToPayment}
                disabled={isProcessing || !amount || parseFloat(amount) <= 0}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                aria-label={`Proceed to payment for ${selectedItem.name} with amount ${amount} NGN`}
              >
                {isProcessing ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white font-sans"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing Payment...
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
  );
}