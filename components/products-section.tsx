"use client"

import Image from "next/image"
import { Star, ShoppingBag, Leaf } from "lucide-react"
import { useState } from "react"

const products = [
  {
    name: "AuraBreeze Diffuser",
    category: "Calm",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviews: 2347,
    image: "/images/product-diffuser.jpg",
    badge: "Best Seller",
    badgeColor: "bg-orchid text-deep",
    eco: true,
  },
  {
    name: "CloudNest Weighted Blanket",
    category: "Calm",
    price: 129.99,
    originalPrice: null,
    rating: 4.8,
    reviews: 1892,
    image: "/images/product-blanket.jpg",
    badge: "Eco-Certified",
    badgeColor: "bg-teal text-accent-foreground",
    eco: true,
  },
  {
    name: "DreamShade Sleep Mask",
    category: "Calm",
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.7,
    reviews: 3156,
    image: "/images/product-sleep-mask.jpg",
    badge: null,
    badgeColor: "",
    eco: false,
  },
  {
    name: "MindFlow Journal",
    category: "Balance",
    price: 24.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 987,
    image: "/images/product-journal.jpg",
    badge: "New",
    badgeColor: "bg-peach text-deep",
    eco: true,
  },
  {
    name: "VitalPulse Massage Gun",
    category: "Energy",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.8,
    reviews: 1543,
    image: "/images/product-massage-gun.jpg",
    badge: "Top Rated",
    badgeColor: "bg-orchid text-deep",
    eco: false,
  },
  {
    name: "ZenGround Yoga Mat",
    category: "Balance",
    price: 89.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 2089,
    image: "/images/product-yoga-mat.jpg",
    badge: "Eco-Certified",
    badgeColor: "bg-teal text-accent-foreground",
    eco: true,
  },
]

function ProductCard({
  product,
}: {
  product: (typeof products)[0]
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="glass-card group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-orchid/10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
        />

        {/* Badge */}
        {product.badge && (
          <div
            className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${product.badgeColor}`}
          >
            {product.badge}
          </div>
        )}

        {/* Eco badge */}
        {product.eco && (
          <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-teal/20 backdrop-blur-sm">
            <Leaf className="h-4 w-4 text-teal" />
          </div>
        )}

        {/* Quick add button */}
        <div
          className={`absolute inset-x-3 bottom-3 transition-all duration-300 ${isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-deep/90 py-3 text-sm font-semibold text-cloud backdrop-blur-sm transition-colors hover:bg-deep">
            <ShoppingBag className="h-4 w-4" />
            Quick Add
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-4">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-orchid">
          {product.category}
        </p>
        <h3 className="text-base font-semibold text-deep">{product.name}</h3>

        {/* Rating */}
        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) ? "fill-peach text-peach" : "fill-muted text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs font-medium text-deep/60">
            {product.rating} ({new Intl.NumberFormat("en-US").format(product.reviews)})
          </span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-deep">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-deep/40 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProductsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-[60rem] -translate-x-1/2 rounded-full bg-orchid/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-teal">
            Featured Products
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-deep sm:text-4xl lg:text-5xl">
            Curated for Your Best Self.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-deep/60 sm:text-lg">
            Each product is tested, reviewed, and certified to meet our
            uncompromising standards for quality and sustainability.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="glass-card inline-flex items-center gap-2 rounded-full px-8 py-4 font-semibold text-deep transition-all hover:bg-orchid/10 hover:shadow-lg"
          >
            View Full Collection
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
