import { Box, Flex, Img } from '@chakra-ui/react';
import { A11y, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components'
import axios from 'axios';
import { useEffect, useState } from 'react';

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

interface EntryProps{
    id: string;
    type: string;
    createAt: string;
    image_link: string;   
}

export function HeaderCarousel(){

    const[entries, setEntries] = useState([])

    async function fetchHeaderData(){
        const {data} = await axios.get<EntryProps[]>("/api/contentful/header")
        setEntries(data)
    }

    useEffect(() => {
        fetchHeaderData()
    }, [])

    return(
        <Flex w={'100vw'} h={{base: "100%", md: '500px'}} maxW='1500px' m='0 auto' className='carousel'>
            <CustomCarousel>
                <Flex
                as={Swiper}
                modules={[Pagination, A11y]}
                pagination={{ clickable: true }}
                w="100%"
                h="100%"
                >
                    {
                        entries.map((entry: EntryProps) => (
                            <SwiperSlide key={entry.id}>
                                <Box
                                    padding="0"
                                    flex='1'
                                    w='100%'
                                    h='100%'
                                    bgImage={entry.image_link}
                                    bgPosition="center"
                                    bgSize="cover"
                                    bgRepeat="no-repeat"
                                ></Box>
                            </SwiperSlide>
                        ))
                    }
                </Flex>
            </CustomCarousel>
        </Flex>
    )
}