export interface PaymentRequest {
  donationType: string
  amount: number
  currency?: string
}

export interface PaymentResponse {
  success: boolean
  transactionId: string
  message?: string
  error?: string
}

export interface PaymentGateway {
  name: string
  processPayment: (request: PaymentRequest) => Promise<PaymentResponse>
}

export enum PaymentStatus {
  IDLE = 'idle',
  PROCESSING = 'processing',
  SUCCESS = 'success',
  ERROR = 'error'
}