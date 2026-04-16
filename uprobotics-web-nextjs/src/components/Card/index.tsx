import { Youtube, Cpu, Zap, CircuitBoard } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface CardUpProps {
  span?: string
  colorSpan?: string
  src: string
  title: string
  text: string
}

function CardIcon({ span, color }: { span?: string; color?: string }) {
  if (span === 'file-icons:arduino') {
    return <CircuitBoard size={16} color={color} />
  }
  if (span === 'clarity:bug-line') {
    return <Zap size={16} color={color} />
  }
  return <Cpu size={16} color={color} />
}

const CardUp = ({ span, colorSpan = '#4285F4', src, title, text }: CardUpProps) => {
  const t = useTranslations('tutorial')

  return (
    <div className="group flex flex-col bg-[var(--surface)] rounded-2xl border border-[var(--border)] overflow-hidden hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="flex items-center gap-2 font-display font-semibold text-gray-900 dark:text-white">
          <span aria-hidden="true">
            <CardIcon span={span} color={colorSpan} />
          </span>
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4 flex-1">
          {text}
        </p>

        <button className="mt-auto flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-[var(--border)] text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors">
          <Youtube size={15} />
          {t('see_tutorial')}
        </button>
      </div>
    </div>
  )
}

export default CardUp
