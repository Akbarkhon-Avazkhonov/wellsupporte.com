"use client"

import Image from "next/image"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 lg:pt-0">
      {/* Animated mesh gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-pulse-glow absolute -left-32 -top-32 h-96 w-96 rounded-full bg-orchid/20 blur-3xl" />
        <div className="animate-pulse-glow absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-teal/20 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="animate-pulse-glow absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-peach/15 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        {/* Left content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badge */}
          <div className="glass-card mb-6 flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-deep/70">
            <Sparkles className="h-4 w-4 text-orchid" />
            <span>Precision Wellness Technology</span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-deep sm:text-5xl md:text-6xl lg:text-7xl">
            The Science of{" "}
            <span className="shimmer-text">Feeling Superb.</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-deep/60 sm:text-lg">
            Precision tools for a balanced life. At Wellsupporte, we curate the
            high-performance gear your mind and body deserve.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="#shop"
              className="group flex items-center justify-center gap-2 rounded-full bg-orchid px-8 py-4 text-base font-semibold text-deep transition-all hover:bg-orchid/80 hover:shadow-xl hover:shadow-orchid/25"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#science"
              className="glass-card flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-deep/80 transition-all hover:bg-orchid/10"
            >
              Our Science
            </a>
          </div>

          {/* Micro stats */}
          <div className="mt-10 flex items-center gap-8">
            <div>
              <div className="text-2xl font-bold text-deep">50K+</div>
              <div className="text-xs text-deep/50">Happy Customers</div>
            </div>
            <div className="h-8 w-px bg-orchid/20" />
            <div>
              <div className="text-2xl font-bold text-deep">4.9</div>
              <div className="text-xs text-deep/50">Average Rating</div>
            </div>
            <div className="h-8 w-px bg-orchid/20" />
            <div>
              <div className="text-2xl font-bold text-deep">100%</div>
              <div className="text-xs text-deep/50">Natural</div>
            </div>
          </div>
        </div>

        {/* Right hero image */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="animate-pulse-glow absolute h-80 w-80 rounded-full bg-orchid/15 blur-2xl lg:h-[28rem] lg:w-[28rem]" />
          <div className="animate-float relative">
            <div className="glass-card overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-silhouette.jpg"
                alt="Wellness energy visualization - a glowing meditation silhouette with colorful energy pulses"
                width={520}
                height={600}
                className="rounded-2xl object-cover"
                style={{ width: "100%", height: "auto" }}
                priority
              />
            </div>
          </div>

          {/* Floating product badge */}
          <div className="glass-card-strong animate-float-delayed absolute -left-4 bottom-12 rounded-2xl p-3 shadow-lg lg:-left-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal/20">
                <Sparkles className="h-5 w-5 text-teal" />
              </div>
              <div>
                <div className="text-xs font-semibold text-deep">Eco-Certified</div>
                <div className="text-xs text-deep/50">100% Natural</div>
              </div>
            </div>
          </div>

          {/* Floating rating badge */}
          <div className="glass-card-strong animate-float absolute -right-2 top-12 rounded-2xl p-3 shadow-lg lg:-right-6" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 fill-peach text-peach"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M10 1l2.39 4.84L17.3 6.8l-3.65 3.56.86 5.02L10 13.09l-4.51 2.3.86-5.02L2.7 6.8l4.91-.96L10 1z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-semibold text-deep">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
