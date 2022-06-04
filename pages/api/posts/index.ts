import type { NextApiRequest, NextApiResponse } from "next";
import type { Post } from "models/post";

import { create } from "controllers/posts";

export default async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse<Post | { error: string }>
) {
  const { method, body } = req;
  if (method === "POST") {
    const [post, error] = await create(body);
    if (error) {
      res.status(500).json({ error });
      return;
    }

    if (post) {
      res.status(200).json(post);
    }
  }
}
