import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { CurrentSectionContextProvider } from "../components/current-section/Context"
import {MenuContextProvider} from "../contexts/MenuContext"
import { theme } from "../styles/theme"
import { CurrentSection } from "../components/current-section";
import {ParallaxProvider} from 'react-scroll-parallax'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CurrentSectionContextProvider>
      <MenuContextProvider>
        <ParallaxProvider>
          <ChakraProvider resetCSS theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </ParallaxProvider>
      </MenuContextProvider>
      <CurrentSection/>
    </CurrentSectionContextProvider>
  )
}

export default MyApp
