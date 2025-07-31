// app/layout.tsx
import type { Metadata } from "next"
import { Montserrat, Play } from 'next/font/google'
import "./globals.css"
import { Providers } from "./providers"


// Primary font for headings
const play = Play({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-play',
})

// Secondary font for body text
const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: "Esports Talks",
  description: "Latest updates from our esports community",
  openGraph: {
    title: "Esports Talks",
    description: "Latest updates from our esports community",
    url: "https://esports-talks.vercel.app",
    siteName: "Esports Talks",
    images: [
      {
        url: '/etpreview.png',
        width: 1200,
        height: 630,
        alt: 'Esports Talks Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Esports Talks",
    description: "Latest updates from our esports community",
    images: ['/etpreview.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${play.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}