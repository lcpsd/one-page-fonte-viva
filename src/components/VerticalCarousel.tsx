import { Box, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import styled from 'styled-components'
import { A11y, Navigation } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import { VerticalCard } from './VerticalCard'

const CustomCarousel = styled(Flex)`
    .swiper-button-next,
    .swiper-button-prev {
        color: white !important;
    }
`

interface DataProps {
    id: number | string;
    title: string;
    description: string;
    image_link: string;
}

interface VerticalCarouselProps{
    data: DataProps[];
}

export function VerticalCarousel({data}: VerticalCarouselProps){

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    return(
        <CustomCarousel w="100%" maxW="1500px" h="100%" m="0 auto">
            <Swiper
            modules={[Navigation, A11y]}
            navigation
            slidesPerView={4}
            onSlideChange={(slide) => setCurrentSlideIndex(slide.activeIndex)}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={item.id}>
                           <VerticalCard
                             title={item.title}
                             description={item.description}
                             image_link={item.image_link}
                             currentIndex={currentSlideIndex}
                             slideIndex={index}
                             />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </CustomCarousel>
    )
}