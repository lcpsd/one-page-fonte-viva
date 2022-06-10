import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement, ReactNode, useEffect, useState } from "react";
import { useMenuContext } from "../contexts/MenuContext";
import { theme } from "../styles/theme";
import { useCurrentSectionContext } from "./current-section/Context";

interface ActiveLinksProps extends LinkProps{
    children: ReactElement;
}

export function ActiveLink({children, href, ...rest}: ActiveLinksProps){

    const {currentSection} = useCurrentSectionContext()
    const [isActive, setIsActive] = useState(false)
    const {setOpenMenu} = useMenuContext()

    const linkHref = String(href).split("#")[1]

    useEffect(() => {
        linkHref === currentSection && setIsActive(true)
        linkHref !== currentSection && setIsActive(false)
    }, [currentSection])

    return(
        <Link {...rest} href={href}>
            {cloneElement(children, {
                onClick: () => setOpenMenu(false),
                className: "menuLink",
                style:{
                    color: isActive ? theme.colors.blue['500'] : theme.colors.gray['300'],
                    borderBottom: isActive ? `2px solid ${theme.colors.blue['500']}` : '',
                },
                _hover:{
                    color: 'blue.300',
                    borderBottom: '1px',
                    borderColor: 'blue.300'
                },
            })
            }
        </Link>
    )
}