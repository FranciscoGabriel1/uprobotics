import Head from 'next/head'
import { useTranslations } from 'next-intl'
import CardUp from '../../components/Card'

const robots = [
  {
    span: 'file-icons:arduino',
    colorSpan: '#00979C',
    src: 'https://i.pinimg.com/originals/72/3d/50/723d50fea8d338d18391cf022ba9b2a2.gif',
    title: 'Braço Robótico meArm',
    text: 'O MeArm é um kit de braço robótico pequeno e barato que utiliza servo motores e acrílico cortado a laser. Para movimentá-lo, você manipulará 4 servomotores que controlarão a base, a altura, a direção e a garra.',
  },
  {
    span: 'clarity:bug-line',
    colorSpan: '#4285F4',
    src: 'https://static.turbosquid.com/Preview/001158/728/ZN/kuka-youbot-3D-model_600.jpg',
    title: 'Kuka Youbot',
    text: 'O youBot é um braço robótico móvel desenvolvido pela KUKA com cinco graus de liberdade e uma pinça linear. Sua base possui quatro rodas Mecanum permitindo o movimento omnidirecional.',
  },
  {
    span: 'clarity:bug-line',
    colorSpan: '#4285F4',
    src: 'https://www.robot-advance.com/EN/ori-thymio-ii-educational-open-source-robot-1194.png',
    title: 'Thymio II',
    text: 'Thymio II é um robô educacional acessível com grande número de sensores e atuadores, interatividade educativa baseada em luz e toque, e ambiente de programação gráfica e textual.',
  },
  {
    span: 'clarity:bug-line',
    colorSpan: '#4285F4',
    src: 'https://static.generation-robots.com/12044-large_default/robot-mobile-pioneer-3-dx.jpg',
    title: 'Pioneer 3DX',
    text: 'Veículo terrestre não tripulado (VTNT) da empresa Adept MobileRobots. Equipado com sonares e encoders, possibilitando, por exemplo, o mapeamento de um ambiente desconhecido.',
  },
  {
    span: 'clarity:bug-line',
    colorSpan: '#4285F4',
    src: 'https://robotbenchmark.net/images/robots/LincolnMKZ.png',
    title: 'Lincoln MKZ',
    text: 'Programe um carro autônomo Lincoln MKZ para dirigir o mais rápido possível em uma rodovia lotada.',
  },
  {
    span: 'clarity:bug-line',
    colorSpan: '#4285F4',
    src: 'https://assets.rbl.ms/25591840/origin.jpg',
    title: 'Spot',
    text: 'O robô "Spot", da Boston Dynamics, é um robô semelhante a um cão de quatro patas, projetado para tarefas de busca, inspeção e entrega. Pode subir escadas e atravessar terrenos acidentados com facilidade.',
  },
]

export default function Tutorial() {
  const t = useTranslations('tutorial')

  return (
    <>
      <Head>
        <title>Tutoriais | UpRobotics</title>
      </Head>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {robots.map((robot) => (
            <CardUp key={robot.title} {...robot} />
          ))}
        </div>
      </section>
    </>
  )
}
