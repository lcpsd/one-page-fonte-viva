import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { CurrentSectionContextProvider } from "../components/current-section/Context"
import {MenuContextProvider} from "../contexts/MenuContext"
import { theme } from "../styles/theme"
import { CurrentSection } from "../components/current-section";

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CurrentSectionContextProvider>
      <MenuContextProvider>
        <ChakraProvider resetCSS theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </MenuContextProvider>
      <CurrentSection/>
    </CurrentSectionContextProvider>
  )
}

export default MyApp
