"use client"

import { Moon, Zap, Brain, Sparkles } from "lucide-react"

const categories = [
  {
    name: "Calm",
    tagline: "Sleep & Relaxation",
    description: "Drift into deep, restorative sleep with our curated collection of calming tools.",
    icon: Moon,
    color: "bg-orchid/15",
    iconColor: "text-orchid",
    borderColor: "border-orchid/20",
    hoverBg: "hover:bg-orchid/10",
  },
  {
    name: "Energy",
    tagline: "Vitality & Movement",
    description: "Supercharge your day with high-performance recovery and fitness essentials.",
    icon: Zap,
    color: "bg-peach/15",
    iconColor: "text-peach",
    borderColor: "border-peach/20",
    hoverBg: "hover:bg-peach/10",
  },
  {
    name: "Balance",
    tagline: "Mindfulness & Focus",
    description: "Sharpen your mental clarity with scientifically-backed focus tools.",
    icon: Brain,
    color: "bg-teal/15",
    iconColor: "text-teal",
    borderColor: "border-teal/20",
    hoverBg: "hover:bg-teal/10",
  },
  {
    name: "Glow",
    tagline: "Skin & Self-Care",
    description: "Nourish from the outside in with premium, eco-certified skincare gear.",
    icon: Sparkles,
    color: "bg-secondary/15",
    iconColor: "text-secondary",
    borderColor: "border-secondary/20",
    hoverBg: "hover:bg-secondary/10",
  },
]

export function CategoriesSection() {
  return (
    <section id="shop" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orchid">
            Energy Pillars
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-deep sm:text-4xl lg:text-5xl">
            Your State of Mind, Curated.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-deep/60 sm:text-lg">
            We organize wellness by how you want to feel, not by what you want
            to buy. Choose your energy pillar.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href={`#${cat.name.toLowerCase()}`}
                className={`glass-card group flex flex-col rounded-2xl p-6 transition-all duration-300 ${cat.hoverBg} hover:shadow-lg`}
              >
                <div
                  className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${cat.color} transition-transform group-hover:scale-110`}
                >
                  <Icon className={`h-7 w-7 ${cat.iconColor}`} />
                </div>
                <h3 className="text-lg font-bold text-deep">{cat.name}</h3>
                <p className="mb-2 text-sm font-medium text-orchid">
                  {cat.tagline}
                </p>
                <p className="text-sm leading-relaxed text-deep/55">
                  {cat.description}
                </p>
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center text-sm font-semibold text-deep/70 transition-colors group-hover:text-orchid">
                    Explore
                    <svg
                      className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
