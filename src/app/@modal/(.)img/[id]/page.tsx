import Image from "next/image";
import { getImageById } from "~/server/queries";

export default async function PhotoModal({ params: {id: photoId}}: {
    params: {id: string}
}) 
{
    const idAsNumber = Number(photoId);

    const image = await getImageById(idAsNumber);
    return (
        <div>
            <img src={image.url} alt="Modal Image" className="w-96"/>
        </div>
    );
}