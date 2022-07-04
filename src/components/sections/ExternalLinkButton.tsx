import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { VscLinkExternal } from "react-icons/vsc";

interface ExternalLinkButtonProps{
    title: string;
    icon: IconType;
    iconSize: string | number
}

export function ExternalLinkButton({title, icon, iconSize}:ExternalLinkButtonProps){

    const variants = {
        initial: {borderColor: 'blue.500'},
        start: {borderColor:'white', transition: {durantion: 2}}
    }

    return(
        <Button
        as={motion.div}
        display='flex'
        alignItems='center'
        p='30px'
        border='1px'
        borderRadius={5}
        cursor='pointer'
        bg='transparent'
        mt='10px'
        w='100%'
        maxW='350px'
        position='relative'
        initial='initial'
        animate='start'
        variants={variants}
        _hover={{background: 'blue.500', color:'black'}}>
            <Icon fontSize={iconSize} as={icon} flex='1'/>
            <Text fontSize={15} flex='2' w='100%' textAlign='center'>{title}</Text>
            <Icon ml={5} as={VscLinkExternal} fontSize={20} mx={5} position='absolute' right='0' top='10px' opacity={0.5}/>
    </Button>
    )
}