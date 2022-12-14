import { Box, Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TextStronger } from '../TestStronger';
import { Section } from '../current-section';
import { VideoBg } from '../VideoBg';
import { GradientDiv } from '../GradientDiv';
import { ExternalLinkButton } from './ExternalLinkButton';
import { DiCelluloid } from 'react-icons/di';
import { FaPrayingHands } from 'react-icons/fa';

const CustomCarousel = styled.span`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    .swiper-pagination-bullet{
        background-color: "#38B8FF";
        width: 50px;
        border-radius: 5px;
        opacity: 1;
    }
`

export function HeaderSection(){

    return(
        <Section w={'100vw'} h={{base:'100vh', xl:'85vh'}} maxW='1450px' m='0 auto' id='home' direction={{base:'column', xl:'row'}} pl={{xl:'10'}} position='relative'>
            {/* Text */}
           <Flex flex='1' direction='column' color='white' px={{base:'10', xl:'0'}} align={{base: 'center', xl: 'flex-start'}} justify='center' h='100%'>

            <Text fontSize={{base:'18px', xl:'24px'}} lineHeight='1' textAlign={{base:'center', xl:'left'}} w='100%'>Igreja evangélica</Text>

            <Text fontSize={{base:'80px', xl:'100px'}} lineHeight='1' textAlign={{base:'center', xl:'left'}} w='100%'>FONTE</Text>

            <Text fontSize={{base:'80px', xl:'100px'}} color='blue.500' fontWeight='bold' lineHeight='0.8' textAlign={{base:'center', xl:'left'}} w='100%'>VIVA</Text>

            <Text fontSize='24px' fontWeight='normal' lineHeight='1' textAlign={{base:'center', xl:'left'}} w='100%' my='5'>Uma igreja do avivamento!</Text>
            
            <Flex direction='column' position='relative' fontSize='18px'>
              <Box position='absolute' h='120%' w='1px' background='white' left='-10px' top='0' display={{base:'none', xl: 'block'}}></Box>
              <Text
                w='100%'
                maxW='408px'
                mb='1rem'
                textAlign={{base:'center', xl:'left'}}>Um ministério focado na presença do espírito santo, que transforma vidas e renova corações.</Text>
              <Box w='100%' maxW='378px' textAlign={{base:'center', xl:'left'}}>Através desta filosofia, nos tornamos <TextStronger text='imparáveis'/> e <TextStronger text='indesistíveis'/>.</Box>
            </Flex>
            <Flex direction='column' px='5px' w='100%' align={{base:'center', xl:'flex-start'}}>
                    <ExternalLinkButton icon={DiCelluloid} iconSize={70} title='Encontre uma célula' link='https://url.gratis/ZfLRMo'/>
                    <ExternalLinkButton icon={FaPrayingHands} iconSize={30} title='Peça uma oração' link='https://wa.me/556792221076?text=Gostaria%20de%20receber%20uma%20ora%C3%A7%C3%A3o'/>
                </Flex>
           </Flex>

          
           <Flex
             flex='1.8'
             position={{base:'absolute', xl:'relative'}}
             h={{base:'100vh',xl: '85vh'}}
             w='100%'
             zIndex='-1'
             opacity={{base:'0.5', xl:'1'}}
             >
            <GradientDiv side='to-r' zIndex='10'/>
            <VideoBg source='https://i.imgur.com/uiYcF6n.mp4' opacity={{base:'0.5', xl:'1'}} objectFit='cover'/>
           </Flex>
        </Section>
    )
}