import { Section } from "../current-section";
import { HeaderCarousel } from "../HeaderCarousel";
import { PostsCarousel } from "../PostsCarousel";

export function HeaderSection(){

    return(
        <Section direction='column' id='home' h={{base: "100vh", md: "100%"}}>
          <HeaderCarousel />
          <PostsCarousel />
        </Section>
    )
}