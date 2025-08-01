'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function SimpleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view
    const trackPageView = () => {
      const analyticsData = {
        page: pathname,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer,
        screenSize: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
      }

      // Send to your analytics endpoint (you can create this later)
      console.log('Analytics Event:', analyticsData)
      
      // For now, we'll just log it. You can send this to your backend later
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analyticsData),
      }).catch(err => {
        // Silently fail if analytics endpoint doesn't exist
        console.log('Analytics endpoint not available')
      })
    }

    trackPageView()
  }, [pathname])

  return null
} 