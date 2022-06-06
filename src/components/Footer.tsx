import { Box, Flex, Icon, Img, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io5";

export function Footer(){

    return(
        <Box borderTop="1px" borderTopColor="gray.900" w="100%">
            <Flex color="white" align="center" w="100%" maxW="1500px" p="10px" mx="auto">
                <Text flex="3" textAlign="center">13.425.720/0001-40 | Igreja Evangelica Fonte Viva</Text>
                <Img src="/logo.png" h="100px" w="100px" mx="8rem"/>
                <SimpleGrid columns={4} spacing={10} flex="3" fontSize="2rem">

                <Link href="">
                    <Icon as={BsYoutube}/>
                </Link>

                <Link href="">
                    <Icon as={AiFillInstagram}/>
                </Link>

                <Link href="">
                    <Icon as={BsFacebook}/>
                </Link>

                <Link href="">
                    <Icon as={IoLogoWhatsapp}/>
                </Link>
                </SimpleGrid>
            </Flex>
        </Box>
    )
}