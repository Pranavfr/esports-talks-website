import { Timer, ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function ComingSoonPage({ pageName }) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      {/* Back Button */}
      <div className="fixed top-4 left-4">
        <Link href="/">
          <Button variant="outline" size="sm" className="gap-2">
            <ChevronLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Icon with animation */}
        <div className="flex justify-center">
          <Timer className="h-24 w-24 text-primary animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold tracking-tight">
          {pageName} Page Coming Soon
        </h1>

        {/* Description */}
        <p className="text-lg text-muted-foreground">
          We&apos;re working hard to bring you something amazing. Stay tuned for updates!
        </p>

        {/* Feature Preview */}
        <div className="mt-12 grid gap-4 text-left">
          <h2 className="text-xl font-semibold text-center mb-4">What to Expect</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-medium mb-2">Latest Updates</h3>
              <p className="text-sm text-muted-foreground">
                Stay informed with the most recent news and developments
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-medium mb-2">Team Profiles</h3>
              <p className="text-sm text-muted-foreground">
                Detailed information about players and team statistics
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-medium mb-2">Match Schedule</h3>
              <p className="text-sm text-muted-foreground">
                Upcoming matches and tournament details
              </p>
            </div>
            <div className="p-4 rounded-lg border bg-card">
              <h3 className="font-medium mb-2">Exclusive Content</h3>
              <p className="text-sm text-muted-foreground">
                Behind-the-scenes content and team insights
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Follow us to get notified when we launch:
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="https://x.com/i/communities/1647207932642353152"
              target="_blank"
              className="text-sm text-primary hover:underline"
            >
              Twitter
            </Link>
            <Link 
              href="https://instagram.com"
              target="_blank"
              className="text-sm text-primary hover:underline"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
