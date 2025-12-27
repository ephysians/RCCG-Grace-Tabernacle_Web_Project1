export interface PrayerRequest {
  name: string
  mobileNumber: string
  believerStatus: 'Born Again' | 'Not Born Again'
  message: string
}

export interface PrayerRequestFormData extends PrayerRequest {}