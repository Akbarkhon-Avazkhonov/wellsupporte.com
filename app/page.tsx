import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { ProductsSection } from "@/components/products-section"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="mesh-gradient-bg min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CategoriesSection />
        <ProductsSection />
        <ScienceSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  )
}
