import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '../contexts/themeContext'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

//Modal.setAppElement('#root')

export default function App({ Component, pageProps }) {
  return (
    <>
   
      <GlobalStyle />
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
