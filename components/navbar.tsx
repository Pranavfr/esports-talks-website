'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { Instagram, Twitter } from 'lucide-react'
import { ChevronDown, LucideIcon, Menu, X } from 'lucide-react'
import { DiscordIcon } from "@/components/ui/discord-icon"
import Link from "next/link"
import Image from "next/image"
import * as React from 'react'
import { useState } from "react"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

interface SocialLinkProps {
  href: string
  label: string
  icon: LucideIcon
}

const NavLink = ({ href, children, className, onClick }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "relative text-sm transition-colors hover:text-primary",
        "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  )
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative p-2 hover:bg-accent rounded-full transition-all duration-300 hover:scale-110"
  >
    <div className="transform transition-transform duration-300 group-hover:rotate-12 group-hover:text-[#8B5CF6]">
      <div className="h-5 w-5">
        {React.createElement(icon, { size: 20, 'aria-hidden': true })}
      </div>
    </div>
    <span className="sr-only">{label}</span>
  </Link>
)

export function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const aboutUs = [
    { href: '/about/contributors', label: 'Contributors' },
    { href: '/about/founders', label: 'Founders' },
  ]

  return (
    <nav
      className="fixed top-0 z-50 w-full border-b backdrop-blur-sm shadow-md"
      role="navigation"
    >
      <div className='container mx-auto px-4'>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="relative flex items-center space-x-2 transition-all duration-300 hover:scale-105 group"
          >
            <Image
              src="/etlogo.png"
              alt="ET Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-white">EsportsTalks</span>
          </Link>

          <button
            className="md:hidden p-2 hover:bg-accent rounded-full transition-all duration-300 hover:rotate-180"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/merch">Merch</NavLink>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-1 group">
                  About Us
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="animate-in fade-in-50 zoom-in-95">
                {aboutUs.map(({ href, label }) => (
                  <DropdownMenuItem key={href} asChild className="transition-colors">
                    <Link href={href} className="w-full hover:text-primary">{label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/roster">Roster</NavLink>
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/event">Event</NavLink>

            <div className="flex items-center space-x-2 ml-2">
              <SocialLink
                href="https://x.com/i/communities/1647207932642353152"
                icon={Twitter}
                label="X Community"
              />
              <SocialLink
                href="https://discord.gg/8hv9AqcQNm"
                icon={DiscordIcon}
                label="Discord Server"
              />
              <SocialLink
                href="https://www.instagram.com/esportstalk.in?igsh=NnZ6cmNlNndsMWVp"
                icon={Instagram}
                label="Instagram"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden bg-background/95 backdrop-blur-sm border-t border-border overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-4 p-4">
          <NavLink href="/merch" onClick={() => setIsMenuOpen(false)}>
            Merch
          </NavLink>

          <div className="space-y-2 pl-4">
            <div className="text-sm font-medium">About Us</div>
            {aboutUs.map(({ href, label }) => (
              <NavLink
                key={href}
                href={href}
                className="block p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>

          <NavLink href="/roster" onClick={() => setIsMenuOpen(false)}>
            Roster
          </NavLink>
          <NavLink href="/services" onClick={() => setIsMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink href="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </NavLink>
          <NavLink href="/event" onClick={() => setIsMenuOpen(false)}>
            Event
          </NavLink>

          <div className="flex items-center space-x-2 p-2">
            <SocialLink
              href="https://x.com/i/communities/1647207932642353152"
              icon={Twitter}
              label="X Community"
            />
            <SocialLink
              href="https://discord.gg/8hv9AqcQNm"
              icon={DiscordIcon}
              label="Discord Server"
            />
            <SocialLink
              href="https://www.instagram.com/esportstalk.in?igsh=NnZ6cmNlNndsMWVp"
              icon={Instagram}
              label="Instagram"
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
