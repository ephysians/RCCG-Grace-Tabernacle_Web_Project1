export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
  details?: any
}

export interface PrayerRequestResponse {
  id: string
  submittedAt: string
}