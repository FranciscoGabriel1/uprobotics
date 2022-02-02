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
              src={
                'https://i.pinimg.com/originals/72/3d/50/723d50fea8d338d18391cf022ba9b2a2.gif'
              }
              title={'Braço Robótico meArm '}
              text={
                'O MeArm é um kit de braço robótico pequeno e barato que utiliza Servo Motores e acrílico cortado a laser. Para movimentá-lo, você manipulará 4 servomotores que controlarão a base, a altura, a direção e a garra. Esses movimentos podem ser feitos utilizando 2 joysticks, mas no UpRobotics você poderá programá-lo para que o robô possa fazer movimentos automáticos para um Arduino Uno.'
              }
            />
          </Col>
          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={
                'https://static.turbosquid.com/Preview/001158/728/ZN/kuka-youbot-3D-model_600.jpg'
              }
              title={'Kuka Youbot '}
              text={
                'O youBot é um braço robótico móvel desenvolvido pela KUKA. Seu braço possui cinco graus de liberdade e uma pinça linear. Sua base possui quatro rodas Mecanum permitindo o movimento omnidirecional. Essas rodas são modeladas de forma eficiente usando fricção assimétrica. No UpRobotics possibilita que você programe seus movimentos automáticos para o Webots.'
              }
            />
          </Col>
        
          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={
                'https://www.robot-advance.com/EN/ori-thymio-ii-educational-open-source-robot-1194.png'
              }
              title={'Thymio II'}
              text={
                'Thymio II é um robô educacional acessível. Ele oferece três características principais: um grande número de sensores e atuadores, uma interatividade educativa baseada em luz e toque, um ambiente de programação com programação gráfica e de texto.'
              }
            />
          </Col>
          
          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={
                'https://static.generation-robots.com/12044-large_default/robot-mobile-pioneer-3-dx.jpg'
              }
              title={'Pioner 3DX'}
              text={
                'Veículo terrestre não tripulado (VTNT) da empresa Adept MobileRobots o NERO possui 3 exemplares de dimensão 52x38x21,5cm. São equipados com sonares e enconders, possibilitando, por exemplo, o mapeamento de um ambiente desconhecido.'
              }
            />
          </Col>

          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={
                'https://robotbenchmark.net/images/robots/LincolnMKZ.png'
              }
              title={'Lincoln MKZ'}
              text={
                'Programe um carro autônomo Lincoln MKZ para dirigir o mais rápido possível em uma rodovia lotada.'
              }
            />
          </Col>
          <Col xl={4}>
            <CardUp
              colorSpan="#DB001A"
              span={'clarity:bug-line'}
              src={
                'https://assets.rbl.ms/25591840/origin.jpg'
              }
              title={'Spot'}
              text={
                'O robô "Spot", anteriormente chamado de "SpotMini", é um robô semelhante a um cão de quatro patas desenvolvido pela Boston Dynamics . O robô ágil tem 83 centímetros de altura e foi projetado para uma variedade de tarefas de busca, inspeção e entrega. Ele pode subir escadas e atravessar terrenos acidentados com facilidade sem precedentes, mas é pequeno o suficiente para ser usado em ambientes internos. '
              }
            />
          </Col>


        </Row>
      </Container>
    </>
  )
}
