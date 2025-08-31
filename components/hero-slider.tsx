'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { StatsChart } from "./stats-chart"

export function HeroSlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <div>
            <Card className="border-0 overflow-hidden bg-transparent">
              <CardContent className="relative min-h-[600px] lg:aspect-[21/9] p-0">

                <div className="absolute inset-0 flex flex-col justify-center p-4 md:p-8 lg:p-12 z-20 text-[hsl(var(--foreground))] overflow-y-auto">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">Esports Talks</h1>
                  <div className="space-y-4 lg:space-y-6 max-w-3xl">
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-1">Who We Are:</h2>
                      <p className="text-base md:text-lg">Esports Talks is a vibrant community of gamers and esports enthusiasts.</p>
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-1">Our Mission:</h2>
                      <p className="text-base md:text-lg">To connect gaming enthusiasts and businesses, fostering growth and innovation in the gaming & esports space.</p>
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-semibold mb-1">Our Platforms:</h2>
                      <p className="text-base md:text-lg">X (Former Twitter) community, Instagram, Discord and Youtube</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Second Slide */}
        <CarouselItem>
          <div className="p-1">
            <Card className="border-0 overflow-hidden bg-transparent">
              <CardContent className="relative min-h-[600px] lg:aspect-[21/9] p-4 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 h-full">
                  {/* Left side - Community Stats */}
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold">Community Overview</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xl md:text-2xl font-semibold">Members: 5.3K</p>
                        <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))]">Open Environment</p>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold mb-2">Demographics:</h3>
                        <ul className="space-y-2 text-base md:text-lg">
                          <li>Age group: 15-35 Years</li>
                          <li>Region: India</li>
                          <li>Interests: BGMI, eFIFA, eFootball, CODM, PU, Valorant and others</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-base md:text-lg">Moderated community</p>
                        <p className="text-base md:text-lg">Impression Range: 500 - 50K</p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Chart */}
                  <div className="space-y-4">
                    <h2 className="text-xl md:text-2xl font-bold">96 hours Insights of X community</h2>
                    <div className="space-y-2 mb-4 text-base md:text-lg">
                      <p>New posts: 3K+</p>
                      <p>Like Count: 60K+</p>
                      <p>Impressions: 1M+</p>
                      <p>Space conducted:</p>
                      <ul className="ml-4">
                        <li>Official: 1</li>
                        <li>Unofficial daily: 3</li>
                      </ul>
                      <p>New Members: 200+</p>
                    </div>
                    <div className="h-[300px] md:h-[350px]">
                      <StatsChart />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Third Slide */}
        <CarouselItem>
          <div className="p-1">
            <Card className="border-0 overflow-hidden bg-transparent">
              <CardContent className="relative min-h-[600px] lg:aspect-[21/9] p-4 md:p-6 lg:p-8 overflow-y-auto">
                <div className="flex flex-col h-full max-w-[95%] mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 lg:mb-6">Esports Talks at a glance</h2>
                  <h3 className="text-xl md:text-2xl font-semibold mb-6 lg:mb-8 text-center">Other communities managed by Esports Talks</h3>

                  <div className="grid grid-cols-1 gap-6 lg:gap-8 w-full">
                    {/* First Row */}
                    <div className="flex justify-center items-center">
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 md:px-6 py-2 md:py-3 text-center text-sm md:text-base">
                        Esports Talks Management
                      </div>
                    </div>

                    {/* Second Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 py-2 text-center">
                        <div className="text-sm md:text-base">Kela Gang Instagram Broadcast</div>
                        <div className="text-xs md:text-sm">(12K+ active members)</div>
                      </div>
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 py-2 text-center">
                        <div className="text-sm md:text-base">Godlike Asylum Instagram Broadcast</div>
                        <div className="text-xs md:text-sm">(3K Members)</div>
                      </div>
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 py-2 text-center">
                        <div className="text-sm md:text-base">Other Instagram Broadcasts</div>
                        <div className="text-xs md:text-sm">(~15K+ Members)</div>
                      </div>
                    </div>

                    {/* Third Row */}
                    <div className="flex justify-center items-center">
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 md:px-6 py-2 md:py-3 text-center text-sm md:text-base">
                        Esports Talks Management
                      </div>
                    </div>

                    {/* Fourth Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 py-2 text-center">
                        <div className="text-sm md:text-base">Instagram Pages</div>
                        <div className="text-xs md:text-sm">(7+ different handles, Avg followers - 1k+). Maximum - 50K+</div>
                      </div>
                      <div className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full px-4 py-2 text-center">
                        <div className="text-sm md:text-base">Youtube Channels</div>
                        <div className="text-xs md:text-sm">(news/highlights/Watchparty), 1K-10K Subs</div>
                      </div>
                    </div>

                    {/* Total Reach Indicators */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center w-full mt-4">
                      <div className="text-[hsl(var(--destructive))] font-semibold text-sm md:text-base">
                        Instagram Broadcasts: (30K+ Reach)
                      </div>
                      <div className="text-[hsl(var(--destructive))] font-semibold text-sm md:text-base">
                        Instagram/YT Pages (50K-60K Reach)
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>

        {/* Fourth Slide */}
        <CarouselItem>
          <div className="p-1">
            <Card className="border-0 overflow-hidden bg-transparent">
              <CardContent className="relative min-h-[600px] lg:aspect-[21/9] p-0">
                <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-8 lg:p-12 z-20 text-[hsl(var(--foreground))] overflow-y-auto">
                  <div className="space-y-6 lg:space-y-8 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Why Partner with Esports Talks?</h2>
                    
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold">Direct Access</h3>
                        <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] ml-4 md:ml-6">Connect with a highly targeted and engaged audience of gamers and esports fans.</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold">Amplify Your Brand</h3>
                        <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] ml-4 md:ml-6">Leverage our influence (post campaign, story campaign, watchparties) to boost awareness and credibility.</p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold">Proven Engagement</h3>
                        <div className="ml-4 md:ml-6 space-y-2">
                          <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))]">Drive conversations around your games, tournaments, or products.</p>
                          <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))]">Your social growth.</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl md:text-2xl font-semibold">Promotions</h3>
                        <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] ml-4 md:ml-6">Get your IPs, games, tournaments, product promoted through our handles and community.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-6 lg:mt-8">
                    <div className="bg-[hsl(var(--card-foreground)/0.1)] backdrop-blur-sm rounded-lg px-4 md:px-6 py-3 md:py-4 inline-block">
                      <p className="text-base md:text-xl">Reach out to us: <a href="mailto:esportstalk36@gmail.com" className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary)/0.8)] transition-colors">esportstalk36@gmail.com</a></p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-2 md:left-4" />
      <CarouselNext className="right-2 md:right-4" />
    </Carousel>
  )
}

