import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { NextApiRequest, NextApiResponse } from "next";
import useContentful from "../../../services/contentful";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const cfClient = useContentful()

    switch(req.method){
        case 'GET':
            try {
                const entries = await cfClient.getEntries({
                    content_type: 'notification',
                })

                const sanitizedEntries = entries.items.map((entry: any) => (
                    {
                        id: entry.sys.id,
                        title: entry.fields.title,
                        cover: entry.fields.cover.fields.file.url,
                        html: documentToHtmlString(entry.fields?.text),
                        createAt: entry.sys.createdAt,
                    }
                ))

                res.status(200).json(sanitizedEntries)
            } catch(error){
                res.status(500)
            }
        case 'POST':
        
        case 'PUT':

        case 'DELETE':
    }
}