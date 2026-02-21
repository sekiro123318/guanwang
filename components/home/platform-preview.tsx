import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const features = [
  "Multi-omics data integration & analysis",
  "AI-driven structure-based drug design",
  "Generative molecular optimization",
  "Real-time predictive toxicology",
  "Automated lead scoring & prioritization",
]

export function PlatformPreview() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Our Platform
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              End-to-end AI infrastructure for drug discovery
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our proprietary platform integrates deep learning, generative AI,
              and computational chemistry into a unified workflow that connects
              target identification through clinical candidate selection.
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/technology">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xl">
            <Image
              src="/images/platform-viz.jpg"
              alt="angelpro AI platform visualization showing interconnected nodes and molecular structures"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
