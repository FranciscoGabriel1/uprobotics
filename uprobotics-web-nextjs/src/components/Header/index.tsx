import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Moon, Sun, Menu, X, Globe, Sparkles } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '../../lib/utils'

interface HeaderProps {
  isDark: boolean
  toggleTheme: () => void
  locale: string
  toggleLocale: () => void
}

interface NavLink {
  href: string
  label: string
  badge?: string
}

export function Header({ isDark, toggleTheme, locale, toggleLocale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const t = useTranslations('nav')

  const navLinks: NavLink[] = [
    { href: '/', label: t('home') },
    { href: '/create', label: t('create') },
    { href: '/v2', label: t('new_version'), badge: 'novo' },
    { href: '/tutorial', label: t('tutorial') },
    { href: '/about', label: t('about') },
  ]

  const isActive = (href: string) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img
              src="/images/logo-white.svg"
              alt="UpRobotics"
              className="hidden dark:block h-8 w-auto"
            />
            <img
              src="/images/logo.svg"
              alt="UpRobotics"
              className="block dark:hidden h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                {link.label}
                {link.badge && (
                  <span className="flex items-center gap-0.5 bg-accent/20 text-accent-hover text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    <Sparkles size={9} />
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label="Trocar idioma"
            >
              <Globe size={16} />
              <span className="hidden sm:inline">{locale === 'pt-BR' ? 'EN' : 'PT'}</span>
            </button>

            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg md:hidden text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-[var(--border)] py-2 pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  'flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                  isActive(link.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                )}
              >
                {link.label}
                {link.badge && (
                  <span className="flex items-center gap-0.5 bg-accent/20 text-accent-hover text-[10px] font-bold px-1.5 py-0.5 rounded-full leading-none">
                    <Sparkles size={9} />
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
