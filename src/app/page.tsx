import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";
import { SignedOut, SignedIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";


async function Images() {
  let collected_images: InferSelectModel<typeof images>[] = [];
  try {
    collected_images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <div className="flex flex-wrap gap-4">
      {
        collected_images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
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
