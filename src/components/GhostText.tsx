import { Text, theme } from "@chakra-ui/react";

export function GhostText({text, size, ...rest}){

    return(
        <Text 
        {...rest} 
        fontSize={size} 
        fontWeight="bold"
        color="transparent"
        zIndex="-10"
        css={{
            '-webkit-text-stroke': '1px' + theme.colors.blue['500']
        }}>
            PIX
        </Text>
    )
}