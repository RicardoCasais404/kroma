"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

export async function uploadAsset(formData: FormData) {
  // 1. Extract data from the form
  const file = formData.get("file") as File;
  const title = formData.get("title") as string;

  if (!file || !title) {
    throw new Error("Missing file or title");
  }

  // 2. Prepare file operations
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Create unique filename (timestamp + original name) to avoid collisions
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const filename = `${uniqueSuffix}-${file.name.replace(/\s+/g, "-")}`;

  // Ensure the upload directory exists
  const uploadDir = join(process.cwd(), "public", "uploads");
  await mkdir(uploadDir, { recursive: true });

  // 3. Write file to the 'public/uploads' folder
  const filePath = join(uploadDir, filename);
  await writeFile(filePath, buffer);

  // 4. Save record to Database
  // We mimic 'width' and 'height' for now since we aren't using an image processing library
  await db.asset.create({
    data: {
      title: title,
      type: file.type.startsWith("video") ? "video" : "image",
      url: `/uploads/${filename}`, // The public URL
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      width: 1200, // Placeholder
      height: 800, // Placeholder
    },
  });

  // 5. Refresh the Dashboard
  revalidatePath("/dashboard");

  return { success: true };
}
