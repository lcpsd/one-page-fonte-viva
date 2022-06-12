import { Box, Flex, Text } from "@chakra-ui/react";
import { BankAccountCard } from "../BankAccountCard";
import { BigTextFloating } from "../BigTextFloating";
import { Section } from "../current-section";

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
          <BigTextFloating text="TRANSF" textColor="blue.500" left="-60rem" top="-8rem"/>
          <BigTextFloating text="TRANSF" textColor="blue.500" right="-60rem" bottom="-10rem"/>
          <Flex direction="column" align="left" flex="1">
            <Text fontSize="76px" fontWeight="bold" color="white" mb="1rem" lineHeight={0.9}>TRANSFERÊNCIA</Text>
            <Text fontSize="76px" fontWeight="bold" color="blue.500" mb="1rem" lineHeight={0.9}>BANCÁRIA</Text>
            <Text fontSize="16px" color="white" mb="1rem">13.425.720/0001-40 - Igreja Evangelica Fonte Viva</Text>
          </Flex>

          <Flex flex="2" position="relative">
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
        </Section>
    )
}