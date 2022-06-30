import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    styles: {
      global:{
          body: {
              bg: 'black',
          }
      }
    },
    fonts:{
      heading: 'Poppins',
      body: 'Poppins',
    },
    colors: {
      blue:{
        '500': '#38B8FF'
      },
    }
})