import { Pill, Dna, Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

const stages = ["Discovery", "Lead Optimization", "Preclinical", "IND-Enabling", "IND"]

interface Program {
  name: string
  classification: string
  activeStage: number // 0-indexed into stages
  progress: number
}

interface PipelineSection {
  title: string
  icon: React.ElementType
  programs: Program[]
}

const pipelineSections: PipelineSection[] = [
  {
    title: "Small Molecules",
    icon: Pill,
    programs: [
      {
        name: "Diabetic Foot Ulcer Wound Healing",
        classification: "Class 1.2",
        activeStage: 4,
        progress: 90,
      },
      {
        name: "Diabetic Foot Ulcer Wound Healing",
        classification: "Class 1.1",
        activeStage: 2,
        progress: 100,
      },
      {
        name: "Alzheimer's Disease Program",
        classification: "",
        activeStage: 1,
        progress: 45,
      },
    ],
  },
  {
    title: "Peptides",
    icon: Dna,
    programs: [
      {
        name: "Appetite Suppression / Weight Management",
        classification: "",
        activeStage: 0,
        progress: 30,
      },
    ],
  },
  {
    title: "Traditional Chinese Medicine",
    icon: Leaf,
    programs: [
      {
        name: "Epilepsy Program",
        classification: "",
        activeStage: 1,
        progress: 60,
      },
    ],
  },
]

function StageTimeline({ activeStage }: { activeStage: number }) {
  return (
    <div className="flex items-center gap-0 w-full">
      {stages.map((stage, i) => {
        const isCompleted = i < activeStage
        const isActive = i === activeStage
        const isUpcoming = i > activeStage

        return (
          <div key={stage} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-1.5 flex-1">
              <div
                className={cn(
                  "h-3 w-3 rounded-full border-2 transition-colors",
                  isCompleted && "border-primary bg-primary",
                  isActive && "border-accent bg-accent",
                  isUpcoming && "border-border bg-background"
                )}
              />
              <span
                className={cn(
                  "text-[10px] font-medium text-center leading-tight sm:text-xs",
                  isCompleted && "text-primary",
                  isActive && "text-accent font-semibold",
                  isUpcoming && "text-muted-foreground"
                )}
              >
                {stage}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div
                className={cn(
                  "h-0.5 flex-1 -mt-5",
                  i < activeStage ? "bg-primary" : "bg-border"
                )}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

function ProgramCard({ program }: { program: Program }) {
  const stageName = stages[program.activeStage]

  return (
    <div className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-lg">
      {/* Header */}
      <div className="flex flex-col gap-1 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            {program.name}
          </h3>
          {program.classification && (
            <span className="inline-block mt-1 rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
              {program.classification}
            </span>
          )}
        </div>
        <span className="text-sm font-medium text-muted-foreground">
          {stageName}
        </span>
      </div>

      {/* Stage timeline */}
      <StageTimeline activeStage={program.activeStage} />

      {/* Progress bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1.5">
          <span>Progress to IND</span>
          <span className="font-semibold text-foreground">{program.progress}%</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <div
            className={cn(
              "h-full rounded-full transition-all",
              program.progress === 100 ? "bg-primary" : "bg-accent"
            )}
            style={{ width: `${program.progress}%` }}
          />
        </div>
      </div>
    </div>
  )
}

export function PipelinePrograms() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Global stage legend */}
        <div className="mb-16 rounded-xl border border-border bg-secondary/50 p-6">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Pipeline Stages
          </p>
          <div className="flex flex-wrap items-center justify-between gap-4">
            {stages.map((stage, i) => (
              <div key={stage} className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  {i < stages.length - 1 && (
                    <div className="h-0.5 w-6 bg-border hidden sm:block" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground">{stage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline sections */}
        <div className="flex flex-col gap-16">
          {pipelineSections.map((section) => (
            <div key={section.title}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <section.icon className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  {section.title}
                </h2>
              </div>

              {/* Program cards */}
              <div className="grid gap-6 lg:grid-cols-2">
                {section.programs.map((program, idx) => (
                  <ProgramCard key={`${program.name}-${idx}`} program={program} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
