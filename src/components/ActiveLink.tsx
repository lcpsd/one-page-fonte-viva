import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement, ReactNode, useState } from "react";
import { theme } from "../styles/theme";
import { useCurrentSectionContext } from "./current-section/Context";

interface ActiveLinksProps extends LinkProps{
    children: ReactElement;
}

export function ActiveLink({children, href, ...rest}: ActiveLinksProps){

    const {currentSection} = useCurrentSectionContext()

    let isActive = false

    const linkHref = String(href).split("#")[1]

    if(linkHref === currentSection) isActive = true

    return(
        <Link {...rest} href={href}>
            {cloneElement(children, {
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