import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import { Bot, ArrowUpRight, Info, ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((m) => m.Player),
  { ssr: false }
)

function InfoBanner() {
  const t = useTranslations('home')
  return (
    <div className="flex items-start gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/60 rounded-xl p-4 max-w-lg">
      <Info size={18} className="text-primary mt-0.5 shrink-0" />
      <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>{t('info_banner')}</p>
        <p className="text-gray-500 dark:text-gray-500 italic mt-1">{t('info_published')}</p>
        <p className="font-semibold text-primary mt-0.5">{t('info_forecast')}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const t = useTranslations('home')

  return (
    <>
      <Head>
        <title>Home | UpRobotics for Robotic Education</title>
        <meta
          name="description"
          content="Programe seus próprios robôs com linguagem visual baseada em blocos. Sem código, sem robô físico — apenas criatividade."
        />
      </Head>

      <section className="min-h-[calc(100vh-64px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">

            {/* Left — texto */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Bot size={20} />
                <span>{t('greeting')}</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 dark:text-white leading-tight">
                {t('title_prefix')}{' '}
                <span className="text-primary inline-flex items-center gap-0.5">
                  Up<ArrowUpRight size={32} className="inline -mt-1" />
                </span>
                Robotics.
              </h1>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                {t('description')}{' '}
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  {t('tools')}
                </span>
              </p>

              <InfoBanner />

              <div>
                <Link
                  href="/create"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  {t('cta')}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right — animação */}
            <div className="flex justify-center">
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_4906fv6z.json"
                style={{ height: '100%', width: '100%', maxWidth: 480 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
