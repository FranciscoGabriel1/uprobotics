import { MapPin, ArrowUp, Twitter, Instagram, Facebook, Youtube } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')
  const ext = { target: '_blank', rel: 'noreferrer' }

  const institutions = [
    { href: 'https://ufam.edu.br/', label: 'UFAM' },
    { href: 'https://icomp.ufam.edu.br/', label: 'iComp' },
    { href: 'https://ppgi.ufam.edu.br/', label: 'PPGI' },
  ]

  const tools = [
    { href: 'https://developers.google.com/blockly', label: 'Blockly' },
    { href: 'https://cyberbotics.com/', label: 'Webots' },
    { href: 'https://robotbenchmark.net/', label: 'Robotbenchmark' },
    { href: 'https://www.tinkercad.com/', label: 'TinkerCAD' },
  ]

  const socialIcons = [
    { Icon: Twitter, label: 'Twitter' },
    { Icon: Instagram, label: 'Instagram' },
    { Icon: Facebook, label: 'Facebook' },
    { Icon: Youtube, label: 'YouTube' },
  ]

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h4 className="font-display font-semibold text-gray-900 dark:text-white mb-3">
              {t('tagline')}
            </h4>
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
              <MapPin size={14} className="shrink-0" />
              <span>{t('location')}</span>
            </div>
            <div className="flex gap-1">
              {socialIcons.map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <Icon size={16} />
                </button>
              ))}
            </div>
          </div>

          {/* Institutions */}
          <div>
            <p className="font-display font-semibold text-sm text-gray-900 dark:text-white mb-3">
              {t('institutions')}
            </p>
            <ul className="space-y-2">
              {institutions.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...ext}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sponsorship */}
          <div>
            <p className="font-display font-semibold text-sm text-gray-900 dark:text-white mb-3">
              {t('sponsorship')}
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.gov.br/capes/pt-br"
                  {...ext}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                >
                  Capes
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <p className="font-display font-semibold text-sm text-gray-900 dark:text-white mb-3">
              {t('tools')}
            </p>
            <ul className="space-y-2">
              {tools.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...ext}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] mt-8 pt-6 flex items-center justify-between">
          <a
            href="#"
            aria-label={t('back_to_top')}
            className="p-2 rounded-lg text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
          >
            <ArrowUp size={16} />
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
