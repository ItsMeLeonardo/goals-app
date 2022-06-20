import type { NextApiRequest, NextApiResponse } from "next";

import type { FileRequest } from "controllers/posts/type";

import { uploadImage } from "lib/mediaFileCloud";

export default async function saveImage(
  req: FileRequest,
  res: NextApiResponse,
  next: Function
) {
  const { file, method } = req;
  if (method !== "POST") return next();
  const [media, error] = await uploadImage(file);
  if (error || !media) {
    return res.status(500).json({ message: error });
  }
  req.image = media.url;
  next();
}
