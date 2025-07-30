'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { MagicCard } from "@/components/ui/magic-card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, ChevronRight, Loader2, RotateCw } from 'lucide-react'
// import { loadStripe } from '@stripe/stripe-js'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import dynamic from 'next/dynamic'

const StripeWrapper = dynamic(() => import('../components/StripeWrapper'), {
  ssr: false,
})

interface Product {
  id: string
  name: string
  description: string
  price: number | string
  images: {
    front: string
    back: string
  }
  category: string
  sizes: string[]
}

interface OrderDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
  alternatePhone: string
  address: string
  city: string
  state: string
  pincode: string
  size: string
  playerName: string
  jerseyNumber: string
}

// Official jersey product
const products: Product[] = [
  {
    id: '1',
    name: 'ET Official Gaming Jersey 2025',
    description: 'Premium quality esports jersey with custom ET design. Features moisture-wicking fabric, team logo embroidery, and player name customization option.',
    price: 'Not Disclosed Yet',
    images: {
      front: '/merch/jersey.png',
      back: '/merch/jerseyback.png'
    },
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  }
]

export default function MerchPage() {
  const { theme } = useTheme()
  const [selectedSize, setSelectedSize] = useState('')
  const [playerName, setPlayerName] = useState('')
  const [jerseyNumber, setJerseyNumber] = useState('') // Add jersey number state
  const [error, setError] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [showBackView, setShowBackView] = useState(false)
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    alternatePhone: '', // Add alternate phone field
    address: '',
    city: '',
    state: '',
    pincode: '',
    size: '',
    playerName: '',
    jerseyNumber: ''
  })
  const [clientSecret, setClientSecret] = useState<string>('')

  const handleBuyNow = () => {
    if (typeof product.price === 'string') {
      setError('Price not yet disclosed. Please check back later.')
      return
    }
    
    if (!selectedSize) {
      setError('Please select a size')
      return
    }
    if (!playerName) {
      setError('Please enter your name for jersey customization')
      return
    }
    if (!jerseyNumber) {
      setError('Please enter your jersey number')
      return
    }
    if (isNaN(Number(jerseyNumber)) || Number(jerseyNumber) < 0 || Number(jerseyNumber) > 99) {
      setError('Please enter a valid jersey number (0-99)')
      return
    }
    
    setOrderDetails(prev => ({
      ...prev,
      size: selectedSize,
      playerName: playerName,
      jerseyNumber: jerseyNumber
    }))
    setIsDialogOpen(true)
    setError('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setOrderDetails(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateStep = () => {
    if (currentStep === 1) {
      if (!orderDetails.firstName || !orderDetails.lastName || !orderDetails.email || !orderDetails.phone) {
        setError('Please fill in all required fields')
        return false
      }
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(orderDetails.email)) {
        setError('Please enter a valid email address')
        return false
      }
      // Validate phone number format (10 digits)
      const phoneRegex = /^\d{10}$/
      if (!phoneRegex.test(orderDetails.phone)) {
        setError('Please enter a valid 10-digit phone number')
        return false
      }
      // Validate alternate phone if provided
      if (orderDetails.alternatePhone && !phoneRegex.test(orderDetails.alternatePhone)) {
        setError('Please enter a valid 10-digit alternate phone number')
        return false
      }
    } else if (currentStep === 2) {
      if (!orderDetails.address || !orderDetails.city || !orderDetails.state || !orderDetails.pincode) {
        setError('Please fill in all address details')
        return false
      }
      // Validate PIN code (6 digits)
      const pinRegex = /^\d{6}$/
      if (!pinRegex.test(orderDetails.pincode)) {
        setError('Please enter a valid 6-digit PIN code')
        return false
      }
    }
    setError('')
    return true
  }

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
    setError('')
  }

  const handleProceedToPayment = async () => {
    if (typeof product.price === 'string') {
      setError('Price not yet disclosed. Please check back later.')
      return
    }

    try {
      setIsProcessing(true)
      
      // Create a payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: product.price,
          orderDetails: orderDetails
        }),
      })

      if (!response.ok) {
        throw new Error('Payment failed')
      }

      const { clientSecret } = await response.json()
      setClientSecret(clientSecret)
    } catch (error) {
      setError((error as Error).message)
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePaymentSuccess = () => {
    // Handle successful payment
    alert('Payment successful! Your order has been placed.')
    setIsDialogOpen(false)
    setCurrentStep(1)
    setSelectedSize('')
    setPlayerName('')
    setJerseyNumber('')
    setOrderDetails({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      alternatePhone: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      size: '',
      playerName: '',
      jerseyNumber: ''
    })
  }

  const handlePaymentError = (error: string) => {
    setError(error)
    setIsProcessing(false)
  }

  const product = products[0] // Get the first product since we only have one

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-violet-700 to-fuchsia-100 bg-clip-text text-transparent mb-3 sm:mb-4">
            ET Official Merch
          </h1>
          <div className="flex items-center justify-center gap-2 text-blue-400">
            <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-base sm:text-lg">Get Your Gaming Gear</span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col h-full"
            >
              <MagicCard
                className="h-full p-4 sm:p-6 cursor-pointer flex flex-col"
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                <div className="space-y-4 flex flex-col flex-grow">
                  {/* Product Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 w-full rounded-lg overflow-hidden bg-gray-100 group">
                    <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform-gpu">
                      <Image
                        src={showBackView ? product.images.back : product.images.front}
                        alt={`${product.name} - ${showBackView ? 'Back View' : 'Front View'}`}
                        fill
                        className="object-contain transition-opacity duration-300"
                        priority={index === 0}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <button
                      onClick={() => setShowBackView(!showBackView)}
                      className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
                      title={showBackView ? "Show Front" : "Show Back"}
                    >
                      <RotateCw className="h-4 w-4" />
                    </button>
                    <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                      {typeof product.price === 'number' ? `$${product.price}` : product.price}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="flex-grow space-y-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-center bg-gradient-to-r to-fuchsia-100 from-purple-600 bg-clip-text text-transparent">
                        {product.name}
                      </h2>
                      <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">
                        {product.description}
                      </p>
                    </div>

                    {/* Size Selection */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-400 mb-2">
                        Select Size
                      </label>
                      <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`px-3 py-1 rounded border ${
                              selectedSize === size
                                ? 'bg-blue-600 text-white border-blue-600'
                                : 'border-gray-600 text-gray-400 hover:border-blue-400'
                            } min-w-[40px] text-center`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Jersey Customization */}
                    <div className="mt-4 space-y-4">
                      {/* Name Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Name on Jersey
                        </label>
                        <input
                          type="text"
                          value={playerName}
                          onChange={(e) => setPlayerName(e.target.value)}
                          placeholder="Enter your name"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          maxLength={20}
                        />
                      </div>

                      {/* Number Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                          Jersey Number (0-99)
                        </label>
                        <input
                          type="number"
                          value={jerseyNumber}
                          onChange={(e) => {
                            const num = e.target.value
                            if (num === '' || (Number(num) >= 0 && Number(num) <= 99)) {
                              setJerseyNumber(num)
                            }
                          }}
                          placeholder="Enter number"
                          className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200 placeholder-gray-400 focus:outline-none focus:border-blue-500"
                          min="0"
                          max="99"
                        />
                      </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                      <p className="mt-2 text-sm text-red-500 text-center sm:text-left">
                        {error}
                      </p>
                    )}

                    <div className="mt-4">
                      <Button 
                        className={`w-full transition-colors py-2 sm:py-3 ${
                          typeof product.price === 'string' 
                            ? 'bg-gray-500 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                        onClick={() => handleBuyNow()}
                        disabled={typeof product.price === 'string'}
                      >
                        {typeof product.price === 'string' ? 'Coming Soon' : 'Buy Now'}
                      </Button>
                    </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Order Details Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-[600px] w-[95%] mx-auto bg-gray-900/95 border border-gray-800 max-h-[90vh] overflow-y-auto">
            <DialogHeader className="border-b border-gray-800 pb-4 sticky top-0 bg-gray-900/95 z-10">
              <DialogTitle className="text-lg sm:text-xl font-semibold text-gray-100">
                Complete Your Order
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                Step {currentStep} of 4: {
                  currentStep === 1 ? 'Personal Details' : 
                  currentStep === 2 ? 'Shipping Address' : 
                  currentStep === 3 ? 'Order Summary' :
                  'Final Overview'
                }
              </DialogDescription>
            </DialogHeader>

            {error && (
              <p className="text-sm text-red-500 mb-4">
                {error}
              </p>
            )}

            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="firstName"
                      value={orderDetails.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="lastName"
                      value={orderDetails.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={orderDetails.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                    required
                    placeholder="example@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Primary Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    value={orderDetails.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                    required
                    placeholder="10-digit number"
                    maxLength={10}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Alternate Phone
                    <span className="text-gray-500 text-xs ml-2">(Optional)</span>
                  </label>
                  <input
                    name="alternatePhone"
                    type="tel"
                    value={orderDetails.alternatePhone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                    placeholder="Additional contact number"
                    maxLength={10}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Shipping Address */}
            {currentStep === 2 && (
              <div className="grid gap-4 py-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="address"
                    value={orderDetails.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                    required
                    placeholder="Street address, Apartment, Suite, etc."
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="city"
                      value={orderDetails.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="state"
                      value={orderDetails.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    PIN Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="pincode"
                    value={orderDetails.pincode}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded text-gray-200"
                    required
                    placeholder="6-digit PIN code"
                    maxLength={6}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Order Summary */}
            {currentStep === 3 && (
              <div className="py-4">
                <div className="rounded-lg bg-gray-800 p-4">
                  <h3 className="font-medium text-base sm:text-lg mb-4">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-400">Product:</span>
                      <span>ET Official Gaming Jersey 2025</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-400">Size:</span>
                      <span>{orderDetails.size}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-400">Name on Jersey:</span>
                      <span>{orderDetails.playerName}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-400">Jersey Number:</span>
                      <span>{orderDetails.jerseyNumber}</span>
                    </div>
                    <div className="flex justify-between text-sm sm:text-base">
                      <span className="text-gray-400">Price:</span>
                      <span>$59.99</span>
                    </div>
                    <div className="border-t border-gray-600 my-2 pt-2">
                      <div className="flex justify-between font-medium text-sm sm:text-base">
                        <span>Total:</span>
                        <span>$59.99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Final Overview */}
            {currentStep === 4 && (
              <div className="py-4 space-y-6">
                {/* Personal Information */}
                <div className="rounded-lg bg-gray-800/30 p-4">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Personal Information</h3>
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Name:</span>
                      <span className="text-gray-100 font-medium">{orderDetails.firstName} {orderDetails.lastName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Email:</span>
                      <span className="text-gray-100 font-medium break-all">{orderDetails.email}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Primary Phone:</span>
                      <span className="text-gray-100 font-medium">{orderDetails.phone}</span>
                    </div>
                    {orderDetails.alternatePhone && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Alternate Phone:</span>
                        <span className="text-gray-100 font-medium">{orderDetails.alternatePhone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="rounded-lg bg-gray-800/30 p-4">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Shipping Address</h3>
                  <div className="space-y-2">
                    <p className="text-gray-100 font-medium">{orderDetails.address}</p>
                    <p className="text-gray-100 font-medium">{orderDetails.city}, {orderDetails.state}</p>
                    <p className="text-gray-100 font-medium">PIN: {orderDetails.pincode}</p>
                  </div>
                </div>

                {/* Jersey Details */}
                <div className="rounded-lg bg-gray-800/30 p-4">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Jersey Details</h3>
                  <div className="grid gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Size:</span>
                      <span className="text-gray-100 font-medium">{orderDetails.size}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Name on Jersey:</span>
                      <span className="text-gray-100 font-medium">{orderDetails.playerName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Jersey Number:</span>
                      <span className="text-gray-100 font-medium">{orderDetails.jerseyNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Price Details */}
                <div className="rounded-lg bg-gray-800/30 p-4">
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Price Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Jersey Price:</span>
                      <span className="text-gray-100 font-medium">
                      {typeof product.price === 'number' ? `$${product.price}` : product.price}
                    </span>
                    </div>
                    <div className="border-t border-gray-700 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-100 font-semibold">Total Amount:</span>
                        <span className="text-gray-100 font-semibold">
                      {typeof product.price === 'number' ? `$${product.price}` : product.price}
                    </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="flex flex-col items-center justify-center py-4 text-blue-400">
                  <span className="text-sm font-medium mb-2">Continue to Payment Below</span>
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10">
                    <ChevronRight className="w-5 h-5 transform rotate-90 animate-bounce" />
                  </div>
                </div>

                {clientSecret ? (
                  <StripeWrapper
                    clientSecret={clientSecret}
                    onSuccess={handlePaymentSuccess}
                    onError={handlePaymentError}
                  />
                ) : (
                  <div className="sticky bottom-0 bg-gradient-to-t from-gray-900 to-gray-900/95 pt-6 pb-4">
                    <div className="border-t border-blue-500/20 pt-4">
                      <p className="text-sm text-gray-400 mb-4 text-center">
                        Please review all details carefully before proceeding to payment.
                      </p>
                      <Button 
                        onClick={handleProceedToPayment}
                        disabled={isProcessing}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base font-medium rounded-md shadow-lg shadow-blue-500/10"
                      >
                        {isProcessing ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          'Continue with Payment'
                        )}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Dialog Footer - Only show for steps 1-3 */}
            {currentStep < 4 && (
              <DialogFooter className="sticky bottom-0 bg-gray-900/95 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 mt-4 pt-4 border-t border-gray-800">
                {currentStep > 1 && (
                  <Button 
                    variant="outline" 
                    onClick={handleBack} 
                    className="w-full sm:w-auto order-2 sm:order-1 bg-transparent border-gray-700 text-gray-200 hover:bg-gray-800"
                  >
                    Back
                  </Button>
                )}
                <Button 
                  onClick={handleNext}
                  className="w-full sm:w-auto order-1 sm:order-2 bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogFooter>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  )
} 