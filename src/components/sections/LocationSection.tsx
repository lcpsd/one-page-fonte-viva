import { Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "../current-section";

export function LocationSection(){
    return(
        <Section id="location" h="100%" minH="75vh" w="100%" maxW="1200px" m="0 auto" justify="center" align="center" p="40px">
          <SimpleGrid spacing={10} columns={{base: 1, lg: 2}}>
            <Img src="/images/map.png"/>
            <Flex color="white" justify="center" direction="column">
              <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign={{base:"center", lg: "left"}}>Visite-nos</Text>
              <Text textAlign={{base:"center", lg: "left"}}>
              Rua: Avenida Mascarenhas de Moraes, 6854 <br/>
              Bairro: São Francisco<br/>
              Cidade: Campo Grande - MS <br/>
              CEP: 79118-151 <br/>
              </Text>
              <Text mt={10}>Fone: (67) 99222-1076</Text>
            </Flex>
          </SimpleGrid>
        </Section>
    )
}