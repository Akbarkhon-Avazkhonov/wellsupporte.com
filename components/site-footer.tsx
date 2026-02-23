const footerLinks = {
  Shop: ["All Products", "Calm", "Energy", "Balance", "Glow", "Gift Cards"],
  Company: ["Our Story", "Science", "Sustainability", "Careers", "Press"],
  Support: ["Help Center", "Shipping", "Returns", "Track Order", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-orchid/10 bg-deep">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Brand row */}
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
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
            <span className="text-lg font-semibold tracking-tight text-cloud">
              Wellsupporte
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-cloud/50">
            Precision tools for a balanced life. We curate the
            high-performance gear your mind and body deserve.
          </p>
          {/* Social links */}
          <div className="flex gap-3">
            {["Instagram", "Twitter", "YouTube"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cloud/5 text-cloud/50 transition-colors hover:bg-orchid/20 hover:text-orchid"
                aria-label={platform}
              >
                <span className="text-xs font-bold">
                  {platform[0]}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns - all four on one horizontal row */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cloud/70">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cloud/40 transition-colors hover:text-orchid"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cloud/10 pt-8 sm:flex-row">
          <p className="text-xs text-cloud/30">
            &copy; {new Date().getFullYear()} Wellsupporte. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-cloud/30">We accept</span>
            <div className="flex gap-2">
              {["Visa", "MC", "Amex", "PayPal"].map((card) => (
                <div
                  key={card}
                  className="flex h-7 items-center rounded bg-cloud/10 px-2 text-xs font-medium text-cloud/50"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
