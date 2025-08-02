'use client'
import { motion } from "framer-motion"
import { Users, Code, Github, ExternalLink, Sparkles, Trophy, Target, TrendingUp, Star, Zap, Crown } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Navbar } from "@/components/navbar"

export default function ContributionPage() {
  const teams = [
    {
      title: "Ops Team",
      icon: Target,
      members: [
        { name: "Craven", link: "https://x.com/craven765", role: "Co-Founder" },
        { name: "Jainish", link: "https://x.com/jainishpatel69", role: "Co-Founder" }
      ]
    },
    {
      title: "Developer",
      icon: Code,
      members: [
        { name: "Dracula", link: "https://x.com/draculaaaahu", role: "Lead Developer", github: "https://github.com/Pranavfr", portfolio: "https://pranav-portfolio-ten.vercel.app/" }
      ]
    },
    {
      title: "Graphic Designing / SMM",
      icon: Sparkles,
      members: [
        { name: "Kanishq", link: null, role: "Graphic Designer" },
        { name: "Velocity", link: "https://x.com/Godl_Velocity", role: "SMM Specialist" }
      ]
    },
    {
      title: "Community Assistants",
      icon: Trophy,
      members: [
        { name: "Flying Jatt", link: "https://twitter.com/GodL_Jattt", role: "Event Coordinator" },
        { name: "Aman", link: "https://x.com/amangup13860187?s=21", role: "Tournament Manager" },
        { name: "Huslinn", link: "https://x.com/ThoughtsLien_?t=9S_pWziVB7Q0XAuOG29-fw&s=09", role: "Event Specialist" }
      ]
    },
    {
      title: "Community Manager",
      icon: Users,
      members: [
        { name: "Zaliska", link: "https://www.instagram.com/channel/AbZ4JSZR50cKh8Bb/", role: "Kela Gang Instagram" }
      ]
    },
    {
      title: "ET Core Team",
      icon: TrendingUp,
      members: [
        { name: "Coss", link: "https://x.com/clockkie", role: "Core Member" },
        { name: "Netra", link: "https://x.com/Netraaa14", role: "Core Member" },
        { name: "Amaira", link: "https://x.com/RyaAkira", role: "Core Member" },
        { name: "Glytz", link: "https://x.com/glitzyyZyer", role: "Core Member" },
        { name: "Astro", link: "https://x.com/astrx05?s=21", role: "Core Member" },
        { name: "Marsh♡", link: "https://twitter.com/i/communities/1816449002440655182", role: "Core Member" }
      ]
    }
  ]

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
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Crown className="h-10 w-10 text-white" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center mb-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Contributors
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Meet the talented individuals who make Esports Talks possible - from developers to community managers.
              </p>
              
              <div className="flex justify-center gap-4">
                <Badge variant="outline" className="border-purple-500/30 text-purple-300 bg-purple-500/10">
                  <Star className="h-3 w-3 mr-1" />
                  6 Teams
                </Badge>
                <Badge variant="outline" className="border-blue-500/30 text-blue-300 bg-blue-500/10">
                  <Zap className="h-3 w-3 mr-1" />
                  15+ Members
                </Badge>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {teams.map((team, index) => (
              <motion.div
                key={team.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className={`relative overflow-hidden border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20 group ${team.title === "Developer" ? "ring-2 ring-red-500/50 shadow-lg shadow-red-500/25 bg-gradient-to-br from-red-900/40 via-purple-900/30 to-red-800/40 hover:scale-110 hover:shadow-2xl hover:shadow-red-500/50" : ""}`}>
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    {/* Special animated background for developer */}
                    {team.title === "Developer" && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-purple-500/5 to-red-500/5 opacity-100" />
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-purple-500 opacity-60" />
                        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500 to-red-500 opacity-60" />
                        {/* Dracula GIF Background */}
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                          <Image
                            src="/dracula.gif"
                            alt="Dracula Developer"
                            fill
                            className="object-cover rounded-lg"
                            priority
                          />
                        </div>
                      </>
                    )}
                    {/* Regular animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="relative z-10"
                    >
                      {team.title !== "Developer" && (
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 bg-gradient-to-r from-purple-500/20 to-purple-700/20 group-hover:from-purple-500/30 group-hover:to-purple-700/30`}>
                          <team.icon className="h-8 w-8 transition-colors duration-300 text-purple-300 group-hover:text-purple-200" />
                        </div>
                      )}
                      
                      {team.title !== "Developer" && (
                        <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 transition-all duration-300 group-hover:from-purple-300 group-hover:to-blue-300">
                          {team.title}
                        </h3>
                      )}
                    
                    <div className="flex-1 space-y-3">
                      {team.members.map((member, memberIndex) => (
                        <motion.div 
                          key={member.name} 
                          className="text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * index + 0.05 * memberIndex }}
                        >
                          {team.title !== "Developer" && (
                            <>
                              <div className="flex items-center justify-center gap-2 mb-2">
                                {member.link ? (
                                  <a 
                                    href={member.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="transition-colors font-semibold group/link text-lg text-white hover:text-blue-300"
                                  >
                                    {member.name}
                                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover/link:opacity-100 transition-opacity duration-200 text-blue-400" />
                                  </a>
                                ) : (
                                  <span className="font-semibold text-lg text-white">{member.name}</span>
                                )}
                              </div>
                              <Badge variant="outline" className="text-xs border-blue-500/50 text-blue-300 bg-blue-500/20">
                                {member.role}
                              </Badge>
                            </>
                          )}
                          

                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Developer Name and Badge at Bottom */}
                    {team.title === "Developer" && (
                      <motion.div 
                        className="mt-auto pt-16 pb-4 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <a 
                          href="https://x.com/draculaaaahu" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <h3 className="text-3xl font-black text-white mb-2 drop-shadow-lg hover:text-red-300 transition-colors duration-300 cursor-pointer">
                            Dracula
                          </h3>
                          <p className="text-sm text-gray-300 mb-2">
                            (Pranav)
                          </p>
                        </a>
                        <Badge variant="outline" className="border-red-500/70 text-red-200 bg-red-500/30 text-sm font-semibold mb-4">
                          Lead Developer
                        </Badge>
                        
                        {/* GitHub and Portfolio Buttons */}
                        <motion.div 
                          className="flex justify-center gap-2"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-red-500/70 text-red-200 hover:bg-red-500/30 text-xs h-7"
                            onClick={() => window.open('https://github.com/Pranavfr', '_blank')}
                          >
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="border-red-500/70 text-red-200 hover:bg-red-500/30 text-xs h-7"
                            onClick={() => window.open('https://pranav-portfolio-ten.vercel.app/', '_blank')}
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Portfolio
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
