"use client"

import { useState } from "react"
import { Leaf, Search, FlaskConical, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const screeningCapabilities = [
  "Active compound identification and isolation",
  "Multi-component synergy analysis",
  "Target-compound interaction prediction",
  "Bioavailability and absorption modeling",
  "Herb-drug interaction assessment",
  "Quality control marker identification",
  "Formulation compatibility screening",
  "Metabolite pathway mapping",
  "Toxicity and safety evaluation",
  "Efficacy validation through network pharmacology",
  "Batch consistency and standardization analysis",
]

const sections = [
  {
    id: "discovery",
    icon: Search,
    tag: "Discovery",
    title: "Class 2.3 Modified New Drug Discovery",
    description:
      "Our TCM discovery platform applies AI-powered natural language processing and knowledge graph mining to centuries of traditional Chinese medicine literature and clinical records. By cross-referencing historical formulation data with modern molecular databases and disease ontologies, the platform identifies promising TCM-derived compounds and modified formulations for new drug development under the Class 2.3 regulatory pathway, bridging traditional wisdom with contemporary pharmaceutical science.",
  },
  {
    id: "screening",
    icon: FlaskConical,
    tag: "Screening",
    title: "TCM Active Platform Development",
    description:
      "A purpose-built AI screening platform for traditional Chinese medicine that addresses the unique challenges of multi-component formulations, synergistic compound interactions, and complex mechanism-of-action profiles inherent in TCM-based therapeutics.",
    capabilities: screeningCapabilities,
  },
]

export function TcmPlatform() {
  const [openSection, setOpenSection] = useState<string | null>("discovery")

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Platform III
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Traditional Chinese Medicine
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          AI-powered platform for modernizing traditional Chinese medicine drug
          discovery, combining ancient pharmacological knowledge with
          cutting-edge computational methods for active compound identification
          and new drug development.
        </p>

        {/* Accordion cards */}
        <div className="mt-12 flex flex-col gap-4">
          {sections.map((section) => {
            const isOpen = openSection === section.id
            return (
              <div
                key={section.id}
                className={cn(
                  "rounded-xl border transition-all",
                  isOpen
                    ? "border-accent/30 bg-card shadow-lg"
                    : "border-border bg-card hover:border-accent/20 hover:shadow-md"
                )}
              >
                <button
                  onClick={() =>
                    setOpenSection(isOpen ? null : section.id)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isOpen
                          ? "bg-accent text-accent-foreground"
                          : "bg-accent/10 text-accent"
                      )}
                    >
                      <section.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-accent">
                        {section.tag}
                      </span>
                      <h3 className="text-base font-semibold text-foreground md:text-lg">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-muted-foreground transition-transform",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-border pt-5 pl-14">
                      <p className="leading-relaxed text-muted-foreground">
                        {section.description}
                      </p>
                      {section.capabilities && (
                        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                          {section.capabilities.map((cap) => (
                            <li
                              key={cap}
                              className="flex items-start gap-2 text-sm text-foreground"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
