import { ChakraStyledOptions, Text } from "@chakra-ui/react";

interface BigTextFloatingProps extends ChakraStyledOptions{
    text: string;
    textColor: string;
}

export function BigTextFloating({text, textColor, ...rest}: BigTextFloatingProps){

    return(
        <Text
            {...rest}
            fontSize="500px"
            fontWeight="bold"
            position="absolute"
            zIndex="-10"
            color="transparent"
            letterSpacing="10px"
            css={{
                '-webkit-text-stroke': '1px ' + textColor
            }}
            >{text}</Text>
    )
}