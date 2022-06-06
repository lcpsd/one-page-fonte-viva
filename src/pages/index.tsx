import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { Section } from "../components/current-section";
import { Header } from "../components/Header";
import { HeaderCarousel } from "../components/HeaderCarousel";
import { InstagramCarousel } from "../components/InstagramCarousel";

export default function Home() {

  return (
    <>
      <Header />
      <Flex direction='column' align='center'>
        <Section direction='column' id='home'>
          <HeaderCarousel />
          <InstagramCarousel />
        </Section>

        <Section 
        h={'calc(100vh - 120px)'} 
        id='history' 
        bg="red" 
        m="0 auto" 
        w="100%" 
        maxW="1500px" 
        bgImage="/images/fachada-igreja.png" 
        bgColor="green" 
        bgPosition="center" 
        bgSize='cover' 
        bgRepeat='no-repeat'
        justify='flex-end'
        position='relative'
        >
          <Box h="100%" w="100%" maxW='800px' bgGradient='linear(to-l, black, transparent)' position='absolute'></Box>
          <Flex direction='column' align='flex-end' zIndex='10' justify='center' p='20px'>
            <Text fontSize='2rem' color='blue.400' fontWeight='bold'>Nossa História</Text>
            <Text textAlign='justify' color='white' w='400px'>
              Os pastores Elias Gomes e Elisângela Kovalski, pastores fundadores da Fonte, são casados desde 1998 e tem dois filhos: Isabely de 22 anos, estudante de Odontologia e pastora de adolescentes e Elias Filho de 21 anos, estudante no CFNI – Christ For The Nations nos EUA.
              Iniciaram o ministério pastoral em 2002 na cidade de Guaratuba no estado do Paraná, local onde aprenderam a depender de Deus e a cuidar de pessoas.
              Nossos pastores receberam uma palavra que os Senhor os traria para uma terra distante aonde havia um povo que esperava por eles e logo após um tempo receberam o convite para conhecerem para Campo Grande. Não restando dúvida sobre o lugar escolhido por Deus para realizarem a obra, se mudaram e com intuito de serem direcionados quanto à igreja que deveriam congregar, iniciaram um período de oração no Parque dos Poderes, onde foram gerando discípulos.
              Nasce o primeiro templo da Fonte na Avenida Zaran em 2011, permanecendo lá até 2012, no período de 2013 a 2016 a igreja ficou localizada na Avenida Mato Grosso e desde 2017 até o presente momento na Avenida Mascarenhas de Moraes.
              Somos uma igreja em células, uma família para pertencer e nossa missão é servir e inspirar pessoas.
              </Text>
          </Flex>
        </Section>

        <Section 
        h={'calc(100vh - 120px)'} 
        id='history' 
        bg="red" 
        m="0 auto" 
        w="100%" 
        maxW="1500px" 
        bgImage="/images/elias.jpg" 
        bgColor="green" 
        bgPosition="center" 
        bgSize='cover' 
        bgRepeat='no-repeat'
        position='relative'
        >
          <Box h="100%" w="100%" maxW='800px' bgGradient='linear(to-r, black, transparent)' position='absolute' left='0'></Box>
          <Flex direction='column' zIndex='10' justify='center' p='20px'>
            <Text fontSize='2rem' color='blue.400' fontWeight='bold'>Nossa Visão</Text>
            <Text textAlign='justify' color='white' w='400px'>
            Valorizamos as vidas que Deus confiou a nós, por isso nossa igreja é organizada em Redes pastorais, que são responsáveis pelo cuidado individual através do discipulado.
            Temos duas Nações: Jetro, que cuida dos homens da Fonte e Débora, que pastoreia as mulheres. Dentro das Nações existem as Redes pastorais, que desenvolvem o pastoreio, conforme a faixa etária e perfil: Kids (crianças), Connect (adolescentes), Atmosfera (jovens) e Amor, Cidade, Colheita, Viva e Shalom (homens e mulheres).
            Nosso objetivo é fazer discípulos, mas também cuidar bem deles, de acordo com a sua necessidade e desta forma, conseguimos atender a todos os públicos.
              </Text>
          </Flex>
        </Section>
      </Flex>
    </>
  )
}
