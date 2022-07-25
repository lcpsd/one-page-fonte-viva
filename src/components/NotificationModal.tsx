import { Box, Img, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document } from "@contentful/rich-text-types";
import axios from "axios"
import { useEffect, useState } from "react"

interface NotificationProps{
  id: string;
  title: string;
  cover: string;
  html: Document;
  createAt: string;
}

const customCSS = `
  *{
    all: revert;
  }
`

export function NotificationModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [notificationData, setNotificationData] = useState<NotificationProps[]>([])

    async function fetchNotification(){
        const {data} = await axios.get('/api/contentful/notification')
        setNotificationData(data)
    }

    useEffect(() => {

        fetchNotification()

        onOpen()
    }, [])

    return (
      <>
        {
          notificationData[0] &&
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay backdropFilter='blur(3px)'/>
              <ModalContent bg='black' color='white' my='auto' mx='auto'>
                <ModalHeader textAlign='center'>{notificationData[0].title}</ModalHeader>
                <ModalCloseButton />
                  <ModalBody css={customCSS}>
                      <Img src={notificationData[0].cover} mb='1rem' borderRadius='5px' w='100%'/>
                      <Box dangerouslySetInnerHTML={{__html: documentToHtmlString(notificationData[0].html)}}></Box>
                  </ModalBody>
              </ModalContent>
            </Modal>
        }
      </>
    )
}