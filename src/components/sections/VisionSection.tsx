import { Box, Flex, Text } from "@chakra-ui/react";
import { GradientDiv } from "../GradientDiv";
import { DescriptionSection } from "./DescriptionSection";

export function VisionSection(){

    return(
        <DescriptionSection
        id="vision"
        bgPosition={{base: "50% 50%", xl: '100% 0%'}}
        bgImageLink="/images/elias.jpg"
        h={{base: '100vh', xl: '85vh'}}
        >
          <GradientDiv side="to-r" display={{base:'none', xl:'block'}}/>

          <Box
           w='100%'
           h='100%'
           bg='black'
           position='absolute'
           top='0'
           left='0'
           opacity={{base:'0.7', xl:'0'}}
           ></Box>

          <Flex direction='column' zIndex='10' justify='center' p='40px' textAlign={{base:"center", lg:"left"}}>
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