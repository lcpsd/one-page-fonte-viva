import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement, ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { useMenuContext } from "../contexts/MenuContext";
import { theme } from "../styles/theme";
import { useCurrentSectionContext } from "./current-section/Context";

interface ActiveLinksProps extends LinkProps{
    children: ReactElement;
}

interface CustomLinkProps{
    isActive: boolean;
}

const CustomLink = styled.span<CustomLinkProps>`
    .menuLink{

        color: ${(props) => props.isActive ? theme.colors.blue['500'] : theme.colors.gray['600']};

        position: relative;

        ::after{
            transition: width ease-in 0.2s;

            content: '';
            width: ${(props) => props.isActive ? "140%" : "0%"};
            height: 1px;
    
            position: absolute;
            left: -20%;
            bottom: -10px;

            background: ${theme.colors.blue['500']};
        }
    }
`

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
        <CustomLink isActive={isActive}>
            <Link {...rest} href={href}>
                {cloneElement(children, {
                    onClick: () => setOpenMenu(false),
                    className: "menuLink"
                })
                }
            </Link>
        </CustomLink>
    )
}