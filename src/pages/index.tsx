import { Flex, Link, Text } from "@chakra-ui/react";
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
import { FooterIcon } from "../components/FooterIcon";
import { FloatButton } from "../components/FloatButton";

export default function Home() {

  return (
    <>
      <Header />
      <FloatButton icon={RiWhatsappFill} text="Fale Conosco" visibleHeight={1000} hideOffset={300}/>
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
