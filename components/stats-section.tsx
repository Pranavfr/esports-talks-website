'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, Eye, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "30K+",
    label: "Community Members",
    description: "Active members across all platforms"
  },
  {
    icon: Eye,
    value: "1M+",
    label: "Monthly Impressions",
    description: "Reach across social media platforms"
  },
  {
    icon: TrendingUp,
    value: "60K+",
    label: "Engagement Rate",
    description: "High interaction and participation"
  },
  {
    icon: Award,
    value: "15+",
    label: "Managed Communities",
    description: "Successful community partnerships"
  }
]

export function StatsSection() {
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
            <TrendingUp className="h-8 w-8 text-purple-300 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Our Impact
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Numbers that speak for themselves - our commitment to building India&apos;s most vibrant esports community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-purple-300" />
                  </div>
                  <div className="mb-2">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-lg font-semibold text-purple-300 mb-2">
                      {stat.label}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 