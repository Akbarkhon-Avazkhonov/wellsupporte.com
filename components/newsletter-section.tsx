"use client"

import { useState } from "react"
import { Send, Check } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 lg:p-16">
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-orchid/15 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal">
              Stay Connected
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-deep sm:text-4xl">
              Join the Wellness Movement.
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-deep/60">
              Get early access to new products, exclusive discounts, and
              science-backed wellness tips delivered to your inbox.
            </p>

            {/* Email form */}
            {submitted ? (
              <div className="mt-8 flex items-center justify-center gap-2 rounded-full bg-teal/15 px-6 py-4 text-sm font-semibold text-accent-foreground">
                <Check className="h-5 w-5" />
                Welcome to the community! Check your inbox.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
              >
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full rounded-full border border-orchid/20 bg-background/60 px-6 py-4 text-sm text-deep placeholder-deep/40 backdrop-blur-sm transition-all focus:border-orchid/40 focus:outline-none focus:ring-2 focus:ring-orchid/20 sm:rounded-r-none sm:pr-4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 rounded-full bg-orchid px-8 py-4 text-sm font-semibold text-deep transition-all hover:bg-orchid/80 hover:shadow-lg hover:shadow-orchid/25 sm:rounded-l-none"
                >
                  <Send className="h-4 w-4" />
                  Subscribe
                </button>
              </form>
            )}

            <p className="mt-4 text-xs text-deep/40">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
