import { createClient } from "contentful"

export default function useContentful(){
    return(
        createClient({
            space:process.env.CONTENTFUL_SPACE_ID,
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            host: process.env.CONTENTFUL_HOST,
        })
    )
}