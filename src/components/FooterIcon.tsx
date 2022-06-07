import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FooterIconProps{
    icon: IconType;
    link: string;
}

export function FooterIcon({icon, link}: FooterIconProps){

    console.log(typeof icon)

    return(
        <Link href={link}>
            <Icon as={icon}/>
        </Link>
    )
}