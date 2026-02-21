import { Dna, Atom, BarChart3 } from "lucide-react"

const values = [
  {
    icon: Dna,
    title: "Target Identification",
    description:
      "AI algorithms analyze complex biological data to identify novel drug targets with unprecedented accuracy and speed.",
  },
  {
    icon: Atom,
    title: "Lead Optimization",
    description:
      "Generative chemistry designs and optimizes candidate molecules in weeks, not years, dramatically reducing development time.",
  },
  {
    icon: BarChart3,
    title: "Clinical Success",
    description:
      "Predict clinical outcomes early and reduce late-stage failures, improving the probability of success across your portfolio.",
  },
]

export function ValueProps() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Transforming every stage of drug discovery
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Our integrated platform accelerates the path from target to clinic
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {values.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
