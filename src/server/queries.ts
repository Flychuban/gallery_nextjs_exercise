import { db } from "./db";
import "server-only"
import { images } from "~/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";


export async function getMyImages() {
  const user = auth();

  if (!user) throw new Error("You are Unauthorized. Please sign in.");

  let collected_images: InferSelectModel<typeof images>[] = [];
  try {
    collected_images = await db.query.images.findMany({
      orderBy: (model, { desc }) => desc(model.id),
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
  return collected_images;
}

export async function getImageById(id: number) {
  const user = auth();

  if (!user) throw new Error("You are Unauthorized. Please sign in.");

  let image: InferSelectModel<typeof images> | undefined = undefined;
  try {
    image = await db.query.images.findFirst({
      where: (model, { eq }) => eq(model.id, id),
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  if (image?.userId !== (await user).userId) throw new Error("You are Unauthorized. Please sign in.");
  return image;
}