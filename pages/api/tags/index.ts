import type { NextApiRequest, NextApiResponse } from "next";

import { search, create } from "controllers/tags";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  if (method === "POST") {
    const { name } = req.query;
    const [tag, error] = await create(name.toString());
    if (error || !tag) {
      res.status(500).json({ error });
    }
    res.status(200).json(tag);
  }
  if (method === "GET") {
    const { name } = req.query;
    const [tags, error] = await search(name.toString());
    if (error || !tags) {
      return res.status(500).json({ error });
    }
    return res.status(200).json(tags);
  }
}
