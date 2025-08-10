'use client'

import * as React from 'react'
import Link from "next/link"
import { Twitter, LucideIcon, Instagram } from 'lucide-react'
import { DiscordIcon } from "@/components/ui/discord-icon"
import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

interface SocialLinkProps {
  href: string
  label: string
  icon: LucideIcon
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <Link
    href={href}
    className={cn(
      "text-sm text-muted-foreground transition-all duration-200 hover:text-primary hover:translate-x-1 inline-block",
      className
    )}
  >
    {children}
  </Link>
)

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 hover:bg-accent rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md"
  >
    <div className="h-5 w-5 transition-colors duration-200 hover:text-primary">
      {React.createElement(icon, { size: 20, 'aria-hidden': true })}
    </div>
    <span className="sr-only">{label}</span>
  </Link>
)

export function Footer() {
  const aboutUs = [
    { href: '/about/contributors', label: 'Contributors' },
    { href: '/about/founders', label: 'Founders' },
  ]

  const mainLinks = [
    { href: '/services', label: 'Services' },
    { href: '/roster', label: 'Roster' },
    { href: '/merch', label: 'Merch' },
    { href: '/contact', label: 'Contact' },
    { href: '/event', label: 'Event' },
  ]

  return (
    <footer className="bg-background/95 backdrop-blur-sm border-t border-border mt-auto w-full">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Main Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-primary after:rounded-full">
              Navigation
            </h3>
            <ul className="space-y-3">
              {mainLinks.map(({ href, label }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-primary after:rounded-full">
              About Us
            </h3>
            <ul className="space-y-3">
              {aboutUs.map(({ href, label }) => (
                <li key={href}>
                  <NavLink href={href}>{label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:bg-primary after:rounded-full">
              Connect
            </h3>
            <div className="flex items-center space-x-4">
              <SocialLink 
                href="https://x.com/i/communities/1647207932642353152"
                icon={Twitter}
                label="Twitter Community"
              />
              <SocialLink 
                href="https://discord.gg/Z8Amfxe7f4"
                icon={DiscordIcon}
                label="Discord Server"
              />
              <SocialLink 
                href="https://www.instagram.com/esportstalk.in?igsh=NnZ6cmNlNndsMWVp"
                icon={Instagram}
                label="Instagram"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join our community on Twitter and Discord for the latest updates and discussions.
            </p>
          </div>
        </div>

        {/* Copyright and Credit */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Link 
                href="/" 
                className="text-xl font-bold transition-all duration-200 hover:text-primary hover:scale-105"
              >
                EsportsTalk
              </Link>
              <span className="text-sm text-muted-foreground">
                © 2024 All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer