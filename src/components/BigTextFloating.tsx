import { ChakraStyledOptions, Text, theme } from "@chakra-ui/react";

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
                '-webkit-text-stroke': '1px' + theme.colors.blue['500']
            }}
            >{text}</Text>
    )
}