import { getImageById } from "~/server/queries";

export default async function FullImageView(props: {id: number}) {
    const image = await getImageById(props.id);
    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                 <img src={image.url} alt="Modal Image" className="object-contain"/>
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 flex-col border-l">
                <div className="text-xl font-bold">{image.name}</div>
            </div>
        </div>  

    )
}