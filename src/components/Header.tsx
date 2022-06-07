import {Box, Flex, Icon, Img, Link} from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useMenuContext } from '../contexts/MenuContext'

export function Header(){

    const {openMenu, setOpenMenu} = useMenuContext()

    return(
        <Box bg='black' w="100vw" borderBottom="1px" borderBottomColor="gray.900" position={{ base:"absolute", lg:"sticky" }} style={{
            top: 0,
            left: 0,
            zIndex: 30
        }}>
            <Flex
                bg="black"
                maxW="1120px"
                w={{base:"100%", lg:"initial"}}
                m="0 auto"
                h={{base:"100vh", lg:"120px"}}
                align="center"
                justify={{base:"center", lg:"space-between"}}
                p="20px"
                display={openMenu ? "flex" : {base: "none", lg: "flex"}}
                direction={{base:"column", lg:"row"}}
                position={{base:"fixed", lg:"initial"}}
            >
                <Img src="/logo.png" h="58px" mb={{base:"1.5rem", lg:"0"}}/>
                <Flex 
                display="flex" 
                direction={{base:"column", lg:"row"}} 
                gap={{base: "20px", lg: "40px" }}
                textAlign={{base:"center", lg:"initial"}} 
                fontSize={{base:"1.5rem", lg:"1rem"}}>
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

            <Flex position="fixed" right="1.5rem" top="1.5rem" onClick={() => setOpenMenu(!openMenu)} display={{base: "block", lg:"none"}}>
                <Icon as={!openMenu ? AiOutlineMenu : AiOutlineClose} color="white" fontSize="2rem" fontWeight="light"/>
            </Flex>
        </Box>
    )
}