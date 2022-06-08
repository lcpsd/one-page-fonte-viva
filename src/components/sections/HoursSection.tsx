import { SimpleGrid, Text } from "@chakra-ui/react";
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
        <Section id="hours" h="100%" minH="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center" px="20px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center">Horários</Text>
          <SimpleGrid columns={{base: 1, lg: 3}} spacing={5} minH="300px">
            {
              hours.map(hour => (
                <HourCard hourData={hour} key={hour.id}/>
              ))
            }
          </SimpleGrid>
        </Section>
    )
}