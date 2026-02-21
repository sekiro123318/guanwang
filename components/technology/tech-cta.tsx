import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function TechCta() {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          Interested in our technology?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Contact our scientific team to learn how our AI platform can
          accelerate your drug discovery programs.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
        >
          <Link href="/contact">
            Contact Our Scientific Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
