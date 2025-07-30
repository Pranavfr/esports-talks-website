'use client'

import * as React from 'react'
import { motion } from "framer-motion"
import { Mail, MessageSquare, Instagram, Twitter, MapPin, Clock, Users } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop us a line anytime",
      contact: "esportstalk36@gmail.com",
      action: "mailto:esportstalk36@gmail.com",
      color: "from-blue-500/20 to-blue-700/20",
      iconColor: "text-blue-300",
      borderColor: "border-blue-500/20"
    },
    {
      icon: MessageSquare,
      title: "Discord",
      description: "Join our community",
      contact: "Join Discord Server",
      action: "https://discord.gg/8hv9AqcQNm",
      color: "from-purple-500/20 to-purple-700/20",
      iconColor: "text-purple-300",
      borderColor: "border-purple-500/20"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Stay updated in Real-Time",
      contact: "Follow on Instagram",
      action: "https://www.instagram.com/esportstalk.in?igsh=NnZ6cmNlNndsMWVp",
      color: "from-pink-500/20 to-pink-700/20",
      iconColor: "text-pink-300",
      borderColor: "border-pink-500/20"
    },
    {
      icon: Twitter,
      title: "Twitter",
      description: "Stay updated in Real-Time",
      contact: "Follow on Twitter",
      action: "https://x.com/WeTalkkEsports?t=JrBrDNMe95O_2HyJV95Gng&s=09",
      color: "from-cyan-500/20 to-cyan-700/20",
      iconColor: "text-cyan-300",
      borderColor: "border-cyan-500/20"
    },
  ]

  const companyInfo = [
    {
      icon: Users,
      title: "Community Size",
      value: "8K+ Members",
      description: "Active community across platforms"
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "We typically respond within a day"
    },
    {
      icon: MapPin,
      title: "Global Reach",
      value: "Worldwide",
      description: "Serving the global esports community"
    }
  ]

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-24">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question, want to collaborate, or just want to say hello? 
              We&apos;d love to hear from you. Reach out through any of our channels below.
            </p>
          </motion.div>

          {/* Company Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
          >
            {companyInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-purple-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-2xl font-bold text-purple-300 mb-2">{info.value}</p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20">
                  <CardHeader className="gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                      <method.icon className={`h-6 w-6 ${method.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl text-white">{method.title}</CardTitle>
                    <CardDescription className="text-gray-300">{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <a
                        href={method.action}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium"
                      >
                        {method.contact}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="border-0 bg-black/20 backdrop-blur-sm border border-purple-500/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose EsportsTalk?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">Expert Team</h4>
                    <p>Professional esports enthusiasts with years of industry experience</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">Community First</h4>
                    <p>Building and nurturing the gaming community is our top priority</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300 mb-2">Innovation</h4>
                    <p>Always at the forefront of esports trends and technology</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}