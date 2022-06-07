import { ChakraProps, ChakraStyledOptions } from "@chakra-ui/react";
import { Section } from "./current-section";

interface DesriptionSectionProps extends ChakraStyledOptions{
    children: JSX.Element | JSX.Element[];
    id: string;
    bgImageLink: string;
}

export function DescriptionSection({children, id, bgImageLink, ...rest}: DesriptionSectionProps){
    return(
        <Section
        minH="90vh"
        h={{base: "100vh", lg:"100%"}}
        id={id}
        m="0 auto"
        w="100%" 
        maxW="1500px" 
        bgImage={bgImageLink}
        bgPosition="center" 
        bgSize='cover' 
        bgRepeat='no-repeat'
        position='relative'
        {...rest}
        >
            {children}
        </Section>
    )
}