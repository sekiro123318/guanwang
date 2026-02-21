import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does AION Labs collaborate with pharmaceutical partners?",
    answer:
      "We offer flexible partnership models including co-development agreements, fee-for-service engagements, and technology licensing. Our team works closely with partner R&D teams to integrate our AI platform into their existing drug discovery workflows, ensuring seamless collaboration and maximum impact.",
  },
  {
    question: "Can we access AION Labs data for our own research?",
    answer:
      "We offer data access through our partnership agreements. Depending on the engagement model, partners can gain access to curated datasets, model predictions, and platform insights. All data sharing is governed by strict confidentiality and data security protocols.",
  },
  {
    question: "What therapeutic areas does AION Labs focus on?",
    answer:
      "Our current pipeline spans oncology, neurology, and rare diseases. However, our AI platform is disease-agnostic and can be applied to virtually any therapeutic area. We are actively exploring expansion into immunology, metabolic diseases, and infectious diseases.",
  },
  {
    question: "How can I apply for a position at AION Labs?",
    answer:
      "We are always looking for exceptional talent across computational biology, machine learning, medicinal chemistry, and engineering. Please send your CV and a brief cover letter to careers@aionlabs.ai. We also post open positions on our LinkedIn page.",
  },
  {
    question: "What makes AION Labs different from other AI drug discovery companies?",
    answer:
      "Our vertically integrated platform combines all four pillars of AI drug discovery: target discovery, protein engineering, generative chemistry, and clinical prediction. This end-to-end approach, validated by peer-reviewed publications and active clinical programs, sets us apart from point solutions in the market.",
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-muted-foreground">
            Common questions about working with AION Labs.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
