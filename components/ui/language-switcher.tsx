"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale, languageNames, languageFlags } from '@/lib/i18n'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()
  const [open, setOpen] = useState(false)

  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale)
    setOpen(false)
  }

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1">
          <span>{languageFlags[locale]}</span>
          <span className="hidden sm:inline">{languageNames[locale]}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('en')}>
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('zh')}>
          <span className="mr-2">🇨🇳</span>
          中文
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}