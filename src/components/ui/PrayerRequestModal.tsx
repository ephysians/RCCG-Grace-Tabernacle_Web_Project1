import React, { useEffect, useState, useCallback } from 'react'
import { Modal } from '@/components/ui/Modal'
import { usePrayerRequestForm } from '@/hooks/usePrayerRequestForm'
import { prayerRequestConfig } from '@/config/prayer.config'

interface PrayerRequestModalProps {
  isOpen: boolean
  onClose: () => void
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose
}) => {
  const { form, onSubmit, isSubmitting, errors } = usePrayerRequestForm()
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [messageLength, setMessageLength] = useState(0)

  const handleSubmit = useCallback(async (data: any) => {
    setSubmitStatus(null)
    const result = await onSubmit(data)
    setSubmitStatus({
      type: result.success ? 'success' : 'error',
      message: result.message
    })
    
    if (result.success) {
      setTimeout(() => {
        handleClose()
      }, 2000)
    }
  }, [onSubmit])

  const handleClose = useCallback(() => {
    form.reset()
    setSubmitStatus(null)
    setMessageLength(0)
    onClose()
  }, [form, onClose])

  const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageLength(e.target.value.length)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setSubmitStatus(null)
      setMessageLength(0)
    }
  }, [isOpen])

  useEffect(() => {
    const subscription = form.watch((value) => {
      setMessageLength(value.message?.length || 0)
    })
    return () => subscription.unsubscribe()
  }, [form])

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Submit Prayer Request"
    >
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6" noValidate>
        {/* Name Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            {prayerRequestConfig.fields.name.label}
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            {...form.register('name')}
            placeholder={prayerRequestConfig.fields.name.placeholder}
            className={`w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed ${
              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-describedby={errors.name ? 'name-error' : undefined}
            aria-invalid={!!errors.name}
            disabled={isSubmitting}
            autoComplete="name"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Mobile Number Field */}
        <div className="space-y-2">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
            {prayerRequestConfig.fields.mobileNumber.label}
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          </label>
          <input
            id="mobileNumber"
            type="tel"
            {...form.register('mobileNumber')}
            placeholder={prayerRequestConfig.fields.mobileNumber.placeholder}
            className={`w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed ${
              errors.mobileNumber ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-describedby={errors.mobileNumber ? 'mobile-error' : undefined}
            aria-invalid={!!errors.mobileNumber}
            disabled={isSubmitting}
            autoComplete="tel"
          />
          {errors.mobileNumber && (
            <p id="mobile-error" className="text-sm text-red-600" role="alert">
              {errors.mobileNumber.message}
            </p>
          )}
        </div>

        {/* Believer Status Field */}
        <div className="space-y-2">
          <label htmlFor="believerStatus" className="block text-sm font-medium text-gray-700">
            {prayerRequestConfig.fields.believerStatus.label}
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          </label>
          <select
            id="believerStatus"
            {...form.register('believerStatus')}
            className={`w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed ${
              errors.believerStatus ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-describedby={errors.believerStatus ? 'status-error' : undefined}
            aria-invalid={!!errors.believerStatus}
            disabled={isSubmitting}
          >
            <option value="">{prayerRequestConfig.fields.believerStatus.placeholder}</option>
            {prayerRequestConfig.fields.believerStatus.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.believerStatus && (
            <p id="status-error" className="text-sm text-red-600" role="alert">
              {errors.believerStatus.message}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            {prayerRequestConfig.fields.message.label}
            <span className="text-red-500 ml-1" aria-label="required">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            {...form.register('message', {
              onChange: handleMessageChange
            })}
            placeholder={prayerRequestConfig.fields.message.placeholder}
            maxLength={prayerRequestConfig.maxMessageLength}
            className={`w-full px-3 py-2 border rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical disabled:bg-gray-50 disabled:cursor-not-allowed ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
            }`}
            aria-describedby={`${errors.message ? 'message-error ' : ''}message-help`}
            aria-invalid={!!errors.message}
            disabled={isSubmitting}
          />
          <div className="flex justify-between items-start">
            <div className="flex-1">
              {errors.message && (
                <p id="message-error" className="text-sm text-red-600" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
            <p id="message-help" className={`text-sm ml-2 ${
              messageLength > prayerRequestConfig.maxMessageLength * 0.9 ? 'text-orange-600' : 'text-gray-500'
            }`}>
              {messageLength}/{prayerRequestConfig.maxMessageLength}
            </p>
          </div>
        </div>

        {/* Submit Status */}
        {submitStatus && (
          <div className={`p-4 rounded-lg border ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 border-green-200 text-green-800' 
              : 'bg-red-50 border-red-200 text-red-800'
          }`} role="alert" aria-live="polite">
            <div className="flex items-center">
              {submitStatus.type === 'success' ? (
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-5 h-5 mr-2 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
              <p className="text-sm font-medium">
                {submitStatus.message}
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-600 flex items-center justify-center min-h-[48px]"
            aria-label={isSubmitting ? 'Submitting prayer request' : 'Submit prayer request'}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              'Submit Prayer Request'
            )}
          </button>
        </div>
      </form>
    </Modal>
  )
}