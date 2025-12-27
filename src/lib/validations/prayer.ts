import { z } from 'zod'

// Enhanced mobile number validation
const mobileNumberRegex = /^(\+?[1-9]\d{1,14}|\(?[0-9]{3}\)?[-. ]?[0-9]{3}[-. ]?[0-9]{4})$/

export const prayerRequestSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  
  mobileNumber: z
    .string()
    .min(1, 'Mobile number is required')
    .regex(mobileNumberRegex, 'Please enter a valid mobile number')
    .transform(val => val.replace(/\D/g, '')) // Remove non-digits for processing
    .refine(val => val.length >= 10 && val.length <= 15, {
      message: 'Mobile number must be between 10-15 digits'
    }),
  
  believerStatus: z
    .enum(['Born Again', 'Not Born Again'], {
      required_error: 'Please select your believer status'
    }),
  
  message: z
    .string()
    .min(1, 'Prayer request message is required')
    .min(10, 'Message must be at least 10 characters')
    .max(3000, 'Message must be less than 3000 characters')
    .refine(val => val.trim().length >= 10, {
      message: 'Message must contain at least 10 meaningful characters'
    })
})

export type PrayerRequestFormData = z.infer<typeof prayerRequestSchema>