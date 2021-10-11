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
        <span> 👏 Hey, welcome</span>
        <h1>News about the <span> React</span> world.</h1>
        <p>
          Get access to all the publications
          <span> for $9.90 month</span>
        </p>
        <SubscribeButton />
        </Hero>
      <img src="/images/avatar.svg" alt="Girl coding"/>
      </Container>
    </>
  )
}
