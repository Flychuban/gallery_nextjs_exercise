import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";
import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";


export const dynamic = "force-dynamic";


async function Images() {
  const collected_images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {
        collected_images.map((image) => (
          <div key={image.id} className="w-48">
            <Image 
              src={image.url} 
              alt="image" 
              width={192}
              height={192}
              className="object-cover"
            />
            <div>{image.name}</div>
          </div>
        ))
      }
    </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to see the images</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
