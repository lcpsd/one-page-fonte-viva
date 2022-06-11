import { Section } from "../current-section";
import { HeaderCarousel } from "../HeaderCarousel";
import { InstagramCarousel } from "../InstagramCarousel";

export function HeaderSection(){

    return(
        <Section direction='column' id='home'>
          {/* <HeaderCarousel /> */}
          <InstagramCarousel />
        </Section>
    )
}