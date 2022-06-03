import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement, ReactNode } from "react";
import { useCurrentSectionContext } from "./currentSection/Context";

interface ActiveLinksProps extends LinkProps{
    children: ReactElement;
}

export function ActiveLink({children, href, ...rest}: ActiveLinksProps){

    const {currentSection} = useCurrentSectionContext()
    
    let isActive = false

    const linkHref = String(href).split("#")[1]

    linkHref === currentSection
    && (isActive = true)

    return(
        <Link {...rest} href={href}>
            {cloneElement(children, {
                color: isActive ? "blue.400" : "gray.50"
            })}
        </Link>
    )
}