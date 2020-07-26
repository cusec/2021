import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <CSSReset />
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
