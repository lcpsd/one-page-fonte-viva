import { Flex, Text } from "@chakra-ui/react";

export function Title(){

    return(
        <Flex direction="column" align={{base: "center", lg: "left"}} flex={{base: '', '2xl':"1"}} justify="center">
            <Text fontSize={{base: '42px', '2xl': "76px"}} fontWeight="bold" color="white" mb="1rem" lineHeight={0.9}>TRANSFERÊNCIA</Text>
            <Text fontSize={{base: '42px', '2xl': "76px"}} fontWeight="bold" color="blue.500" mb="1rem" lineHeight={0.9}>BANCÁRIA</Text>
            <Text fontSize="16px" color="white" mb="1rem" textAlign={{base: "center", lg: "left"}} w={{base: "90%", lg: "initial"}}>13.425.720/0001-40 - Igreja Evangelica Fonte Viva</Text>
          </Flex>
    )
}