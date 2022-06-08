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
import { FinancialSection } from "../components/FinancialSection";

export default function Home() {

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
    
        <FinancialSection />

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
