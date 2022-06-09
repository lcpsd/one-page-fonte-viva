import { Flex, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FooterIcon } from "./FooterIcon";

interface FloatButtonProps{
    icon: IconType;
    text?: string;
    visibleHeight: number;
    hideOffset: number;
}

export function FloatButton({icon, text, visibleHeight, hideOffset}:FloatButtonProps){

    const [showBox, setShowBox] = useState(false)

    const variants = {
        visible: {opacity: 1, right: "-5rem"},
        hidden: {opacity: 0, right: "-20rem"},
    }

    useEffect(() => {
        window.onscroll = () => {
            console.log(visibleHeight, window.scrollY)
            window.scrollY > visibleHeight && setShowBox(true)
            window.scrollY < visibleHeight || window.scrollY > ((document.body.offsetHeight - 1000)- hideOffset) && setShowBox(false)
        }
    }, [])

    return(
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
          {text && <Text fontSize="1.5rem" color="white" mb="1rem" ml="1rem">{text}</Text>}
      </Flex>
    )
}