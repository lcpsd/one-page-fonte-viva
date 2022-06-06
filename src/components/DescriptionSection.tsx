import { Section } from "./current-section";

interface DesriptionSectionProps{
    children: JSX.Element | JSX.Element[];
    id: string;
    bgImageLink: string;
}

export function DescriptionSection({children, id, bgImageLink, ...rest}: DesriptionSectionProps){

    return(
        <Section
        h={'calc(100vh - 120px)'} 
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