import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { toast, ToastContainer } from "react-toastify";
import { Section } from "../current-section";
import { GhostText } from "../GhostText";
import { CopyField } from "./CopyField";

export function PixSection(){

    return(
        <Section
        id="pix"
        minH="90vh"
        align="center"
        justify="center"
        m="0 auto"
        w="100%"
        maxW="1000px"
        direction={{base: "column", lg: "row"}}
        >
                <Flex flex="1" position="relative" display={{base:"none", lg: "initial"}}>
                    <Flex  position="absolute" left="1rem" top="8rem" w="300px" direction="column" align="center">
                        <Img src="/images/pix-logo-azul.svg" h="95px"/>
                        <Img src="/images/qrcode.png" h="200px" w="200px" mt="2rem"/>
                    </Flex>
                    <Img src="/images/smartphone-structure.png" />
                </Flex>

                <Flex flex="1" direction="column" color="white" position="relative" justify="center">

                    <Box position="relative">
                        <Flex justify="flex-end" w="400px">
                            <Text fontSize="36px" fontWeight="bold" w="320px" textAlign="right" color="blue.500" lineHeight={8}>DIZIMOS E OFERTAS COM</Text>
                        </Flex>

                        <Text fontSize="250px" fontWeight="bold" lineHeight="200px">PIX</Text>
                        
                        <Flex position="absolute" right="-6rem" bottom="-1rem" zIndex={-10} align="center">
                            <GhostText text="PIX" size="250px" lineHeight="200px" bottom="-1rem"/>
                            <Img src="/images/pix-logo-azul.svg" h="100%" w="auto"/>
                        </Flex>
                    </Box>

                    <Flex direction="column" mt="50px" align="center">
                        <Text fontWeight="bold" fontSize="24px">NOSSAS CHAVES</Text>

                        <CopyField text="adm@igrejafonteviva.com.br" mb="20px"/>
                        <CopyField text="13.425.720/0001-40" right/>
                    </Flex>
                </Flex>
        <ToastContainer />
        </Section>
    )
}