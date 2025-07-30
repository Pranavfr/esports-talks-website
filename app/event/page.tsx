'use client'

import React from 'react';
import { motion } from "framer-motion"
import { Sparkles, Trophy, Users, Calendar, MapPin, Clock, Target, Zap, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function EventPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "E-sports Talk Showdown",
      subtitle: "BGMI Tournament",
      description: "Prepare for an epic battle, intense gameplay, and a chance to prove your skills on the grandest stage. Squad up and stay tuned for registration details coming soon!",
      prizepool: "30,000 INR",
      slots: "Limited",
      status: "Krafton Verified",
      date: "Coming Soon",
      location: "Online",
      game: "BGMI",
      registration: "closed",
      features: ["Professional Casting", "Live Streaming", "Prize Distribution", "Community Rewards"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Krafton Verified':
        return 'bg-green-500/20 text-green-300 border-green-500/30';
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
    }
  };

  const getRegistrationStatus = (status: string) => {
    switch (status) {
      case 'closed':
        return { text: 'Registration Closed', color: 'bg-red-500/20 text-red-300 border-red-500/30' };
      default:
        return { text: 'Coming Soon', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' };
    }
  };

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
              <Sparkles className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Our Events
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto">
              Stay tuned for exciting esports tournaments and community events.
            </p>
          </motion.div>

          {/* Event Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Teams Participated</h3>
                  <p className="text-2xl font-bold text-purple-300 mb-2">1K+</p>
                  <p className="text-sm text-gray-400">Active teams</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                    <Trophy className="h-6 w-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Total Players</h3>
                  <p className="text-2xl font-bold text-purple-300 mb-2">4K+</p>
                  <p className="text-sm text-gray-400">Individual players</p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 border border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-6 w-6 text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Total Views</h3>
                  <p className="text-2xl font-bold text-purple-300 mb-2">500K+</p>
                  <p className="text-sm text-gray-400">Overall reach</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Events Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto"
          >
            {upcomingEvents.map((event, index) => {
              const registrationStatus = getRegistrationStatus(event.registration);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="relative border-0 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-all duration-300 hover:scale-105 h-full border border-purple-500/20 overflow-hidden">
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <Badge className={`${registrationStatus.color} border`}>
                        {registrationStatus.text}
                      </Badge>
                    </div>

                    <CardHeader className="gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 flex items-center justify-center">
                        <Trophy className="h-8 w-8 text-purple-300" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-white mb-2">{event.title}</CardTitle>
                        <p className="text-purple-300 font-medium">{event.subtitle}</p>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Calendar className="h-4 w-4 text-purple-300" />
                            <span className="text-sm text-gray-300">{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-purple-300" />
                            <span className="text-sm text-gray-300">{event.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Target className="h-4 w-4 text-purple-300" />
                            <span className="text-sm text-gray-300">{event.game}</span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Prizepool</p>
                            <p className="text-sm font-semibold text-purple-300">{event.prizepool}</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xs text-gray-400">Slots</p>
                            <p className="text-sm font-semibold text-purple-300">{event.slots}</p>
                          </div>
                          <div className="text-center">
                            <Badge className={`${getStatusColor(event.status)} border text-xs`}>
                              {event.status}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-white mb-3">Event Features</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {event.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="h-3 w-3 text-green-400" />
                              <span className="text-xs text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-purple-500/20 to-purple-700/20 hover:from-purple-500/30 hover:to-purple-700/30 text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
                        disabled={event.registration === 'closed'}
                      >
                        {event.registration === 'closed' ? 'Registration Closed' : 'Coming Soon'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-16 text-center"
          >
            <Card className="border-0 bg-black/20 backdrop-blur-sm border border-purple-500/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Stay Connected</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-300">
                  <div className="flex items-start space-x-3">
                    <Zap className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Get Updates</h4>
                      <p>Follow us on social media for the latest event announcements and registration details</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Join Community</h4>
                      <p>Connect with fellow gamers in our Discord server and stay updated</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Trophy className="h-5 w-5 text-purple-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-purple-300 mb-2">Compete</h4>
                      <p>Participate in tournaments and showcase your skills to the community</p>
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