import { Modal } from "./modal";
import FullImageView from "~/app/componnets/full-image-page";

export default function PhotoModal({ params: {id: photoId}}: {
    params: {id: string}
}) 
{
    const idAsNumber = Number(photoId);
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id");

    return (
        <Modal>
            <FullImageView id={idAsNumber} />
        </Modal>
    );
}