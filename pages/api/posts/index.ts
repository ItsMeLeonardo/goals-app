import nc from "next-connect";
import { mongo } from "mongoose";
import multer from "multer";

import saveImage from "controllers/posts/middleware/saveImage";
// import { uploadImage } from "lib/mediaFileCloud";
import { create } from "controllers/posts";

import type { NextApiResponse } from "next";
import type { FileRequest } from "controllers/posts/type";
import type { PostDto } from "controllers/posts/dto";

export const config = {
  api: {
    bodyParser: false,
  },
};

const inMemoryStorage = multer.memoryStorage();
const uploadStrategy = multer({ storage: inMemoryStorage });

const handler = nc<FileRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(uploadStrategy.single("file"));
handler.use(saveImage);
handler.post(async (req, res) => {
  const { image } = req;
  if (!image) {
    return res.status(400).json({ message: "No image" });
  }

  const { title, url, user, tags } = req.body;
  const tagsFormatted = JSON.parse(tags) as Array<string>;

  const postBody: PostDto = {
    title,
    url,
    user,
    tags: tagsFormatted.map((tag) => ({ id: tag })),
    thumbnail: image,
  };

  const [post, error] = await create(postBody);
  if (error || !post) {
    return res.status(500).json({ error });
  }

  res.status(200).json(post);
});

export default handler;
