"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Linkedin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Send us a message
            </h2>
            <p className="mt-2 text-muted-foreground">
              Fill out the form and our team will respond within 24 hours.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thank you for reaching out. Our team will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="Dr. Jane Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="organization"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Organization
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Pharma Corp"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us about your interest in our technology or partnership opportunities..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto"
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8 lg:pl-12">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Get in touch
              </h2>
              <p className="mt-2 text-muted-foreground">
                Reach us through any of the channels below.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Office
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    350 Innovation Drive, Suite 200
                    <br />
                    Cambridge, MA 02139
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Email
                  </h3>
                  <a
                    href="mailto:info@angelpro.ai"
                    className="mt-1 block text-sm text-accent hover:underline"
                  >
                    info@angelpro.ai
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Phone
                  </h3>
                  <a
                    href="tel:+16175551234"
                    className="mt-1 block text-sm text-accent hover:underline"
                  >
                    +1 (617) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    LinkedIn
                  </h3>
                  <a
                    href="https://linkedin.com/company/angelpro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-accent hover:underline"
                  >
                    linkedin.com/company/angelpro
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-4 flex h-52 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary">
              <div className="text-center">
                <MapPin className="mx-auto h-8 w-8 text-muted-foreground/40" />
                <p className="mt-2 text-sm text-muted-foreground">
                  Cambridge, MA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
