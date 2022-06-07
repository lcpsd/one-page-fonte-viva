import { Box, Flex, Icon, Img, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FooterIcon } from "./FooterIcon";

export function Footer(){

    return(
        <Box borderTop="1px" borderTopColor="gray.900" w="100%">
            <Flex 
            color="white" 
            align="center" 
            w="100%" 
            maxW="1500px" 
            p="20px"
            mx="auto" 
            direction={{base: "column", lg: "row"}} 
            gap={{base: "40px", lg: "0px"}}>
                <Text flex="3" textAlign="center">13.425.720/0001-40 | Igreja Evangelica Fonte Viva</Text>
                <Img src="/logo.png" h="100px" w="100px" mx="8rem"/>
                <SimpleGrid columns={4} spacing={{base: 100, lg: 10}} flex="3" fontSize="2rem">

                    <FooterIcon icon={BsYoutube} link=""/>

                    <FooterIcon icon={AiFillInstagram} link=""/>

                    <FooterIcon icon={BsFacebook} link=""/>

                    <FooterIcon icon={RiWhatsappFill} link=""/>

                </SimpleGrid>
            </Flex>
        </Box>
    )
}