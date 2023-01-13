import FeedHeader from 'components/Feed/FeedHeader'
import FeedBody from 'components/Feed/FeedBody'
import FeedFooter from 'components/Feed/FeedFooter'

import type { Post } from 'models/post'

export default function Feed(props: Post) {
	const { user, thumbnail, title, tags, url, createdAt } = props
	return (
		<aside className="feed-link-container">
			<a className="feed" target="_blank" href={url} rel="noreferrer">
				<FeedHeader avatar={user.avatar} username={user.username} createAt={createdAt} />
				<FeedBody thumbnail={thumbnail} />
				<FeedFooter tags={tags} title={title} />
			</a>
		</aside>
	)
}
