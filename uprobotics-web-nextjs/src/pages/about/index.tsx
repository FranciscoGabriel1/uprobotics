import React from 'react'
import Head from 'next/head'

import { SubscribeButton } from '../../components/SubscribeButton'
import { Container, Hero } from '../../styles/pages/Home'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre</title>
      </Head>

      <Container>
        <Hero>
          <h1>Sobre</h1>
          <SubscribeButton />
        </Hero>
      </Container>
    </>
  )
}
