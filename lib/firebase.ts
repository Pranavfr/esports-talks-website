import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent } from 'firebase/analytics'

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAdMQEzZcC4nGPdrPyK4hskLQhdKCmDj3E",
  authDomain: "esports-talks.firebaseapp.com",
  projectId: "esports-talks",
  storageBucket: "esports-talks.firebasestorage.app",
  messagingSenderId: "238306349555",
  appId: "1:238306349555:web:5de918e2933a2af5e38286",
  measurementId: "G-J4JY6RQDVN"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Analytics
let analytics: any = null
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app)
    console.log('✅ Firebase Analytics initialized successfully')
  } catch (error) {
    console.log('❌ Firebase Analytics not available:', error)
  }
}

// Analytics functions
export const firebaseAnalytics = {
  // Track page view
  trackPageView: (page: string) => {
    if (analytics) {
      logEvent(analytics, 'page_view', {
        page_title: page,
        page_location: window.location.href
      })
      console.log('✅ Firebase Analytics: Page view tracked:', page)
    } else {
      console.log('❌ Firebase Analytics not available')
    }
  },

  // Track custom event
  trackEvent: (eventName: string, parameters?: Record<string, any>) => {
    if (analytics) {
      logEvent(analytics, eventName, parameters)
      console.log('✅ Firebase Analytics: Event tracked:', eventName, parameters)
    } else {
      console.log('❌ Firebase Analytics not available')
    }
  },

  // Track user engagement
  trackUserEngagement: (engagementTimeMs: number) => {
    if (analytics) {
      logEvent(analytics, 'user_engagement', {
        engagement_time_msec: engagementTimeMs
      })
      console.log('✅ Firebase Analytics: User engagement tracked')
    }
  }
}

export default app 