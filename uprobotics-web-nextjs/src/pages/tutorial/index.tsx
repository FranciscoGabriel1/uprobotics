import React from 'react'
import Head from 'next/head'
import { Row, Col, Container } from 'react-bootstrap'
import { Introduction } from '../../layout'
import CardUp from '../../components/Card'

export default function Tutorial() {
  return (
    <>
      <Head>
        <title>Tutoriais</title>
      </Head>
      <Introduction>
        <h1>Guia de atividades</h1>

        <p>
          No UpRobotics você pode realizar atividades com robótica desplugada,
          isto é, sem um robô real, para isso existem simuladores, <br />
          aqui no Up utilizamos o Webots para desplugada e Arduíno caso você
          tenha um robô. Vamos ver alguns exemplos de como trabalhar no
          UpRobotics?
        </p>
      </Introduction>

      <Container>
        <Row className="justify-content-md-center">
          <Col xl={4}>
            <CardUp
              colorSpan="#00979C"
              span={'file-icons:arduino'}
              src={'https://wallpaperaccess.com/full/1291994.jpg'}
              title={'Braço Robótico meArm '}
              text={
                'O MeArm é um kit de braço robótico pequeno e barato projetado por Ben Gray da Phenoptix. Utiliza Servo Motores e acrílico cortado a laser. Para movimentá-lo, você manipulará 4 servomotores que controlarão a base, a altura, a direção e a garra. Esses movimentos podem ser feitos utilizando 2 joysticks, mas no UpRobotics você poderá programá-lo para que o robô possa fazer movimentos automáticos.'
              }
            />
          </Col>
          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={'https://wallpaperaccess.com/full/1291994.jpg'}
              title={'Kuka Youbot '}
              text={
                'O youBot é um braço robótico móvel desenvolvido pela KUKA. Seu braço possui cinco graus de liberdade e uma pinça linear. Sua base possui quatro rodas Mecanum permitindo o movimento omnidirecional. Essas rodas são modeladas de forma eficiente usando fricção assimétrica.'
              }
            />
          </Col>
          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={'https://wallpaperaccess.com/full/1291994.jpg'}
              title={'Kuka Youbot '}
              text={'texto'}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
