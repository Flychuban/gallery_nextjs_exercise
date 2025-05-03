import { clerkClient } from "@clerk/nextjs/server"
import { getImageById } from "~/server/queries";

export default async function FullImageView(props: {id: number}) {
    const image = await getImageById(props.id);
    const uploaderInfo = (await clerkClient()).users.getUser(image.userId);

    return (
        <div className="flex w-full h-full min-w-0">
            <div className="flex-shrink flex justify-center items-center">
                 <img src={image.url} alt="Modal Image" className="object-contain"/>
            </div>
            <div className="w-48 flex flex-col flex-shrink-0 flex-col border-l gap-2">
                <div className="text-lg border-b text-center p-2">{image.name}</div>
                <div className="flex flex-col p-2">
                    <span>Uploaded By:</span>
                    <span>{(await uploaderInfo).fullName}</span>
                </div>
                <div className="flex flex-col p-2">
                    <span>Created On:</span>
                    <span>{new Date(image.createdAt).toDateString()}</span>
                </div>
            </div>
        </div>  

    )
}