import React from 'react'
import Head from 'next/head'

import { SubscribeButton } from '../../components/SubscribeButton'
import { Container, Hero } from '../../styles/pages/Home'

export default function Tutorial() {
  return (
    <>
      <Head>
        <title>Tutorial</title>
      </Head>

      <Container>
        <Hero>
          <h1>Tutorial</h1>
          <SubscribeButton />
        </Hero>
      </Container>
    </>
  )
}
