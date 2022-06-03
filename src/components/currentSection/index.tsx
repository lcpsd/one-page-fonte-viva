import {useCurrentSectionContext} from './Context'

export function CurrentSection(){
    
    const {currentSection, setCurrentSection} = useCurrentSectionContext()

    if(typeof window !== 'undefined'){
        const allSections = document.querySelectorAll('section')

        window.onscroll = () => {
    
            allSections.forEach(section => {
    
                const sectionOffsetTop = section.offsetTop
                const sectionOffsetBottom = sectionOffsetTop + section.offsetHeight
                const windowOffsetTop = window.scrollY + 80
    
                if(sectionOffsetBottom >= windowOffsetTop && sectionOffsetTop <= windowOffsetTop){
                    currentSection !== section.id && section.id && setCurrentSection(section.id)
                }   
            })        
        }
    }

    return(<></>)
}