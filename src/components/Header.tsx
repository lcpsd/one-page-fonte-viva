import {Box, Flex, HStack, Img, Link} from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'

export function Header(){

    return(
        <Box bg='black' w="100%" style={{
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <Flex maxW="1120px" m="0 auto" h="120px" align="center" justify="space-between" p="20px">
                <Img src="/logo.png" h="58px"/>
                <HStack spacing={10}>
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
                </HStack>
            </Flex>
        </Box>
    )
}