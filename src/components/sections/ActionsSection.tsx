import { Button, Flex, Img, Menu, MenuButton, MenuList, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../services/axios";
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
        <Section id="actions" m="0 auto" w="100%" maxW="1500px" direction="column" gap="20px" align="center" justify="center" minH="90vh">
            <Text textAlign="center" fontSize="2xl" fontWeight="bold" color="white" mb="10">Ações</Text>
            <SimpleGrid columns={{base: 2, lg: 4}} spacing="40px" w={{base: "300px", lg: "100%"}} m="0 auto" maxW="800px">
                {
                    entries.map(entry => (
                        <Flex direction="column" align="center" color="white" key={entry.id}>
                            <Menu>
                                <MenuButton>
                                    <Flex borderRadius="100%" bg="white" align="center" justify="center" w="100px" h="100px">
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