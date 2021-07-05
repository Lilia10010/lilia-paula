import Document, {  Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  
  render() {
    return (
      <Html lang="pt-br">
        <Head>
          <title>Portifólio | Lília Paula</title>
          <link rel="shortcut icon" href="favicon.png" type="image/png" /> 
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
          <meta
            name="description"
            content="Este é o Portfólio pessoal, apenas com projetos pessoais da desenvolvedora Lília Paula."
          />
          <meta
            name="keywords"
            content="Portifólio, reactjs, nextjs, portifólio de programador"
          />
           <meta name="language" content="Portuguese" />
          <meta name="revisit-after" content="30 days" />
          <meta name="author" content="Lília Paula" />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
