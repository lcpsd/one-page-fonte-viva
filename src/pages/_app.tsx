import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { CurrentSectionContextProvider } from "../components/currentSection/Context"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CurrentSectionContextProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CurrentSectionContextProvider>
  )
}

export default MyApp
