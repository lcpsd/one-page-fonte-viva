import { Flex } from "@chakra-ui/react";
import { Section } from "../components/currentSection";
import { Header } from "../components/Header";
import { HeaderCarousel } from "../components/HeaderCarousel";
import { InstagramCarousel } from "../components/InstagramCarousel";

export default function Home() {

  return (
    <>
      <Header />
      <Flex direction='column'>
        <Section direction='column' h={'calc(100vh - 120px)'} id='home'>
          <HeaderCarousel />
          <InstagramCarousel />
        </Section>

        <Section h="100vh" id='history'>

        </Section>
      </Flex>
    </>
  )
}
