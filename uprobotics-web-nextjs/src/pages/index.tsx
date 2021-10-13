import React from 'react'
import Head from 'next/head'

import { SubscribeButton } from '../components/SubscribeButton';

 import styles from './home.module.scss';
 import {Container, Hero} from '../styles/pages/Home'


export default function Home() {
  return (
    <>
    <Head>
      <title>Home | UpRobotics for Robotic Education</title>
    </Head>


   <Container>
      <Hero>
        <span> 👏 Olá, aprendiz</span>
        <h1>Seja bem-vindo ao <span> Up</span> Robotics.</h1>
        <p>
          Programe e simule um robô com
          <span> Webots</span>
        </p>
        <SubscribeButton />
        </Hero>
      <img src="/images/avatar.svg" alt="Girl coding"/>
      </Container>
    </>
  )
}
