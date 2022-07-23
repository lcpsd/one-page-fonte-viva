import {Box, Flex, Icon, Img, Link} from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useMenuContext } from '../contexts/MenuContext'
import { motion } from 'framer-motion'
import { useIsLarge, useIsXlarge } from '../hooks/useMediaQuery'
import { ExternalLinkButton } from './sections/ExternalLinkButton'
import {DiCelluloid} from 'react-icons/di'
import {FaPrayingHands} from 'react-icons/fa'

export function Header(){

    const {openMenu, setOpenMenu} = useMenuContext()
    const isXLarge = useIsXlarge()

    const variants = !isXLarge ? {
        visible:{opacity: 1, left: "0rem", zIndex: 10, transition: {ease: "easeIn", duration: 0.3}},
        hidden: {opacity: 0, left: "-30rem", transition: {ease: "easeOut", duration: 0.3}}
    } : {
        visible:{opacity: 1},
        hidden: {opacity: 1},
    }

    return(
        <Box
        bg='black' 
        borderBottom="1px" 
        borderBottomColor="gray.900" 
        position={{ base:"absolute", lg:"sticky" }} 
        style={{
            top: 0,
            left: 0,
            zIndex: 1000
        }}>
            <Flex
                bg="black"
                maxW="1200px"
                w={{base:"100%", lg:"initial"}}
                m="0 auto"
                h={{base:"100vh", lg:"120px"}}
                align="center"
                justify={{base:"center", lg:"space-between"}}
                p="20px"
                display="flex"
                direction={{base:"column", lg:"row"}}
                position={{base:"fixed", lg:"initial"}}
                as={motion.div}
                variants={variants}
                initial={"hidden"}
                animate={openMenu ? "visible" : "hidden"}
            >
                <Img src="/logo.png" h="58px" mb={{base:"1.5rem", lg:"0"}}/>
                <Flex 
                display="flex" 
                direction={{base:"column", lg:"row"}} 
                gap={{base: "20px", lg: "30px", '2xl': "40px" }}
                textAlign={{base:"center", lg:"initial"}} 
                fontSize={{base:"1.5rem", lg:"1.1rem"}}>
                    <ActiveLink href="#home">
                        <Link>Início</Link>
                    </ActiveLink>

                    <ActiveLink href="#history">
                        <Link>História</Link>
                    </ActiveLink>

                    <ActiveLink href="#vision">
                        <Link>Visão</Link>
                    </ActiveLink>

                    <ActiveLink href="#pastors">
                        <Link>Pastores</Link>
                    </ActiveLink>

                    <ActiveLink href="#actions">
                        <Link>Ações</Link>
                    </ActiveLink>
                    
                    <ActiveLink href="#hours">
                        <Link>Horários</Link>
                    </ActiveLink>

                    <ActiveLink href="#pix">
                        <Link>Pix</Link>
                    </ActiveLink>

                    <ActiveLink href="#transfer">
                        <Link>Transferências</Link>
                    </ActiveLink>

                    <ActiveLink href="#app">
                        <Link>App</Link>
                    </ActiveLink>

                    <ActiveLink href="#location">
                        <Link>Localização</Link>
                    </ActiveLink>
                </Flex>
            </Flex>

            <Flex
              position="fixed"
              right="1.5rem"
              onClick={() => setOpenMenu(!openMenu)}
              display={{base: "flex", lg:"none"}}
              w="100%"
              left="0"
              top="0"
              p="10px"
              align="center"
              justify='flex-end'
              zIndex={10}
              >
                <Icon as={!openMenu ? AiOutlineMenu : AiOutlineClose} color="white" fontSize="2rem" fontWeight="light"/>
            </Flex>
        </Box>
    )
}