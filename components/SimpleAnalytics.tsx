'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { analyticsApi } from '@/lib/supabase'

export default function SimpleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      const analyticsData = {
        page: pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }

      try {
        // Store in Supabase
        await analyticsApi.insertEvent(analyticsData)
        console.log('Analytics Event stored:', analyticsData)
      } catch {
        // Fallback to API endpoint
        console.log('Analytics Event (fallback):', analyticsData)
        fetch('/api/analytics', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(analyticsData),
        }).catch(() => {
          console.log('Analytics endpoint not available')
        })
      }
    }

    trackPageView()
  }, [pathname])

  return null
} 