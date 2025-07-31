'use client'
import { motion } from "framer-motion"
import { Users, Twitter } from 'lucide-react'
import Ripple from "@/components/ui/ripple"

interface Founder {
  name: string
  twitter: string
}

const founders: Founder[] = [
  {
    name: "Believe",
    twitter: "https://x.com/Believe__0110"
  },
  {
    name: "Craven",
    twitter: "https://x.com/craven765"
  },
  {
    name: "trollesports",
    twitter: "https://x.com/trollesportss"
  },
  {
    name: "Marsh",
    twitter: "https://x.com/mxrshhhhh"
  },
  {
    name: "Nagato",
    twitter: "https://x.com/nagatoXb"
  },
  {
    name: "Jonas",
    twitter: "https://x.com/Inc9nit0"
  },
  {
    name: "Astro",
    twitter: "https://x.com/astro_xde"
  },
  {
    name: "Mauj",
    twitter: "https://x.com/twi_hth"
  },
  {
    name: "Abhishek",
    twitter: "https://x.com/M12Abhishek"
  },

  {
    name: "Glytz",
    twitter: "https://x.com/glitzyyZyer"
  },
  {
    name: "Boop",
    twitter: "https://x.com/Granola_dbs1"
  },
  {
    name: "Enzo",
    twitter: "https://x.com/cfc_enzo5__"
  },
  {
    name: "Itachi",
    twitter: "https://x.com/godl_itachi"
  },
  {
    name: "Baba",
    twitter: "https://x.com/Gutka_ramesh"
  },
  {
    name: "Deep",
    twitter: "https://x.com/deep78341979458"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function FoundersPage() {
  return (
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative h-full w-full overflow-hidden">
            <Ripple />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
              EsportsTalk Founders
            </h1>
            <div className="flex items-center justify-center gap-2 text-blue-400">
              <Users className="h-5 w-5" />
              <span className="text-lg">The Mind Behind This Community</span>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {founders.map((founder) => (
              <motion.div
                key={founder.name}
                variants={item}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/10 transition-all duration-300 border border-white/10 group"
              >
                <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {founder.name}
                </h3>
                
                <a
                  href={founder.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="text-sm">Follow</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
    </div>
  )
}
