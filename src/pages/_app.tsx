import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { CurrentSectionContextProvider } from "../components/current-section/Context"
import { theme } from "../styles/theme"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { CurrentSection } from "../components/current-section";

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CurrentSectionContextProvider>
      <CurrentSection/>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CurrentSectionContextProvider>
  )
}

export default MyApp
