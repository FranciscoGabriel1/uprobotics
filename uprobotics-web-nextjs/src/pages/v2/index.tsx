import Head from 'next/head'
import Link from 'next/link'
import {
  Blocks,
  Box,
  UserCircle,
  FolderOpen,
  FileCode,
  ArrowRight,
  FlaskConical,
  Sparkles,
} from 'lucide-react'

const features = [
  {
    icon: Blocks,
    title: 'Workspace Local',
    description:
      'O editor Blockly vai rodar diretamente no navegador, sem depender de serviços externos.',
    status: 'em breve',
  },
  {
    icon: Box,
    title: 'Simulação 3D',
    description:
      'Robôs simulados com Three.js, sem iframe de terceiros. Controle total da cena.',
    status: 'em breve',
  },
  {
    icon: UserCircle,
    title: 'Contas de Usuário',
    description:
      'Professores e alunos terão perfis próprios com área separada e controle de turmas.',
    status: 'em breve',
  },
  {
    icon: FolderOpen,
    title: 'Projetos Salvos',
    description:
      'Salve seus algoritmos na nuvem e continue de onde parou, em qualquer dispositivo.',
    status: 'em breve',
  },
  {
    icon: FileCode,
    title: 'Exportação de Código',
    description:
      'Exporte seus programas em .ino (Arduino) ou outras linguagens dependendo do robô.',
    status: 'em breve',
  },
  {
    icon: FlaskConical,
    title: 'Simulador de Arduino',
    description:
      'Teste circuitos e código Arduino diretamente no browser, sem hardware físico.',
    status: 'planejado',
  },
]

const statusColor: Record<string, string> = {
  'em breve': 'bg-accent/10 text-accent-hover border border-accent/30',
  planejado: 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-[var(--border)]',
}

export default function V2() {
  return (
    <>
      <Head>
        <title>Nova Versão | UpRobotics</title>
        <meta
          name="description"
          content="O novo ambiente UpRobotics está sendo construído. Confira o que está por vir."
        />
      </Head>

      {/* Hero */}
      <section className="border-b border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <Sparkles size={14} />
            Em desenvolvimento
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nova versão do{' '}
            <span className="text-primary">UpRobotics</span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Estamos reconstruindo a plataforma do zero — sem dependências externas, com simulação
            3D nativa, contas de usuário e muito mais. Tudo dentro do próprio site.
          </p>

          <Link
            href="/create"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
          >
            Continuar usando a versão atual
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Features grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-2">
          O que está sendo construído
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-10 text-sm">
          As funcionalidades serão liberadas gradualmente nesta página.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {features.map(({ icon: Icon, title, description, status }) => (
            <div
              key={title}
              className="flex flex-col gap-4 p-6 bg-[var(--surface)] rounded-2xl border border-[var(--border)] hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Icon size={20} />
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColor[status]}`}
                >
                  {status}
                </span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-1.5">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
