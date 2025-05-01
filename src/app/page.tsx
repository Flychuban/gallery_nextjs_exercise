import Link from "next/link";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";

export const dynamic = "force-dynamic";


export default async function HomePage() {
  let collected_images: InferSelectModel<typeof images>[] = [];
  try {
    collected_images = await db.query.images.findMany();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          collected_images.map((image) => (
            <div key={image.id} className="w-48">
              <img src={image.url} alt="image" />
            </div>
          ))
        }
      </div>
    </main>
  );
}
