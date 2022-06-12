import { Flex, Img, Text } from "@chakra-ui/react";
import { A11y, Navigation,} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from 'styled-components'
import { stringShortner } from "../utils/stringShortner";
import axios from "axios";
import { GetServerSideProps } from "next";

const CustomCarousel = styled(Flex)`
    
    .swiper{
        border-radius: 5px;
        width: 100%;
        height: 100%;
    }

    .swiper-button-next,
    .swiper-button-prev {
        color: white !important;
    }
`

export function InstagramCarousel({posts}){

    return(
        <Flex w="100%" maxW="1500px" m="0 auto" mb="10px" h="100%">
            <CustomCarousel py="10px" w="100%" h="100%" m="0 auto">
                <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={10}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1200: {
                        slidesPerView: 4,
                      },
                }}
                >
                    {
                        posts &&
                        posts.map(post => (
                            <SwiperSlide key={post.id}>
                                <Img src={post.image_link} h="auto" w="100%" m="0 auto"/>
                                <Text
                                    w="100%"
                                    h="100px"
                                    position="absolute"
                                    bottom="0"
                                    right="0"
                                    bgGradient='linear(to-t, black, transparent)'
                                    color="white"
                                    p="10px"
                                    >
                                      {stringShortner(post?.message, 100)}</Text>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomCarousel>
        </Flex>
    )
}