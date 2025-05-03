import FullImageView from "~/app/componnets/full-image-page";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PhotoPage({ params: {id: photoId}}: {
    params: {id: string}
}) 
{
    const { userId } = await auth();
    if (!userId) {
        redirect("/");
    }

    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id");

    return <FullImageView id={idAsNumber} />;
}