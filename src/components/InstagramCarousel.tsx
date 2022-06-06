import { Flex, Img, Text } from "@chakra-ui/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import styled from 'styled-components'
import { stringShortner } from "../utils/stringShortner";

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

export function InstagramCarousel(){

    const posts = [
        {
            id: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 6,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 7,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 8,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
        {
            id: 9,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dui turpis, ultricies nec ante eu, hendrerit ultricies tortor. In nec vestibulum felis, eget eleifend augue. Sed rutrum vitae dolor a tincidunt. Etiam consectetur mi lorem, ac suscipit augue ultricies id. Cras ornare vitae sapien eu venenatis. Morbi eu felis maximus, pulvinar urna vitae, placerat sapien. Etiam ut elit convallis, dictum dolor quis, placerat ligula. Vestibulum rutrum ultrices ante, a sagittis eros sollicitudin ut.",
            img_link: "https://random.imagecdn.app/1080/1080"
        },
    ]

    return(
        <Flex flex='1'  w='100%' maxW="1500px" m="0 auto">
            <CustomCarousel py="10px" w="100%" h="100%" m="0 auto">
                <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={10}
                navigation
                slidesPerView={5}
                >
                    {
                        posts.map(post => (
                            <SwiperSlide>
                                <Img src={post.img_link} h="100%" w="auto"/>
                                <Text
                                    h="100px"
                                    position="absolute"
                                    bottom="0"
                                    right="0"
                                    bgGradient='linear(to-t, black, transparent)'
                                    color="white"
                                    p="10px"
                                    >
                                      {stringShortner(post.description, 100)}</Text>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </CustomCarousel>
        </Flex>
    )
}