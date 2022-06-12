import { ChakraStyledOptions, Flex, Icon } from "@chakra-ui/react";
import { FiCopy } from "react-icons/fi";
import { toast } from "react-toastify";

interface CopyFieldProps extends ChakraStyledOptions{
    text: string;
    right?: boolean;
}

export function CopyField({text, left, right, ...rest}: CopyFieldProps){

    function copyText(){
        navigator.clipboard.writeText(text)
        toast.info("Copiado!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
    }

    return(
        <Flex
        px="20px"
        border="1px"
        borderColor="blue.500"
        h="50px"
        color="white"
        align="center"
        justify="center"
        borderRadius={!right ? "0 10px 10px 0" : "10px 0 0 10px"}
        w="90%"
        {...rest}
        >
            { !right && <Icon as={FiCopy} mr="10px" ml="10px" onClick={() => copyText()}/>}
            {text}
            { right && <Icon as={FiCopy} ml="10px" onClick={() => copyText()}/>}
        </Flex>
    )
}