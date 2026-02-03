export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
  details?: unknown
}

export interface PrayerRequestResponse {
  id: string
  submittedAt: string
}