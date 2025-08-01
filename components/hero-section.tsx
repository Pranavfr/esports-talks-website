'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Particles */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-4">
              <span className="text-white">WE ARE</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                ESPORTS TALKS
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
              INDIA&apos;S PREMIER GAMING COMMUNITY
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Home to passionate gamers, content creators, and esports enthusiasts competing in BGMI, Valorant, 
              Call of Duty Mobile, and more. Building the future of Indian esports.
            </p>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">8K+</div>
              <div className="text-gray-400 font-medium">COMMUNITY MEMBERS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">800K+</div>
              <div className="text-gray-400 font-medium">MONTHLY IMPRESSIONS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">40K+</div>
              <div className="text-gray-400 font-medium">ENGAGEMENT RATE</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white px-8 py-4 text-lg font-bold rounded-lg group"
              onClick={() => window.open('https://x.com/i/communities/1647207932642353152', '_blank')}
            >
              JOIN COMMUNITY
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-400/10 px-8 py-4 text-lg font-bold rounded-lg"
              onClick={() => window.open('mailto:esportstalk36@gmail.com', '_blank')}
            >
              PARTNER WITH US
            </Button>
          </motion.div>

          {/* Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto"
          >
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all duration-300">
                <Users className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">COMMUNITY FIRST</h3>
              <p className="text-gray-400 text-sm">
                Building lasting connections with passionate gamers across India
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all duration-300">
                <Target className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">INNOVATION DRIVEN</h3>
              <p className="text-gray-400 text-sm">
                Leading the charge in Indian esports with cutting-edge content
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4 group-hover:from-purple-500/30 group-hover:to-purple-700/30 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">GROWTH FOCUSED</h3>
              <p className="text-gray-400 text-sm">
                Expanding opportunities for gamers and brands alike
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
} 