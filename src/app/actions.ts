"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { put } from "@vercel/blob"; // Import the Cloud SDK

export async function uploadAsset(formData: FormData) {
  // 1. Extract data
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;

  if (!file || !title) {
    throw new Error("Missing file or title");
  }

  // 2. Upload to Vercel Blob (Cloud)
  // 'put' automatically sends the file to the global CDN
  const blob = await put(file.name, file, {
    access: "public", // Make it viewable by everyone
  });

  // 3. Save record to Database with the CLOUD URL
  await db.asset.create({
    data: {
      title: title,
      type: file.type.startsWith("video") ? "video" : "image",
      url: blob.url, // This URL starts with https://... and works everywhere
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      width: 1200, // Placeholder
      height: 800, // Placeholder
    },
  });

  // 4. Refresh Dashboard
  revalidatePath("/dashboard");

  return { success: true };
}
