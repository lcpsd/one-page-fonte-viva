import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FooterIcon } from "./FooterIcon";

interface FloatButtonProps{
    icon: IconType;
    text?: string;
    visibleHeight: number;
    hideOffset: number;
    url: string;
}

export function FloatButton({icon, text, visibleHeight, hideOffset, url}:FloatButtonProps){

    const [showBox, setShowBox] = useState(false)

    const variants = {
        visible: {opacity: 1, right: "-5rem"},
        hidden: {opacity: 0, right: "-20rem"},
    }

    function onScroll(){
        window.scrollY > visibleHeight && setShowBox(true)
        window.scrollY < visibleHeight && setShowBox(false)
        window.scrollY <= visibleHeight || window.scrollY > ((document.body.offsetHeight - 1000)- hideOffset) && setShowBox(false)
    }

    useEffect(() => {
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    return(
        <Flex as={Link} href={url} align='center' justify='center'>
            <Flex
            as={motion.div}
            position="fixed"
            bottom="6rem"
            fontSize="2rem"
            color="white"
            align="center"
            justify="center"
            zIndex={20}
            transform="rotate(-90deg)"
            variants={variants}
            initial="hidden"
            animate={showBox ? "visible" : "hidden"}
            >
                <FooterIcon fontSize="3rem" icon={icon}/>
                {text && <Text fontSize="1.5rem" color="white" mb="1rem" ml="1rem" cursor='pointer'>{text}</Text>}
            </Flex>
      </Flex>
    )
}