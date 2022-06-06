import { Box, Flex, Img, Text } from "@chakra-ui/react";

interface DataProps{
    title: string;
    description: string;
    image_link: string;
}

interface FinancialCardProps{
    data: DataProps;
    copy: boolean;
}

export function FinancialCard({data, copy}: FinancialCardProps){

    return(
        <Flex bg="gray.900" borderRadius="5px" color="white">
            <Box bgImage={data.image_link} bgPosition="center" bgSize="cover" flex="1" bgColor="white" borderRadius="5px"></Box>
            <Flex direction="column" flex="2" p="2rem">
                <Text fontWeight="bold">{data.title}</Text>
                <Text>{data.description}</Text>
            </Flex>
        </Flex>
    )
}