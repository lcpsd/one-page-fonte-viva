import {DescriptionSection} from './DescriptionSection'
import { Box, Flex, Text } from "@chakra-ui/react";

export function HistorySection(){
    return(
        <DescriptionSection
        bgImageLink="/images/fachada-igreja.png"
        id='history'
        justify='flex-end'
        >
          <Box h="100%" w="100%" maxW='800px' bgGradient='linear(to-l, black, transparent)' position='absolute'></Box>
          <Flex direction='column' align='flex-end' zIndex='10' justify='center' p='40px'>
            <Text fontSize='2rem' color='blue.400' fontWeight='bold' textAlign={{base:"center", lg:"right"}} w="100%">Nossa História</Text>
            <Text textAlign='justify' color='white' maxW='400px'>
              Os pastores Elias Gomes e Elisângela Kovalski, pastores fundadores da Fonte, são casados desde 1998 e tem dois filhos: Isabely de 22 anos, estudante de Odontologia e pastora de adolescentes e Elias Filho de 21 anos, estudante no CFNI – Christ For The Nations nos EUA.
              Iniciaram o ministério pastoral em 2002 na cidade de Guaratuba no estado do Paraná, local onde aprenderam a depender de Deus e a cuidar de pessoas.
              Nossos pastores receberam uma palavra que os Senhor os traria para uma terra distante aonde havia um povo que esperava por eles e logo após um tempo receberam o convite para conhecerem para Campo Grande. Não restando dúvida sobre o lugar escolhido por Deus para realizarem a obra, se mudaram e com intuito de serem direcionados quanto à igreja que deveriam congregar, iniciaram um período de oração no Parque dos Poderes, onde foram gerando discípulos.
              Nasce o primeiro templo da Fonte na Avenida Zaran em 2011, permanecendo lá até 2012, no período de 2013 a 2016 a igreja ficou localizada na Avenida Mato Grosso e desde 2017 até o presente momento na Avenida Mascarenhas de Moraes.
              Somos uma igreja em células, uma família para pertencer e nossa missão é servir e inspirar pessoas.
              </Text>
          </Flex>
        </DescriptionSection>
    )
}