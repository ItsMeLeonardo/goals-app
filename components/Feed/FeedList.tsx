import Feed from 'components/Feed'

import { useFeedList } from 'components/Feed/hooks/useFeedList'

export const FEED_POST_LIST = 'FEED_POST_LIST'

export default function FeedList() {
	const { data: posts, isLoading } = useFeedList()

	if (isLoading) {
		return <div>Loading...</div>
	}

	return (
		<div className="feeds-container">
			{posts && posts.map((post) => <Feed {...post} key={post.id.toString()} />)}
		</div>
	)
}
