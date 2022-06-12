import { Box, Flex, Icon, Img, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsSpotify, BsYoutube } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { FooterIcon } from "./FooterIcon";
import {IoLogoAppleAppstore, IoLogoGooglePlaystore} from 'react-icons/io5'

export function Footer(){

    return(
        <Flex borderTop="1px" borderTopColor="blue.500" w="100vw" direction="column" align="center" p="10px">
            <Flex 
            color="white" 
            align="center" 
            w="100%" 
            maxW="1500px" 
            p="10px"
            mx="auto" 
            direction={{base: "column", '2xl': "row"}} 
            gap={{base: "40px", '2xl': "0px"}}>
                <Text flex="3" textAlign="center" order={{base: "4", '2xl': "0"}}>13.425.720/0001-40 | Igreja Evangelica Fonte Viva</Text>
                <Img src="/logo.png" h="100px" w="100px" mx={{xl: "8rem"}}/>
                <SimpleGrid columns={{base: 2, lg: 7}} spacing={{base: 100, lg: 10}} flex="3" fontSize="2rem" >

                    <FooterIcon icon={BsYoutube} link="https://www.youtube.com/c/IgrejaFonteViva"/>

                    <FooterIcon icon={AiFillInstagram} link="https://www.instagram.com/igrejafontevivaonline/"/>

                    <FooterIcon icon={BsFacebook} link="https://www.facebook.com/IgrejaFonteViva"/>

                    <FooterIcon icon={BsSpotify} link="https://open.spotify.com/show/4udkQ3vEpq9quj9Wcnd2s9?si=2749b33bbd2f4761"/>

                    <FooterIcon icon={RiWhatsappFill} link="https://api.whatsapp.com/send?phone=5567992221076&text=Oi"/>

                    <FooterIcon icon={IoLogoAppleAppstore} link="https://apps.apple.com/br/app/igreja-fonte-viva/id1476545344"/>

                    <FooterIcon icon={IoLogoGooglePlaystore} link="https://play.google.com/store/apps/details?id=com.inpeace.igrejafonteviva.campogrande"/>

                </SimpleGrid>
            </Flex>

            <Text color="gray.600" textAlign="center">© 2011 – {new Date().getFullYear()} Igreja Fonte Viva Todos os Direitos Reservados.</Text>
        </Flex>
    )
}