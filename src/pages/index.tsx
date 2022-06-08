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
import { LocationSection } from "../components/LocationSection";

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

        <LocationSection />      
        
        <Footer />
      </Flex>
    </>
  )
}
