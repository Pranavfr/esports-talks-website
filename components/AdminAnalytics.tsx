'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { firebaseAnalytics } from '@/lib/firebase'

export default function AdminAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Only track admin pages
    if (!pathname.startsWith('/admin')) {
      return
    }

    // Generate a unique session ID for this visit
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    
    // Track admin page visit (for recent visits display only)
    const analyticsData = {
      page: pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      sessionId,
      isAdminPage: true // Flag to identify admin pages
    }

    // Don't store admin page visits in the main analytics collection
    // This prevents admin visits from affecting the total counts
    // Only track custom events for admin pages
    firebaseAnalytics.trackEvent('admin_page_visit', analyticsData)

    // Track user engagement (time spent on page)
    const startTime = Date.now()
    return () => {
      const timeSpent = Date.now() - startTime
      firebaseAnalytics.trackUserEngagement(timeSpent)
    }
  }, [pathname])

  return null
} 