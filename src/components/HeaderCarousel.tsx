import { Flex, Img } from '@chakra-ui/react';
import { A11y, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import styled from 'styled-components'

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
        background-color: #fff;

        width: 200px;
        border-radius: 5px;
    }
`

export function HeaderCarousel(){

    const slideImages = [
        {
            id: 1,
            link: 'https://random.imagecdn.app/1120/550'
        },
        {
            id: 2,
            link: 'https://random.imagecdn.app/1120/550'
        },
        {
            id: 3,
            link: 'https://random.imagecdn.app/1120/550'
        },
        {
            id: 4,
            link: 'https://random.imagecdn.app/1120/550'
        }
    ]

    return(
        <Flex w='100%' h='550px' width='100%' maxW='1500px' m='0 auto' className='carousel'>
            <CustomCarousel>
                <Swiper
                modules={[Pagination, A11y]}
                pagination={{ clickable: true }}
                >
                    {
                        slideImages.map(image => (
                            <SwiperSlide key={image.id}>
                                <Img
                                    padding="0"
                                    src="/nobg.png"
                                    flex='1'
                                    w='100%'
                                    h='100%'
                                    bgImage={image.link}
                                    bgPosition="center"
                                    bgSize="cover"
                                    bgRepeat="no-repeat"
                                  />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomCarousel>
        </Flex>
    )
}