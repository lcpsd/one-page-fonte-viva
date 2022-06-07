
import { createContext, useContext, useState } from "react";

export const MenuContext = createContext()

export function MenuContextProvider({children}){

    const [openMenu, setOpenMenu] = useState(false)

    return(
        <MenuContext.Provider value={{
            openMenu,
            setOpenMenu
            }}>
            {children}
        </MenuContext.Provider>
    )
}

export function useMenuContext(){
    return useContext(MenuContext)
}