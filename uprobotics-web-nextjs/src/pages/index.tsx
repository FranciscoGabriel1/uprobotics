import React from 'react'
import Head from 'next/head'
import { Player } from '@lottiefiles/react-lottie-player'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import { Main, Hero } from '../styles/pages/Home'
import { Col, Container, Row } from 'react-bootstrap'

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
                  {' '}
                  <i
                    className="uil uil-robot"
                    style={{ fontSize: '40px', color: '#50E3C2' }}
                  ></i>{' '}
                  Olá, aprendiz
                </span>
                <h1>
                  Seja bem-vindo ao{' '}
                  <span>
                    {' '}
                    Up
                    <i
                      className="uil uil-arrow-up-right"
                      style={{ fontSize: '25px', color: '#61dafb' }}
                    ></i>
                  </span>
                  Robotics.
                </h1>

                <p>
                  <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_tifcytym.json"
                    style={{ height: '25%', width: '25%', marginLeft: '0px' }}
                  ></Player>
                  Arrastando e montando blocos, crie movimentos automáticos para
                  seus robôs e simule-os utilizando
                  <span> Webots, TinkerCAD ou Robotbenchmark</span>
                </p>
                <SubscribeButton />
              </Hero>
            </Col>
            <Col xl={5}>
              {/* <img src="/images/avatar.svg" alt="Girl coding" /> */}
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_4906fv6z.json"
                style={{ height: '100%', width: '100%' }}
              ></Player>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}
