import axios from "axios";
import { useEffect, useState } from "react";
import api from "../services/axios";
import { Section } from "./current-section";
import { VerticalCarousel } from "./VerticalCarousel";

interface EntryProps{
    id: string;
    type: string;
    createAt: string;
    image_link: string;
    title: string;
    description: string;
}

export function ActionsCarousel(){
    const[entries, setEntries] = useState([])

    async function fetchHeaderData(){
        const {data} = await axios.get<EntryProps[]>("/api/contentful/actions")
        setEntries(data)
    }

    useEffect(() => {
        fetchHeaderData()
    }, [])

    return(
        entries &&
        <Section id="actions">
          <VerticalCarousel data={entries} carouselTitle="Ações"/>
        </Section>
    )
}