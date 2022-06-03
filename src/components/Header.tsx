import {Box, Flex, HStack, Img, Text} from '@chakra-ui/react'
import { ActiveLink } from './ActiveLink'

export function Header(){

    return(
        <Box w="100%">
            <Flex maxW="1120px" m="0 auto" h="80px" align="center" justify="space-between">
                <Img src="/logo.png" h="100%"/>
                <HStack>
                    <ActiveLink href="#home">
                        <Text>Início</Text>
                    </ActiveLink>

                    <ActiveLink href="#history">
                        <Text>História</Text>
                    </ActiveLink>

                    <ActiveLink href="#vision">
                        <Text>Visão</Text>
                    </ActiveLink>

                    <ActiveLink href="#actions">
                        <Text>Ações</Text>
                    </ActiveLink>

                    <ActiveLink href="#pastors">
                        <Text>Início</Text>
                    </ActiveLink>

                    <ActiveLink href="#hours">
                        <Text>Pastorado</Text>
                    </ActiveLink>

                    <ActiveLink href="#documents">
                        <Text>Documentos</Text>
                    </ActiveLink>

                    <ActiveLink href="#financial">
                        <Text>Financeiro</Text>
                    </ActiveLink>

                    <ActiveLink href="#location">
                        <Text>Localização</Text>
                    </ActiveLink>
                </HStack>
            </Flex>
        </Box>
    )
}