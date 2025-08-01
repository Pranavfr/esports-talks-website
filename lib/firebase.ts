import { initializeApp } from 'firebase/app'
import { getAnalytics, logEvent, Analytics } from 'firebase/analytics'
import { getFirestore, collection, addDoc, getDocs, query, orderBy, limit } from 'firebase/firestore'

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
let analytics: Analytics | null = null
if (typeof window !== 'undefined') {
  try {
    analytics = getAnalytics(app)
    console.log('✅ Firebase Analytics initialized successfully')
  } catch (error) {
    console.log('❌ Firebase Analytics not available:', error)
  }
}

// Initialize Firestore
const db = getFirestore(app)

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
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => {
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
  },

  // Store analytics data in Firestore
  storeAnalyticsData: async (data: {
    page: string
    timestamp: string
    userAgent: string
    referrer: string
    screenSize: string
    timezone: string
    sessionId?: string
  }) => {
    try {
      await addDoc(collection(db, 'analytics_events'), {
        ...data,
        createdAt: new Date()
      })
      console.log('✅ Analytics data stored in Firestore:', data)
    } catch (error) {
      console.error('❌ Error storing analytics data:', error)
    }
  },

  // Get analytics data from Firestore
  getAnalyticsData: async () => {
    try {
      const q = query(collection(db, 'analytics_events'), orderBy('createdAt', 'desc'), limit(100))
      const querySnapshot = await getDocs(q)
      const data = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      console.log('✅ Analytics data retrieved from Firestore:', data.length, 'records')
      return data
    } catch (error) {
      console.error('❌ Error getting analytics data:', error)
      return []
    }
  }
}

export default app 