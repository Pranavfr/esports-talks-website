'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { firebaseAnalytics } from '@/lib/firebase'

export default function SimpleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page view with Firebase
    firebaseAnalytics.trackPageView(pathname)
    
    // Track additional analytics data
    const analyticsData = {
      page: pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    // Track custom event with detailed data
    firebaseAnalytics.trackEvent('page_visit', analyticsData)

    // Track user engagement (time spent on page)
    const startTime = Date.now()
    return () => {
      const timeSpent = Date.now() - startTime
      firebaseAnalytics.trackUserEngagement(timeSpent)
    }
  }, [pathname])

  return null
} 