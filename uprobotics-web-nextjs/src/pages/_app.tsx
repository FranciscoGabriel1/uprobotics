import React, { useState, useEffect } from 'react'
import type { AppProps } from 'next/app'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import '../styles/globals.css'

import ptBRMessages from '../messages/pt-BR.json'
import enMessages from '../messages/en.json'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

type Locale = 'pt-BR' | 'en'

export default function App({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)
  const [locale, setLocale] = useState<Locale>('pt-BR')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const dark = storedTheme === 'dark' || (!storedTheme && prefersDark)
    setIsDark(dark)
    document.documentElement.classList.toggle('dark', dark)

    const storedLocale = localStorage.getItem('locale') as Locale
    if (storedLocale === 'pt-BR' || storedLocale === 'en') {
      setLocale(storedLocale)
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const toggleLocale = () => {
    const next: Locale = locale === 'pt-BR' ? 'en' : 'pt-BR'
    setLocale(next)
    localStorage.setItem('locale', next)
  }

  const messages = locale === 'pt-BR' ? ptBRMessages : enMessages

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
      timeZone="America/Manaus"
      onError={() => {}}
    >
      <div
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col bg-gray-50 dark:bg-[#0a0e1a]`}
      >
        <Header isDark={isDark} toggleTheme={toggleTheme} locale={locale} toggleLocale={toggleLocale} />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
