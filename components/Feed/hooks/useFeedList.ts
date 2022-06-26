import useSWR from "swr";

import type { Post } from "models/post";

import { FEED_POST_LIST } from "components/Feed/FeedList";

export const useFeedList = () => {
  const { data, error } = useSWR<Post[]>(FEED_POST_LIST);

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
