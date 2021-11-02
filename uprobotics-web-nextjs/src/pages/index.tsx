import React from 'react'
import Head from 'next/head'

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
            <Col xl={8}>
              <Hero>
                <span>
                  {' '}
                  <i
                    className="uil uil-robot"
                    style={{ fontSize: '40px', color: '#F1664E' }}
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
                      style={{ fontSize: '25px', color: '#2962FF' }}
                    ></i>
                  </span>
                  Robotics.
                </h1>
                <p>
                  Arrastando e montando blocos, crie movimentos automáticos para
                  seus robôs e simule-os utilizando
                  <span> Webots, TinkerCAD ou Robotbenchmark</span>
                </p>
                <SubscribeButton />
              </Hero>
            </Col>
            <Col xl={4}>
              <img src="/images/avatar.svg" alt="Girl coding" />
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  )
}
