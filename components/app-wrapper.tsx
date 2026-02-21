"use client"

import { LanguageProvider } from '@/contexts/LanguageContext'

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}