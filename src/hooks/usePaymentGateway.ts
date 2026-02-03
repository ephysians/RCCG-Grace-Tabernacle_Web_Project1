import { useState, useCallback } from 'react'
import { PaymentRequest, PaymentResponse, PaymentStatus } from '@/types/payment'

// Placeholder gateway implementation
const createPlaceholderGateway = () => ({
  name: 'placeholder',
  processPayment: async (request: PaymentRequest): Promise<PaymentResponse> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulate success response
    return {
      success: true,
      transactionId: `TXN_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      message: 'Payment processed successfully'
    }
  }
})

// Gateway registry for future expansion
const gatewayRegistry = {
  placeholder: createPlaceholderGateway(),
  // Future gateways:
  // hydrogenPay: createHydrogenPayGateway(),
  // interswitch: createInterswitchGateway(),
}

export const usePaymentGateway = (gatewayName: keyof typeof gatewayRegistry = 'placeholder') => {
  const [status, setStatus] = useState<PaymentStatus>(PaymentStatus.IDLE)
  const [error, setError] = useState<string | null>(null)
  const [transactionId, setTransactionId] = useState<string | null>(null)

  const processPayment = useCallback(async (donationType: string, amount: number): Promise<PaymentResponse> => {
    setStatus(PaymentStatus.PROCESSING)
    setError(null)
    setTransactionId(null)

    try {
      const gateway = gatewayRegistry[gatewayName]
      const request: PaymentRequest = {
        donationType,
        amount,
        currency: 'NGN'
      }

      const response = await gateway.processPayment(request)

      if (response.success) {
        setStatus(PaymentStatus.SUCCESS)
        setTransactionId(response.transactionId)
      } else {
        setStatus(PaymentStatus.ERROR)
        setError(response.error || 'Payment failed')
      }

      return response
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Payment processing failed'
      setStatus(PaymentStatus.ERROR)
      setError(errorMessage)
      
      return {
        success: false,
        transactionId: '',
        error: errorMessage
      }
    }
  }, [gatewayName])

  const reset = useCallback(() => {
    setStatus(PaymentStatus.IDLE)
    setError(null)
    setTransactionId(null)
  }, [])

  return {
    processPayment,
    status,
    error,
    transactionId,
    reset,
    isProcessing: status === PaymentStatus.PROCESSING,
    isSuccess: status === PaymentStatus.SUCCESS,
    isError: status === PaymentStatus.ERROR
  }
}