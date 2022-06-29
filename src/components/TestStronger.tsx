import { Text } from "@chakra-ui/react";

export function TextStronger({text}){
    return(
        <Text color="blue.500" fontWeight='bold' display='inline-block'>{text}</Text>
    )
}