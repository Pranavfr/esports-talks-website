'use client'

import { useState } from 'react'
import { firebaseAnalytics } from '@/lib/firebase'

interface FirestoreData {
  id: string
  page: string
  timestamp: string
  userAgent: string
  referrer: string
  screenSize: string
  timezone: string
  sessionId: string
  createdAt: unknown
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

export default function TestFirestore() {
  const [status, setStatus] = useState('')
  const [data, setData] = useState<FirestoreData[]>([])

  const testWrite = async () => {
    try {
      setStatus('Writing test data...')
      await firebaseAnalytics.storeAnalyticsData({
        page: '/test-firestore',
        timestamp: new Date().toISOString(),
        userAgent: 'Test Browser',
        referrer: 'https://test.com',
        screenSize: '1920x1080',
        timezone: 'Asia/Kolkata',
        sessionId: 'test-session-' + Date.now()
      })
      setStatus('✅ Test data written successfully!')
    } catch (error) {
      setStatus('❌ Error writing data: ' + error)
    }
  }

  const testRead = async () => {
    try {
      setStatus('Reading data...')
      const result = await firebaseAnalytics.getAnalyticsData()
      
      // Transform the data to match our interface
      const transformedData: FirestoreData[] = result.map((doc: FirestoreDoc) => ({
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
      
      setData(transformedData)
      setStatus(`✅ Read ${result.length} records successfully!`)
    } catch (error) {
      setStatus('❌ Error reading data: ' + error)
    }
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Firestore Test Page</h1>
        
        <div className="space-y-4 mb-8">
          <button
            onClick={testWrite}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Test Write Data
          </button>
          
          <button
            onClick={testRead}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ml-4"
          >
            Test Read Data
          </button>
        </div>

        <div className="mb-4">
          <p className="text-lg">{status}</p>
        </div>

        {data.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Data from Firestore:</h2>
            <div className="bg-card border border-border rounded-lg p-4">
              <pre className="text-sm overflow-auto">
                {JSON.stringify(data, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 