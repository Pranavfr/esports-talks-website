'use client'

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Trophy, Target, Twitter, Instagram } from "lucide-react"

const founders = [
  {
    name: "Jainish Patel",
    role: "Co-Founder & Visionary",
    alias: "Jainish",
    image: "/jainishpatel1.png",
    description: "A businessman with a passion for gaming, boasting 8 years of experience in handling multiple sectors. Focused on evolving community and taking ET to new heights with vision, passion, and determination. With knowledge of business and finance, he adds a flavor to the team that only visions growth in esports but an all-round development that takes ET the org to new heights.",
    achievements: ["Community Growth Expert", "Strategic Partnerships", "Content Strategy"],
    x: "https://x.com/jainishpatel69",
    instagram: "https://www.instagram.com/jenupatel69/"
  },
  {
    name: "Prakhar Ranjan",
    role: "Co-Founder",
    alias: "Craven",
    image: "/craven_new2.png",
    description: "Fueled by a deep passion for esports and a vision to build something truly game-changing, Prakhar co-founded ET with the goal of creating a space where talent meets opportunity. From managing teams to shaping brand identity, he plays a key role in turning ideas into reality. His leadership combines strategic thinking with community-first values—the perfect balance for driving an org forward in today's competitive gaming landscape.",
    achievements: ["Team Management", "Brand Identity", "Strategic Leadership"],
    x: "https://x.com/craven765",
    instagram: "https://www.instagram.com/cravenspace/"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function FoundersSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern - Removed since main page has background */}
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <Users className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Meet Our Visionaries
            </h2>
          </div>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] max-w-3xl mx-auto">
            The driving force behind Esports Talks, combining passion for gaming with strategic vision to create India's most vibrant esports community.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              variants={item}
              className="group"
            >
              <Card className="relative overflow-hidden border-0 bg-[hsl(var(--card))] backdrop-blur-sm hover:bg-[hsl(var(--card)/0.8)] transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Top Border Accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" />
                  
                  <div className="flex flex-col items-center text-center space-y-6 flex-1">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-purple-500/30 group-hover:ring-purple-500/50 transition-all duration-300">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <Badge variant="secondary" className="bg-purple-600 text-white border-0">
                          {founder.alias}
                        </Badge>
                      </div>
                    </div>

                    {/* Name and Role */}
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-[hsl(var(--foreground))]">
                        {founder.name}
                      </h3>
                      <p className="text-purple-400 font-semibold text-lg">
                        {founder.role}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[hsl(var(--muted-foreground))] leading-relaxed max-w-md">
                      {founder.description}
                    </p>

                    {/* Spacer for alignment */}
                    <div className="flex-1 min-h-[0.25rem]"></div>

                    {/* Achievements */}
                    <div className="flex flex-wrap justify-center gap-2 min-h-[2.5rem] items-center">
                      {founder.achievements.map((achievement, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-purple-500/30 text-purple-300 hover:bg-purple-500/20"
                        >
                          {achievement}
                        </Badge>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 min-h-[2rem]">
                      <a
                        href={founder.x}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 group-hover:scale-105"
                      >
                        <Twitter className="h-4 w-4" />
                        <span className="text-sm font-medium">X</span>
                      </a>
                      <a
                        href={founder.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 group-hover:scale-105"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="text-sm font-medium">Instagram</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-6 py-3 border border-purple-500/30">
            <Target className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">
              Building the future of Indian esports together
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 