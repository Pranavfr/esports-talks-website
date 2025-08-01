// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './theme-provider'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import SimpleAnalytics from '@/components/SimpleAnalytics'
import AdminAnalytics from '@/components/AdminAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EsportsTalks',
  description: 'Your premier destination for esports news, updates, and community engagement.',
  openGraph: {
    title: 'EsportsTalks',
    description: 'Your premier destination for esports news, updates, and community engagement.',
    url: 'https://esports-talks.vercel.app',
    siteName: 'EsportsTalks',
    images: [
      {
        url: 'https://esports-talks.vercel.app/etpreview.png',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EsportsTalks',
    description: 'Your premier destination for esports news, updates, and community engagement.',
    images: ['https://esports-talks.vercel.app/etpreview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <GoogleAnalytics />
          <SimpleAnalytics />
          <AdminAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}