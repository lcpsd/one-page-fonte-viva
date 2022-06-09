import { ChakraProps, Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FooterIconProps extends ChakraProps{
    icon: IconType;
    link?: string;
}

export function FooterIcon({icon, link, ...rest}: FooterIconProps){

    return(
        <Link href={link} {...rest} isExternal>
            <Icon as={icon}/>
        </Link>
    )
}