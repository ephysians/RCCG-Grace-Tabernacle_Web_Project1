export const believerStatusOptions = [
  { value: 'Born Again', label: 'Born Again' },
  { value: 'Not Born Again', label: 'Not Born Again' }
] as const

export const prayerRequestConfig = {
  maxMessageLength: 3000,
  fields: {
    name: {
      label: 'Full Name',
      placeholder: 'Enter your full name',
      required: true
    },
    mobileNumber: {
      label: 'Active Mobile Number',
      placeholder: 'Enter your mobile number',
      required: true
    },
    believerStatus: {
      label: 'Believer Status',
      placeholder: 'Select your status',
      required: true,
      options: believerStatusOptions
    },
    message: {
      label: 'Prayer Request Message',
      placeholder: 'Share your prayer request with us...',
      required: true,
      maxLength: 3000
    }
  }
}