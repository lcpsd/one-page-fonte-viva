import { Box, Flex, Img, Text } from "@chakra-ui/react";
import {toast, ToastContainer} from 'react-toastify'

interface DataProps{
    title: string;
    description: string;
    image_link: string;
}

interface FinancialCardProps{
    data: DataProps;
    copy?: boolean;
    toastMsg?: string;
}

export function FinancialCard({data, copy, toastMsg}: FinancialCardProps){

    function copyText(){
        navigator.clipboard.writeText(data.description)
        toast.success(toastMsg, {
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
        <Flex bg="gray.900" borderRadius="5px" color="white" onClick={() => copy && copyText()}>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
            <Box bgImage={data.image_link} bgPosition="center" bgSize="cover" flex="1" bgColor="white" borderRadius="5px"></Box>
            <Flex direction="column" flex="2" p="2rem">
                <Text fontWeight="bold">{data.title}</Text>
                <Text>{data.description}</Text>
            </Flex>
        </Flex>
    )
}