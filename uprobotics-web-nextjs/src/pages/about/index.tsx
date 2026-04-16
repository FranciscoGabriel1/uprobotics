import { useState } from 'react'
import Head from 'next/head'
import { FileText, Youtube } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { cn } from '../../lib/utils'

const ext = { target: '_blank', rel: 'noreferrer' }

function Tabs({
  tabs,
}: {
  tabs: { key: string; label: string; content: React.ReactNode }[]
}) {
  const [active, setActive] = useState(tabs[0].key)

  return (
    <div>
      <div className="flex gap-0 border-b border-[var(--border)] mb-6 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={cn(
              'px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 -mb-px transition-colors',
              active === tab.key
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs.find((t) => t.key === active)?.content}</div>
    </div>
  )
}

function SoftwareRow({
  src,
  alt,
  href,
  name,
  description,
}: {
  src: string
  alt: string
  href: string
  name: string
  description: string
}) {
  return (
    <div className="flex gap-4 py-4 border-b border-[var(--border)] last:border-0">
      <img src={src} alt={alt} className="w-16 h-16 object-contain shrink-0" />
      <div>
        <a href={href} {...ext} className="font-semibold text-primary hover:underline">
          {name}
        </a>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function About() {
  const t = useTranslations('about')

  const tabs = [
    {
      key: 'project',
      label: t('tab_project'),
      content: (
        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            O UpRobotics é fruto da dissertação de Mestrado do aluno{' '}
            <a
              href="http://lattes.cnpq.br/6111525331943224"
              {...ext}
              className="text-primary hover:underline"
            >
              Francisco Gabriel Teixeira Marinho
            </a>
            , do{' '}
            <a href="https://ppgi.ufam.edu.br/" {...ext} className="text-primary hover:underline">
              Programa de Pós-Graduação em Informática (PPGi)
            </a>{' '}
            no Instituto de Computação (iComp) na Universidade Federal do Amazonas (UFAM), sob
            orientação do professor{' '}
            <a
              href="http://lattes.cnpq.br/1132672107627968"
              {...ext}
              className="text-primary hover:underline"
            >
              Dr. Raimundo da Silva Barreto
            </a>
            . Esse projeto recebeu apoio financeiro da CAPES (Coordenação de Aperfeiçoamento de
            Pessoal de Nível Superior).
          </p>
          <div className="flex items-center gap-6 mt-6">
            <a href="https://www.gov.br/capes/pt-br" {...ext}>
              <img src="/images/capes.svg" alt="Capes" className="h-12 w-auto" />
            </a>
            <a href="https://ufam.edu.br/" {...ext}>
              <img src="/images/ufam.svg" alt="UFAM" className="h-12 w-auto" />
            </a>
            <a href="https://icomp.ufam.edu.br/" {...ext}>
              <img src="/images/icomp.svg" alt="iComp" className="h-12 w-auto" />
            </a>
          </div>
        </div>
      ),
    },
    {
      key: 'papers',
      label: t('tab_papers'),
      content: (
        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6">
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <FileText size={16} className="text-primary mt-0.5 shrink-0" />
              <span>
                <b>Artigo</b> "UpRobotics: Robótica Educacional Utilizando Linguagem Visual Baseada
                em Blocos" apresentado no SBESC 2020, publicado{' '}
                <a
                  href="https://sol.sbc.org.br/index.php/sbesc_estendido/article/view/13101"
                  {...ext}
                  className="text-primary hover:underline"
                >
                  aqui
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FileText size={16} className="text-primary mt-0.5 shrink-0" />
              <span>
                <b>Qualificação 2020</b> intitulada "UpRobotics: Robótica Educacional Utilizando
                Linguagem Visual Baseada em Blocos"
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: 'talks',
      label: t('tab_talks'),
      content: (
        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6">
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <Youtube size={16} className="text-red-500 mt-0.5 shrink-0" />
              <span>
                <b>Minicurso:</b> "Construção de uma Linguagem Visual Baseada em Blocos para o
                Ensino da Robótica" apresentado na escola de Sistemas Embarcados do SBESC 2020.
                Playlist disponível no{' '}
                <a
                  href="https://www.youtube.com/playlist?list=PLIE3otGP5p5ek1E3bPlphaan8RxRBo61d"
                  {...ext}
                  className="text-red-500 hover:underline inline-flex items-center gap-1"
                >
                  YouTube <Youtube size={14} />
                </a>
              </span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      key: 'software',
      label: t('tab_software'),
      content: (
        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6">
          <SoftwareRow
            src="https://i.ibb.co/mSW7QT0/logo-vertical.png"
            alt="Blockly"
            href="https://developers.google.com/blockly"
            name="Blockly"
            description="Biblioteca que adiciona um editor de código visual a aplicativos web e móveis. Usa blocos gráficos interligados para representar conceitos de código como variáveis, expressões lógicas e loops."
          />
          <SoftwareRow
            src="https://i.ibb.co/1nQLDCX/webots.png"
            alt="Webots"
            href="https://cyberbotics.com/"
            name="Webots"
            description="Aplicativo de desktop de código aberto e multiplataforma usado para simular robôs. Fornece ambiente completo para modelar, programar e simular robôs, amplamente utilizado na indústria e pesquisa."
          />
          <SoftwareRow
            src="https://i.ibb.co/gR4jXXH/robotbenck-removebg-preview.png"
            alt="Robotbenchmark"
            href="https://robotbenchmark.net/"
            name="Robotbenchmark"
            description="Aplicação online baseada em Webots com desafios de programação de robôs em vários níveis. Simulações online gratuitas com desempenho registrado e exibido online."
          />
          <SoftwareRow
            src="https://i.ibb.co/27ZF3G8/tinkercad.png"
            alt="TinkerCAD"
            href="https://www.tinkercad.com/"
            name="TinkerCAD"
            description="Aplicativo web gratuito para design 3D, eletrônica e codificação. Fornece ferramentas fundamentais para inovação acessíveis a qualquer pessoa."
          />
        </div>
      ),
    },
  ]

  return (
    <>
      <Head>
        <title>Sobre | UpRobotics</title>
      </Head>

      {/* Hero */}
      <section className="bg-[var(--surface)] border-b border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            O "Up" vem do termo <strong>Unplugged Robotics</strong> ("Robótica desplugada"), uma
            estratégia de ensino de robótica bem-sucedida que não necessita de um robô físico.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Com o UpRobotics, você pode programar seus próprios robôs, testá-los e aprimorar
              seus algoritmos <strong className="text-gray-800 dark:text-gray-200">sem precisar
              conhecer a sintaxe</strong> de Python, C ou outras linguagens textuais.
            </p>
            <p>
              UpRobotics foi feito para o exercício do pensamento computacional, ajudando jovens
              a pensar de forma criativa, raciocinar sistematicamente e trabalhar de forma
              colaborativa.
            </p>
            <p>
              Quando as pessoas aprendem a codificar com o Up, aprendem estratégias importantes
              para resolver problemas, projetar projetos e comunicar ideias.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[var(--border)] aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/SweWjKrH0Oc?list=PLIE3otGP5p5ek1E3bPlphaan8RxRBo61d"
              title="UpRobotics — apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <Tabs tabs={tabs} />
      </section>
    </>
  )
}
