"use client"

import { useState } from "react"
import { Pill, Search, FlaskConical, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const screeningCapabilities = [
  "Molecular physicochemical properties prediction",
  "Metabolic stability analysis",
  "ADMET property prediction",
  "Synthesizability prediction",
  "Target activity prediction",
  "Molecular docking simulations",
  "Phenotypic screening predictions",
  "Multi-target interaction assessment",
  "Molecular dynamics simulations",
  "Pathway analysis and network pharmacology",
  "QSAR modeling and prediction",
]

const sections = [
  {
    id: "repurposing",
    icon: Search,
    tag: "Discovery",
    title: "AI-Driven Drug Repurposing for Class 1.2 Innovative Drugs",
    description:
      "Our AI platform identifies new therapeutic indications for existing approved drugs by analyzing large-scale molecular interaction networks, clinical data, and multi-omics signatures. By leveraging deep learning models trained on drug-target binding profiles and disease pathology datasets, we uncover hidden pharmacological relationships that enable rapid repositioning of known compounds for novel indications, significantly reducing development timelines and de-risking the path to IND.",
  },
  {
    id: "optimization",
    icon: FlaskConical,
    tag: "Optimization",
    title: "Structural Optimization for Class 1.1 Innovative Drugs",
    description:
      "Our generative chemistry engine designs and optimizes novel molecular structures through iterative cycles of AI-guided modification. Starting from validated hit compounds, the platform applies structure-activity relationship (SAR) modeling, molecular property prediction, and synthetic accessibility scoring to systematically improve potency, selectivity, metabolic stability, and safety profiles, generating truly novel drug candidates with optimized pharmacological characteristics.",
  },
  {
    id: "screening",
    icon: Pill,
    tag: "Screening",
    title: "Pharmacology-Constrained Screening",
    description:
      "A comprehensive in-silico screening platform that evaluates drug candidates across multiple pharmacological dimensions simultaneously, ensuring only the most promising compounds advance through the pipeline.",
    capabilities: screeningCapabilities,
  },
]

export function SmallMoleculesPlatform() {
  const [openSection, setOpenSection] = useState<string | null>("repurposing")

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Pill className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Platform I
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Small Molecules
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          End-to-end AI capabilities for small molecule drug discovery, from
          repurposing existing drugs to designing novel chemical entities with
          optimized pharmacological profiles.
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
