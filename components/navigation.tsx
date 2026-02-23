"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag, Search } from "lucide-react"

const pillars = [
  { name: "Calm", description: "Sleep & Relaxation", color: "bg-orchid" },
  { name: "Energy", description: "Vitality & Movement", color: "bg-peach" },
  { name: "Balance", description: "Mindfulness & Focus", color: "bg-teal" },
  { name: "Glow", description: "Skin & Self-Care", color: "bg-secondary" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-card-strong">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orchid/20">
                <svg
                  viewBox="0 0 32 32"
                  className="h-6 w-6"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="16" cy="16" r="14" fill="#D4A5FF" fillOpacity="0.3" />
                  <path
                    d="M16 4C16 4 20 10 20 16C20 22 16 28 16 28C16 28 12 22 12 16C12 10 16 4 16 4Z"
                    fill="#D4A5FF"
                  />
                  <path
                    d="M4 16C4 16 10 12 16 12C22 12 28 16 28 16C28 16 22 20 16 20C10 20 4 16 4 16Z"
                    fill="#2EECC7"
                    fillOpacity="0.6"
                  />
                  <circle cx="16" cy="16" r="3" fill="#FF9E7D" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight text-deep">
                Wellsupporte
              </span>
            </a>

            {/* Desktop Navigation - Energy Pillars */}
            <div className="hidden items-center gap-1 lg:flex">
              {pillars.map((pillar) => (
                <a
                  key={pillar.name}
                  href={`#${pillar.name.toLowerCase()}`}
                  className="group flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-deep/70 transition-all hover:bg-orchid/10 hover:text-deep"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${pillar.color} opacity-60 transition-opacity group-hover:opacity-100`}
                  />
                  <span>{pillar.name}</span>
                </a>
              ))}
              <a
                href="#science"
                className="rounded-full px-4 py-2 text-sm font-medium text-deep/70 transition-all hover:bg-orchid/10 hover:text-deep"
              >
                Our Science
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full text-deep/60 transition-colors hover:bg-orchid/10 hover:text-deep"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full text-deep/60 transition-colors hover:bg-orchid/10 hover:text-deep"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-5 w-5" />
              </button>
              <a
                href="#shop"
                className="rounded-full bg-orchid px-5 py-2.5 text-sm font-semibold text-deep transition-all hover:bg-orchid/80 hover:shadow-lg hover:shadow-orchid/25"
              >
                Shop Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-deep/70 transition-colors hover:bg-orchid/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="glass-card-strong border-t border-orchid/10 lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {pillars.map((pillar) => (
              <a
                key={pillar.name}
                href={`#${pillar.name.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-deep/80 transition-colors hover:bg-orchid/10"
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${pillar.color}`}
                />
                <div>
                  <div className="font-semibold text-deep">{pillar.name}</div>
                  <div className="text-xs text-deep/50">{pillar.description}</div>
                </div>
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#shop"
                className="block rounded-full bg-orchid py-3 text-center text-sm font-semibold text-deep transition-all hover:bg-orchid/80"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
