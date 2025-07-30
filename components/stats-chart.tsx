'use client'

export function StatsChart() {
  const data = [
    {
      name: "New Members",
      total: 200,
      percentage: 20,
    },
    {
      name: "Impressions",
      total: 500000,
      percentage: 80,
    },
    {
      name: "Like Count",
      total: 40000,
      percentage: 60,
    },
    {
      name: "New Posts",
      total: 3000,
      percentage: 40,
    },
  ]

  return (
    <div className="w-full space-y-4">
      {data.map((item, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">{item.name}</span>
            <span className="font-medium">{item.total.toLocaleString()}</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${item.percentage}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

