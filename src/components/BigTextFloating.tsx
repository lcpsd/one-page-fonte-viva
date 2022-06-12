import { ChakraStyledOptions, Flex, Text, theme } from "@chakra-ui/react";
import {Parallax} from 'react-scroll-parallax'

interface BigTextFloatingProps extends ChakraStyledOptions{
    text: string;
    textColor: string;
}

export function BigTextFloating({text, textColor, ...rest}: BigTextFloatingProps){

    return(
        <Flex
        as={Parallax}
        speed={-50}
        zIndex={-50}
        >
            <Text
                {...rest}
                fontSize="500px"
                fontWeight="bold"
                position="absolute"
                zIndex="-10"
                color="transparent"
                letterSpacing="10px"
                css={{
                    '-webkit-text-stroke': '1px' + theme.colors.blue['500']
                }}
                className="big-text-floating"
                >{text}</Text>
        </Flex>
    )
}