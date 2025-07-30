'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Target, TrendingUp, Award } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Direct Access",
    description: "Connect your brand with engaged gaming audience through strategic partnerships."
  },
  {
    icon: Target,
    title: "Proven Track Record",
    description: "Successful community building with 8K+ active members and growing."
  },
  {
    icon: TrendingUp,
    title: "Multi-Platform Reach",
    description: "Presence across X, Instagram, Discord, and YouTube for maximum exposure."
  },
  {
    icon: Award,
    title: "Customized Solutions",
    description: "Tailored brand integration opportunities that align with your goals."
  }
]

export function PartnershipSection() {
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
            <Award className="h-8 w-8 text-purple-300 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Why Partner With Us
            </h2>
          </div>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
            Join forces with India's premier esports community and unlock unprecedented opportunities for your brand.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-purple-300" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-purple-700/20 rounded-2xl p-8 max-w-4xl mx-auto border border-purple-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your Partnership?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help your brand connect with the gaming community and achieve your marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white"
                onClick={() => window.open('mailto:esportstalk36@gmail.com', '_blank')}
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-purple-400 text-purple-300 hover:bg-purple-400/10"
                onClick={() => window.open('https://x.com/EsportsTalks', '_blank')}
              >
                Follow Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 