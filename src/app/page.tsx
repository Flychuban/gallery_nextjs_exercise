import Link from "next/link";


const mockUrls = [
  "https://swg5whyxch.ufs.sh/f/UuwtU6EOCNp4bXg8FfPnqCU98X6aDMK2WHmO7f13LicrdYzP",
  "https://swg5whyxch.ufs.sh/f/UuwtU6EOCNp4tbbAeL1l4JVRGHQibXNCpDs0EyBf58Aq1IKU",
  "https://swg5whyxch.ufs.sh/f/UuwtU6EOCNp4rw3100nJhVGf9wr3RP27QnbxW0cygq8YzeuD",
  "https://swg5whyxch.ufs.sh/f/UuwtU6EOCNp4iraeyGLgpXk9iFzn4dlBM78cZYvSotAuej5h"
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          mockImages.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
