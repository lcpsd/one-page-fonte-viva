import { Box, ChakraStyledOptions } from "@chakra-ui/react"

interface GradientDivProps extends ChakraStyledOptions{
    side: 'to-l' | 'to-r' | 'to-b' | 'to-t'
}

export function GradientDiv({side, ...rest}:GradientDivProps){

    return(
        <Box
        {...rest}
          w='100%'
          h='100%'
          bgGradient={`linear(${side}, black, transparent, transparent)`}
          position='absolute'
          top='0'
          left='0'></Box>
    )
}