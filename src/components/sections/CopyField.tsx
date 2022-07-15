import { ChakraStyledOptions, Flex, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { BsCheck } from "react-icons/bs";
import { FiCopy } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify";

interface CopyFieldProps extends ChakraStyledOptions{
    text: string;
    right?: boolean;
    copiedText: string;
    copyFn: (text: string) => void;
}

export function CopyField({text, left, right, copiedText, copyFn, ...rest}: CopyFieldProps){

    async function copyText(){

        if(navigator?.clipboard?.writeText) await navigator.clipboard.writeText(text)
        else{
            const el = document.createElement('textarea');
            el.value = text;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }

        toast.info("Copiado!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        });
        copyFn(text)
    }

    return(
        <Flex
        id='copy-field'
        px="20px"
        border="1px"
        borderColor="blue.500"
        h="50px"
        color="white"
        align="center"
        justify="center"
        borderRadius={!right ? "0 10px 10px 0" : "10px 0 0 10px"}
        w="90%"
        onClick={() => copyText()}
        cursor="pointer"
        zIndex='100'
        bg={copiedText == text ? 'blue.500' : 'transparent'}
        _hover={{
            background: "blue.500"
        }}
        transition="all ease-in-out 0.2s"
        {...rest}
        >
            <Flex
            as={ToastContainer}
            direction='column'
            position="fixed"
            top={{base:"5rem",lg:"10rem"}}
            right="-8rem"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            />

            { !right && <Icon as={copiedText == text ? BsCheck : FiCopy} mr="10px" ml="10px" fontSize='1.5rem'/>}
            {text}
            { right && <Icon as={copiedText == text ? BsCheck : FiCopy} ml="10px" fontSize='1.5rem'/>}
        </Flex>
    )
}