import { ChakraStyledOptions, Flex, FlexProps } from '@chakra-ui/react'
import { ReactNode, useEffect } from 'react'
import {useCurrentSectionContext} from './Context'

interface SectionProps extends ChakraStyledOptions{
    children:
    | ReactNode
    | JSX.Element[]
    | string
    | string[];
}

export function CurrentSection(){
    
    const {currentSection, setCurrentSection} = useCurrentSectionContext()

    
    useEffect(() => {
        const allSections: NodeListOf<HTMLElement> = document.querySelectorAll('.current-section-node')
        
        window.onscroll = () => {
            
            allSections.forEach(section => {
                
                const sectionOffsetTop = section.offsetTop
                const sectionOffsetBottom = sectionOffsetTop + section.offsetHeight
                const windowOffsetTop = window.scrollY + 200
    
                if(sectionOffsetBottom >= windowOffsetTop && sectionOffsetTop <= windowOffsetTop){
                    currentSection !== section.id && section.id && setCurrentSection(section.id)
                }   
            })
        }
    }, [])

    return(<></>)
}

export function Section({children, id, ...rest}: SectionProps){
    return(
        <Flex id={id} {...rest} className='current-section-node'>
            {children}
        </Flex>
    )
}