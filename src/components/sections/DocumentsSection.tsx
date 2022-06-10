import { SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "../current-section";
import { DocumentCard } from "../DocumentCard";

export function DocumentsSection(){

    const documents = [
        {
          id: 1,
          title: "Casa Viva",
          link:""
        },
        {
          id: 2,
          title: "Batismo",
          link:""
        },
        {
          id: 3,
          title: "Visão",
          link:""
        },
        {
          id: 4,
          title: "eBooks",
          link:""
        },
    ]

    return(
        <Section id="documents" h="90vh" w="100%" maxW="1500px" m="0 auto" direction="column" justify="center" align="center" px="40px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Documentos</Text>
          <SimpleGrid columns={{base: 1, lg: 4}} spacing={10}>
            {
              documents.map(document => (
                <DocumentCard data={document} key={document.id}/>
              ))
            }
          </SimpleGrid>
        </Section>
    )
}