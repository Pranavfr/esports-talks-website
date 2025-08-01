'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { MagicCard } from "@/components/ui/magic-card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, RotateCw } from 'lucide-react'
import { Navbar } from "@/components/navbar"

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
  hasCustomization: boolean
}



// Official jersey products
const products: Product[] = [
  {
    id: '1',
    name: 'ET Official Gaming Jersey 2025 (Standard)',
    description: 'Premium quality esports jersey with ET design. Features moisture-wicking fabric and team logo embroidery.',
    price: 799,
    images: {
      front: '/merch/jersey.png',
      back: ''
    },
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    hasCustomization: false
  },
  {
    id: '2',
    name: 'ET Official Gaming Jersey 2025 (New Design - Standard)',
    description: 'Premium quality esports jersey with new ET design. Features moisture-wicking fabric and team logo embroidery.',
    price: 799,
    images: {
      front: '/etjersey.png',
      back: ''
    },
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    hasCustomization: false
  },
  {
    id: '3',
    name: 'ET Official Gaming Jersey 2025 (Custom)',
    description: 'Premium quality esports jersey with custom ET design. Features moisture-wicking fabric, team logo embroidery, and player name customization option.',
    price: 899,
    images: {
      front: '/merch/jersey.png',
      back: '/merch/jerseyback.png'
    },
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    hasCustomization: true
  },
  {
    id: '4',
    name: 'ET Official Gaming Jersey 2025 (New Design - Custom)',
    description: 'Premium quality esports jersey with new ET design. Features moisture-wicking fabric, team logo embroidery, and player name customization option.',
    price: 899,
    images: {
      front: '/etjersey.png',
      back: '/merch/jerseyback.png'
    },
    category: 'Apparel',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    hasCustomization: true
  }
]

export default function MerchPage() {
  const { resolvedTheme } = useTheme()
  const [backViewStates, setBackViewStates] = useState<{ [key: string]: boolean }>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use resolvedTheme to avoid hydration issues
  const currentTheme = mounted ? resolvedTheme : 'dark'

  const handleBuyNow = (product: Product) => {
    if (typeof product.price === 'string') {
      return
    }
    
    // Redirect to Google Form
    window.open('https://forms.gle/UbpcmK2HypGtnJtJA', '_blank')
  }

  const toggleBackView = (productId: string) => {
    setBackViewStates(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
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
                 gradientColor={currentTheme === "dark" ? "#262626" : "#D9D9D955"}
               >
                <div className="space-y-4 flex flex-col flex-grow">
                  {/* Product Image */}
                  <div className="relative h-40 sm:h-48 md:h-56 w-full rounded-lg overflow-hidden bg-gray-100 group">
                    <div className="relative w-full h-full transition-transform duration-500 ease-in-out transform-gpu">
                                             <Image
                         src={backViewStates[product.id] && product.images.back ? product.images.back : product.images.front}
                         alt={`${product.name} - ${backViewStates[product.id] ? 'Back View' : 'Front View'}`}
                         fill
                         className="object-contain transition-opacity duration-300"
                         priority={index === 0}
                         sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                       />
                    </div>
                                         {product.images.back && (
                       <button
                         onClick={() => toggleBackView(product.id)}
                         className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors transform hover:scale-105"
                         title={backViewStates[product.id] ? "Show Front" : "Show Back"}
                       >
                         <RotateCw className="h-4 w-4" />
                       </button>
                     )}
                                         <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                       {typeof product.price === 'number' ? `₹${product.price}` : product.price}
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

                                         {/* Available Sizes */}
                     <div className="mt-4">
                       <label className="block text-sm font-medium text-gray-400 mb-2">
                         Available Sizes
                       </label>
                       <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                         {product.sizes.map((size) => (
                           <span
                             key={size}
                             className="px-3 py-1 rounded border border-gray-600 text-gray-400 min-w-[40px] text-center"
                           >
                             {size}
                           </span>
                         ))}
                       </div>
                     </div>

                                           {/* Customization Info - Only for Custom Jersey */}
                      {product.hasCustomization && (
                        <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                          <p className="text-sm text-blue-300 text-center">
                            Custom name and number available
                          </p>
                        </div>
                      )}

                                         <div className="mt-4">
                                               <Button 
                          className={`w-full transition-colors py-2 sm:py-3 ${
                            typeof product.price === 'string' 
                              ? 'bg-gray-500 cursor-not-allowed' 
                              : 'bg-blue-600 hover:bg-blue-700'
                          }`}
                          onClick={() => handleBuyNow(product)}
                          disabled={typeof product.price === 'string'}
                        >
                          {typeof product.price === 'string' ? 'Coming Soon' : 'Pre Order'}
                        </Button>
                     </div>
                  </div>
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
} 