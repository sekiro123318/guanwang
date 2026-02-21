const partners = ["Pfizer", "Novartis", "Merck", "AstraZeneca", "Roche"]

export function LogoBand() {
  return (
    <section className="border-b border-border bg-secondary py-8">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by leading pharmaceutical companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {partners.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-wide text-muted-foreground/40 transition-colors hover:text-muted-foreground/70 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
