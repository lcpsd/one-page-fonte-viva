import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface VideoBgProps extends ChakraStyledOptions{
    source: string;
}

export function VideoBg({source, ...rest}: VideoBgProps){

    return(
        <Flex w='100%' h='100%' justify='center' align='center' {...rest}>
            <video  autoPlay muted loop style={{height: '140%', width: 'auto', objectFit: 'cover'}}>
                <source src={source} type='video/mp4'/>
            </video>
        </Flex>
    )
}