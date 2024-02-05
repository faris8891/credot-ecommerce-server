import { v2 as cloudinary } from "cloudinary";

export async function handleUpload(file, path) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: path,
  });
  return res;
}
