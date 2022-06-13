import { Flex } from "@chakra-ui/react";
import { Section } from "../current-section";
import { HeaderCarousel } from "../HeaderCarousel";

export function HeaderSection(){

    return(
        <Flex direction='column' id='home' h={{base: "100vh", md: "100%"}}>
          <HeaderCarousel />
        </Flex>
    )
}