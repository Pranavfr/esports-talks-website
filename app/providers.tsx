// app/providers.tsx
'use client'

import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "./theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="container mx-auto px-4 pt-20">
        {children}
      </main>
      <Toaster />
    </ThemeProvider>
  )
}
