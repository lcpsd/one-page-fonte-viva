import { Box, ChakraStyledOptions, Flex} from "@chakra-ui/react";

interface BankAccountCardProps extends ChakraStyledOptions{
    children: JSX.Element | JSX.Element[];
    image_link: string;
}

export function BankAccountCard({image_link, children, ...rest}: BankAccountCardProps){

    // function copyText(){
    //     navigator.clipboard.writeText(data.description)
    //     toast.success(toastMsg, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark"
    //         });
    // }

    return(
        <Flex 
        borderRadius="5px" 
        color="white" 
        position={{base: "static", '2xl':"absolute"}}
        my={{base: "20px", '2xl':"0"}} 
        w={{base: "90vw", '2xl': "400px"}} maxW="400px" 
        {...rest}>
            <Box bgImage={image_link} bgPosition="center" bgSize="cover" flex="1" bgColor="white" borderRadius="5px" zIndex={10}></Box>
            <Box flex="2" py="10px">
                <Flex direction="column"  p="2rem" bg="gray.900" boxShadow="0px 0px 10px black">
                    {children}
                </Flex>
            </Box>
        </Flex>
    )
}