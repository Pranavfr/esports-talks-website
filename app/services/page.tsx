'use client'
import React from 'react';
import { motion } from "framer-motion"
import { Sparkles, Users, Video, Handshake, Trophy, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";


export default function ServicesPage() {
  const services = [
    {
      title: "Community Management",
      description: "8K+ active members across platforms with dedicated moderation, engagement strategies, and 24/7 community support.",
      icon: Users,
      stats: "8K+ Members",
      features: ["Discord Server", "Social Media", "Event Coordination"]
    },
    {
      title: "Content Creation",
      description: "High-quality gaming content, tournament coverage, live streams, and viral social media posts that drive engagement.",
      icon: Video,
      stats: "40K+ Engagement",
      features: ["Live Streaming", "Video Production", "Social Media"]
    },
    {
      title: "Brand Partnerships",
      description: "Strategic brand collaborations with gaming companies, tech brands, and lifestyle products for maximum reach.",
      icon: Handshake,
      stats: "15+ Partners",
      features: ["Brand Integration", "Sponsored Content", "Event Sponsorship"]
    },
    {
      title: "Tournament Organization",
      description: "Professional esports tournaments, leagues, and competitions with prize pools and professional casting.",
      icon: Trophy,
      stats: "50+ Events",
      features: ["Tournament Hosting", "Prize Pools", "Professional Casting"]
    },
    {
      title: "Talent Management",
      description: "Discover, develop, and promote gaming talent through our extensive network and industry connections.",
      icon: Target,
      stats: "100+ Players",
      features: ["Talent Scouting", "Career Development", "Brand Deals"]
    },
    {
      title: "Marketing Solutions",
      description: "Comprehensive digital marketing strategies tailored for gaming brands and esports organizations.",
      icon: TrendingUp,
      stats: "800K+ Reach",
      features: ["Social Media Marketing", "Influencer Campaigns", "Analytics"]
    }
  ];

  return (
    <div className="relative min-h-screen bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20" />
      <div className="container mx-auto px-4 relative z-10">
        <Navbar />
        <div className="py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Our Services
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive esports solutions designed to grow your brand and engage the gaming community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                    
                    {/* Features */}
                    <div className="mb-4">
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.features?.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-block bg-purple-500/10 text-purple-300 px-2 py-1 rounded text-xs font-medium border border-purple-500/20"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
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
      </div>
    </div>
  );
}
