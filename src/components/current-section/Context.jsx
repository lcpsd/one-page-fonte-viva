
import { createContext, useContext, useState } from "react";

export const CurrentSectionContext = createContext()

export function CurrentSectionContextProvider({children}){

    const [currentSection, setCurrentSection] = useState("home")

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