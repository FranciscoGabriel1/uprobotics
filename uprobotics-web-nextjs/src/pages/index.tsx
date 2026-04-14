import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import { FaRobot } from 'react-icons/fa'
import { FiArrowUpRight, FiInfo } from 'react-icons/fi'
import { SubscribeButton } from '../components/SubscribeButton'
import { Hero, Main } from '../styles/pages/Home'

const Player = dynamic(
  () =>
    import('@lottiefiles/react-lottie-player').then(
      (module) => module.Player
    ),
  { ssr: false }
)

function InfoCard() {
  return (
    <div
      style={{
        background: '#e3f7f3',
        border: '1px solid #0096aa',
        borderRadius: 8,
        padding: '12px 18px',
        marginBottom: 24,
        maxWidth: 480,
        boxShadow: '0 2px 8px #0001',
        color: '#222',
        fontSize: 15,
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }}
    >
      <FiInfo aria-hidden="true" style={{ fontSize: 22, color: '#50E3C2' }} />
      <span>
        Estamos atualizando o site com novas funcionalidades e ajustando algumas coisas.
        <br />
        Em breve, teremos novas atualizações.
        <br />
        <i>Data dessa publicação: fevereiro de 2026</i>
        <br />
        <b>Previsão de atualização do site: junho de 2026</b>
      </span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UpRobotics for Robotic Education</title>
      </Head>

      <Main>
        <Container>
          <Row>
            <Col xl={7}>
              <Hero>
                <span>
                  <FaRobot
                    aria-hidden="true"
                    style={{ fontSize: '40px', color: '#50E3C2' }}
                  />{' '}
                  Olá, aprendiz
                </span>
                <h1>
                  Seja bem-vindo ao{' '}
                  <span>
                    Up
                    <FiArrowUpRight
                      aria-hidden="true"
                      style={{ fontSize: '25px', color: '#61dafb' }}
                    />
                  </span>
                  Robotics.
                </h1>

                <p>
                  Arrastando e montando blocos, crie movimentos automáticos para
                  seus robôs e simule-os utilizando
                  <span> Webots, TinkerCAD ou Robotbenchmark</span>
                </p>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <InfoCard />
                </div>
                <SubscribeButton />
              </Hero>
            </Col>
            <Col xl={5}>
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_4906fv6z.json"
                style={{ height: '100%', width: '100%' }}
              />
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}
