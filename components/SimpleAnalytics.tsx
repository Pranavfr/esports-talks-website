'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { firebaseAnalytics } from '@/lib/firebase'

// Type definitions for browser APIs
interface NavigatorWithConnection extends Navigator {
  connection?: {
    effectiveType?: string
  }
}

interface PerformanceWithMemory extends Performance {
  memory?: {
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  }
}

interface PerformanceWithPaint extends Performance {
  getEntriesByType(type: 'paint'): PerformanceEntry[]
}

export default function SimpleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Don't track admin pages
    if (pathname.startsWith('/admin')) {
      return
    }

    // Generate a unique session ID for this visit
    const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    
    // Enhanced analytics data
    const analyticsData = {
      page: pathname,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenSize: `${window.screen.width}x${window.screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      sessionId,
      // Additional data points
      language: navigator.language,
      platform: navigator.platform,
      cookieEnabled: navigator.cookieEnabled,
      onLine: navigator.onLine,
      connectionType: (navigator as NavigatorWithConnection).connection?.effectiveType || 'unknown',
      memoryInfo: (performance as PerformanceWithMemory).memory ? {
        usedJSHeapSize: (performance as PerformanceWithMemory).memory!.usedJSHeapSize,
        totalJSHeapSize: (performance as PerformanceWithMemory).memory!.totalJSHeapSize,
        jsHeapSizeLimit: (performance as PerformanceWithMemory).memory!.jsHeapSizeLimit
      } : null,
      performanceMetrics: {
        loadTime: performance.timing.loadEventEnd - performance.timing.navigationStart,
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        firstPaint: (performance as PerformanceWithPaint).getEntriesByType('paint')[0]?.startTime || 0
      },
      // Geolocation data (if available)
      location: null as { latitude: number; longitude: number; accuracy: number } | null,
      // Device capabilities
      deviceCapabilities: {
        touchSupport: 'ontouchstart' in window,
        webGLSupport: !!window.WebGLRenderingContext,
        serviceWorkerSupport: 'serviceWorker' in navigator,
        pushNotificationSupport: 'PushManager' in window
      }
    }

    // Try to get location data automatically (without permission prompt)
    if (navigator.geolocation) {
      // Use getCurrentPosition with low accuracy and short timeout to avoid permission prompts
      navigator.geolocation.getCurrentPosition(
        (position) => {
          analyticsData.location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          }
          // Store analytics data with location
          firebaseAnalytics.storeAnalyticsData(analyticsData)
        },
        () => {
          // If location access is denied or unavailable, store without location
          analyticsData.location = null
          firebaseAnalytics.storeAnalyticsData(analyticsData)
        },
        { 
          timeout: 2000, 
          enableHighAccuracy: false,
          maximumAge: 300000 // 5 minutes cache
        }
      )
    } else {
      // No geolocation support, store without location
      analyticsData.location = null
      firebaseAnalytics.storeAnalyticsData(analyticsData)
    }

    // Track custom event for page visit
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