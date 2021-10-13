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
          <h1>Aqui vai ser carregado a workstation</h1>
          <SubscribeButton label="Vamos programar? " route="https://workstation-ecru.vercel.app/#!"/>
        </Hero>
      </Container>
    </>
  )
}
