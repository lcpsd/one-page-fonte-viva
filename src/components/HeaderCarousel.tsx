import { Flex, Img } from '@chakra-ui/react';
import { A11y, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import { CustomCarousel } from './styles';

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
        <Flex w='100%' h='550px' className='carousel'>
            <CustomCarousel>
                <Swiper
                modules={[Pagination, A11y]}
                pagination={{ clickable: true }}
                >
                    {
                        slideImages.map(image => (
                            <SwiperSlide>
                                <Img src={image.link} flex='1' w='100%'/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomCarousel>
        </Flex>
    )
}