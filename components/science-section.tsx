import { FlaskConical, ShieldCheck, Recycle, Award } from "lucide-react"

const features = [
  {
    icon: FlaskConical,
    title: "Lab-Tested",
    description:
      "Every product undergoes rigorous third-party testing for safety and efficacy.",
    color: "bg-orchid/15",
    iconColor: "text-orchid",
  },
  {
    icon: ShieldCheck,
    title: "Dermatologist Approved",
    description:
      "Certified by leading dermatologists to ensure skin-safe, hypoallergenic materials.",
    color: "bg-peach/15",
    iconColor: "text-peach",
  },
  {
    icon: Recycle,
    title: "Sustainably Sourced",
    description:
      "We only partner with suppliers committed to ethical, eco-friendly manufacturing.",
    color: "bg-teal/15",
    iconColor: "text-teal",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description:
      "Recognized by Wellness Weekly and GreenLiving Magazine for innovation in wellness.",
    color: "bg-orchid/15",
    iconColor: "text-orchid",
  },
]

export function ScienceSection() {
  return (
    <section id="science" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orchid/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          {/* Left content */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-peach">
              Our Promise
            </p>
            <h2 className="text-balance text-3xl font-bold tracking-tight text-deep sm:text-4xl lg:text-5xl">
              Backed by Science, Driven by Nature.
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-deep/60 sm:text-lg">
              We believe wellness should never be a guessing game. That is why
              every Wellsupporte product is validated through clinical research
              and real-world testing by our community of over 50,000 members.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2">
                <ShieldCheck className="h-5 w-5 text-teal" />
                <span className="text-sm font-medium text-deep">FDA Compliant</span>
              </div>
              <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2">
                <Recycle className="h-5 w-5 text-teal" />
                <span className="text-sm font-medium text-deep">Carbon Neutral</span>
              </div>
              <div className="glass-card flex items-center gap-2 rounded-full px-4 py-2">
                <Award className="h-5 w-5 text-orchid" />
                <span className="text-sm font-medium text-deep">B-Corp Certified</span>
              </div>
            </div>
          </div>

          {/* Right feature cards */}
          <div className="flex-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="glass-card rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orchid/5"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}
                    >
                      <Icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-base font-bold text-deep">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-deep/55">
                      {feature.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
