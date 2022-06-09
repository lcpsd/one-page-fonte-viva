import { Flex, HStack, Text } from "@chakra-ui/react";

export function HourCard({hourData}){

    return(
        <HStack key={hourData.id} spacing="5" flex="1" display="flex" m="0 auto">
            <Flex align="center" justify="center" color="blue.500" p="20px" borderRadius="5px" bg="gray.900" h={["80px","100px"]} w={["80px","100px"]}>
                <Text fontSize="lg" fontWeight="bold" lineHeight="0">
                    {hourData.day}
                </Text>
                </Flex>
                <Flex direction="column" color="white">
                <Text fontSize="md" fontWeight="bold">
                    {hourData.title}
                </Text>
                <Text fontSize="sm" w="100%" maxW={{base:"250px",lg:"350px"}}>
                    {hourData.description}
                </Text>
            </Flex>
        </HStack>
    )
}