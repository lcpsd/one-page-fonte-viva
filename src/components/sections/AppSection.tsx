import { Box, Flex } from "@chakra-ui/react";
import { Section } from "../current-section";

export function AppSection(){

    return(
        <Section
        id='app'
        h='100vh'
        w='100%'
        maxW='1500px'
        align='center'
        justify='center'
        mx='auto'
        >
            <Flex flex='1' justify='center'>
                <Box
                borderRadius='10px'
                border='1px'
                borderColor='blue.500'
                p='10px'
                position='relative'
                >
                    <Box
                    position='absolute'
                    top='0'
                    left='0'
                    right='0'
                    mx='auto'
                    w='50%'
                    h='25px'
                    borderRadius='0 0 10px 10px'
                    bgColor='black'
                    >

                    </Box>
                    <Box
                    bgImg='/images/app.jpg'
                    bgSize='cover'
                    bgRepeat='no-repeat'
                    bgPosition='center'
                    h='70vh'
                    w='250px'
                    borderRadius='10px'
                    >
                    
                    </Box>
                </Box>
            </Flex>

            <Flex flex='1'>

            </Flex>
        </Section>
    )
}