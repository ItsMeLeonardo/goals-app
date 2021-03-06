import { api } from "services/api";
import { getCallController } from "utils/getCallController";

import type { Tag } from "models/tag";
import type { RequestCall } from "services/type";

export async function search(
  query: string
): Promise<RequestCall<Tag[]> | null> {
  try {
    const controller = getCallController();
    const { data } = await api.get<Tag[]>("tags", {
      signal: controller.signal,
      params: {
        name: query,
      },
    });

    return { data, controller };
  } catch (error) {
    return null;
  }
}

export async function create(
  nameTag: string
): Promise<RequestCall<Tag> | null> {
  try {
    const controller = getCallController();

    const url = `tags?name=${nameTag}`;
    const { data } = await api.post<Tag>(url);

    return { data, controller };
  } catch (error) {
    return null;
  }
}
