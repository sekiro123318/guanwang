import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    area: "Small Molecules",
    program: "Diabetic Foot Ulcer (1.2)",
    stage: "IND Application",
    progress: 90,
  },
  {
    area: "Peptides",
    program: "Appetite Suppression",
    stage: "Discovery",
    progress: 30,
  },
  {
    area: "TCM",
    program: "Epilepsy Program",
    stage: "Lead Optimization",
    progress: 60,
  },
]

export function PipelinePreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Pipeline
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Advancing multiple programs across therapeutic areas
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {programs.map((item) => (
            <div
              key={item.program}
              className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                {item.area}
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {item.program}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.stage}</p>
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span className="font-semibold text-foreground">{item.progress}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="border-border text-foreground hover:bg-secondary"
          >
            <Link href="/pipeline">
              View Full Pipeline <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
