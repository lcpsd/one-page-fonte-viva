import { Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "../components/current-section";
import { Header } from "../components/Header";
import { DocumentCard } from "../components/DocumentCard";
import { FinancialCard } from "../components/FinancialCard";
import { Footer } from "../components/Footer";
import { ActionsCarousel } from "../components/ActionsSection";
import { PastorsCarousel } from "../components/PastorsCarousel";
import { HoursSection } from "../components/HoursSection";
import { VisionSection } from "../components/VisionSection";
import { HistorySection } from "../components/HistorySection";
import { HeaderSection } from "../components/HeaderSection";

export default function Home() {

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
        <HeaderSection />

        <HistorySection />

        <VisionSection />

        <ActionsCarousel />
        
        <PastorsCarousel />

        <HoursSection />
    
        
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
