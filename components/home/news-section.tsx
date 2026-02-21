import { Calendar } from "lucide-react"

const news = [
  {
    date: "January 15, 2026",
    title: "angelpro Advances Diabetic Foot Ulcer Program to IND Application",
    summary:
      "Our lead small molecule program for Class 1.2 innovative drugs reaches IND-enabling stage, marking a major milestone in AI-driven drug repurposing.",
  },
  {
    date: "December 8, 2025",
    title: "AI-Designed Peptide Candidates Show Promising Results in Appetite Suppression",
    summary:
      "Our peptide design platform generates novel candidates with improved selectivity and stability for weight management applications.",
  },
  {
    date: "November 20, 2025",
    title: "angelpro Launches TCM Active Compound Screening Platform",
    summary:
      "New AI-powered platform for identifying and validating active compounds in traditional Chinese medicine formulations.",
  },
  {
    date: "October 5, 2025",
    title: "Alzheimer's Disease Program Enters Lead Optimization Phase",
    summary:
      "Our small molecule program leveraging structural optimization for Class 1.1 innovative drugs progresses into lead optimization.",
  },
]

export function NewsSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Latest News
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Recent updates
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.title}
              className="group cursor-pointer rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                {item.date}
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
