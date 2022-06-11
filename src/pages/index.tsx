import { Box, Flex, Link, Text } from "@chakra-ui/react";
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
import { RiWhatsappFill } from "react-icons/ri";
import { FloatButton } from "../components/FloatButton";
import { DocumentsSection } from "../components/sections/DocumentsSection";

import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

  return (
    <>
      <Header />
      <FloatButton
        icon={RiWhatsappFill}
        text="Fale Conosco"
        visibleHeight={1000}
        hideOffset={300} />
      <Flex direction='column'>
        <HeaderSection />

        <HistorySection />

        <VisionSection />

        <PastorsCarousel />
  
        <ActionsCarousel />
        
        <HoursSection />

        <DocumentsSection />
    
        <FinancialSection />

        <LocationSection />      
        
        <Footer />
      </Flex>
    </>
  )
}
