import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // Log analytics data (you can store this in a database later)
    console.log('Analytics Event:', {
      page: data.page,
      timestamp: data.timestamp,
      userAgent: data.userAgent,
      referrer: data.referrer,
      screenSize: data.screenSize,
      timezone: data.timezone
    })

    // For now, we'll just log it. In the future, you can:
    // 1. Store in a database (Supabase, MongoDB, etc.)
    // 2. Send to external analytics service
    // 3. Create admin dashboard to view analytics

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json({ error: 'Failed to track analytics' }, { status: 500 })
  }
} 