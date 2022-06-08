import { NextApiRequest, NextApiResponse } from "next";
import useContentful from "../../../services/contentful";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const cfClient = useContentful()

    switch(req.method){
        case 'GET':
            try {
                const entries = await cfClient.getEntries({
                    content_type: 'headerCarousel',
                })
                
                const sanitizedEntries = entries.items.map((entry: any) => (
                    {
                        id: entry.sys.id,
                        type: entry.sys.type,
                        createAt: entry.sys.createdAt,
                        image_link: entry.fields.image.fields.file.url
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