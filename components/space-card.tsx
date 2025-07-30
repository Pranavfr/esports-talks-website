interface SpaceCardProps {
  title: string
  description: string
  status: "live" | "scheduled" | "ended"
  scheduledFor?: string 
  participantsCount: number
  spaceUrl: string
}

export function SpaceCard({
  title,
  description,
  status,
  scheduledFor,
  participantsCount,
  spaceUrl,
}: SpaceCardProps) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {status === "live" && (
              <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
            )}
            <span className="text-sm capitalize">{status}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            {participantsCount} participants
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        {scheduledFor && status === "scheduled" && (
          <p className="text-sm text-muted-foreground mb-4">
            Scheduled for: {new Date(scheduledFor).toLocaleString()}
          </p>
        )}
        <a
          href={spaceUrl}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
        >
          Join Space
        </a>
      </div>
    </div>
  )
}

