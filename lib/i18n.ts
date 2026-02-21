export type Locale = 'en' | 'zh'

export const defaultLocale: Locale = 'en'

export const locales: Locale[] = ['en', 'zh']

export const languageNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文'
}

export const languageFlags: Record<Locale, string> = {
  en: '🇺🇸',
  zh: '🇨🇳'
}