'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Users,
  Eye,
  Clock,
  Smartphone,
  Monitor,
  TrendingUp,
  RefreshCw
} from 'lucide-react'
import AuthGuard from '@/components/AuthGuard'
import { firebaseAnalytics } from '@/lib/firebase'

interface AnalyticsData {
  id: string
  page: string
  timestamp: string
  userAgent: string
  referrer: string
  screenSize: string
  timezone: string
  sessionId: string
  createdAt: unknown
  isAdminPage?: boolean
  // Enhanced data fields
  language?: string
  platform?: string
  cookieEnabled?: boolean
  onLine?: boolean
  connectionType?: string
  memoryInfo?: {
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  }
  performanceMetrics?: {
    loadTime: number
    domContentLoaded: number
    firstPaint: number
  }
  location?: {
    latitude: number
    longitude: number
    accuracy: number
  }
  deviceCapabilities?: {
    touchSupport: boolean
    webGLSupport: boolean
    serviceWorkerSupport: boolean
    pushNotificationSupport: boolean
  }
}

interface FirestoreDoc {
  id: string
  page?: string
  timestamp?: string
  userAgent?: string
  referrer?: string
  screenSize?: string
  timezone?: string
  sessionId?: string
  createdAt?: unknown
}

interface AnalyticsSummary {
  totalVisits: number
  uniquePages: number
  mobileUsers: number
  desktopUsers: number
  uniqueSessions: number
  topPages: { page: string; visits: number }[]
  recentVisits: AnalyticsData[]
}

export default function AnalyticsDashboard() {
  const [summary, setSummary] = useState<AnalyticsSummary>({
    totalVisits: 0,
    uniquePages: 0,
    mobileUsers: 0,
    desktopUsers: 0,
    uniqueSessions: 0,
    topPages: [],
    recentVisits: []
  })
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  const fetchAnalyticsData = useCallback(async () => {
    try {
      setRefreshing(true)
      const data = await firebaseAnalytics.getAnalyticsData()
      
      if (data.length === 0) {
        // Show message if no data yet
        setSummary({
          totalVisits: 0,
          uniquePages: 0,
          mobileUsers: 0,
          desktopUsers: 0,
          uniqueSessions: 0,
          topPages: [],
          recentVisits: []
        })
        setLoading(false)
        setRefreshing(false)
        return
      }

      // Transform Firestore data to match our interface
      const transformedData: AnalyticsData[] = data.map((doc: FirestoreDoc) => ({
        id: doc.id,
        page: doc.page || '',
        timestamp: doc.timestamp || '',
        userAgent: doc.userAgent || '',
        referrer: doc.referrer || '',
        screenSize: doc.screenSize || '',
        timezone: doc.timezone || '',
        sessionId: doc.sessionId || '',
        createdAt: doc.createdAt
      }))

      calculateSummary(transformedData)
    } catch (error) {
      console.error('Error fetching analytics data:', error)
      setSummary({
        totalVisits: 0,
        uniquePages: 0,
        mobileUsers: 0,
        desktopUsers: 0,
        uniqueSessions: 0,
        topPages: [],
        recentVisits: []
      })
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }, [])

  useEffect(() => {
    fetchAnalyticsData()
  }, [fetchAnalyticsData])

  const calculateSummary = (data: AnalyticsData[]) => {
    // Filter out admin pages from total counts
    const nonAdminData = data.filter(visit => !visit.page.startsWith('/admin'))
    
    const pageVisits = nonAdminData.reduce((acc, visit) => {
      acc[visit.page] = (acc[visit.page] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const mobileUsers = nonAdminData.filter(visit =>
      visit.userAgent.includes('iPhone') ||
      visit.userAgent.includes('Android') ||
      visit.userAgent.includes('Mobile')
    ).length

    const desktopUsers = nonAdminData.length - mobileUsers

    const uniqueSessions = new Set(nonAdminData.map(visit => visit.sessionId)).size

    const topPages = Object.entries(pageVisits)
      .map(([page, visits]) => ({ page, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 5)

    setSummary({
      totalVisits: nonAdminData.length,
      uniquePages: Object.keys(pageVisits).length,
      mobileUsers,
      desktopUsers,
      uniqueSessions,
      topPages,
      recentVisits: data.slice(0, 10) // Keep all visits (including admin) for recent visits
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-400">Loading analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <AuthGuard>
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Analytics Dashboard
                </h1>
                <p className="text-gray-400 mt-2">Track your website visitors and performance</p>
              </div>
              <button
                onClick={fetchAnalyticsData}
                disabled={refreshing}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 ${refreshing ? 'animate-spin' : ''}`} />
                {refreshing ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </motion.div>

          {summary.totalVisits === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-300 mb-4">No Analytics Data Yet</h3>
                <p className="text-gray-400 mb-4">
                  Visit your website pages to start collecting analytics data. 
                  The data will appear here once users start visiting your site.
                </p>
                <button
                  onClick={fetchAnalyticsData}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Check Again
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
                      <Users className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{summary.totalVisits}</div>
                      <p className="text-xs text-gray-400">All time visits</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pages Viewed</CardTitle>
                      <Eye className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{summary.uniquePages}</div>
                      <p className="text-xs text-gray-400">Unique pages</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Mobile Users</CardTitle>
                      <Smartphone className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{summary.mobileUsers}</div>
                      <p className="text-xs text-gray-400">Mobile visitors</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Desktop Users</CardTitle>
                      <Monitor className="h-4 w-4 text-orange-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{summary.desktopUsers}</div>
                      <p className="text-xs text-gray-400">Desktop visitors</p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Unique Sessions</CardTitle>
                      <Users className="h-4 w-4 text-indigo-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{summary.uniqueSessions}</div>
                      <p className="text-xs text-gray-400">Unique visitors</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Top Pages & Recent Visits */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Top Pages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {summary.topPages.map((page, index) => (
                          <div key={page.page} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <span className="text-sm font-medium text-gray-400">#{index + 1}</span>
                              <span className="text-sm">{page.page}</span>
                            </div>
                            <span className="text-sm font-bold text-blue-600">{page.visits} visits</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Recent Visits */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        Recent Visits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {summary.recentVisits.map((visit) => (
                          <div key={visit.id} className="border-l-2 border-blue-500 pl-3">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">{visit.page}</span>
                              <span className="text-xs text-gray-400">
                                {new Date(visit.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {visit.screenSize} • {visit.timezone}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Enhanced Analytics Sections */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                {/* Device Information */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Smartphone className="h-5 w-5" />
                        Device Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm">Languages</span>
                          <span className="text-sm font-medium">
                            {[...new Set(summary.recentVisits.map(v => v.language).filter(Boolean))].join(', ')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Platforms</span>
                          <span className="text-sm font-medium">
                            {[...new Set(summary.recentVisits.map(v => v.platform).filter(Boolean))].join(', ')}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Connection Types</span>
                          <span className="text-sm font-medium">
                            {[...new Set(summary.recentVisits.map(v => v.connectionType).filter(Boolean))].join(', ')}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Performance Metrics */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Performance Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {summary.recentVisits.filter(v => v.performanceMetrics).slice(0, 5).map((visit) => (
                          <div key={visit.id} className="border-l-2 border-green-500 pl-3">
                            <div className="flex justify-between text-sm">
                              <span>Load Time</span>
                              <span className="font-medium">{Math.round(visit.performanceMetrics?.loadTime || 0)}ms</span>
                            </div>
                            <div className="flex justify-between text-xs text-gray-400">
                              <span>DOM Ready</span>
                              <span>{Math.round(visit.performanceMetrics?.domContentLoaded || 0)}ms</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Geographical Data */}
              {summary.recentVisits.some(v => v.location) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="mt-6"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Visitor Locations
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {summary.recentVisits.filter(v => v.location).slice(0, 10).map((visit) => (
                          <div key={visit.id} className="border-l-2 border-purple-500 pl-3">
                            <div className="flex items-center justify-between text-sm">
                              <span>{visit.page}</span>
                              <span className="text-xs text-gray-400">
                                {new Date(visit.timestamp).toLocaleTimeString()}
                              </span>
                            </div>
                            <div className="text-xs text-gray-400">
                              Lat: {visit.location?.latitude.toFixed(4)}, 
                              Long: {visit.location?.longitude.toFixed(4)} 
                              (Accuracy: {visit.location?.accuracy}m)
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Location Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="mt-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Location Tracking Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Visitors with Location</span>
                        <span className="text-sm font-medium text-green-600">
                          {summary.recentVisits.filter(v => v.location).length} visitors
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Visitors without Location</span>
                        <span className="text-sm font-medium text-gray-400">
                          {summary.recentVisits.filter(v => !v.location).length} visitors
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Location Success Rate</span>
                        <span className="text-sm font-medium text-blue-600">
                          {summary.recentVisits.length > 0 
                            ? Math.round((summary.recentVisits.filter(v => v.location).length / summary.recentVisits.length) * 100)
                            : 0}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          )}
        </div>
      </main>
    </AuthGuard>
  )
} 