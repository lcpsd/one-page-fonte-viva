import { Flex, Text } from "@chakra-ui/react";
import { BankAccountCard } from "../../BankAccountCard";

export function Cards(){

    return(
        <Flex flex={{base: '', '2xl':"2"}} position="relative" direction="column">
            <BankAccountCard image_link="/images/bradesco-logo.jpg" fontSize="24px" left="0" top="-10rem">
              <Text fontSize="32px" fontWeight="bold" color="blue.500">BRADESCO</Text>
              <Text><strong>AG:</strong> 073</Text>
              <Text><strong>CC:</strong> 677-7</Text>
            </BankAccountCard>

            <BankAccountCard image_link="/images/caixa-logo.png" fontSize="24px" left="10rem">
              <Text fontSize="32px" fontWeight="bold" color="blue.500">CAIXA</Text>
              <Text><strong>AG:</strong> 3658</Text>
              <Text><strong>CC:</strong> 34-6</Text>
              <Text><strong>OP:</strong> 003</Text>
            </BankAccountCard>
        </Flex>
    )
}