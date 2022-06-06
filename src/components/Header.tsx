import {Box, Flex, HStack, Icon, IconButton, Img, Link, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export function Header(){

    const [openMenu, setOpenMenu] = useState(false)

    return(
        <Box bg='black' w="100%" border="1px" borderBottom="gray.900" position={["absolute",null, "sticky"]} style={{
            top: 0,
            zIndex: 30
        }}>
            <Flex
                bg="black"
                maxW="1120px"
                w={["100%",null, "initial"]}
                m="0 auto"
                h={["100vh", null, "120px"]}
                align="center"
                justify={["center",null, "space-between"]}
                p="20px"
                display={[openMenu ? "flex" : "none", null, "flex"]}
                direction={["column",null, "row"]}
                position={["fixed", null, "initial"]}
            >
                <Img src="/logo.png" h="58px" mb={["1.5rem",null, "0"]}/>
                <Flex 
                display="flex" 
                direction={["column", null, "row"]} 
                gap="40px" 
                textAlign={["center",null, "initial"]} 
                fontSize={["1rem", "1.5rem"]}>
                    <ActiveLink href="#home">
                        <Link>Início</Link>
                    </ActiveLink>

                    <ActiveLink href="#history">
                        <Link>História</Link>
                    </ActiveLink>

                    <ActiveLink href="#vision">
                        <Link>Visão</Link>
                    </ActiveLink>

                    <ActiveLink href="#actions">
                        <Link>Ações</Link>
                    </ActiveLink>

                    <ActiveLink href="#pastors">
                        <Link>Pastores</Link>
                    </ActiveLink>

                    <ActiveLink href="#hours">
                        <Link>Horários</Link>
                    </ActiveLink>

                    <ActiveLink href="#documents">
                        <Link>Documentos</Link>
                    </ActiveLink>

                    <ActiveLink href="#financial">
                        <Link>Financeiro</Link>
                    </ActiveLink>

                    <ActiveLink href="#location">
                        <Link>Localização</Link>
                    </ActiveLink>
                </Flex>
            </Flex>

            <Flex position="absolute" right="1.5rem" top="1.5rem" onClick={() => setOpenMenu(!openMenu)} display={["block", null, "none"]}>
                <Icon as={!openMenu ? AiOutlineMenu : AiOutlineClose} color="white" fontSize="2rem" fontWeight="light"/>
            </Flex>
        </Box>
    )
}