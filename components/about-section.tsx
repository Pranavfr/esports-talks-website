'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-purple-300 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Who We Are
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            A vibrant community of passionate gamers and esports enthusiasts, leading the charge in Indian esports with innovative content and community engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <Card className="relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Community First</h3>
              <p className="text-gray-300">
                A vibrant community of 30K+ passionate gamers and esports enthusiasts, fostering connections and building lasting relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Innovation Driven</h3>
              <p className="text-gray-300">
                Leading the charge in Indian esports with innovative content, tournaments, and community engagement strategies.
              </p>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-300" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Growth Focused</h3>
              <p className="text-gray-300">
                Bridging the gap between gaming enthusiasts and business opportunities, creating value for all stakeholders.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
} 