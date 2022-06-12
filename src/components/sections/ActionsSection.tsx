import { Box, Button, Flex, Img, Menu, MenuButton, MenuList, SimpleGrid, Text } from "@chakra-ui/react";
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

            <Text textAlign="left" w="720px" fontSize="48px" fontWeight="bold" color="blue.500" mb="10">AÇÕES</Text>

            <BigTextFloating text="AÇÕES" textColor="#38B8FF" left="-60rem" bottom="-15rem"/>
            <BigTextFloating text="AÇÕES" textColor="#38B8FF" right="-60rem" bottom="15rem"/>

            <SimpleGrid columns={{base: 2, lg: 4}} spacing="40px" w={{base: "300px", lg: "100%"}} m="0 auto" maxW="800px">
                {
                    entries.map(entry => (
                        <Flex direction="column" align="center" color="white" key={entry.id}>
                            <Menu>
                                <MenuButton>
                                    <Flex borderRadius="10px" bg="gray.900" align="center" justify="center" w="100px" h="100px">
                                        <Img src={entry.image_link}/>
                                    </Flex>
                                    <Text mt="10px">{entry.title}</Text>
                                </MenuButton>
                                <MenuList p="10px" bg="gray.900" border="0" w="100px">
                                    <Text>
                                        {entry.description}
                                    </Text>
                                </MenuList>
                            </Menu>
                        </Flex>
                    ))
                }
            </SimpleGrid>
        </Section>
    )
}