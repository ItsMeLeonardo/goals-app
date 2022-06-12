import dbConnect from "lib/dbConnect";

import type { Tag } from "models/tag";
import TagModel from "models/tag";

export async function search(
  query: string
): Promise<[Tag[] | null, string | null]> {
  try {
    await dbConnect();

    const tags = await TagModel.find({
      name: { $regex: query, $options: "i" },
    });

    return [tags, null];
  } catch (error) {
    const message = (error as Error)?.message || "Something went wrong";
    return [null, message];
  }
}
