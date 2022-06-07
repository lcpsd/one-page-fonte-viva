import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FooterIconProps{
    icon: IconType;
    link: string;
}

export function FooterIcon({icon, link}: FooterIconProps){

    return(
        <Link href={link} _hover={{fontSize: "2rem"}}>
            <Icon as={icon}/>
        </Link>
    )
}