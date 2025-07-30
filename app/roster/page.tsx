'use client'

import React from 'react';
import { motion } from "framer-motion"
import { Users, Trophy, Target, Zap, Instagram, Star, Shield } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const players = [
  {
    name: 'Pulse',
    role: 'IGL',
    image: '/pulse.png',
    instagram: 'https://www.instagram.com/ig.pulse?igsh=cHlvdnlscTlhYWdu',
    bio: 'Team Captain & Strategic Leader',
    achievements: ['Tournament Winner', 'Community Leader'],
    game: 'CODM',
    experience: '3+ Years'
  },
  {
    name: 'Okay6o',
    role: 'AR MARKSMAN',
    image: '/okay.png',
    instagram: 'https://www.instagram.com/not.okay6o?igsh=MTNtd3N0OHcxczBlYw==',
    bio: 'Precision Specialist & Long-range Expert',
    achievements: ['Top Fragger', 'Accuracy Master'],
    game: 'CODM',
    experience: '2+ Years'
  },
  {
    name: 'Moon',
    role: 'SMG HEAVY',
    image: '/Moon.png',
    instagram: 'https://www.instagram.com/moonn_0111?igsh=MW4wdXIwOHQ3ZTQ1aA==',
    bio: 'Aggressive Player & Close Combat Expert',
    achievements: ['Rush Master', 'Team Player'],
    game: 'CODM',
    experience: '2+ Years'
  },
  {
    name: 'Warlord',
    role: 'SMG/AR',
    image: '/warlord.png',
    instagram: 'https://www.instagram.com/ig.wxrlord?igsh=MXF0YjFneXl6ZTd3aw==',
    bio: 'Versatile Player & Tactical Support',
    achievements: ['Flex Player', 'Support Specialist'],
    game: 'CODM',
    experience: '2+ Years'
  },
  {
    name: 'ItzCold',
    role: 'SMG MARKSMAN',
    image: '/cold.png',
    instagram: 'https://www.instagram.com/_itzcold?igsh=OGxvNDVhNGJtY3Nj',
    bio: 'Speed Demon & Quick Reflexes',
    achievements: ['Speed Master', 'Reaction Expert'],
    game: 'CODM',
    experience: '2+ Years'
  },
  {
    name: 'Legend',
    role: 'SMG HEAVY',
    image: '/legend1.png',
    instagram: 'https://www.instagram.com/notlxgend?igsh=bHRoeGF3eWN5bXAy',
    bio: 'Legendary Player & Team Anchor',
    achievements: ['Legend Status', 'Team Anchor'],
    game: 'CODM',
    experience: '3+ Years'
  },
];



export default function RosterPage() {
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
            <div className="flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Roster
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Meet the talented players who make up our professional CODM team. Each member brings unique skills and experience to create a winning combination.
            </p>
          </motion.div>

          {/* Players Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {players.map((player, index) => (
              <motion.div
                key={player.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="relative border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20 overflow-hidden">
                  <CardContent className="p-6 text-center">
                    {/* Player Image */}
                    <div className="w-40 h-56 flex items-center justify-center rounded-xl mb-6 mx-auto bg-gradient-to-br from-gray-800 to-purple-900 border-4 border-purple-700 shadow-xl overflow-hidden">
                      <img
                        src={player.image}
                        alt={player.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Player Info */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                        {player.name}
                      </h2>
                      
                      <div className="flex items-center justify-center space-x-2">
                        <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                          {player.role}
                        </Badge>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {player.game}
                        </Badge>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {player.bio}
                      </p>

                      <div className="flex items-center justify-center space-x-2 text-xs text-gray-400">
                        <Shield className="h-3 w-3" />
                        <span>{player.experience} Experience</span>
                      </div>

                                             {/* Social Link */}
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <a
                          href={player.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <Instagram className="h-4 w-4" />
                          <span>Follow on Instagram</span>
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <Card className="border-0 bg-black/20 backdrop-blur-sm border border-purple-500/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">About Our Team</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                  <div className="flex items-start space-x-3">
                    <Target className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Strategic Excellence</h4>
                      <p>Our team combines tactical brilliance with exceptional individual skills</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Proven Track Record</h4>
                      <p>Multiple tournament victories and consistent top-tier performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Team Chemistry</h4>
                      <p>Perfect coordination and communication for maximum effectiveness</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}