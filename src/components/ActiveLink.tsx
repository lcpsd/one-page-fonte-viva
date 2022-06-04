import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement, ReactNode, useState } from "react";
import { theme } from "../styles/theme";
import { useCurrentSectionContext } from "./currentSection/Context";

interface ActiveLinksProps extends LinkProps{
    children: ReactElement;
}

export function ActiveLink({children, href, ...rest}: ActiveLinksProps){

    const {currentSection} = useCurrentSectionContext()
    const [isActive, setIsActive] = useState(false)

    const linkHref = String(href).split("#")[1]

    linkHref === currentSection ? setIsActive(true) : setIsActive(false)

    return(
        <Link {...rest} href={href}>
            {cloneElement(children, {
                className: "menuLink",
                style:{
                    color: isActive ? theme.colors.blue['500'] : theme.colors.gray['300'],
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