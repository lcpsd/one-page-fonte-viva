import axios from "axios";
import { useEffect, useState } from "react";
import { Section } from "../current-section";
import { VerticalCarousel } from "../VerticalCarousel";

interface EntryProps{
    id: string;
    type: string;
    createAt: string;
    image_link: string;
    title: string;
    description: string;
}

export function PastorsSection(){
    const[entries, setEntries] = useState([])

    async function fetchHeaderData(){
        const {data} = await axios.get<EntryProps[]>("/api/contentful/pastors")
        setEntries(data)
    }

    useEffect(() => {
        fetchHeaderData()
    }, [])

    return(
        entries &&
        <Section id="pastors" w="100vw" maxW="1500px" m="0 auto">
          <VerticalCarousel data={entries} carouselTitle="Pastores"/>
        </Section>
    )
}