import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { prayerRequestSchema, PrayerRequestFormData } from '@/lib/validations/prayer'
import { useCallback } from 'react'

interface SubmitResult {
  success: boolean
  message: string
}

export const usePrayerRequestForm = () => {
  const form = useForm<PrayerRequestFormData>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues: {
      name: '',
      mobileNumber: '',
      believerStatus: undefined,
      message: ''
    },
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = useCallback(async (data: PrayerRequestFormData): Promise<SubmitResult> => {
    try {
      // Validate data one more time before submission
      prayerRequestSchema.parse(data)
      
      // Simulate API call with realistic delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Simulate occasional failures for testing
      if (Math.random() < 0.1) {
        throw new Error('Network error')
      }
      
      // Reset form on successful submission
      form.reset()
      
      return { 
        success: true, 
        message: 'Your prayer request has been submitted successfully. We will pray for you!' 
      }
    } catch (error) {
      let errorMessage = 'Failed to submit prayer request. Please try again.'
      
      if (error instanceof Error) {
        if (error.message.includes('Network')) {
          errorMessage = 'Network error. Please check your connection and try again.'
        } else if (error.message.includes('validation')) {
          errorMessage = 'Please check your input and try again.'
        }
      }
      
      return { success: false, message: errorMessage }
    }
  }, [form])

  return {
    form,
    onSubmit,
    isSubmitting: form.formState.isSubmitting,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
    isDirty: form.formState.isDirty
  }
}

export type { SubmitResult }
