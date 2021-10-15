import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png" />

          <script src="https://unpkg.com/react/umd/react.production.min.js"></script>

          <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>

          <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" ></script>


          <script>var Alert = ReactBootstrap.Alert;</script>











          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>


    <script src="blockly/blockly_compressed.js"></script>
    <script src="blockly/blocks_compressed.js"></script>
    <script src="blockly/javascript_compressed.js"></script>
    <script src="blockly/msg/js/en.js"></script>
    <script src="blockly/blocos_up.js"></script>
    <script src="blockly/ui_bloco.js"></script>
    <script src="blockly/code_bloco.js"></script>
    <script src="blockly/interface_geral.js"></script>
    <script src="blockly/codegen_geral.js"></script>
    <script src="blockly/interface_teclas.js"></script>
    <script src="blockly/code_teclas.js"></script>
    <script src="custom_category_es6.js"></script>
    <script src="toolbox_label_es6.js"></script>
    <script src="blockly/wo.js"></script>
















        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
