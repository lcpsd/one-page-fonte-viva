import {Box, Flex, HStack, Icon, IconButton, Img, Link, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

export function Header(){

    const [openMenu, setOpenMenu] = useState(false)

    return(
        <Box bg='black' w="100vw" border="1px" borderBottom="gray.900" position={{ sm:"absolute", lg:"sticky" }} style={{
            top: 0,
            zIndex: 30
        }}>
            <Flex
                bg="black"
                maxW="1120px"
                w={{sm:"100%", lg:"initial"}}
                m="0 auto"
                h={{sm:"100vh", lg:"120px"}}
                align="center"
                justify={{sm:"center", lg:"space-between"}}
                p="20px"
                display={openMenu ? "flex" : {sm: "none", lg: "flex"}}
                direction={{sm:"column", lg:"row"}}
                position={{sm:"fixed", lg:"initial"}}
            >
                <Img src="/logo.png" h="58px" mb={{sm:"1.5rem", lg:"0"}}/>
                <Flex 
                display="flex" 
                direction={{sm:"column", lg:"row"}} 
                gap="40px" 
                textAlign={{sm:"center", lg:"initial"}} 
                fontSize={{sm:"1.5rem", lg:"1rem"}}>
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

            <Flex position="fixed" right="1.5rem" top="1.5rem" onClick={() => setOpenMenu(!openMenu)} display={{sm:"block", lg:"none"}}>
                <Icon as={!openMenu ? AiOutlineMenu : AiOutlineClose} color="white" fontSize="2rem" fontWeight="light"/>
            </Flex>
        </Box>
    )
}