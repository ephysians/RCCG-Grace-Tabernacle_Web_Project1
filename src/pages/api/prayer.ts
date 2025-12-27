import { NextApiRequest, NextApiResponse } from 'next'
import { prayerRequestSchema } from '@/lib/validations/prayer'
import { prayerService } from '@/services/prayer.service'
import { ApiResponse } from '@/types/api'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    })
  }

  try {
    const validatedData = prayerRequestSchema.parse(req.body)
    const result = await prayerService.submitPrayerRequest(validatedData)
    
    return res.status(201).json({
      success: true,
      data: result,
      message: 'Prayer request submitted successfully'
    })
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: error.errors
      })
    }

    console.error('Prayer request submission error:', error)
    return res.status(500).json({
      success: false,
      error: 'Internal server error'
    })
  }
}