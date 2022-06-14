import { Flex, Img, Link, Text } from "@chakra-ui/react";
import { A11y, Navigation,} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from 'styled-components'
import { stringShortner } from "../utils/stringShortner";
import { useEffect, useState } from "react";
import axios from "axios";

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

interface EntryProps{
    id: string;
    type: string;
    createAt: string;
    image_link: string;  
    link: string;
    description: string; 
}

export function PostsCarousel(){

    const[posts, setPosts] = useState<EntryProps[]>([])

    async function fetchPosts(){
        const {data} = await axios.get<EntryProps[]>("/api/contentful/posts")
        setPosts(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

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
                                <Link href={post.link}>
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
                                        {stringShortner(post?.description, 100)}</Text>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomCarousel>
        </Flex>
    )
}