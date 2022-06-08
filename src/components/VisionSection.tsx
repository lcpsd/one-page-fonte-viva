import { Box, Flex, Text } from "@chakra-ui/react";
import { DescriptionSection } from "./DescriptionSection";

export function VisionSection(){

    return(
        <DescriptionSection
        id="vision"
        bgImageLink="/images/elias.jpg"
        >
          <Box h="100%" w="100%" maxW='800px' bgGradient='linear(to-r, black, transparent)' position='absolute' left='0'></Box>
          <Flex direction='column' zIndex='10' justify='center' p='40px'>
            <Text fontSize='2rem' color='blue.400' fontWeight='bold'>Nossa Visão</Text>
            <Text textAlign='justify' color='white' maxW='400px'>
            Valorizamos as vidas que Deus confiou a nós, por isso nossa igreja é organizada em Redes pastorais, que são responsáveis pelo cuidado individual através do discipulado.
            Temos duas Nações: Jetro, que cuida dos homens da Fonte e Débora, que pastoreia as mulheres. Dentro das Nações existem as Redes pastorais, que desenvolvem o pastoreio, conforme a faixa etária e perfil: Kids (crianças), Connect (adolescentes), Atmosfera (jovens) e Amor, Cidade, Colheita, Viva e Shalom (homens e mulheres).
            Nosso objetivo é fazer discípulos, mas também cuidar bem deles, de acordo com a sua necessidade e desta forma, conseguimos atender a todos os públicos.
              </Text>
          </Flex>
        </DescriptionSection>
    )
}