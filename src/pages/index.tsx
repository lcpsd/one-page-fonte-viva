import { Flex, } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ActionsCarousel } from "../components/sections/ActionsSection";
import { PastorsCarousel } from "../components/PastorsCarousel";
import { HoursSection } from "../components/sections/HoursSection";
import { VisionSection } from "../components/sections/VisionSection";
import { HistorySection } from "../components/sections/HistorySection";
import { HeaderSection } from "../components/sections/HeaderSection";
import { TransferSection } from "../components/sections/TransferSection";
import { LocationSection } from "../components/sections/LocationSection";
import { RiWhatsappFill } from "react-icons/ri";
import { FloatButton } from "../components/FloatButton";

import 'react-toastify/dist/ReactToastify.css';
import { PixSection } from "../components/sections/PixSection";

export default function Home() {

  return (
    <>
      <Header />
      <FloatButton
        icon={RiWhatsappFill}
        text="Fale Conosco"
        visibleHeight={1000}
        hideOffset={300} />
      <Flex direction='column' m="0 auto" overflowX="hidden">
        <HeaderSection/>

        <HistorySection />

        <VisionSection />

        <PastorsCarousel />
  
        <ActionsCarousel />
        
        <HoursSection />

        <PixSection />
    
        <TransferSection />

        <LocationSection />      
        
        <Footer />
      </Flex>
    </>
  )
}

// export async function getStaticProps() {

//   async function fetchInstagramPosts(accessToken: string){
  
//       const baseUrl = 'https://graph.facebook.com/v13.0/'

//       const query = baseUrl + "me?fields=about,posts{full_picture,permalink_url,message}&access_token=" + accessToken
      
//       return await axios.get(query).then(response => response.data.posts).catch(error => console.log(error))
//   }

//   const posts = await fetchInstagramPosts(process.env.FACEBOOK_ACCESS_TOKEN)

//   if(posts){
//     let sanitizing = await posts.data.map((post, index) => (
//       {
//         index,
//         id: post.id,
//         link: post.permalink_url,
//         image_link: post.full_picture,
//         message: post.message ? post.message : ""
//       }
//     ))
    
//     // Last posts first
//     sanitizing = sanitizing.sort((a,b) => b.index - a.index)
  
//     return{
//         props:{
//           posts: sanitizing
//         }
//     }
//   }else{
//     return{
//       props:{
//         posts: []
//       }
//     }
//   }
// }