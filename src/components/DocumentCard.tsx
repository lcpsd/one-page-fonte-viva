import { HStack, Icon, Link, Text } from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

interface DataProps{
    link: string;
    title: string;
}

interface DocumentCardProps{
    data: DataProps;
}

export function DocumentCard({data}: DocumentCardProps){

    return(
        <HStack spacing={10} bg="gray.900" color="blue.500" padding="20px" borderRadius="5px" w="100vw" maxW={{sm: "500px", lg: "350px"}}>
            <Link href={data.link}>
                <Icon as={BiLinkExternal} fontSize="xl"/>
            </Link>
            <Text fontSize="xl" fontWeight="light">{data.title}</Text>
        </HStack>
    )
}