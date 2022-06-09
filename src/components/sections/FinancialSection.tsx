import { SimpleGrid, Text } from "@chakra-ui/react";
import { Section } from "../current-section";
import { FinancialCard } from "../FinancialCard";

export function FinancialSection(){

    const financial = [
        {
          id: 1,
          title:"PIX",
          description:"ipsc4c917fb-17df-4f5b-88d4-6a3345c4a31d",
          image_link: "/images/pix-logo.png"
        },
        {
          id: 2,
          title:"Bradesco",
          description:"AG: 073\nCC: 677-7",
          image_link: "/images/bradesco-logo.jpg"
        },
        {
          id: 3,
          title:"Caixa Econômica",
          description:"AG: 3658\nOP: 003\nCC: 34-6",
          image_link: "/images/caixa-logo.png"
        },
    ]

    return(
        <Section id="financial" h="90vh" w="100%" maxW="1200px" m="0 auto" direction="column" justify="center" align="center" px="40px">
          <Text fontSize="2xl" fontWeight="bold" color="blue.500" textAlign="center" mb="1rem">Financeiro</Text>
          <SimpleGrid columns={{base: 1, lg: 3}} spacing={10} w="100%">
            {
              financial.map(data => (
                data.title== 'PIX' ?
                <FinancialCard data={data} copy key={data.id} toastMsg="Pix Copiado!"/>
                : <FinancialCard data={data} key={data.id} />
              ))
            }
          </SimpleGrid>
        </Section>
    )
}