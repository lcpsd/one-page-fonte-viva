import { Box, Button, Flex, Img, Menu, MenuButton, MenuList, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../services/axios";
import { BigTextFloating } from "../BigTextFloating";
import { Section } from "../current-section";
import { VerticalCarousel } from "../VerticalCarousel";

interface EntryProps{
    id: string;
    type: string;
    createAt: string;
    image_link: string;
    title: string;
    description: string;
    leaders: string;
    social?: string;
}

export function ActionsCarousel(){
    const[entries, setEntries] = useState<EntryProps[]>([])

    async function fetchHeaderData(){
        const {data} = await axios.get<EntryProps[]>("/api/contentful/actions")
        setEntries(data)
    }

    useEffect(() => {
        fetchHeaderData()
    }, [])

    return(
        entries &&
        <Section id="actions" m="0 auto" w="100%" maxW="1500px" direction="column" align="center" justify="center" minH="90vh" position="relative">

            <Text maxW="780px" w="100%" textAlign={{base: "center", '2xl': "left"}} fontSize="48px" fontWeight="bold" color="blue.500" mb="2">AÇÕES</Text>
            <Text maxW="780px" w="100%" textAlign={{base: "center", '2xl': "left"}} color='white' mb='4'>Somos quase 300 voluntários que servem e inspiram pessoas diariamente em suas Ações, desenvolvendo seus dons e talentos, para edificar a igreja de Cristo.</Text>

            <BigTextFloating text="AÇÕES" textColor="#38B8FF" left="-80rem" bottom="-60rem"/>
            <BigTextFloating text="AÇÕES" textColor="#38B8FF" right="-80rem" bottom="-20rem"/>

            <SimpleGrid columns={{base: 2, lg: 4}} spacing="40px" w={{base: "300px", lg: "100%"}} m="0 auto" maxW="800px">
                {
                    entries.map(entry => (
                        <Flex direction="column" align="center" color="white" key={entry.id}>
                            <Menu>
                                <MenuButton>
                                    <Flex 
                                    borderRadius="10px" 
                                    bg="gray.700" 
                                    align="center" 
                                    justify="center" 
                                    w={{base:'100px', xl:"150px"}} 
                                    h={{base:'100px', xl:"150px"}} 
                                    p='1rem'>
                                        <Img src={entry.image_link}/>
                                    </Flex>
                                    <Text mt="10px">{entry.title}</Text>
                                </MenuButton>
                                <MenuList p="10px" bg="gray.900" border="0" w="100px" mt='-40px'>
                                    <VStack spacing={5}>
                                        <Text>
                                            {entry.description}
                                        </Text>
                                        <Text>
                                            Líderes:
                                            {' ' + entry.leaders}
                                        </Text>
                                        <Text>
                                            {entry?.social}
                                        </Text>
                                    </VStack>
                                </MenuList>
                            </Menu>
                        </Flex>
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}