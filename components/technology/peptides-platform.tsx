"use client"

import { useState } from "react"
import { Dna, Shapes, FlaskConical, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const screeningCapabilities = [
  "Peptide-target binding affinity prediction",
  "Stability and half-life optimization",
  "Membrane permeability assessment",
  "Immunogenicity risk profiling",
  "Protease resistance modeling",
  "Cyclization strategy optimization",
  "Cell penetration prediction",
  "Multi-target selectivity screening",
  "Conformational analysis and dynamics",
  "Structure-activity relationship mapping",
  "Toxicity and safety profiling",
]

const sections = [
  {
    id: "design",
    icon: Shapes,
    tag: "Design & Optimization",
    title: "Peptide Design & Optimization",
    description:
      "Our AI-powered peptide engineering platform combines sequence-based deep learning with structural modeling to design novel peptide therapeutics. The system generates optimized peptide sequences with enhanced target binding affinity, improved metabolic stability, and favorable pharmacokinetic profiles. Through iterative rounds of computational design and scoring, we rapidly explore the vast peptide sequence space to identify candidates with the optimal balance of potency, selectivity, and drug-like properties.",
  },
  {
    id: "screening",
    icon: FlaskConical,
    tag: "Screening",
    title: "Peptide Screening Capabilities",
    description:
      "A comprehensive computational screening pipeline tailored specifically for peptide therapeutics, evaluating candidates across all critical pharmacological parameters to ensure only the most viable peptides advance to preclinical development.",
    capabilities: screeningCapabilities,
  },
]

export function PeptidesPlatform() {
  const [openSection, setOpenSection] = useState<string | null>("design")

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Dna className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Platform II
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Peptides
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          AI-driven peptide discovery and optimization platform, leveraging deep
          learning for sequence design, stability engineering, and
          pharmacological screening of peptide therapeutics.
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
