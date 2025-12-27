/**
 * Date utilities for devotional feature
 */

export interface DevotionalDate {
  dateString: string
  dayName: string
  formattedDate: string
}

/**
 * Generate devotional dates for today and previous 5 days
 */
export const generateDevotionalDates = (): DevotionalDate[] => {
  const dates: DevotionalDate[] = []
  const today = new Date()
  
  for (let i = 0; i < 6; i++) {
    const date = new Date(today)
    date.setDate(today.getDate() - i)
    
    dates.push({
      dateString: date.toISOString().split('T')[0],
      dayName: date.toLocaleDateString('en-US', { weekday: 'long' }),
      formattedDate: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      })
    })
  }
  
  return dates
}

/**
 * Get day name from date string
 */
export const getDayName = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { weekday: 'long' })
}

/**
 * Format date for display
 */
export const formatDisplayDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}