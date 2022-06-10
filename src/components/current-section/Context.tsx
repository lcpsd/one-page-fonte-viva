
import { createContext, useContext, useEffect, useState } from "react";

interface CurrentSectionProps{
    setCurrentSection: (init: string | undefined) => void;
    currentSection: string;
}

export const CurrentSectionContext = createContext({} as CurrentSectionProps)

export function CurrentSectionContextProvider({children}){


    const [currentSection, setCurrentSection] = useState(undefined)

    useEffect(() => {
        const firstSection = document
        .querySelectorAll('.current-section-node')[0].id
        
        setCurrentSection(firstSection)
    }, [])

    return(
        <CurrentSectionContext.Provider value={{
            currentSection,
            setCurrentSection
            }}>
            {children}
        </CurrentSectionContext.Provider>
    )
}

export function useCurrentSectionContext(){
    return useContext(CurrentSectionContext)
}