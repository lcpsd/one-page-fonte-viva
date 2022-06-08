import { Box, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "../components/current-section";
import { DescriptionSection } from "../components/DescriptionSection";
import { Header } from "../components/Header";
import { HeaderCarousel } from "../components/HeaderCarousel";
import { InstagramCarousel } from "../components/InstagramCarousel";
import { DocumentCard } from "../components/DocumentCard";
import { FinancialCard } from "../components/FinancialCard";
import { Footer } from "../components/Footer";
import { ActionsCarousel } from "../components/ActionsSection";
import { PastorsCarousel } from "../components/PastorsCarousel";
import { HoursSection } from "../components/HoursSection";
import { VisionSection } from "../components/VisionSection";

export default function Home() {

  const documents = [
    {
      id: 1,
      title: "Casa Viva",
      link:""
    },
    {
      id: 2,
      title: "Batismo",
      link:""
    },
    {
      id: 3,
      title: "Visão",
      link:""
    },
    {
      id: 4,
      title: "eBooks",
      link:""
    },
  ]

  const financial = [
    {
      id: 1,
      title:"PIX",
      description:"ipsc4c917fb-17df-4f5b-88d4-6a3345c4a31d",
      image_link: "/images/pix-logo.png"
    },
    {
      id: 2,
      title:"Bradesco",
      description:"AG: 073\nCC: 677-7",
      image_link: "/images/bradesco-logo.jpg"
    },
    {
      id: 3,
      title:"Caixa Econômica",
      description:"AG: 3658\nOP: 003\nCC: 34-6",
      image_link: "/images/caixa-logo.png"
    },
  ]

  return (
    <>
      <Header />
      <Flex direction='column' align='center'>
        <Section direction='column' id='home'>
          <HeaderCarousel />
          <InstagramCarousel />
        </Section>

        {/* Descriptions */}
        <DescriptionSection
        bgImageLink="/images/fachada-igreja.png"
        id='history'
        justify='flex-end'
        >
          <Box h="100%" w="100%" maxW='800px' bgGradient='linear(to-l, black, transparent)' position='absolute'></Box>
          <Flex direction='column' align='flex-end' zIndex='10' justify='center' p='40px'>
            <Text fontSize='2rem' color='blue.400' fontWeight='bold'>Nossa História</Text>
            <Text textAlign='justify' color='white' maxW='400px'>
              Os pastores Elias Gomes e Elisângela Kovalski, pastores fundadores da Fonte, são casados desde 1998 e tem dois filhos: Isabely de 22 anos, estudante de Odontologia e pastora de adolescentes e Elias Filho de 21 anos, estudante no CFNI – Christ For The Nations nos EUA.
              Iniciaram o ministério pastoral em 2002 na cidade de Guaratuba no estado do Paraná, local onde aprenderam a depender de Deus e a cuidar de pessoas.
              Nossos pastores receberam uma palavra que os Senhor os traria para uma terra distante aonde havia um povo que esperava por eles e logo após um tempo receberam o convite para conhecerem para Campo Grande. Não restando dúvida sobre o lugar escolhido por Deus para realizarem a obra, se mudaram e com intuito de serem direcionados quanto à igreja que deveriam congregar, iniciaram um período de oração no Parque dos Poderes, onde foram gerando discípulos.
              Nasce o primeiro templo da Fonte na Avenida Zaran em 2011, permanecendo lá até 2012, no período de 2013 a 2016 a igreja ficou localizada na Avenida Mato Grosso e desde 2017 até o presente momento na Avenida Mascarenhas de Moraes.
              Somos uma igreja em células, uma família para pertencer e nossa missão é servir e inspirar pessoas.
              </Text>
          </Flex>
        </DescriptionSection>

        <VisionSection />

        <ActionsCarousel />
        
        <PastorsCarousel />

        <HoursSection />
        
        {/* Documents */}
        <Section id="documents" h="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center" px="40px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Documentos</Text>
          <SimpleGrid columns={{base: 1, lg: 4}} spacing={10}>
            {
              documents.map(document => (
                <DocumentCard data={document}/>
              ))
            }
          </SimpleGrid>
        </Section>
        
        {/* Financial */}
        <Section id="financial" h="90vh" w="100%" maxW="1200px" m="0 auto" direction="column" justify="center" align="center" px="40px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Financeiro</Text>
          <SimpleGrid columns={{base: 1, lg: 3}} spacing={10} w="100%">
            {
              financial.map(data => (
                <FinancialCard data={data} copy/>
              ))
            }
          </SimpleGrid>
        </Section>
        
        {/* Location */}
        <Section id="location" h="100%" minH="75vh" w="100%" maxW="1200px" m="0 auto" justify="center" align="center" p="40px">
          <SimpleGrid spacing={10} columns={{base: 1, lg: 2}}>
            <Img src="/images/map.png"/>
            <Flex color="white" justify="center" direction="column">
              <Text fontSize="2xl" fontWeight="bold" color="blue.500">Visite-nos</Text>
              <Text>
              Rua: Avenida Mascarenhas de Moraes, 6854 <br/>
              Bairro: São Francisco<br/>
              Cidade: Campo Grande - MS
              </Text>
            </Flex>
          </SimpleGrid>
        </Section>
        
        <Footer />
      </Flex>
    </>
  )
}
