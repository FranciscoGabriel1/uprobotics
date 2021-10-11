import React from 'react'
import Head from 'next/head'

import { SubscribeButton } from '../../components/SubscribeButton'
import { Container, Hero } from '../../styles/pages/Home'

export default function Create() {
  return (
    <>
      <Head>
        <title>Create</title>
      </Head>

      <Container>
        <Hero>
          <h1>Create</h1>
          <SubscribeButton />
        </Hero>
      </Container>
    </>
  )
}
