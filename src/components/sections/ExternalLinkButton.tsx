import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { IconType } from "react-icons";
import { VscLinkExternal } from "react-icons/vsc";

interface ExternalLinkButtonProps{
    title: string;
    icon: IconType;
    iconSize: string | number;
    link: string;
}

export function ExternalLinkButton({title, icon, iconSize, link}:ExternalLinkButtonProps){
    

    return(
        <Link href={link}>
            <Button
            as={Flex}
            align='center'
            p='30px'
            border='1px'
            borderColor='blue.500'
            borderRadius={5}
            cursor='pointer'
            bg='transparent'
            mt='10px'
            w='100%'
            maxW='350px'
            position='relative'
            _hover={{background: 'blue.500', color:'black'}}>
                <Icon fontSize={iconSize} as={icon} flex='1'/>
                <Text fontSize={15} flex='2' w='100%' textAlign='center'>{title}</Text>
                <Icon ml={5} as={VscLinkExternal} fontSize={20} mx={5} position='absolute' right='0' top='10px' opacity={0.5}/>
            </Button>
        </Link>
    )
}