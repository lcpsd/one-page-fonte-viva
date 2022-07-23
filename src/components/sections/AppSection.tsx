import { Box, Flex, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Section } from "../current-section";

export function AppSection(){

    return(
        <Section
        id='app'
        h='100vh'
        w='100%'
        maxW='1000px'
        align='center'
        justify='center'
        mx='auto'
        direction={{base: 'column', xl:'row'}}
        >
            {/* Smartphone */}
            <Flex flex='1' justify='center'>
                <Box
                borderRadius='10px'
                border='1px'
                borderColor='blue.500'
                p='10px'
                position='relative'
                mb={{base: '10rem', xl:'0'}}
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


            <Flex flex='3' align='center'>
                <Flex direction='column' align={{base:'center', xl:'flex-end'}}>
                    <Text fontSize={{base: '60px', xl:'96px'}} fontWeight='bold' color='white' lineHeight='10px'>APLICATIVO</Text>
                    <Text fontSize={{base: '60px', xl:'96px'}} fontWeight='bold' color='blue.500'>FONTE VIVA</Text>
                    <Text color='white' fontSize='24px' w={{base:'100%', xl:'60%'}} mt={{base:'0rem', xl:'-2rem'}} mb='1rem' textAlign={{base:'center', xl:'right'}}>Desenvolvido para estretiar nossa comunhão e organizar a instituição</Text>
                    <Flex cursor='pointer'>
                        <Link href='https://apps.apple.com/br/app/igreja-fonte-viva/id1476545344'>
                            <Img src="/images/app-store-button.png" h='60px' mr='10px'/>
                        </Link>
                        <Link href='https://play.google.com/store/apps/details?id=com.inpeace.igrejafonteviva.campogrande'>
                            <Img src="/images/google-play-button.png" h='60px'/>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Section>
    )
}