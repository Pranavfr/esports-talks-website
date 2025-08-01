'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { firebaseAnalytics } from '@/lib/firebase'

export default function SimpleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Generate a unique session ID for this visit
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    
    // Track page view with Firebase Analytics
    firebaseAnalytics.trackPageView(pathname)

    // Track additional analytics data
    const analyticsData = {
      page: pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      sessionId
    }

    // Store analytics data in Firestore
    firebaseAnalytics.storeAnalyticsData(analyticsData)

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