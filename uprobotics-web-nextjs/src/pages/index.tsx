import React from 'react'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton'

import styles from './home.module.scss'
import { Container, Hero } from '../styles/pages/Home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | UpRobotics for Robotic Education</title>
      </Head>

      <Container>
        <Hero>
          <span> <i className="uil uil-robot" style={{fontSize:'40px', 'color': '#F1664E'}}></i> Olá, aprendiz</span>
          <h1>
            Seja bem-vindo ao <span> Up<i className="uil uil-puzzle-piece" style={{ fontSize:'25px','color': '#2962FF'}}></i></span>Robotics.
          </h1>
          <p>
            Programe e simule um robô com
            <span> Webots</span>
          </p>
          <SubscribeButton />
        </Hero>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </Container>
    </>
  )
}
