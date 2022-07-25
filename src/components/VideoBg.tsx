import { ChakraStyledOptions, Flex } from "@chakra-ui/react";

interface VideoBgProps extends ChakraStyledOptions{
    source: string;
}

export function VideoBg({source, ...rest}: VideoBgProps){

    return(
        <Flex w='100%' h='100%' justify='center' align='center' {...rest} objectFit='cover'>
            {
                <video  autoPlay muted loop style={{height: '140%', width: 'auto', objectFit: 'cover'}} id='video'>
                    <source src={source} type='video/mp4'/>
                </video>
            }
        </Flex>
    )
}