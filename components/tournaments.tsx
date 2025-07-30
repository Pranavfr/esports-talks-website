"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ShimmerButton from "@/components/ui/shimmer-button"
import { useState } from "react"
import { ChevronDown, ChevronUp } from 'lucide-react'

// Tournament data for different games
 const GAME_TOURNAMENTS = {
   BGMI: [
     {
       id: 1,
       title: "E-sports Talk  Showdown",
       date: "January 20, 2025",
       description: "Professional BGMI tournament with top underdogs teams",
       prizePool: "₹30,000",
       status: "Registration Closed"
     },
//     {
//       id: 2,
//       title: "BGMI Community Cup",
//       date: "January 25, 2024",
//       description: "Community tournament for all skill levels",
//       prizePool: "$2,000",
//       status: "Coming Soon"
//     }
   ]
//   CODM: [
//     {
//       id: 1,
//       title: "COD Mobile Championship",
//       date: "February 1, 2024",
//       description: "Official CODM championship qualifier",
//       prizePool: "$5,000",
//       status: "Announced"
//     },
//     {
//       id: 2,
//       title: "CODM Squad Battle",
//       date: "February 15, 2024",
//       description: "5v5 team tournament",
//       prizePool: "$3,000",
//       status: "Registration Open"
//     }
//   ],
//   DOTA: [
//     {
//       id: 1,
//       title: "DOTA 2 Masters",
//       date: "March 1, 2024",
//       description: "Professional DOTA 2 tournament",
//       prizePool: "$15,000",
//       status: "Coming Soon"
//     },
//     {
//       id: 2,
//       title: "Amateur DOTA League",
//       date: "March 15, 2024",
//       description: "Amateur tournament for upcoming teams",
//       prizePool: "$4,000",
//       status: "Announced"
//     }
//   ],
//   UNITE: [
//     {
//       id: 1,
//       title: "Pokemon UNITE Cup",
//       date: "April 1, 2024",
//       description: "Official Pokemon UNITE tournament",
//       prizePool: "$8,000",
//       status: "Registration Open"
//     },
//     {
//       id: 2,
//       title: "UNITE Community Battle",
//       date: "April 15, 2024",
//       description: "Community-focused tournament",
//       prizePool: "$2,500",
//       status: "Coming Soon"
//     }
//   ]
 }

export function Tournaments() {
  const [selectedGame, setSelectedGame] = useState("BGMI")
  const [expandedIds, setExpandedIds] = useState<number[]>([])

  const toggleExpanded = (id: number) => {
    setExpandedIds(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4">
        {Object.keys(GAME_TOURNAMENTS).map((game) => (
          <ShimmerButton
            key={game}
            onClick={() => setSelectedGame(game)}
            className={selectedGame === game ? "bg-primary" : "bg-transparent"}
            shimmerColor={selectedGame === game ? "#ffffff" : "#ffffff50"}
            background={selectedGame === game ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.5)"}
          >
            <span className="text-sm font-medium text-white">
              {game}
            </span>
          </ShimmerButton>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {GAME_TOURNAMENTS[selectedGame as keyof typeof GAME_TOURNAMENTS].map((tournament) => {
          const isExpanded = expandedIds.includes(tournament.id)
          return (
            <Card 
              key={tournament.id} 
              className={`transition-all duration-200 ${isExpanded ? 'lg:col-span-2 md:col-span-2' : ''}`}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle>{tournament.title}</CardTitle>
                    <CardDescription>{tournament.date}</CardDescription>
                  </div>
                  <Badge variant={tournament.status === "Registration Open" ? "default" : "secondary"}>
                    {tournament.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {tournament.description}
                </p>
                <p className="text-sm font-medium">
                  Prize Pool: {tournament.prizePool}
                </p>

                {isExpanded && (
                  <div className="pt-4 space-y-4 border-t">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Tournament Details</h4>
                      <p className="text-sm text-muted-foreground">
                      Prepare for an epic battle, intense gameplay, and a chance to prove your skills on the grandest stage. Squad up and stay tuned for registration details coming soon!
                      Who will conquer the battlefield? Let’s find out! 💪💥
                      This event will be streamed live on Twitch and YouTube.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Schedule</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>Registration Deadline: 24 hours before start</li>
                        <li>Check-in: 1 hour before start</li>
                        <li>Tournament Start: {tournament.date} - 2:00 PM UTC</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Format</h4>
                      <p className="text-sm text-muted-foreground">
                        Double elimination bracket, Best of 3 matches until finals.
                        Finals will be Best of 5.
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => toggleExpanded(tournament.id)}
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Know More
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
