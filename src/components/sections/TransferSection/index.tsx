import { BigTextFloating } from "../../BigTextFloating";
import { Section } from "../../current-section";
import { Cards } from "./Cards";
import { Title } from "./Title";

export function TransferSection(){

    return(
        <Section
          id="transfer"
          h="140vh"
          w="100%"
          maxW="1200px"
          m="0 auto"
          justify="center"
          align="center"
          gap="20px"
          direction={{base:"column", '2xl':'row'}}
          position="relative"
          >
          <BigTextFloating text="TRANSF" textColor="blue.500" left="40rem" top="-8rem"/>
          <BigTextFloating text="TRANSF" textColor="blue.500" right="-40rem" bottom="-10rem" px="1rem"/>
          
          <Title />

          <Cards />
          
        </Section>
    )
}