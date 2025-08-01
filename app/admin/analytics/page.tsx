'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Users, 
  Eye, 
  Clock, 
  Smartphone, 
  Monitor,
  TrendingUp
} from 'lucide-react'

interface AnalyticsData {
  page: string
  timestamp: string
  userAgent: string
  referrer: string
  screenSize: string
  timezone: string
}

interface AnalyticsSummary {
  totalVisits: number
  uniquePages: number
  mobileUsers: number
  desktopUsers: number
  topPages: { page: string; visits: number }[]
  recentVisits: AnalyticsData[]
}

export default function AnalyticsDashboard() {
  const [summary, setSummary] = useState<AnalyticsSummary>({
    totalVisits: 0,
    uniquePages: 0,
    mobileUsers: 0,
    desktopUsers: 0,
    topPages: [],
    recentVisits: []
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // For now, we'll use mock data since we don't have a database
    // In the future, this will fetch from your database
    const mockData: AnalyticsData[] = [
      {
        page: '/',
        timestamp: new Date().toISOString(),
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        referrer: 'https://google.com',
        screenSize: '1920x1080',
        timezone: 'Asia/Kolkata'
      },
      {
        page: '/merch',
        timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
        userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X)',
        referrer: 'https://instagram.com',
        screenSize: '375x667',
        timezone: 'Asia/Kolkata'
      },
      {
        page: '/about',
        timestamp: new Date(Date.now() - 1000 * 60 * 10).toISOString(),
        userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
        referrer: 'https://twitter.com',
        screenSize: '1440x900',
        timezone: 'Asia/Kolkata'
      }
    ]

    calculateSummary(mockData)
    setLoading(false)
  }, [])

  const calculateSummary = (data: AnalyticsData[]) => {
    const pageVisits = data.reduce((acc, visit) => {
      acc[visit.page] = (acc[visit.page] || 0) + 1
      return acc
    }, {} as Record<string, number>)

    const mobileUsers = data.filter(visit => 
      visit.userAgent.includes('iPhone') || 
      visit.userAgent.includes('Android') ||
      visit.userAgent.includes('Mobile')
    ).length

    const desktopUsers = data.length - mobileUsers

    const topPages = Object.entries(pageVisits)
      .map(([page, visits]) => ({ page, visits }))
      .sort((a, b) => b.visits - a.visits)
      .slice(0, 5)

    setSummary({
      totalVisits: data.length,
      uniquePages: Object.keys(pageVisits).length,
      mobileUsers,
      desktopUsers,
      topPages,
      recentVisits: data.slice(0, 10)
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
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Analytics Dashboard
          </h1>
          <p className="text-gray-400 mt-2">Track your website visitors and performance</p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
        </div>

        {/* Top Pages & Recent Visits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
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
            transition={{ delay: 0.6 }}
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
                  {summary.recentVisits.map((visit, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-3">
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

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
        >
                     <p className="text-sm text-blue-300">
             <strong>Note:</strong> This is currently showing mock data. To see real analytics, 
             you&apos;ll need to connect a database (Supabase, MongoDB, etc.) to store the analytics data.
           </p>
        </motion.div>
      </div>
    </main>
  )
} 