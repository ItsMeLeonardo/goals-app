// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { find } from "controllers/posts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { params } = req.query;

  if (method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const title = params[0];
  const tagName = params[1];

  if (!title) {
    return res.status(400).json({ message: "No title" });
  }

  const [posts, error] = await find(title, tagName);
  if (error || !posts) {
    return res.status(500).json({ error });
  }
  res.status(200).json(posts);
}
