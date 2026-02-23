import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah K.",
    role: "Yoga Instructor",
    quote:
      "The AuraBreeze Diffuser completely transformed my evening routine. I fall asleep in minutes now.",
    rating: 5,
    avatar: "S",
    color: "bg-orchid/20 text-orchid",
  },
  {
    name: "Marcus T.",
    role: "Software Engineer",
    quote:
      "I was skeptical, but the VitalPulse Massage Gun is legit. My recovery time after workouts has been cut in half.",
    rating: 5,
    avatar: "M",
    color: "bg-peach/20 text-peach",
  },
  {
    name: "Emily R.",
    role: "Meditation Coach",
    quote:
      "Wellsupporte curates the best wellness tools I have ever used. The MindFlow Journal is my daily companion.",
    rating: 5,
    avatar: "E",
    color: "bg-teal/20 text-teal",
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orchid/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orchid">
            Community
          </p>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-deep sm:text-4xl lg:text-5xl">
            Loved by 50,000+ People.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-deep/60 sm:text-lg">
            Real stories from real people who transformed their wellness
            routines with Wellsupporte.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass-card flex flex-col rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orchid/5"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-peach text-peach"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="flex-1 text-base leading-relaxed text-deep/75">
                {`"${t.quote}"`}
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold ${t.color}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-deep">{t.name}</p>
                  <p className="text-xs text-deep/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
