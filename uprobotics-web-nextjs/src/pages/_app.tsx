import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Header } from '../components/Header';
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'


import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Component {...pageProps} />
      <GlobalStyle />
      <Footer/>
    </ThemeProvider>
  )
}

export default MyApp
