'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Video, Handshake, Trophy } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Community Management",
    description: "8K+ active members across platforms with dedicated moderation and engagement strategies.",
    stats: "8K+ Members"
  },
  {
    icon: Video,
    title: "Content Creation",
    description: "Gaming content, tournaments, and live streams that engage and entertain our community.",
    stats: "40K+ Engagement"
  },
  {
    icon: Handshake,
    title: "Brand Partnerships",
    description: "Connect your brand with engaged gaming audience through strategic partnerships.",
    stats: "15+ Partners"
  },
  {
    icon: Trophy,
    title: "Tournament Organization",
    description: "Professional esports events and competitions that showcase talent and drive engagement.",
    stats: "50+ Events"
  }
]

export function ServicesSection() {
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
            <Trophy className="h-8 w-8 text-purple-300 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What We Offer
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive esports solutions designed to grow your brand and engage the gaming community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 flex-1">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-block bg-gradient-to-r from-purple-500/20 to-purple-700/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">
                      {service.stats}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 