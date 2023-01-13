import Avatar from 'components/Avatar'
import { DateTime } from 'luxon'
import { timeAgo } from 'utils/shared/time-date'

import styles from './feed.module.css'

type Props = {
	username: string
	avatar: string
	createAt: string
}

export default function FeedHeader({ username, avatar, createAt }: Props) {
	return (
		<header className={styles.feed_head}>
			<div className={styles.feed_user}>
				<Avatar src={avatar} alt={username} size="md" />
				<div className="feed-user-info">
					<h3 className="feed-username">{username}</h3>
					<small className={styles.time}>{timeAgo(DateTime.fromISO(createAt))}</small>
				</div>
			</div>
			<span className="feed-edit feed-interaction-button">
				<i className="uil uil-ellipsis-h"></i>
			</span>
		</header>
	)
}
