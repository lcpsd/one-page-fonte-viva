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
    
    .swiper{
        border-radius: 5px;
        width: 100%;
        height: 100%;
    }

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
        <Flex w={'100vw'} h={{base: "350px", lg: '500px'}} maxW='1500px' m='0 auto' className='carousel'>
            <CustomCarousel>
                <Swiper
                modules={[Pagination, A11y]}
                pagination={{ clickable: true }}
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
                                    bgSize={{base: "contain", lg: "cover"}}
                                    bgRepeat="no-repeat"
                                ></Box>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomCarousel>
        </Flex>
    )
}