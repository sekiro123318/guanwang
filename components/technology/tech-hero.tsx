import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function TechHero() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <nav className="mb-8 flex items-center gap-1 text-sm text-primary-foreground/50">
          <Link href="/" className="transition-colors hover:text-primary-foreground">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-primary-foreground">Technology</span>
        </nav>
        <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl">
          Our Technologies
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
          angelpro develops proprietary AI-driven drug discovery platforms
          spanning small molecules, peptides, and traditional Chinese medicine,
          each powered by purpose-built computational models and deep learning
          architectures.
        </p>
      </div>
    </section>
  )
}
