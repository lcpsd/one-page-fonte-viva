import { SimpleGrid, Text } from "@chakra-ui/react";
import { FiClock } from "react-icons/fi";
import { BigIconFloating } from "../BigIconFloating";
import { Section } from "../current-section";
import { HourCard } from "../HourCard";

export function HoursSection(){

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

    return(
        <Section id="hours" h="100%" minH="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center" px="20px" position="relative">
          <Text fontSize="48px" fontWeight="bold" color="blue.500" textAlign="right" mb="2rem" w="100%" maxW="900px">HORÁRIOS</Text>
          <BigIconFloating icon={FiClock} iconColor="blue.500" left="-10rem" bottom="-5rem"/>
          <BigIconFloating icon={FiClock} iconColor="blue.500" right="-10rem" bottom="15rem"/>
          <SimpleGrid columns={{base: 1, '2xl': 2}} spacing={5} minH="300px">
            {
              hours.map(hour => (
                <HourCard hourData={hour} key={hour.id}/>
              ))
            }
          </SimpleGrid>
        </Section>
    )
}