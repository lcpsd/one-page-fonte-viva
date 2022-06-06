import { Box, Flex, HStack, Icon, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { VerticalCarousel } from "../components/VerticalCarousel";
import { Section } from "../components/current-section";
import { DescriptionSection } from "../components/DescriptionSection";
import { Header } from "../components/Header";
import { HeaderCarousel } from "../components/HeaderCarousel";
import { InstagramCarousel } from "../components/InstagramCarousel";
import { HourCard } from "../components/HourCard";
import {BiLinkExternal} from 'react-icons/bi'
import Link from "next/link";
import { DocumentCard } from "../components/DocumentCard";
import { FinancialCard } from "../components/FinancialCard";

export default function Home() {

  const actions = [
      {
          id: 1,
          title:"Adoradores",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      },
      {
          id: 2,
          title:"Boas Vindas",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      },
      {
          id: 3,
          title:"Crescei",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      },
      {
          id: 4,
          title:"Kids",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      },
      {
          id: 5,
          title:"AtmoArt",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      },
      {
          id: 6,
          title:"Maná",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      },
      {
          id: 7,
          title:"Mudança",
          description: "Nostrum veritatis earum voluptates non commodi ea provident sunt velit sint, facere suscipit doloremque dolorum est saepe!",
          image_link: "https://random.imagecdn.app/1280/720"
      }
  ]

  const pastors = [
    {
        id: 1,
        title:"Pr. Jhonatan",
        description: "Viva Mulheres",
        image_link: "https://random.imagecdn.app/1280/720"
    },
    {
        id: 2,
        title:"Pr. Luiz",
        description: "Atmosfera",
        image_link: "https://random.imagecdn.app/1280/720"
    },
    {
        id: 3,
        title:"Pra. Talyssa",
        description: "Atmosfera",
        image_link: "https://random.imagecdn.app/1280/720"
    },
    {
        id: 4,
        title:"Pra. Elaine",
        description: "Viva Mulheres",
        image_link: "https://random.imagecdn.app/1280/720"
    },
    {
        id: 5,
        title:"Pra. Adriana",
        description: "Amor Mulheres",
        image_link: "https://random.imagecdn.app/1280/720"
    },
    {
        id: 6,
        title:"Pr. Elias",
        description: "Apóstolo",
        image_link: "https://random.imagecdn.app/1280/720"
    },
    {
        id: 7,
        title:"Pr. José",
        description: "Shalom",
        image_link: "https://random.imagecdn.app/1280/720"
    }
  ]

  const hours = [
    {
      id: 1,
      day: "DOM",
      title: "Culto de Celebração (Manhã)",
      description:"Culto presencial e on-line para toda família | 09:00"
    },
    {
      id: 2,
      day: "DOM",
      title: "Culto de Celebração (Noite)",
      description:"Culto presencial e on-line para toda família | 18:00"
    },
    {
      id: 3,
      day: "TER",
      title: "Crescei",
      description:"Treinamento intensivo para líderes e agentes de vida | 20:00"
    },
    {
      id: 4,
      day: "SEX",
      title: "Sexta Super",
      description:"Culto de cura, libertação e restauração | 19:30"
    },
    {
      id: 5,
      day: "SAB",
      title: "Holy",
      description:"Culto de Adolescentes | 17:30 (3x por mês)"
    },
    {
      id: 6,
      day: "SAB",
      title: "Full",
      description:"Atmosfera Full - Culto de Jovens | 19:30"
    },
  ]

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

        <DescriptionSection
        bgImageLink="/images/fachada-igreja.png"
        id='history'
        justify='flex-end'
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
        </DescriptionSection>

        <DescriptionSection
        id="vision"
        bgImageLink="/images/elias.jpg"
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
        </DescriptionSection>

        <Section id="actions">
          <VerticalCarousel data={actions} carouselTitle="Ações"/>
        </Section>
        
        <Section id="pastors">
          <VerticalCarousel data={pastors} carouselTitle="Redes Pastorais"/>
        </Section>

        <Section id="hours" h="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center">Horários</Text>
          <SimpleGrid columns={3} spacing={5} h="300px">
            {
              hours.map(hour => (
                <HourCard hourData={hour}/>
              ))
            }
          </SimpleGrid>
        </Section>

        <Section id="documents" h="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Documentos</Text>
          <SimpleGrid columns={4} spacing={10}>
            {
              documents.map(document => (
                <DocumentCard data={document}/>
              ))
            }
          </SimpleGrid>
        </Section>

        <Section id="documents" h="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Documentos</Text>
          <SimpleGrid columns={4} spacing={10}>
            {
              documents.map(document => (
                <DocumentCard data={document}/>
              ))
            }
          </SimpleGrid>
        </Section>

        <Section id="financial" h="90vh" w="100%" maxW="1200px" m="0 auto" direction="column" justify="center" align="center">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Financeiro</Text>
          <SimpleGrid columns={3} spacing={10} w="100%">
            {
              financial.map(data => (
                <FinancialCard data={data} copy/>
              ))
            }
          </SimpleGrid>
        </Section>

        <Section id="location" h="90vh" w="100%" maxW="1200px" m="0 auto" justify="center" align="center">
          <SimpleGrid spacing={10} columns={2}>
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

      </Flex>
    </>
  )
}
