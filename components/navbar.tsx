"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/ui/language-switcher"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/useTranslation"

const links = [
  { href: "/", key: "common.home" },
  { href: "/technology", key: "common.technology" },
  { href: "/pipeline", key: "common.pipeline" },
  { href: "/contact", key: "common.contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
              <path d="M12 2L2 19h20L12 2z" fill="currentColor" opacity="0.8" />
              <circle cx="12" cy="13" r="4" fill="currentColor" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            {t("navbar.brand")}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-foreground",
                pathname === link.href
                  ? "text-accent"
                  : "text-muted-foreground"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild className="hidden bg-accent text-accent-foreground hover:bg-accent/90 md:inline-flex">
            <Link href="/contact">{t("common.getStarted")}</Link>
          </Button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-secondary md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary",
                  pathname === link.href
                    ? "text-accent"
                    : "text-muted-foreground"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <div className="mt-3 border-t border-border pt-3">
              <div className="mb-3">
                <LanguageSwitcher />
              </div>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  {t("common.getStarted")}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
