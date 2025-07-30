'use client'

import { useEffect, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const paymentIntent = searchParams.get('payment_intent')

  useEffect(() => {
    if (!paymentIntent) {
      router.push('/')
    }
  }, [paymentIntent, router])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-gray-900/95 p-8 rounded-lg border border-gray-800 text-center"
      >
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-100 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-400 mb-6">
          Thank you for your purchase. Your order has been confirmed and will be processed shortly.
        </p>
        <div className="space-y-4">
          <Button
            onClick={() => router.push('/')}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Return to Home
          </Button>
          <Button
            onClick={() => router.push('/merch')}
            variant="outline"
            className="w-full border-gray-700 text-gray-200 hover:bg-gray-800"
          >
            Continue Shopping
          </Button>
        </div>
      </motion.div>
    </main>
  )
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-gray-900/95 p-8 rounded-lg border border-gray-800 text-center">
          <div className="animate-pulse">
            <div className="h-16 w-16 bg-gray-700 rounded-full mx-auto mb-6"></div>
            <div className="h-8 bg-gray-700 rounded mb-4"></div>
            <div className="h-4 bg-gray-700 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-700 rounded"></div>
              <div className="h-10 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    }>
      <PaymentSuccessContent />
    </Suspense>
  )
} 