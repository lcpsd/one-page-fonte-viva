import { Box, Flex, Text } from "@chakra-ui/react";

interface VerticalCardProps{
    title: string;
    description: string;
    image_link: string;
    currentIndex: number;
    slideIndex: number;
}

export function VerticalCard({title, description, image_link, currentIndex, slideIndex}: VerticalCardProps){
    
    return(
        <Flex
            h={currentIndex + 1 == slideIndex || currentIndex + 2 == slideIndex ? "85vh" : {base: "100vh", lg: "75vh"}}
            bgImage={image_link}
            bgPos="center"
            bgSize="cover"
            justify="flex-end"
            align="center"
            color="white"
            direction="column"
            w="100%"
            >
            <Box
                bgGradient='linear(to-t, black, transparent)'
                h="200px"
                w="100%"
                bottom="0"
                left="0"
                zIndex="10"
                p="40px"
                textAlign="center"
                >
                <Text fontSize="1.5rem" fontWeight="bold">{title}</Text>
                <Text>{description}</Text>
            </Box>
        </Flex>
    )
}