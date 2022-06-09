import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ActionsCarousel } from "../components/sections/ActionsSection";
import { PastorsCarousel } from "../components/PastorsCarousel";
import { HoursSection } from "../components/sections/HoursSection";
import { VisionSection } from "../components/sections/VisionSection";
import { HistorySection } from "../components/sections/HistorySection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { FinancialSection } from "../components/sections/FinancialSection";
import { LocationSection } from "../components/sections/LocationSection";

export default function Home() {

  return (
    <>
      <Header />
      <Flex direction='column' align='center'>
        <HeaderSection />

        <HistorySection />

        <VisionSection />

        <PastorsCarousel />
  
        <ActionsCarousel />
        
        <HoursSection />
    
        <FinancialSection />

        <LocationSection />      
        
        <Footer />
      </Flex>
    </>
  )
}
